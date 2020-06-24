// Don't forget to add the images as a link on lines 11 and 15

const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  var coin = Math.random() >= 0.5;

  if (coin >= 0.5) {
    var coinflip = "Heads";
    var coinURL =
      "https://cdn11.bigcommerce.com/s-4ulzs/images/stencil/1280x1280/products/12235/13432/quarter_head_1_300__44884.1583015166.jpg?c=2&imbypass=on"; // Put your own HEADs url here
  } else {
    var coinflip = "Tails";
    var coinURL =
      "https://webstockreview.net/images/coin-clipart-quarter-tail.png"; // Put your own TAIL url here
  }
  const embed = new Discord.MessageEmbed({
            color: 7948427,
            description: `**Flipped Coin**`,
            image: {
              url: coinURL
            },
            author: {
              name: message.author.tag,
              icon_url: message.author.displayAvatarURL()
            },
            footer: {
      icon_url: client.user.avatarURL,
      text: "King Hotels and Resorts Ranking service."
      },
  })
  const embed1 = message.channel
    .send({
      embed: {
        color: 7948427,
        description: `**Flipping Coin...**` // If you would like to add an emoji see z-emoji.md below
      }
    })
    .then(embed1 => {
      setTimeout(function() {
        embed1.edit(embed)
      }, 10000); // Time in milliseconds | 1000 = 1 second
    });
};