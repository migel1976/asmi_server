const Event=require('../models/event.js');
exports.add=(req,res)=>{
      console.log('add method req.body is',req.body);
      const name=req.body.name;
      const desc=req.body.desc;
      const event=new Event({name,desc});
      event.save((err,data)=>{
        if(err) res.status(400).send(err);
        console.log('данные записаны');
        res.send(data);
      });
};

exports.edit=(req,res)=>{
      if(!req.body) return res.sendStatus(400);
      console.log('edit method req.body is', req.body);
      const id=req.body.id; 
      console.log('id is ',id);
      const name=req.body.name;
      console.log('name is ',name);
	  const desc=req.body.desc;
      console.log('desc is ',desc);
      const newEvent={name:name,desc:desc};
      Event.findOneAndUpdate({_id:id},newEvent,{new:true},(err,event)=>{
        if(err) return res.status(400).send(err);
        res.send(event);
      });
};

exports.delete=(req,res)=>{
      console.log(req.data);
      if(!req.body) return res.sendStatus(400);
      console.log('delete method req.body is', req.body);
      const id=req.body.id;
      console.log('id is ',id);
      Event.findByIdAndDelete(id,(err,event)=>{
        if(err) return res.status(400).send(err);
        res.send(event);
      })
};

exports.list=(req,res)=>{
      Event.find((err,events)=>{
        if(err) return res.status(400).send(err);
        res.send(events);
  })
};

exports.id=(req,res)=>{
		// if(!req.body) return res.sendStatus(400);
		// console.log('get event method, req.body',req.params);
		console.log('get event method, req.query',req.query);
		// const id=req.body.id;
		const id=req.query.id;
		Event.findOne({_id:id},(err,event)=>{
			if(err) return res.status(400).send(err);
			console.log('event is:', event);
			res.send(event)
		})
};
