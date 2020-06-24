const roblox = require("noblox.js");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const getRoles = await roblox.getRoles(client.config.groupId)
    const formattedRoles = getRoles.map((r) => `\`${r.name}\` - ${r.rank} **(${r.memberCount})**`);

    const rankListEmbed = new Discord.MessageEmbed() 
      .setTitle('Rank Information:')
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor(8311585)
      .setDescription(formattedRoles)
      .setFooter(`King Hotels Ranking Service`);
    message.channel.send(rankListEmbed)
}