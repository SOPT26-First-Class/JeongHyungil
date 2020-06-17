var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: 'singup success'
    }
    res.status(200).send(result);
});
// 객체 모듈로 반환
module.exports = router;