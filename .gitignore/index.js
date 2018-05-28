const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');
const fs = require("fs");
const config = require(".gitignore/config.json")


const adapter = new FileSync('database.json');
const db = low(adapter);

var channelafk = "449781086483120138"
bot.on("ready",function() {
    bot.user.setGame("Avec les DeuxFréres❤️🐧,$cmd");
    console.log(`Le bot ${bot.user.username} à  bien été connecté `);
});
var prefix = ("$")

bot.on("ready", () => {

    console.log(`Bot lancer dans  ${bot.guilds.size} serveur .`); 

  });

  bot.on("guildCreate" , guild => {

    console.log(`Nouveau serveur joint: ${guild.name} (id: ${guild.id}). il y a ${guild.memberCount} membres `);
});
  
bot.on("guildDelete", guild => {
 
    console.log(`le bot a quitter se serveur : ${guild.name} (id: ${guild.id})`);
});
   
bot.on('message',message => {
    if (message.content === prefix + "création") {
        message.delete()
        message.channel.send("Création du bot le __26/05/2018__");   
       console.log("yes");
    }
    if (message.content === prefix + "créateur") {
        message.channel.send("__**Ce bot a été créer par Tamaki Yagami#6540**__");   
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
        message.channel.send("__**Ce bot a été créer par Tamaki Yagami#6540**__");   
       console.log("yes");
    }
    
})

bot.on('message', message => {
    if (message.content === prefix + "Youtube") {
        message.delete()
        var help_embed = new Discord.RichEmbed()
            .setTitle("__**Commande du bot DeuxFréres**__")
            .setDescription(" __voici les commandes youtube du bot :__")
            .addField("-$Noke", "Affichier la chaine de Noke")
            .addField("-$Lollyco ", "Afficher la chaine de Lollyco")
            .addField("-$$rixwin", "afficher la chaine de Rixwin")
            .addField("-$DF", "afficher la chaine des Deux Fréres ")
            .addField("-$Slider", "Afficher la chaine de Slider")
            .setColor("#1B42DB")
            .setFooter("Ceci sont les commande du bot ! ")
        message.channel.sendEmbed(help_embed)
    }});

    bot.on('message', message => {
        if (message.content === prefix + "Fun") {
            message.delete()
            var help_embed = new Discord.RichEmbed()
                .setTitle("__**Commande du bot DeuxFréres**__")
                .setDescription(" __voici les commandes fun du bot :__")
                .addField("-$Avatar", "pour voir votre photo de profile")
                .addField("-$salut", "pour que le bot vous parle")
                .addField("-$comment vas-tu ?", "pour que le bot vous parle")
                .setColor("#3AF700")
                .setFooter("Ceci sont les commande du bot ! ")
            message.channel.sendEmbed(help_embed)
        }});

        bot.on('message', message => {
            if (message.content === prefix + "Owner") {
                message.delete()
                var help_embed = new Discord.RichEmbed()
                    .setTitle("__**Commande du bot DeuxFréres**__")
                    .setDescription(" __voici les commandes owner du bot :__")
                    .addField("-$ban", "pour bannir une personne")
                    .addField("-$kick", "pour kicker une personne du serveur")
                    .addField("-$Ping", "pour voir les ping du serveur")
                    .addField("-$Clear", "pour supprimé les message")
                    .addField("-$purge", "pour supprimé les message entre 2 à 100")
                    .addField("-$Création", "voir la date de création du bot")
                    .addField("-$Créateur", "pour voir qui a créée ce bot")
                    .addField("-$Invite", "pour avoir la seul invite du bot DeuxFréres")
                    .addField("-$Support", "pour avoir le serveur de support des Deux Fréres")
                    .addField("-$Serveur", "Pour avoir le serveur officel des Deux Fréres ")
                    .setColor("#FA0000 ")
                    .setFooter("Ceci sont les commande du bot ! ")
                message.channel.sendEmbed(help_embed)
            }});

            bot.on('message', message => {
                if (message.content === prefix + "cmd") {
                    message.delete()
                    var help_embed = new Discord.RichEmbed()
                        .addField("-$Owner", "Pour avoir les commande owner du bot")
                        .addField("-$Fun", "Pour avoir les commandes fun du bot ")
                        .addField("-$Youtube", " Pour avoir les commandes youtube du bot")
                        .addField("-$développement", "Pour avoir les commande de serveur de développement")
                        .addField("-$Kalista", "Pour avoir les commandes pour Kalista du bot ")
                        .setImage("https://cdn.discordapp.com/attachments/427950094277410817/449865056289816576/JPEG_20180524_090007.jpg")
                        .setColor("#00FAC8")
                    message.channel.sendEmbed(help_embed)
                }});

                bot.on('message', message => {
                    if (message.content === prefix + "développement") {
                        message.delete()
                        var help_embed = new Discord.RichEmbed()
                            .setTitle("__**Commande du bot DeuxFréres**__")
                            .setDescription(" __voici les commandes de développement du bot :__")
                            .addField("-$Dev", "Pub de création de serveur ")
                            .setColor("#000000")
                        message.channel.sendEmbed(help_embed)
                    }});

                    bot.on('message', message => {
                        if (message.content === prefix + "Développement") {
                            message.delete()
                            var help_embed = new Discord.RichEmbed()
                                .setTitle("__**Commande du bot DeuxFréres**__")
                                .setDescription(" __voici les commandes de développement du bot :__")
                                .addField("-$Dev", "Pub de création de serveur ")
                                .setColor("#000000")
                            message.channel.sendEmbed(help_embed)
                        }});



                        bot.on('message', message => {
                            if (message.content === prefix + "youtube") {
                                message.delete()
                                var help_embed = new Discord.RichEmbed()
                                    .setTitle("__**Commande du bot DeuxFréres**__")
                                    .setDescription(" __voici les commandes youtube du bot :__")
                                    .addField("-$Noke", "Affichier la chaine de Noke")
                                    .addField("-$Lollyco ", "Afficher la chaine de Lollyco")
                                    .addField("-$$rixwin", "afficher la chaine de Rixwin")
                                    .addField("-$DF", "afficher la chaine des Deux Fréres ")
                                    .addField("-$Slider", "Afficher la chaine de Slider")
                                    .setColor("#1B42DB")
                                    .setFooter("Ceci sont les commande du bot ! ")
                                message.channel.sendEmbed(help_embed)
                            }});
                        
                            bot.on('message', message => {
                                if (message.content === prefix + "fun") {
                                    message.delete()
                                    var help_embed = new Discord.RichEmbed()
                                        .setTitle("__**Commande du bot DeuxFréres**__")
                                        .setDescription(" __voici les commandes fun du bot :__")
                                        .addField("-$Avatar", "pour voir votre photo de profile")
                                        .addField("-$salut", "pour que le bot vous parle")
                                        .addField("-$comment vas-tu ?", "pour que le bot vous parle")
                                        .setColor("#3AF700")
                                        .setFooter("Ceci sont les commande du bot ! ")
                                    message.channel.sendEmbed(help_embed)
                                }});
                        
                                bot.on('message', message => {
                                    if (message.content === prefix + "owner") {
                                        message.delete()
                                        var help_embed = new Discord.RichEmbed()
                                            .setTitle("__**Commande du bot DeuxFréres**__")
                                            .setDescription(" __voici les commandes owner du bot :__")
                                            .addField("-$ban", "pour bannir un personne")
                                            .addField("-$kick", "pour kicker un personne du serveur")
                                            .addField("-$Ping", "pour voir les ping du serveur")
                                            .addField("-$Clear", "pour supprimé les message")
                                            .addField("-$purge", "pour supprimé les message entre 2 à 100")
                                            .addField("-$Création", "voir la date de création du bot")
                                            .addField("-$Créateur", "pour voir qui a créée ce bot")
                                            .addField("-$Invite", "pour avoir la seul invite du bot DeuxFréres")
                                            .addField("-$Support", "pour avoir le serveur de support des Deux Fréres")
                                            .addField("-$Serveur", "Pour avoir le serveur officel des Deux Fréres ")
                                            .setColor("#FA0000 ")
                                            .setFooter("Ceci sont les commande du bot ! ")
                                        message.channel.sendEmbed(help_embed)
                                    }});
                        
                                    bot.on('message', message => {
                                        if (message.content === prefix + "Cmd") {
                                            message.delete()
                                            var help_embed = new Discord.RichEmbed()
                                                .addField("-$Owner", "Pour avoir les commande owner du bot")
                                                .addField("-$Fun", "Pour avoir les commandes fun du bot ")
                                                .addField("-$Youtube", " Pour avoir les commandes youtube du bot")
                                                .addField("-$développement", "Pour avoir les commande de serveur de développement")
                                                .setColor("#00FAC8")
                                            message.channel.sendEmbed(help_embed)
                                        }});
                        

                bot.on('message', message => {
                    if (message.content === prefix + "raid") {
                        message.delete()
                        var help_embed = new Discord.RichEmbed()
                            .addField("salutations la team les deux Frères te raid ❤️❤️ ")
                            .setImage("https://cdn.discordapp.com/attachments/427950094277410817/449905532422324233/GIFFTEXT_20180430024645060.gif")
                        message.channel.sendEmbed(help_embed)
                    }})

                    bot.on('message', message => {
                        if (message.content === prefix + "hihi") {
                            message.delete()
                            var help_embed = new Discord.RichEmbed()
                                .setImage("https://media.giphy.com/media/TOWeGr70V2R1K/giphy.gif")
                            message.channel.sendEmbed(help_embed)
                        }})

    bot.on('message', message => {
        if (message.content === prefix + 'Avatar') {
          message.reply(message.author.avatarURL);
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
        message.reply("https://www.youtube.com/channel/UCWMUTSWDxNkHztafMwWZZTw")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Noke"){
        message.reply("https://www.youtube.com/channel/UC5cerrrBslbFpkWn7yL6KPQ")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Rixwin"){
        message.reply("https://www.youtube.com/channel/UCphO-e3eFG7tfa3zzj5FPxg")

    }

})
bot.on('message' , message => {
    if (message.content === prefix + "DF"){
        message.reply("https://www.youtube.com/channel/UCwW799Zqz7EbPdRgGb524-g")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Invite"){
        message.reply("https://discordapp.com/api/oauth2/authorize?client_id=449866687702106113&permissions=8&scope=bot")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "Raid"){
        message.channel.send("@everyone")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "Slider"){
        message.channel.send("https://www.youtube.com/channel/UCGdUFn4rpAHtCXV1Q40HjCw")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "Serveur"){
        message.channel.send("Ceci est le serveur officiel des deux fréres \n https://discord.gg/DkPWKsP")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "Support"){
        message.channel.send("Ceci est le serveur de support des deux fréres \n https://discord.gg/QpEbkP5")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "snvite"){
        message.reply("https://discordapp.com/api/oauth2/authorize?client_id=449866687702106113&permissions=8&scope=bot")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "raid"){
        message.channel.send("@everyone")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "slider"){
        message.channel.send("https://www.youtube.com/channel/UCGdUFn4rpAHtCXV1Q40HjCw")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "serveur"){
        message.channel.send("Ceci est le serveur officiel des deux fréres \n https://discord.gg/DkPWKsP")
    
    }
})

bot.on('message' , message => {
    if (message.content === prefix + "support"){
        message.channel.send("Ceci est le serveur de support des deux fréres \n https://discord.gg/QpEbkP5")
    
    }
})
bot.on('message' , message => {
    if (message.content === prefix + "rollyco"){
        message.reply("https://www.youtube.com/channel/UCWMUTSWDxNkHztafMwWZZTw")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "roke"){
        message.reply("https://www.youtube.com/channel/UC5cerrrBslbFpkWn7yL6KPQ")

    }
})
bot.on('message' , message => {
    if (message.content === prefix + "rixwin"){
        message.reply("https://www.youtube.com/channel/UCphO-e3eFG7tfa3zzj5FPxg")

    }

})
bot.on('message' , message => {
    if (message.content === prefix + "Df"){
        message.reply("https://www.youtube.com/channel/UCwW799Zqz7EbPdRgGb524-g")
    
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
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Merci de mentionner l'utilisateur à expluser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible à expluser.")
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
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
        member.ban().then(member => {
            message.reply(`${member.user.username} a été banni avec succès.`).catch(console.error);
            message.guild.channels.find("name", "logs").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
        }).catch(console.error)

    }})


bot.on('message' ,message => {
    if (message.content === prefix + "Dev"){
        message.delete()
        message.channel.send("📣Salutations je me présente Gaming Noke📣 \n \n j'ai 28 ans je suit passionné part l'informatique et le développement informatique avec la team les deux Frères \n \n ▶️nos services sont◀️ \n \n development de serveurs discord \n \n ✅channels \n \n ✅sécurité \n \n ✅bots  \n \n si vous désirez un service propre et professionnel veuillez nous contacter a cette adresse mail \n \n pour tous exemple voici un logo d'un serveur Discord \n \n https://cdn.discordapp.com/attachments/426565035876417536/449080339969736706/Desktop_Screenshot_2018.05.24_-_02.41.02.87.png \n \n ➡️Noke.Dev21@gmail.com \n \n ✅nôtres serveur Discord Les Deux Frères \n \n https://discord.gg/DkPWKsP \n \n nôtres serveur Discord support \n \n https://discord.gg/QpEbkP5 \n \n 💲les tarifs sont á discuter en fonction du travail demander💲 \n \n 📢cordialement merci l'équipes les deux Frères📢")
    }})
    

    bot.on('message', message => {
        if (message.content === prefix + "Kalista") {
            message.delete()
            var help_embed = new Discord.RichEmbed()
                .setTitle("__**Commande du bot DeuxFréres**__")
                .setDescription(" __voici les commandes pour Kalista du bot :__")
                .setColor("#FF358B")
                .setFooter("Ceci sont les commande du bot ! ")
            message.channel.sendEmbed(help_embed)
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
      
      if(!deleteCount || deleteCount < 2 || deleteCount > 300)

        return message.reply("Veuillez indiquer un nombre compris entre 2 et 300 pour le nombre de messages à supprimer");
      
      const fetched = await message.channel.fetchMessages({count: deleteCount});

      message.channel.bulkDelete(fetched)

        .catch(error => message.reply(`Impossible de supprimer les messages en raison de : ${error}`));
    }
});       

const broadcast = bot.createVoiceBroadcast();

bot.login("NDQ5ODY2Njg3NzAyMTA2MTEz.Deq8aQ.KGzEWVE_83K2-9kLPGpP4esPad0")
