//Route management

const express = require('express')

const router = express.Router()

var burger = require('../models/burger.js')



router.get('/', (req,res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    })
})

router.post("/", (req, res) => {
   
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
            req.body.burger_name, req.body.devoured
        ], (result) => {
            res.json({ id: result.insertId });
        });
});

router.put("/:id", (req, res) => {
    
    var eaten = "id = " + req.params.id;

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