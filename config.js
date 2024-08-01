const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9db5c28f3428c8dc7a85e.jpg=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "https://telegra.ph/file/a90b5478b5e56e67f0155.jpg" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769279076";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9db5c28f3428c8dc7a85e.jpg,https://telegra.ph/file/a90b5478b5e56e67f0155.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_20_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA5LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRqSzdVejM5VE5UUUlZSE5KZ1ZYekV4enVNd0NjZGJZcngyZVVrVHZvSFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRpNU1FRzdKU0JxYlBXakJsb0MyaGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTUxNzgwOGYtZjQyYy00NmM0LWJmMmQtMjQwYmVlNGYwZmQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDY2LFxuICAgICAgMTE4LFxuICAgICAgMTI2LFxuICAgICAgMTczLFxuICAgICAgMTk2LFxuICAgICAgMTM4LFxuICAgICAgMjAxLFxuICAgICAgMjIsXG4gICAgICAyNTAsXG4gICAgICAxOCxcbiAgICAgIDE0MCxcbiAgICAgIDI1NCxcbiAgICAgIDUxLFxuICAgICAgMTc4LFxuICAgICAgNDIsXG4gICAgICAyMjcsXG4gICAgICAyMTMsXG4gICAgICAxMTYsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAyOSxcbiAgICAgIDE1LFxuICAgICAgNDgsXG4gICAgICAxOTgsXG4gICAgICAxMTksXG4gICAgICA0MixcbiAgICAgIDEyOSxcbiAgICAgIDIwMSxcbiAgICAgIDE1OSxcbiAgICAgIDE5MixcbiAgICAgIDE5MSxcbiAgICAgIDUxLFxuICAgICAgODcsXG4gICAgICAyMDcsXG4gICAgICAyMjYsXG4gICAgICAxODgsXG4gICAgICAyNDYsXG4gICAgICAyMzMsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFk3VlQyOUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2OTI3OTA3Njo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjczMzE1MDA4NjM0OTA3Ojc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxT2tKQUJFT3I5cTdVR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWkhkZEJsTlhwTHo3ZUxBT3UrOXlTcDE4VHpMZkdHbjNiSjZQYlB0VW9qcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5Y0dTUmlpWGkzRTJrUGZ3dVBvcS9paWZNV29ZM0tpcnFNSUhDdjVyelFQQ2dYK1NOclgrVkNONDZFWmhxa3RvVURPSGMxa2dhekZaNW1zeUwxZCtEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiM3B3a1RDcXh5U203dGs5SEZiQUl3V0s2b1NFSHUxelFSSTdIZGZuTlNqdnRQWkUvcm91MnFYOEdhVXBtbVNCN3FYdFUvaEdoc2dIek9pQVVEVHlDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NjkyNzkwNzY6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0ODI0MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHWDFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdYMS5qc29uIjogIntcImtleURhdGFcIjpcImtRQXlsWnhqbDhrSHVLMm9yc2pQK1A5WWJ3VWs0RUJRanRrV2J4THdrMTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzAyMjUzOTQ2LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsOV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjk2MzkxMDU1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8
  caption : global.caption || "https://telegra.ph/file/9db5c28f3428c8dc7a85e.jpg" , // , //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DAVE-MD",
  ownername:process.env.OWNER_NAME|| "DAVE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
