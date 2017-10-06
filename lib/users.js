var express = require('express');
var router = express.Router();

router.get('/users', function (req, res, next) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(
        [
            {
                'user': 'Janusz'
            }
        ]
    ));
});

module.exports = router;