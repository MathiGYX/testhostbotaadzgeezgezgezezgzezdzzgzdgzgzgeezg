exports.run = (message, bot) => {
    let tags = message.guild.tags
    let keys = Object.keys(tags);
    let filter = keys.filter(k => tags[k].owner === message.author.id);
    let text = (keys.length === 0) ? "**There are no tags on this server.**" : "**The tags on this server are:**\n"+keys.join(", ");
    let owned = (filter.length === 0) ? "**"+message.author.username+" does not own any tags**" : "**"+message.author.username+" owns the tags:**\n"+filter.join(", ");
    let msg = (keys.length === 0) ? text : text+"\n"+owned;
    message.channel.send(msg, {split: true});
}

exports.conf = {
  userPerm:[],
  botPerm:["SEND_MESSAGES"],
  coolDown:0,
  dm:false,
  category:"Tag",
  help:"List the tags on this server.",
  args:"",
}