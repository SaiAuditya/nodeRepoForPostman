const express =require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
router.get('',(req, res, next) =>{
  res.status(200).json({message:'something is returing back'})
  });

  router.delete('/:id', (req, res, next) =>{
    res.status(200).json({message:'something is returing back'})
  });

  router.put('/:id', (req, res, next) =>{
    res.status(200).json({message:'something is returing back'})
  });

  router.get('/:id', (req, res, next)=>{
    res.status(200).json({message:id})
});

module.exports =router;
