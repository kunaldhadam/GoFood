const express = require('express')
const router = express.Router()
const Orders = require('../models/Orders')

router.post("/orderData", async (req, res) => {
    
    let data = req.body.order_data
    await data.splice(0,0,{Order_date: req.body.order_date})
    let eId = await Orders.findOne({ 'email': req.body.email })
    if (eId === null) {
        try {
            await Orders.create({
                email: req.body.email,
                order_data: [data]
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error.message)
            res.send(500, error.message)
        }
    }
    else {
        try {
            await Orders.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            res.send(500, error.message)
        }
    }
})

router.post('/myorderData', async (req,res)=>{
    try {
        let myData = await Orders.findOne({"email": req.body.email})
        res.json({orderData: myData})
    } catch (error) {
        res.send(500, error.message)
    }
})

module.exports = router;