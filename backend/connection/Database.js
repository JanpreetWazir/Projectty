const mongoose = require('mongoose');


const dbConnect = async () =>
{
    await mongoose.connect('mongodb://127.0.0.1:27017/sports').then(() =>
    {
        console.log("MongoDb connection established");
    }).catch((err) =>
    {
        console.log("Error connecting");
    });

}

module.exports = dbConnect;