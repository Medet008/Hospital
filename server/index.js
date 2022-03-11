require('dotenv').config(); 
const express = require('express');
const models = require('./models/model');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandMiddleware');


const PORT = process.env.PORT || 5000; 
const app  = express(); 
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);
const start  = async () => {
    try{
       await sequelize.authenticate()
       await sequelize.sync()
        app.listen(PORT, () => console.log(`server zapushem na portu ${PORT}`));
    }catch (e){
        console.log(e); 
    }
}
start();