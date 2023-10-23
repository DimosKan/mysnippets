function screenShot (message, screenshot_ch, client){
 /* message.author.createDM().then(dmc => {
    message.author.send(`Γειά σου! καλοσήρθες στον σέρβερ του pokemon-go ρεθύμνου, είσαι σχεδόν έτοιμος να πάρεις μέρος στην κοινότητα. ένα επιπλέον και προαιρετικό βήμα είναι να μου στείλεις εδω (DM) ενα screenshot από το προφιλ σου στο pokemon-go.`)
    const collector = new Discord.MessageCollector(
      dmc,
      m => m.author.id === message.author.id,
      {}
    );
    collector.on('collect', message => {
      if (message.attachments.size > 0) {
        message.channel.send('Το screenshot στάλθηκε με επιτυχία, ευχαριστούμε. Για οποιαδήποτε απορία που έχεις, μπορείς να απευθυνθείς στο κανάλι "Questions" η στους admins του σερβερ.')
        .then((message) => { 
          return(message);
        })
        console.log(`Collected ${message.attachments.size} screenshots`);*/
        readScreenshot(message).then(text => {})
          // message.client.channels
          //   .get(screenshot_ch)
          //   .send(text);
        
        /*
        return(message);
      }else if (message.attachments.size < 0){
        message.channel.send("Υπήρχε πρόβλημα με το screenshot που έστειλες, αν βλέπεις αυτό το μήνυμα παρακαλώ να ενημερώσεις κάποιον απο τους admin του σέρβερ γιατί ίσως είναι bug του bot.");
        return(message);
      }
    });
  })*/
}