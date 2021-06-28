const express =require('express');
const router = express.Router();
//const Post = require('../models/something');
const bodyParser = require('body-parser');
const filesObj = require('fs')
const path = require('path')

router.use(bodyParser.json());


router.get('',(req, res, next) =>{
  let dirpath = '/Users/venkatasrinadhuni/Desktop/resultFiles'
  filesObj.readdir(dirpath, function(error, files){
    //files.filter
    var filesJson = [];

    if(filesObj.existsSync(dirpath))
    {
    files.forEach(element => {
    if(element.includes('.json'))
    {
    let filepath = path.join(dirpath,element);
    let rawdata = filesObj.readFileSync(filepath);
    console.log("filename "+element)
    let filecontent = JSON.parse(rawdata);
    filesJson.push({id:files.indexOf(element),name:element, timeStamp:filecontent.info.timestamp, totalPass:filecontent.info.totalPass, totalFail:filecontent.info.totalFail})
    }
  });
  res.status(200).json({filesJson})
    //console.log(filesJson);

    } else
    {
      res.status(200).json({message:'path not found'})
    }
  });
});

  router.get('/:filename',(req, res, next) =>{
    let dirpath = '/Users/venkatasrinadhuni/Desktop/resultFiles';
    filesObj.readdir(dirpath, function(error, files){
      //files.filter
      let filename = req.params['filename'];
      console.log(dirpath);
      let filepath = path.join(dirpath,filename);
      //console.log(filepath);
      //console.log(filename);
      if(filesObj.existsSync(filepath))
      {
      let rawdata = filesObj.readFileSync(filepath);
      let filecontent = JSON.parse(rawdata);
      //console.log(filecontent);
      const id = files.indexOf(filename)
      res.status(200).json({id:id,name:files[id],resultsArray:filecontent.results,collection: filecontent.apicalls.collection})
      } else
      {
        res.status(200).json({message:'File not found'})
      }
    });

    })

    module.exports =router;
    // Unexpected token  in JSON at position 0
