const eventController=require('../controllers/eventController');
const express=require('express');
const jsonParser=express.json();
const eventRouter=express.Router();
      
      eventRouter.post('/add',jsonParser,eventController.add);
      eventRouter.put('/edit',jsonParser,eventController.edit);
      eventRouter.delete('/delete',jsonParser,eventController.delete);
      eventRouter.get('/list',eventController.list);
	  // eventRouter.get('/id',jsonParser,eventController.id);
	  eventRouter.get('/',eventController.id);
module.exports=eventRouter;
