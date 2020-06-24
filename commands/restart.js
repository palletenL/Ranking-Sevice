exports.run = async (client, message, args) => {
  if (message.author.id !== 'id') return;
// do which ever one u prefer
   if(!message.member.roles.cache.some(role =>["Ranking Permissions"].includes(role.name))){
       return message.channel.send({embed: {
            color: 16733013,
              description: "You need the `Ranking Permissions` role to run this command.",
               author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
          }
        }})
    }
  message.channel.send('Restarted.').then(() => {
    process.exit(1);
  })
};