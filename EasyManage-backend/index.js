const express=require('express')
const app=express();
const db=require('./config/dbconfig')
const Users=require('./models/Users')
const cors=require('cors')
const bodyParser=require('body-parser')
const {log}= require('./config/helper')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

log(` /** Console logs are enabled and If needs to disable \n please add varible as  NODE_ENV='production' in env **/ \n`);

app.get('/',(req,res)=>{
res.send('App is working')
});


app.post('/api/register',async(req,res)=>{
const user=new Users(req.body);
const data=await user.save();
console.log(data);
res.send(data);
})


const server=process.env.HOST;
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Running on http://${server}:${PORT}`)
})