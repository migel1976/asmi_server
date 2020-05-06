const express=require('express');
const mongoose=require('mongoose');
const homeRouter=require('./routes/homeRouter');
const eventRouter=require('./routes/eventRouter');
const app=express();
const PORT=process.env.PORT || 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/',homeRouter);
app.use('/event',eventRouter);
app.use((req,res)=>res.status(404).send('а вот такой страницы нету на сервере'));


mongoose.connect('mongodb://localhost/asmi',((err)=>{
                 if(err) console.log('Не могу подключиться к БД');
                 app.listen(PORT,()=>console.log(`Сервер запущен на порту ${PORT}`));
                }));

