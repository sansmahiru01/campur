const fs = require('fs')
const chalk = require('chalk')

global.owner = "6283181666350"
global.ownernumber = "6283181666350"
global.ownernomer = "6283181666350"
global.botname = "BotKontol`"
global.namabot = "BotKontol"
global.ownername = "Reyz Hayanasi"
global.namaCreator = "Reyz Hayanasi"
global.autoJoin = false //
global.antilink = false //
global.versisc = 'V9 Private'
global.namasc = 'V9 BY Reyz Hayanasi'
global.wagc = "https://chat.whatsapp.com/ERJYROUy4roJXCxZ6zJrHB"
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.merchant = 'M220510ACSX4641HS'
global.apitokendo = '-'
global.apilinode = '-'
global.secret = '-'
global.domain = '' // Isi Domain Lu
global.apikeyy = '' // Isi Apikeyy Plta Lu
global.capikeyy = '' // Isi Apikeyy Pltc Lu
global.signature = '-'
//MAU PEDIA
global.api_key = "-"//@zallDev
global.api_id = "-"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Kontol"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})