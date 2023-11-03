const express=require('express');
const config=require('config')
const mongoose=require('mongoose')
const app=express();
const cors=require('cors')

app.use(cors(
    {origin:"*",
    methods:["GET","POST"]
}
))
app.use(express.json({ extended: true }))
//Middlewares
app.use('/api/auth',require('./routes/auth.routes'))

const PORT=config.get('port')||5000
const db_URI=config.get('mongoURI')
async function start(){
    try {
       await mongoose.connect(db_URI)
       app.listen(PORT,()=>{console.log(`Server has been started at port :${PORT}`)})
        
    } catch (error) {
        console.log("Server error",error.message);
        process.exit(1)
    }
}

start()



