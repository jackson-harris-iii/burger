const express = require('express')
const burger = require('../models/burger.js')

const router = express.Router()

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject)
    })
})

router.post("/", (req, res) => {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
            req.body.name, req.body.devoured
        ], (result) => {
            res.json({ id: result.insertId });
        });
});

router.put("/", (req, res) => {
    let eaten = "id = " + req.params.id;

    console.log("eaten", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, eaten, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } 
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;