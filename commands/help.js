exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 15613696,
        description: `**Here are my commands:**\n`
        + `\`${client.config.prefix}help\` - Shows this list of commands.\n`
        + `\`${client.config.prefix}setrank <user> <rank name/number>\` - Ranks the user in the Roblox group to the specified rank number or name.\n`
        + `\`${client.config.prefix}promote <user>\` - Moves the user 1 rank up in the Roblox group.\n`
        + `\`${client.config.prefix}demote <user>\` - Moves the user 1 rank down in the Roblox group.\n`
        + `\`${client.config.prefix}fire <user>\` - Moves a user to the lowest rank possible besides Guest.\n`
        + `\`${client.config.prefix}shout <message>\` - Posts a group shout.\n`
        + `\`${client.config.prefix}clearshout\` - Clears the group shout.\n`
        + `\`${client.config.prefix}currentshout\` - Shows the current group shout.\n`
        + `\`${client.config.prefix}accept-join <user>\` - Accepts a user's join request.\n`
        + `\`${client.config.prefix}deny-join <user>\` - Denies a user's join request.\n`
        + `\`${client.config.prefix}getinfo <user>\` - Gets the info of a player.\n`
        + `\`${client.config.prefix}prefix\` - Shows the current prefix.\n`
        + `\`${client.config.prefix}ping\` - Shows the ping of the bot.\n`
        + `\`${client.config.prefix}coinflip\` - Flips a coin.\n`,
      footer: {
      icon_url: client.user.avatarURL,
      text: "King Hotels and Resorts Ranking service."
      },
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}
