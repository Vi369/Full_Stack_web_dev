// operatin system name and its release version get it 

const os = require('os');

const opName = os.type();

const osReleaseDate = os.release()

console.log("Operating System Name: ", opName)
console.log("Operating System Release: ", osReleaseDate)