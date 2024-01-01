const mongoose = require('mongoose');


const connectToDb = async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(conn)
        console.log(`connected to Db:${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectToDb;