console.log("starting app");

const fs = require('fs')
const os = require('os')
fs.appendFile('greeting.txt','Hello '+os.userInfo().username +'. good morning '+(new Date) , function(err){
  if(err){
    console.log("unable to append to file.")
  }
})

console.log("ending app")
