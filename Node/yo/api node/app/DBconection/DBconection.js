const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config();
console.log("URL MONGO",process.env.MONGO_ROUTE)

mongoose.connect(process.env.MONGO_ROUTE,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(console.log('-----------------------------------------------------------------> db connected'))
    .catch(err => console.log(err));

module.exports = mongoose;