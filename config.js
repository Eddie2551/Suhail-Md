Niconst fs = require('fs-extra')
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_26_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0WUpnbUd4bXlydFhTc0xIbXJBTWYwZ0dmQkZ1RGJlRDhMcGdFMWptZ2RBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItNEtHYWdfMlNiZURSel9XcWxWVmdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRlMzdkOTViLThiNjMtNDZiNS1hN2ZlLTdhYWU2OGM2OGEyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxNDQsXG4gICAgICAxNzEsXG4gICAgICAxNjMsXG4gICAgICA5MCxcbiAgICAgIDYyLFxuICAgICAgMTI5LFxuICAgICAgMTU3LFxuICAgICAgNzMsXG4gICAgICAxOTksXG4gICAgICAyMixcbiAgICAgIDcyLFxuICAgICAgOTAsXG4gICAgICAxMjQsXG4gICAgICAyMTMsXG4gICAgICAxOTksXG4gICAgICAxNzUsXG4gICAgICA1MSxcbiAgICAgIDcyLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDIzMyxcbiAgICAgIDcwLFxuICAgICAgMjE0LFxuICAgICAgMjA1LFxuICAgICAgMTU1LFxuICAgICAgNDgsXG4gICAgICAyMDYsXG4gICAgICAxNjMsXG4gICAgICAyMjYsXG4gICAgICA2OCxcbiAgICAgIDEwNCxcbiAgICAgIDI1NSxcbiAgICAgIDE4MixcbiAgICAgIDE2MCxcbiAgICAgIDE0MSxcbiAgICAgIDUxLFxuICAgICAgMTgyLFxuICAgICAgODQsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzlWSFRESEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNzcwNzE0MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk2MjQzMDM4MDA0NjA6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4piG8J+Sv+KAosyD4oOd4oOq8J+SpfCfjYdEYXZpYW7wn5KeXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9CbGVRRkVKcVE2YkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjUnV5MVJsWE9tMFdtaHV2NzNVL3NDMGVsVGE0YmtkYVpXVERxWUF0NURnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtKb0ZyQy9xc3VkbFMvcWtLL2g0bVhhdDlwUms3NU1qb3RYc25yNFJPR2FHZkZsL3JoOUR4WDRycGhCZWd0SDJBOWVQZjZHV0MvRndaL3I4MFBUWUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1OOXZiSDRUbFRBdWxRbHl2TXAwYlFnQTFlNU91WmdneXcyWlRsQWpwenl0VjQvT2wwYWpqNGlUUEEvTE02a2Q2UEZpRVY3aW12OWF4d2E0RUQwcWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNzcwNzE0MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUwOTU1ODJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
