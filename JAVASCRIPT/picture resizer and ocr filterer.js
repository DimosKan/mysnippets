 await sharp(originalImage)//.resize({ height: 1000 }).extract({ width: 300, height: 250, left: 10, top: 500 })
  .sharpen(6)
  //.tint("#16de91") //#16de91 #db9f44
  //.bandbool(sharp.bool.and)
  //.grayscale()
  //.extractChannel('blue')
  //.toColourspace("b-w")
  //.modulate({hue: 120})
  .toFile(outputImagelevel)
  .catch(err => {
    console.error(err);
  })
  tesseract.recognize(outputImagelevel, {lang: "engrestrict_best_int", oem: 3, psm: 12,})
  .then(text => {
    let level = 0;
    let newtext = text.replace(/\n*/gm, "");
    console.log(newtext);

    //Begin block find match
    let match = newtext.match(/(?<level>\d+)(?<spacingTXT>\n*|\s*|\t*|\r*|[a-zA-Z]*)(?<levelTXT>LEVEL|Level)/m);
    console.log(match);
    if (match && match.hasOwnProperty("groups") && 'level' in match.groups){
      level = match.groups.level;
    } else {
      match = newtext.match(/(?<levelPre>[\da-zA-Z]*?)(?<level>\d+)(?<spacingTXT>\n*|\s*|\t*|[a-zA-Z]*)(?<extrasTXT>[a-zA-Z]*)(?<levelTXT>LEVEL|Level)/m);
      // (?<level>\d+)(?<spacingTXT>\n*|\s*|\t*|[a-zA-Z]*)(?<extrasTXT>[a-zA-Z]*)(?<levelTXT>LEVEL|Level)
      // (?<levelPre>[\da-zA-Z]*?)(?<level>\d+)(?<spacingTXT>\n*|\s*|\t*|[a-zA-Z]*)(?<extrasTXT>[a-zA-Z]*)(?<levelTXT>LEVEL|Level)
      try {
        level = match.groups.level;
        return;
      } catch (error) {}
      match = newtext.match(/(?<levelPre>[\da-zA-Z]*?)(?<level>\d+)(?<spacingTXT>\n*|\s*|\t*|[a-zA-Z]*)(?<extrasTXT>[a-zA-Z]*)(?<levelALT>[a-zA-Z-]*)/mg);

      let highestSML = 0;
      let selectedMatch = null;
      for(let i=0; i<match.length; i++){
        let internalMatch = match[i].match(/(?<number>\d+)(?<extras>[a-zA-Z0-9]*)/m);
        if (internalMatch 
          && internalMatch.hasOwnProperty("groups") 
          && (highestSML < stringSimilarity.compareTwoStrings('level', internalMatch.groups.extras) 
          || highestSML < stringSimilarity.compareTwoStrings('level', internalMatch.groups.extras.toLowerCase()))
          ) {
          highestSML = stringSimilarity.compareTwoStrings('level', internalMatch.groups.extras);
          selectedMatch = internalMatch;
        }
      }
      if (selectedMatch) {
        level = selectedMatch.groups.number;
      }
    }
    //End block find match
    

    console.log(level);
    if (level>40 || level<1){
      //var anewtext = level.slice(0,2);
      //message.reply(`το επίπεδό σου είναι: ${anewtext}`)
      message.reply(`το επίπεδό σου είναι: Άγνωστο`)
    }else{
      //message.reply(`το επίπεδό σου είναι: ${newtext}`)
      message.reply(`το επίπεδό σου είναι: ${level}`)
    }
    //var level1 = level || anewtext || "άγνωστο";
  })
  .catch(err => {
    console.error(err);
  })