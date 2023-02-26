const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;
    // console.log(req.body)

    pool.query(sqlText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    })
})

module.exports = router;