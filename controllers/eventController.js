const Event=require('../models/event.js');
exports.add=(req,res)=>{
      console.log('req.body is',req.body);
      const name=req.body.name;
      const event=new Event({name:name});
      event.save((err,data)=>{
        if(err) res.status(400).send(err);
        console.log('данные записаны');
        res.send(data);
      });
};

exports.list=(req,res)=>{
      Event.find((err,events)=>{
        if(err) res.status(400).send(err);
        res.send(events);
  })
};
