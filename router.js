const router = (require('express')).Router();
const jwt = require('jsonwebtoken')
let users = {}

router.post('/enter',(req,res)=>{
    console.log(req.body)
    if(!(req.body.email in users))
    {
       
    }
})


module.exports = router