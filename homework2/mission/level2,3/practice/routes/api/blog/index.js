var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: 'blog success'
    }
    res
        .status(200)
        .send(result);
});
// post 접근

router.use('/post', require('./post'));
module.exports = router;