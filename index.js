const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("Y")

bot.on('ready', () => {
    bot.user.setPresence({game: {name: '[VIDEOS]', type: 0}});
    console.log("Youtube est prêt !");
})

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if(message.content === prefix + "quenos"){
        var video_embed = new Discord.RichEmbed()
            .setColor('B31F0E')
            .addField("Une nouvelle vidéo est sortie !", "Pour la voir clique sur le lien suivant")
            .addField("Lien :", "https://www.youtube.com/c/Quenos")
            .setThumbnail("https://cdn.pixabay.com/photo/2017/03/24/07/28/youtube-2170428_960_720.png")
            .setFooter("Quenos")
        message.channel.sendEmbed(video_embed);
        console.log("Embed Envoyé !")

    }
})
