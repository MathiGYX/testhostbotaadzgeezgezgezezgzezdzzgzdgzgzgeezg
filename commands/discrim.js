exports.run = (message, bot, send) => {
    if (!message.args[0]) message.args[0] = message.author.discriminator
    if (message.args[0].length !== 4) return send("Discriminators are 4 numbers")
    let disc = message.args[0].replace(/[^0123456789]/g, "")
    if (disc.length !== 4) return send("Discriminators are 4 numbers")

    bot.shard.broadcastEval("this.users.filter(u => u.discriminator === '"+disc+"').map(u => u.username)").then(ret => {
        for (i=0;i<ret.length-1;i++) {
            ret[0].concat(ret[i+1])
        }
        let filt = {}
        for (i=0;i<ret[0].length;i++) {
            filt[ret[0][i]] = true
        }
        filt = Object.keys(filt)
        message.channel.send("**Users with the Discriminator: "+disc+"**\n"+filt.join(", "))
    })


}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: false,
    category: "Utility",
    help: "Find users by their discriminator",
    args: "",
}