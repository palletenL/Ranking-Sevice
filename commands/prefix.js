exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 15613696,
        description: `**My prefix is:**\n${client.config.prefix}`,
      footer: {
      icon_url: client.user.avatarURL,
      text: "King Hotels and Resorts Ranking service."
      },
        }
    });
}