const eventController=require('../controllers/eventController');
const express=require('express');
const jsonParser=express.json();
const eventRouter=express.Router();
      
      eventRouter.post('/add',jsonParser,eventController.add);
      eventRouter.get('/list',eventController.list);
module.exports=eventRouter;
