exports.run = (message, bot, send) => {
    send("The dashboard is WIP.");
    // send("Nitro's Dashboard can be found at http://nitro.ws/dashboard")
}

exports.conf = {
  userPerm: [],
  botPerm: ["SEND_MESSAGES"],
  coolDown: 0,
  dm: true,
  category: "Other",
  help: "Nitro's Dashboard",
  args: "",
}