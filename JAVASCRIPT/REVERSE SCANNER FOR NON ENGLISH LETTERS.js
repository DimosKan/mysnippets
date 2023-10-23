 //Σκανάρει ανάποδα ένα string, αν βρει οχι αγγλικά γράμματα τότε σταματάει το σκανάρισμα και επιστρέφει ότι σκάναρε μέχρι εκεί.
 
 const sentence = file.name; // Change this to the sentence you want to scan
            let result = '';
  
            for (let i = sentence.length - 1; i >= 0; i--) {
                const char = sentence.charAt(i);
                
                if (/^[a-zA-Z0-9\s\-_()[\]{}~!@#$%^&*+=:;<>,.?|]+$/.test(char)) {
                result = char + result;
                } else {
                break;
                }
            }
