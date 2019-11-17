const express = require("express");
const app = express();

const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
app.set('port',process.env.PORT);
console.log(`app corriendo por el puerto ${process.env.PORT}`);

app.use(bodyParser.json());
const router = require("./routes/Router");
app.use('/', router);
app.listen(app.get('port'));

module.exports = app;