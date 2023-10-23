/* DEPRICATED
function dbDelete(message){
  var words = message.content.split(' ');
  var username = words[1];
  username = username.toUpperCase();
  let db = new sqlite.Database('./databases/playerdb', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
  const sqldelete = 'DELETE FROM playerdb WHERE username = ? ';
  db.all(sqldelete,[username], function(error,rows){
    if (error){
      throw error;
    }
    message.delete();
    message.author.send(`Η Διαγραφή του χρήστη ${words[1]} έγινε με επιτυχία.`);
  })
  db.close();
}
*/

    /*DEPRICATED
      if ((message.content.startsWith(prefix + "dbdelete")) && (message.member.roles.get(mod_ro) || message.member.roles.get(admin_ro)) && (message.channel.id == friend_ch)){
        dbfc.dbDelete(message)
      }*/