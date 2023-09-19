const port = 8000;
const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("./config/mongoose.config");
require('dotenv').config()
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true}));
app.use(cookieParser())


const customerRoutes = require("./routes/customer.routes");
const userRoutes = require("./routes/user.routes");

customerRoutes(app);
userRoutes(app);



app.listen(port, () => console.log(`🎉Party on port: ${port}`) );