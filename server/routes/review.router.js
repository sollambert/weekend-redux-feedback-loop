const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "feedback"`
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((err) => {
        console.error(err);
    })
})

router.post('/', (req, res) => {
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;
    const review = req.body;
    review.feeling = Number(review.feeling);
    review.understanding = Number(review.understanding);
    review.support = Number(review.support);
    (review.feeling > 5 || review.understanding > 5 || review.support > 5
        || review.feeling < 1 || review.understanding < 1 || review.support < 1
        || isNaN(review.feeling) || isNaN(review.understanding) || isNaN(review.support) )
    ? res.sendStatus(400) :
    pool.query(sqlText,
        [review.feeling,
            review.understanding,
            review.support,
            review.comments])
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    })
})

module.exports = router;