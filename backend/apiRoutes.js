const router = require("express").Router();

router.get("/ping", (req, res)=>{
    res.send({pong: "true"});
})

module.exports = router;