const app = require('./app');
require('dotenv').config({path: './config.env'});

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});