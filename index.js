const Discord = require("discord-rpc")
const settings = require("./settings.json")

const startTimestamp = new Date()

const ID = settings.ID
const LI = settings.LargeImage
const LT = settings.LargeText
const SI = settings.SmallImage
const ST = settings.SmallText
const time = settings.Time
const dtls = settings.Details
const ste = settings.State 

console.log(`ID: ${ID}`)
console.log(`Details: ${dtls}`)
console.log(`State: ${ste}`)
console.log(`Large Text: ${LT}`)
console.log(`Large Image: ${LI}`)
console.log(`Small Text: ${ST}`)
console.log(`Small Image: ${SI}`)
console.log(`Time: ${time}`)

Discord.register(ID)

const rpc = new Discord.Client({transport: "ipc"});

rpc.on("ready", () => {
    if(time === true){
    rpc.setActivity({
        details: dtls,
        state: ste,
        startTimestamp,
        largeImageKey: LI,
        smallImageKey: SI,
        largeImageText: LT,
        smallImageText: ST,
        instance: false
    })
} else {
    rpc.setActivity({
        details: dtls,
        state: ste,
        largeImageKey: LI,
        smallImageKey: SI,
        largeImageText: LT,
        smallImageText: ST,
        instance: false
    })
}
})

rpc.login(ID).catch(console.error)