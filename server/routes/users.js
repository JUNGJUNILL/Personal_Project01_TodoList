var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json([    {id: 1, username: "somebody"},
                {id: 2, username: "somebody_else"}]    
           ); 

});

module.exports = router;
