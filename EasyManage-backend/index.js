const express=require('express')
const app=express();
const db=require('./config/dbconfig')
const cors=require('cors')
const bodyParser=require('body-parser')
const {log}= require('./config/helper')
const {login}=require('./controllers/login')
const {register}=require('./controllers/register')




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

log(` /** Console logs are enabled and If needs to disable \n please add varible as  NODE_ENV='production' in env **/ \n`);

app.get('/',(req,res)=>{
res.send('App is working')
});


app.post('/api/register',register);
app.post('/api/login',login);

const server=process.env.HOST;
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Running on http://${server}:${PORT}`)
})