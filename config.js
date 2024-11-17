const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780642585";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_00_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJcUdkdUtwdG1sVHJUSjR1RzRudHNwNWdCV0FheW5RdW1hSHNxNzhUQzdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MDY0MjU4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM1QzgyNjgxMDcyOTZBRjYzNjVCQzE5QTczNjFGMkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxODM3NjMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZFUXFrVy11UkxlR2psRnhEYklJbHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjUyMTgwNmMtYjNhOC00ZDZkLWJhYTUtMmZlMjExZTYwMTllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDIyLFxuICAgICAgNDAsXG4gICAgICA5NixcbiAgICAgIDE3NSxcbiAgICAgIDIsXG4gICAgICAxNTYsXG4gICAgICA4OCxcbiAgICAgIDE2NyxcbiAgICAgIDEyNixcbiAgICAgIDI0MyxcbiAgICAgIDE1NCxcbiAgICAgIDE5LFxuICAgICAgMjM2LFxuICAgICAgMzYsXG4gICAgICA0MSxcbiAgICAgIDEwMCxcbiAgICAgIDI1LFxuICAgICAgMTkzLFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgNjQsXG4gICAgICAzOCxcbiAgICAgIDIyNyxcbiAgICAgIDEwOCxcbiAgICAgIDk4LFxuICAgICAgMzAsXG4gICAgICA5NSxcbiAgICAgIDExNixcbiAgICAgIDE0MSxcbiAgICAgIDI0MCxcbiAgICAgIDMyLFxuICAgICAgMTQ2LFxuICAgICAgMTI5LFxuICAgICAgMTE2LFxuICAgICAgMjA3LFxuICAgICAgMTU2LFxuICAgICAgMjQ2LFxuICAgICAgMTg2LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQk5MUEdNVlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MDY0MjU4NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjgzNzY3ODI2MjI4NTI6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJULWthZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEOXhNb0VFTGY5NXJrR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWkNXMk9iUFc1SC9TaFRKU2RTVzJSRzJpQ3hKSGtvTWc1U2VWZWFaUmRoWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSVnQ0RTRPdTd3SmJIeUdPU0dVS3RCZkV6NjFhcHdBWndTZFZGRk8wdHVoMGZ5T0dhUkpOSG5BcFJPZDVnOXBKS0VZc2ZIaldJUzVNd1JYcVY5cm1BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyaVA2aGhXTEphYUQyZ0tVQlZIeU5vRlFJclVzb2ZSbGtiTWxmVytnN1JVcGVuc2xzeElrNUEzOUtFRS9mQ2V4WXRCQ1dSRXk0MTFLVE1xTWJ1YU1nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODA2NDI1ODU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODM3NjI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHZEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEdkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXRENpWUJyRW9pM2p4SklHcXFJWVBWc2lsaHpJMGlaK1pIRmN4STVPQnk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzAwNjEyOTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
