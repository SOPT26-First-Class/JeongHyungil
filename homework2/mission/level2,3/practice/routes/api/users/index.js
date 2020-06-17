var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: 'users success'
    }
    res
        .status(200)
        .send(result);
});

// loing, signup 파일 접근
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;