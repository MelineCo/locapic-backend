var express = require('express');
var router = express.Router();
require('../models/connection');
const User = require('../models/users');

router.post('/places', (req, res) => {
    // User.updateOne(
    //     { nickname: req.body.nickname },
    //     {
    //         $push: {
    //             places:
    //             {
    //                 name: req.body.name,
    //                 latitude: req.body.latitude,
    //                 longitude: req.body.longitude
    //             }
    //         }
    //     }).then(() => {
    //         User.find().then(data => {
    //             console.log(data);
    //         });

    //         res.json({ result: true });
    //     });
    
    const newUser = new User({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
       });
       
       newUser.save().then(() => {
        User.find().then(data => {
          console.log(data);
          res.json({ result: true });
        });
       });

});

router.get('/places/:nickname', (req, res) => {
    User.find({ nickname: req.params.nickname }).then(user => {
        if (user === null) {
            res.json({ result: false, error: 'User not found' });
            return;
        }

        console.log(user)
        res.json({ result: true, places: user });
    });
});

router.delete('/places', (req, res) => {
    User.deleteOne({ nickname: req.body.nickname, name: req.body.name }).then(() => {
        User.find().then(data => {
            console.log(data);
          });

        res.json({ result: true });
    });
});

module.exports = router;
