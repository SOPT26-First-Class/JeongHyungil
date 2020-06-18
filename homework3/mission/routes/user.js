var express = require('express');
var router = express.Router();
const User = require('../models/user');
let util = require('../modules/util');
// let statusCode = require('../modules/statusCode'); let resMessage =
// require('../modules/responseMessage');

/*
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/

// 1 단계
router.post('/signup', async (req, res) => {
    const {id, name, password, email} = req.body;
    User.push({id, name, password, email});
    res
        .status(200)
        .send(User);
});

// 2 단계
router.post('/signup', async (req, res) => {
    const {id, name, password, email} = req.body;
    // request data 확인 - 없다면 Bad Request 반환
    if (!id || !name || !password || !email) {
        return res
            .status(400)
            .send({message: 'BAD REQUEST'});
    }
    //already ID
    if (User.filter(user => user.id == id).length > 0) {
        return res
            .status(400)
            .send({message: 'ALREADY ID'});
    }
    User.push({id, name, password, email});
    res
        .status(200)
        .send(util.success(200, '회원가입 성공', {userId: id}));
});

/*
    ✔️ sign in
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, password
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/
router.post('/signin', async (req, res) => {
    // request body 에서 데이터 가져오기 request data 확인 - 없다면 Null Value 반환 존재하는 아이디인지 확인 -
    // 없다면 No user 반환 비밀번호 확인 - 없다면 Miss match password 반환 성공 - login success와 함께
    // user Id 반환
});

module.exports = router;
