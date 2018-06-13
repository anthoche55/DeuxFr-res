const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const YoutubeDL = require('youtube-dl');
const yt = require('ytdl-core');
const fs = require("fs");
const config = require("./config.json")
const got = require(`got`);
const api = 'dc6zaTOxFJmzC'
const OwnerID = "423762997232795658";
const superagent = require("superagent");
const snekfetch = require('snekfetch');

const adapter = new FileSync('database.json');
const db = low(adapter);

var channelafk = "449781086483120138"

var prefix = ("$")

let dispatcher;
let queue = {};

bot.on('ready', () => {
    bot.user.setPresence({
		game: {
			name: `Les DeuxFréres❤️🐧,$cmd |${bot.guilds.size} servers`, 
			type: 2
		}
    });
    
});

if (Number(process.version.slice(1).split(".")[0]) < 8) {
	console.log("Node 8.0.0 or higher is required. Update Node on your system.");
}

bot.on('uncaughtException', (err) => {
	console.log("error", "Uncaught Exception", err);
});

process.on("unhandledRejection", (err) => {
	console.log("Uncaught Promise Error", err);
});



bot.on('disconnect', () => console.warn('Disconnected!'))

bot.on('reconnecting', () => console.warn('Reconnecting...'))


bot.on("ready", () => {
    console.log(`Bot lancer dans  ${bot.guilds.size} serveur .`); 
});

  bot.on("guildCreate" , guild => {
    guild.client.guilds.get('449778996469694484').channels.get('450251648946798602').send(`Le bot a rejoins le serveur  ${guild.name}  (id: ${guild.id}). il y a ${guild.memberCount} membres . \n Le bot est maintenant  sur ${bot.guilds.size} serveurs .`)
    console.log(`Nouveau serveur joint: ${guild.name} (id: ${guild.id}). il y a ${guild.memberCount} membres `);
    
        guild.createRole({
            name: 'DeuxFrères',
            color: 'BLUE',
          })
            .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
            .catch(console.error)
            guild.createChannel('#DeuxFrères', 'texte ' , [{
                id: guild.id,
            }])
            .then(console.log)
            .catch(console.error);
});

bot.on("guildDelete", guild => {
    guild.client.guilds.get('449778996469694484').channels.get('450251648946798602').send(`Le bot a quitter le serveur  ${guild.name} (id: ${guild.id}). il y avais  ${guild.memberCount} membres .  \n Le bot est maintenant  sur ${bot.guilds.size} serveurs .`) 
    console.log(`le bot a quitter se serveur : ${guild.name} (id: ${guild.id})`);
});
   
bot.on('message',message => {
    if (message.content === prefix + "création") {
        message.delete()
        message.channel.send("Création du bot le __26/05/2018__");   
       console.log("yes");
    }
    if (message.content === prefix + "créateur") {
        message.channel.send(`__**Ce bot a été créer par Black_Warrior#6540**__`);   
       console.log("yes");
    }
    
})

bot.on('message',message => {
    if (message.content === prefix + "Création") {
        message.delete()
        message.channel.send("Création du bot le __26/05/2018__");   
       console.log("yes");
    }
    if (message.content === prefix + "Créateur") {
        message.channel.send("__**Ce bot a été créer par Black_Warrior#6540**__");   
       console.log("yes");
    }
    
})

bot.on('message', message => {
    if (message.content === prefix + "Youtube") {
        message.delete()
        var Youtube_embed = new Discord.RichEmbed()
            .setTitle("__**Commande du bot DeuxFréres**__")
            .setDescription(" __voici les commandes youtube du bot :__")
            .addField(" $Noke", "Affichier la chaine de Noke. ")
            .addField(" $Lollyco ", "Afficher la chaine de Lollyco. ")
            .addField(" $$rixwin", "afficher la chaine de Rixwin. ")
            .addField(" $DF", "afficher la chaine des Deux Fréres. ")
            .addField(" $Slider", "Afficher la chaine de Slider. ")
            .addField(" $Rose", "Afficher la chaine de RoseDragonne. ")
            .addField(" $Bomber", "Afficher la chaine de Bomber. ")
            .setColor("#1B42DB")
            .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
        message.channel.sendEmbed(Youtube_embed)
    }});

    bot.on('message', message => {
        if (message.content === prefix + "Fun") {
            message.delete()
            var Fun_embed = new Discord.RichEmbed()
                .setTitle("__**Commande du bot DeuxFréres**__")
                .setDescription(" __voici les commandes fun du bot__")
                .addField(" $Avatar", "pour voir votre photo de profile. ")
                .addField(" $salut", "pour que le bot vous parle. ")
                .addField(" $comment vas-tu ?", "pour que le bot vous parle. ")
                .setColor("#3AF700")
                .setFooter("Ce bot discord a été créer par Black_Warrior#6540")
            message.channel.sendEmbed(Fun_embed)
        }});

        bot.on('message', message => {
            if (message.content === prefix + "Owner") {
                message.delete()
                var Owner_embed = new Discord.RichEmbed()
                    .setTitle("__**Commande du bot DeuxFréres**__")
                    .setDescription(" __voici les commandes owner du bot__")
                    .addField(" $ban", "pour bannir une personne. ")
                    .addField(" $kick", "pour kicker une personne du serveur. ")
                    .addField(" $Ping", "pour voir les ping du serveur. ")
                    .addField(" $Clear", "pour supprimé les message. ")
                    .addField(" $purge", "pour supprimé les message entre 2 à 100. ")
                    .addField(" $Création", "voir la date de création du bot. ")
                    .addField(" $Créateur", "pour voir qui a créée ce bot. ")
                    .addField(" $Invite", "pour avoir la seul invite du bot DeuxFréres. ")
                    .addField(" $Support", "pour avoir le serveur de support des Deux Fréres. ")
                    .addField(" $Serveur", "Pour avoir le serveur officiel des Deux Fréres. ")
                    .addField(" $infos", "Pour vous les infos du serveur.")
                    .setColor("#FA0000 ")
                    .setFooter("Ce bot discord a été créer par Black_Warrior#6540")
                message.channel.sendEmbed(Owner_embed)
            }});

            bot.on('message', message => {
                if (message.content === prefix + "cmd") {
                    message.delete()
                    var cmd_embed = new Discord.RichEmbed()
                        .setTitle("__**Commande du bot DeuxFréres**__")
                        .setDescription(" __Voici toute les rubriques du bot__")
                        .addField(" $Owner", "Pour avoir les commande owner du bot. ", true )
                        .addField(" $Fun", "Pour avoir les commandes fun du bot. ", true)
                        .addField(" $Youtube", " Pour avoir les commandes youtube du bot. ", true)
                        .addField(" $deve", "Pour avoir les commande de serveur de développement. ", true)
                        .addField(" $Kalista", "Pour avoir les commandes pour Kalista du bot. ", true)
                        .addField(" $donations", "pour voir la partir pour faire des dons. ", true)
                        .addField(" $music", "Pour avoir les commande music du bot.", true)
                        .setImage("https://cdn.discordapp.com/attachments/427950094277410817/449865056289816576/JPEG_20180524_090007.jpg")
                        .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                        .setColor("#00FAC8")
                    message.channel.sendEmbed(cmd_embed)
                }});

                bot.on('message', message => {
                    if (message.content === prefix + "deve") {
                        message.delete()
                        var deve_embed = new Discord.RichEmbed()
                            .setTitle("__**Commande du bot DeuxFréres**__")
                            .setDescription(" __Voici les commandes de développement du bot__")
                            .addField(" $Dev", "Pub de création de serveur. ")
                            .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                            .setColor("#000000")
                        message.channel.sendEmbed(deve_embed)
                    }});

                    bot.on('message', message => {
                        if (message.content === prefix + "Deve") {
                            message.delete()
                            var Deve_embed = new Discord.RichEmbed()
                                .setTitle("__**Commande du bot DeuxFréres**__")
                                .setDescription(" __Voici les commandes de développement du bot__")
                                .addField(" $Dev", "Pub de création de serveur. ")
                                .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                                .setColor("#000000")
                            message.channel.sendEmbed(Deve_embed)
                        }});



                        bot.on('message', message => {
                            if (message.content === prefix + "youtube") {
                                message.delete()
                                var youtube_embed = new Discord.RichEmbed()
                                    .setTitle("__**Commande du bot DeuxFréres**__")
                                    .setDescription(" __Voici les commandes youtube du bot__")
                                    .addField(" $Noke", "Affichier la chaine de Noke. ")
                                    .addField(" $Lollyco ", "Afficher la chaine de Lollyco. ")
                                    .addField(" $rixwin", "Afficher la chaine de Rixwin. ")
                                    .addField(" $DF", "Afficher la chaine des Deux Fréres. ")
                                    .addField(" $Slider", "Afficher la chaine de Slider. ")
                                    .addField(" $Rose", "Afficher la chaine de RoseDragonne. ")
                                    .addField(" $Bomber", "Afficher la chaine de Bomber. ")
                                    .setColor("#1B42DB")
                                    .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                                message.channel.sendEmbed(youtube_embed)
                            }});
                        
                            bot.on('message', message => {
                                if (message.content === prefix + "fun") {
                                    message.delete()
                                    var fun_embed = new Discord.RichEmbed()
                                        .setTitle("__**Commande du bot DeuxFréres**__")
                                        .setDescription(" __Voici les commandes fun du bot__")
                                        .addField(" $Avatar", "Pour voir votre photo de profile. ")
                                        .addField(" $salut", "Pour que le bot vous parle. ")
                                        .addField(" $comment vas-tu ?", "Pour que le bot vous parle. ")
                                        .setColor("#3AF700")
                                        .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                                    message.channel.sendEmbed(fun_embed)
                                }});
                        
                                bot.on('message', message => {
                                    if (message.content === prefix + "owner") {
                                        message.delete()
                                        var owner_embed = new Discord.RichEmbed()
                                            .setTitle("__**Commande du bot DeuxFréres**__")
                                            .setDescription(" __voici les commandes owner du bot__")
                                            .addField(" $ban", "Pour bannir un personne. ")
                                            .addField(" $kick", "Pour kicker un personne du serveur. ")
                                            .addField(" $Ping", "Pour voir les ping du serveur. ")
                                            .addField(" $Clear", "Pour supprimé les message. ")
                                            .addField(" $purge", "Pour supprimé les message entre 2 à 300. ")
                                            .addField(" $Création", "Pour voir la date de création du bot. ")
                                            .addField(" $Créateur", "Pour voir qui a créée ce bot. ")
                                            .addField(" $Invite", "Pour avoir la seul invite du bot DeuxFréres. ")
                                            .addField(" $Support", "Pour avoir le serveur de support des Deux Fréres. ")
                                            .addField(" $Serveur", "Pour avoir le serveur officiel des Deux Fréres. ")
                                            .addField(" $infos", "Pour vous les infos du serveur.")
                                            .setColor("#FA0000 ")
                                            .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                                        message.channel.sendEmbed(owner_embed)
                                    }});
                        
                                    bot.on('message', message => {
                                        if (message.content === prefix + "Cmd") {
                                            message.delete()
                                            var Cmd_embed = new Discord.RichEmbed()
                                                .setTitle("__**Commande du bot DeuxFréres**__")
                                                .setDescription(" __Voici toute les rubriques du bot__")
                                                .addField(" $Owner", "Pour avoir les commande owner du bot. ", true )
                                                .addField(" $Fun", "Pour avoir les commandes fun du bot. ", true)
                                                .addField(" $Youtube", " Pour avoir les commandes youtube du bot. ", true)
                                                .addField(" $deve", "Pour avoir les commande de serveur de développement. ", true)
                                                .addField(" $Kalista", "Pour avoir les commandes pour Kalista du bot. ", true)
                                                .addField(" $donations", "pour voir la partir pour faire des dons. ", true)
                                                .addField(" $music", "Pour avoir les commande music du bot.", true)
                                                .setImage("https://cdn.discordapp.com/attachments/427950094277410817/449865056289816576/JPEG_20180524_090007.jpg")
                                                .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
                                                .setColor("#00FAC8")
                                            message.channel.sendEmbed(Cmd_embed)
                                        }});
                        

                bot.on('message', message => {
                    if (message.content === prefix + "raid") {
                        message.delete()
                        var raid_embed = new Discord.RichEmbed()
                            .addField("salutations la team les deux Frères te raid ❤️❤️ ")
                            .setImage("https://cdn.discordapp.com/attachments/427950094277410817/449905532422324233/GIFFTEXT_20180430024645060.gif")
                        message.channel.sendEmbed(raid_embed)
                    }})

    bot.on('message', message => {
        if (message.content === prefix + 'Avatar') {
            var embed = new Discord.RichEmbed()
                .setTitle("Voici votre photo de profile : ")
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setImage(message.author.avatarURL)
                .setColor("#00FA43")
            message.channel.sendEmbed(embed)
        }
      });

      bot.on("message", function(message) {
        if (message.author.equals(bot.user)) return;
    
        if (!message.content.startsWith(prefix)) return;
    
        var args = message.content.substring(prefix.length).split(" ");
    
        switch (args[0].toLowerCase()) {
            case "ping":
            message.delete()
            message.channel.sendMessage('temp de latence avec le serveur:  `' + `${message.createdTimestamp - Date.now()}` + 'ms`').catch(console.log("ping du serveur demander !"));
            break;
            case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list).catch(console.log("message du serveur effacée"));
                    }, function(err){message.channel.send("Erreur")})}
            }});


            bot.on('message', message => {
                if (message.content === prefix + "comment vas-tu ?"){
                    message.delete()
                    random();
                    if (randnum == 1){
                        message.channel.send("Merci je vais très bein !");
                        console.log(randnum);
                    }
                    if (randnum == 2){
                        message.channel.send("ça va pas mais ça va aller merci de te sousier de moi !");
                        console.log(randnum)
                    }
                }
            })
            bot.on('message', message => {
                if (message.content === prefix + "salut"){
                    randim();
                    if (randnum == 1){
                        message.channel.send("salut");
                        console.log(randnum);
                    }
                    if (randnum == 2){
                        message.channel.send("yo");
                        console.log(randnum)
                    }
                    if (randnum == 3){
                        message.channel.send("slt");
                        console.log(randnum)
                    }
                    if (randnum == 4){
                        message.channel.send("yo 😋");
                        console.log(randnum)
                    }
                    if (randnum == 5){
                        message.channel.send("salut🤨");
                        console.log(randnum)
                    }
                
                }
            })
            function random (min, max){
                min = Math.ceil(0);
                max = Math.floor(2);
                randnum = Math.floor(Math.random() * (max - min +1) + min);
                }   
            
            function randim (min, max){
                min = Math.ceil(0);
                max = Math.floor(5);
                randnum = Math.floor(Math.random() * (max - min +1) + min);
                } 
                
bot.on('message' , message => {
    if (message.content === prefix + "Lollyco"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCWMUTSWDxNkHztafMwWZZTw")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Noke"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UC5cerrrBslbFpkWn7yL6KPQ")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Rixwin"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCphO-e3eFG7tfa3zzj5FPxg")

    }

})
bot.on('message' , message => {
    if (message.content === prefix + "DF"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCwW799Zqz7EbPdRgGb524-g")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Invite"){
        message.delete()
        message.reply("https://discordapp.com/oauth2/authorize?client_id=449866687702106113&scope=bot&permissions=2146958591")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Raid"){
        message.delete()
        message.channel.send("@everyone")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "Slider"){
        message.delete()
        message.channel.send("https://www.youtube.com/channel/UCGdUFn4rpAHtCXV1Q40HjCw")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "Serveur"){
        message.delete()
        message.channel.send("Ceci est le serveur officiel des deux fréres \n https://discord.gg/DkPWKsP")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "Support"){
        message.delete()
        message.channel.send("Ceci est le serveur de support des deux fréres \n https://discord.gg/QpEbkP5")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "invite"){
        message.delete()
        message.reply("https://discordapp.com/oauth2/authorize?client_id=449866687702106113&scope=bot&permissions=2146958591")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "raid"){
        message.delete()
        message.channel.send("@everyone")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "slider"){
        message.delete()
        message.channel.send("https://www.youtube.com/channel/UCGdUFn4rpAHtCXV1Q40HjCw")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "serveur"){
        message.delete()
        message.channel.send("Ceci est le serveur officiel des deux fréres \n https://discord.gg/DkPWKsP")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "support"){
        message.delete()
        message.channel.send("Ceci est le serveur de support des deux fréres \n https://discord.gg/QpEbkP5")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "lollyco"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCWMUTSWDxNkHztafMwWZZTw")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "noke"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UC5cerrrBslbFpkWn7yL6KPQ")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "rixwin"){
        message.delete()
        message.channel.send("https://www.youtube.com/channel/UCphO-e3eFG7tfa3zzj5FPxg")

    }

})
bot.on('message' , message => {
    if (message.content === prefix + "Df"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCwW799Zqz7EbPdRgGb524-g")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "rose"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCn2NnSOWHO7bv6QTfROcJ1w")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Rose"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UCn2NnSOWHO7bv6QTfROcJ1w")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "bomber"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UC9c18x1gA9s9fj56jf1PQrA")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Bomber"){
        message.delete()
        message.reply("https://www.youtube.com/channel/UC9c18x1gA9s9fj56jf1PQrA")
    
    }
})
bot.on('message' , message => {
    if (message.content === "pute"){
        message.delete()
    
    }
})
bot.on('message' , message => {
    if (message.content === "pd"){
        message.delete()
    
    }
})
bot.on('message' , message => {
    if (message.content === "connard"){
        message.delete()
    
    }
})
bot.on('message' , message => {
    if (message.content === "putain"){
        message.delete()
    
    }
})

bot.on('message', message => {
	
	if (!message.guild) return;
  
	if (message.content === prefix + 'join') {
	  if (message.member.voiceChannel) {
		message.member.voiceChannel.join()
		  .then(connection => { 
			message.reply('j\'ai réussi a ma connecter au channel audio !');
		  })
		  .catch(console.log);
	  } else {
		message.reply('Vous devez d\'abord rejoindre une chaîne vocale!');
	  }
    }
  })



  bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "Développeurs Bots");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("```Tu n'as pas la permission de faire cette commande.```").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("```Merci de mentionner l'utilisateur à expluser.```").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("```Cet utilisateur est introuvable ou impossible à expluser.```")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission KICK_MEMBER pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès.`).catch(console.error);
            message.guild.channels.find("name", "logs").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`)
        }).catch(console.error) 
    
    }

    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "Développeurs Bots");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("```Tu n'as pas la permission de faire cette commande.```").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("```Merci de mentionner l'utilisateur à bannir.```");
        member.ban().then(member => {
            message.reply(`${member.user.username} a été banni avec succès.`).catch(console.error);
            message.guild.channels.find("name", "logs").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
        }).catch(console.error)

    }})


bot.on('message' ,message => {
    if (message.content === prefix + "Dev"){
        message.delete()
        message.channel.send("📣Salutations je me présente Gaming Noke. j'ai 28 ans je suit passionné part l'informatique et le développement informatique avec la team les deux Frères :v:️ \n \n ▶️nos services sont◀️ \n \n :currency_exchange: les tarifs sont :currency_exchange: \n \n :heavy_dollar_sign:petit 20€ médium 30€ de luxe 50€ serveur gold 100€ :heavy_dollar_sign: \n \n :euro: voici le lien des paiements :euro: \n \n https://www.paypal.me/GamigNoke \n \n   :wrench: Développement de serveurs discord :wrench:  \n \n ✅Création de serveurs discords \n \n ✅Création de channels \n \n ✅On fait vôtres sécurités de serveurs  \n \n ✅On ajoute et configure des bots \n \n :computer: si vous désirez un service propre et professionnel veuillez nous contacter a cette adresse mail pour tous exemple voici un logo d'un serveur Discord  :computer:  \n \n https://cdn.discordapp.com/attachments/426565035876417536/449080339969736706/Desktop_Screenshot_2018.05.24_-_02.41.02.87.png \n \n ➡️Noke.Dev21@gmail.com \n \n ✅nôtres serveur Discord Les Deux Frères \n \n https://discord.gg/DkPWKsP \n \n nôtres serveur Discord support \n \n https://discord.gg/QpEbkP5 \n \n :heavy_check_mark: voici nôtres bot #DeuxFrères :heavy_check_mark: \n \n 💯 https://discordapp.com/oauth2/authorize?client_id=449866687702106113&scope=bot&permissions=2146958591  \n \n 📢cordialement merci l'équipes les deux Frères📢  \n \n  ")
    }})
    

    bot.on('message', message => {
        if (message.content === prefix + "Kalista") {
            message.delete()
            var Kalista_embed = new Discord.RichEmbed()
                .setTitle("__**Commande du bot DeuxFréres**__")
                .setDescription(" __voici les commandes pour Kalista du bot__")
                .addField(" $gif {le mot du gif que vous voulais}", "Faire apparaître le gif que vous voulais. ")
                .setColor("#FF358B")
                .setFooter("Ce bot discord a été créer par ҉T҉a҉m҉a҉k҉i Y҉a҉g҉a҉m҉i#6540 ")
            message.channel.sendEmbed(Kalista_embed)
}});

bot.on("message", async message => {
    
    if(message.author.bot) return;

    if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();
    
    if(command === "say") {

      const sayMessage = args.join(" ");

      message.delete().catch(O_o=>{}); 

      message.channel.send(sayMessage);
    }

    if(command === "purge") {
      
      const deleteCount = parseInt(args[0], 10);

      if (message.member.hasPermission("MANAGE_MESSAGES")){
      
      if(!deleteCount || deleteCount < 2 || deleteCount > 300)

        return message.reply("Veuillez indiquer un nombre compris entre 2 et 300 pour le nombre de messages à supprimer");
      
      const fetched = await message.channel.fetchMessages({count: deleteCount});

      message.channel.bulkDelete(fetched)

        .catch(error => message.reply(`Impossible de supprimer les messages en raison de : ${error}`));
    }
}});       

const broadcast = bot.createVoiceBroadcast();


bot.on('message', message => {
    if (message.content === "#DeuxFrères") {
        message.delete()
        var lol_embed = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/427950094277410817/449905532422324233/GIFFTEXT_20180430024645060.gif")
            .setColor("#C0C0C0")
            .setFooter("Ce bot discord a été créer par Black_Warrior#6540")
        message.channel.sendEmbed(lol_embed)
}});

bot.on('message', message => {
    if (message.content === prefix + "donations") {
        message.delete()
        var donations_embed = new Discord.RichEmbed()
            .addField(" $paypal", "pour avoir le paypal des Deux Frères. ")
            .setColor("#DB0B32")
            .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
        message.channel.sendEmbed(donations_embed)
}});

bot.on(`message` , async msg => {
    if (msg.author.bot) return; 
    if (!msg.content.startsWith(prefix)) return;

    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    const arg = msg.content.split(" ").slice(1);

    if (msg.content.toLowerCase().startsWith("$gif")) {
        if (arg.length < 1) return msg.channel
        const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(arg.join(" "))}` , {json: true})
        if (!res || !res.body || !res.body.data) return msg.channel.send("j'ai pas réussi à trouver un gif qui correspond à votre requête", {code: "py"})

        const embed = new Discord.RichEmbed()
        .setColor("#FF358B")
        .setImage(res.body.data.image_url)
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)

        msg.channel.send({embed: embed});
    }
    if (command === "cat") {
        const { body } = await superagent
        .get('aws.random.cat/meow');
        const embed = new Discord.RichEmbed()
        .setColor("#9EA440")
        .setTitle("Meow :cat:")
        .setImage(body.file)

        msg.channel.send({embed})
    }

})

bot.on('message', message => {
    if (message.content === prefix + "paypal") {
        message.delete()
        var paypal_embed = new Discord.RichEmbed()
            .setTitle("cliquer sur moi pour accéder  au lien du paypal")
            .addField("Salut si vous pouvez nous aider a nous  ameliorer notre qualité de travail en nous aident \n \n financièrement ce n est pas obligé vous le faite si vous voulez on ne vous oblige pas.", true)
            .setURL("https://www.paypal.me/GamigNoke")
            .setColor("#102c54")
        message.channel.send(paypal_embed)

}})

bot.on('message', message => {
    if (message.content === prefix + "infos") {
        message.delete()
        const VoiceChannel = message.member.voiceChannel;
        var infos_embed = new Discord.RichEmbed()
            .setTitle(`**Voici les infos sur le serveur ${message.guild.name}!**`)
            .addField(`Non du serveur :`, message.guild.name, true)
            .addField(`Propriétaire du serveur discord :`, message.guild.owner, true)
            .addField(`Niveau de Vérification :`, message.guild.verificationLevel, true)
            .addField(`Région du serveur :`, message.guild.region, true)
            .addField(`Nombres de membres : `, message.guild.members.size, true)
            .addField(`Nombre salons :`, message.guild.channels.size, true)
            .addField(`Le nombre de rôle :`, message.guild.roles.size, true)
            .addField(`Channels textuels :`, message.guild.VoiceChannel.size, true)
            .addField(`Nombre d'émojie :`, message.guild.emojis.size, true)
            .setFooter("Ce bot discord a été créer par Black_Warrior#6540.")
            .setColor("#102c54")
        message.channel.send(infos_embed)

}})

bot.on("message", async (message) => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;
	if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
	if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return;
	if (!message.guild.member(bot.user).hasPermission('EMBED_LINKS')) return;
	if (!message.guild.member(bot.user).hasPermission('VIEW_CHANNEL')) return;
    if (!message.guild.member(bot.user).hasPermission('READ_MESSAGE_HISTORY')) return;


		
		if (message.content.indexOf(prefix) !== 0) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		if (command === "play") {
			if (!message.guild.member(bot.user).hasPermission('CONNECT')) return message.reply('Désolé, je n\'ai pas les permissions pour faire cette commande j\'ai besoin de la permission de me connecter au channel. :x:')
			if (!message.guild.member(bot.user).hasPermission('SPEAK')) return message.reply('Désolé, je n\'ai pas les permissions pour faire cette commande j\'ai besoin de la permission de parler. :x:')
			const channel = message.member.voiceChannel;
			if (!channel || channel.type !== 'voice') return message.reply('Je n\'ai pas pu me connecter à votre channel vocal...');
			if (queue[message.guild.id] === undefined) return message.channel.send(`Ajouter quelques chansons à la file d'attente d'abord avec $add`);
			if (!message.guild.voiceConnection) {
				channel.join()
			}
			if (queue[message.guild.id].playing) return message.channel.send('Je suis déjà en train de jouer la file d\'attente.');
			queue[message.guild.id].playing = true;
			(function play(song) {
				if (song === undefined) return message.channel.send('La file d\'attente est vide, je me deconnecte du channel vocal jusqu\'à ce que plus de musiques soient placées dans la file d\'attente.').then(() => {
					queue[message.guild.id].playing = false;
					message.member.voiceChannel.leave();
				});
				console.log(song.title + " in " + message.guild.name);
				message.channel.send(`Joue : **${song.title}** comme demandé par: **${song.requester}**`);
				dispatcher = message.guild.voiceConnection.playStream(yt(song.url, {
					audioonly: true
				}), {
					seek: 0,
					passes: 1,
					bitrate: 'auto',
					quality: 'highestaudio'
				});
				dispatcher.on('end', () => {
					play(queue[message.guild.id].songs.shift());
				});
				dispatcher.on('error', (err) => {
					return message.channel.send('error: ' + err).then(() => {
						play(queue[message.guild.id].songs.shift());
					});
				});
			})(queue[message.guild.id].songs.shift());
		}

		if (command === "add") {
			let query = args.join(" ");
			if (query < 1) return message.channel.send('Vous devez inclure une requête pour ce que vous voulez jouer, add [url]')
			const msg = await message.channel.send("Recherche...")
			if (query.includes("youtube.com/watch")) {
				let url = query
				yt.getInfo(url, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
					if (err) return message.channel.send('Invalid YouTube Link: ' + err);
					if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
					queue[message.guild.id].songs.push({
						url: url,
						title: info.title,
						requester: message.author.username
					});
					msg.edit(`Ajout de **${info.title}** à la file d'attente`);
				});
			} else {
			const { body } = await snekfetch
				.get('https://www.googleapis.com/youtube/v3/search')
				.query({
					part: 'snippet',
					type: 'video',
					maxResults: 5,
					q: query,
					safeSearch: 'strict',
					order: 'relevance',
					videoDuration: 'medium',
					key: "GOOGLEKEY"
				});
			if (!body.items.length) return message.channel.send('Aucun résultat trouvé pour ' + query + ".");
			let url = `https://www.youtube.com/watch?v=${body.items[0].id.videoId}`
			yt.getInfo(url, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
				if (err) return message.channel.send('Invalid YouTube Link: ' + err);
				if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
				queue[message.guild.id].songs.push({
					url: url,
					title: info.title,
					requester: message.author.username
				});
				info
				msg.edit(`Ajout de **${info.title}** à la file d'attente`);
			});
		}
	}

		if (command === "join") {
			return new Promise((resolve, reject) => {
				const voiceChannel = message.member.voiceChannel;
				if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Je n\'ai pas pu me connecter à votre channel vocal...');
				voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
			});
		}

		if (command === "leave") {
			return new Promise((resolve, reject) => {
				const voiceChannel = message.member.voiceChannel;
				if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Je n\'ai pas pu quitter votre channel vocal...');
				voiceChannel.leave()
			});
		}

		if (command === "queue") {
			if (queue[message.guild.id] === undefined || queue[message.guild.id] === {}) return message.channel.send(`Ajouter quelques chansons à la file d'attente d'abord avec add`);
			let tosend = [];
			queue[message.guild.id].songs.forEach((song, i) => {
				tosend.push(`${i+1}. ${song.title} - Demandé par: ${song.requester}`);
			});
			if (tosend.length <= 0) return message.channel.send(`**${message.guild.name} Musique en file d'attente: **Actuellement **${tosend.length}** en file d'attente.`);
			message.channel.send(`**${message.guild.name} Musique en file d'attente: **Actuellement **${tosend.length}** chansons en attente ${(tosend.length> 15 ? '*[Seulement 15 suivant]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
		}

		if (command === "clearqueue") {
                   if (queue === {}) return message.channel.send('La file d\'attente est vide, elle ne contient aucune chanson à supprimer.');
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Je ne pouvais pas quitter votre channel vocal...');
			queue[message.guild.id] = {};
			message.channel.send('La file d\'attente a été effacée, utilisez $add pour recommencer à jouer de la musique.')
			voiceChannel.leave()
		}

		if (command === "pause") {
			dispatcher.pause();
			message.channel.send('La musique a été mise en pause, utilisez $resume pour recommencer à jouer de la musique.')
		}

		if (command === "resume") {
			dispatcher.resume();
			message.channel.send('La musique a été reprise.')
		}

		if (command === "skip") {
			if (queue === {}) return message.channel.send('La file d\'attente est vide, et  n\'a pas de chansons à skip.');
			message.channel.send('La chanson actuelle a été skip ')
			dispatcher.end();
		}
		if (command === "volume") {
			const volumetoset = parseInt(args.join(""))
			if (volumetoset > 200 || volumetoset < 0) return message.channel.send('Volume hors de portée !').then((response) => {
				response.delete(5000);
		    });
			if (isNaN(volumetoset)) return message.channel.send("Besoin de fournir un nombre valide.")
			dispatcher.setVolume(volumetoset/100);
			message.channel.send(`Le volume est maintenant réglé à : ${volumetoset}%`);
		}
});


bot.on('message', message => {
    if (message.content === prefix + "Dc") {
        message.delete()
        var Dc_embed = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/427950094277410817/454367492320526338/RIP.png")
            .setColor("#DB0B32")
        message.channel.sendEmbed(Dc_embed)
}});

bot.on('message', message => {
    if (message.content === prefix + "Music") {
        message.delete()
        var music_embed = new Discord.RichEmbed()
            .setTitle("__**Commande du bot DeuxFréres**__")
            .setDescription(" __Voici les commandes music du bot__")
            .addField(" $add [url]", "Pour ajouter une musique a la file d'attente.")
            .addField(" $play", "Le bot joue la file d'attente.")
            .addField(" $join", "Le bot ce connecte au channel ou vous vous situé.")
            .addField(" $leave", "Le bot quitte le channel ou il se situe.")
            .addField(" $queue", "Affiche le nombre et le titre des musique en file d'attente.")
            .addField(" $clearqueue", "efface toute les musique en file d'attente.")
            .addField(" $pause", "met en pause la musique qui est jouer.")
            .addField(" $resume", "La musique qui a été mis en pause reprend.")
            .addField(" $skip", "Le bot passe à la prochaine musique sur le file d'attente.")
            .addField(" $volume", "Regler le son de la musique de 0 à 200% .")
            .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
            .setColor("#132959")
        message.channel.sendEmbed(music_embed)
}});

bot.on('message', message => {
    if (message.content === prefix + "music") {
        message.delete()
        var music_embed = new Discord.RichEmbed()
            .setTitle("__**Commande du bot DeuxFréres**__")
            .setDescription(" __Voici les commandes music du bot__")
            .addField(" $add [url]", "Pour ajouter une musique a la file d'attente.")
            .addField(" $play", "Le bot joue la file d'attente.")
            .addField(" $join", "Le bot ce connecte au channel ou vous vous situé.")
            .addField(" $leave", "Le bot quitte le channel ou il se situe.")
            .addField(" $queue", "Affiche le nombre et le titre des musique en file d'attente.")
            .addField(" $clearqueue", "efface toute les musique en file d'attente.")
            .addField(" $pause", "met en pause la musique qui est jouer.")
            .addField(" $resume", "La musique qui a été mis en pause reprend.")
            .addField(" $skip", "Le bot passe à la prochaine musique sur le file d'attente.")
            .addField(" $volume", "Regler le son de la musique de 0 à 200% .")
            .setFooter("Ce bot discord a été créer par Black_Warrior#6540 ")
            .setColor("#132959")
        message.channel.sendEmbed(music_embed)
}});

bot.login(config)
