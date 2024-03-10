
const express = require("express")
const app = express();
const url = require("url");
var cors = require('cors')


app.use(cors());

app.listen(4000, () => {
    console.log("ok");
})

app.get("/", (res, req) => {
    let q = url.parse(res.url, true)
    let search = q.search;
    let data = q.query;
    // console.log(search);
    console.log(data.id);

    // console.log(getAccessToken("user1"));
    // console.log(res.);
    return req.json(getAccessToken(data.id));
})

function getAccessToken(idUser) {
    const apiKeySid = 'SK.0.QzbQyQiyFdV7tC18LBvbiw0twB7y7v';
    const apiKeySecret = 'RGRMM0piRDVMaEhFVFh5UVRlWG5hejZTYjBBOGZs';

    var now = Math.floor(Date.now() / 1000);
    var exp = now + 3600;

    var header = { cty: "stringee-api;v=1" };
    var payload = {
        jti: apiKeySid + "-" + now,
        iss: apiKeySid,
        exp: exp,
        userId: idUser
    };

    var jwt = require('jsonwebtoken')

    var token = jwt.sign(payload,
        apiKeySecret,
        { algorithm: 'HS256' })


    console.log("token " + idUser + " : " + token);
    // console.log("token1: " + token1);

    return token;
}

