const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
router.post("/signinuser", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        bcrypt.compare(password, result.toJSON().password, (err, result_2) => {
            if (err) {
                res.send(200);
            }
            if (result_2) {
                
                const type = result.toJSON().type;
                const payload = {
                    userId: result.toJSON().userId,
                    password: result.toJSON().password,
                    time: new Date()

                };
                const secretKey = 'Avishka';
                const token = jwt.sign(payload, secretKey, { expiresIn: '10h' });
                const response = { type, token };
                res.send(response);
            } else {
                res.send(200);
            }
        });

    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });
})
router.post("/registeruser", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nic = req.body.age;
    const userRole = req.body.userRole;
    const contactNo = req.body.contactNo;
    // const profilePicture=req.body.profilePicture;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.send("unsuccessful");
        } else {
            User.create({ 
                email: email,
                 password: hash ,
                firstName:firstName,
                lastName:lastName,
                nic:nic,
                userRole:userRole,
                contactNo:contactNo});
                   
            res.send("successful");
          
                
}
       
       
    }
);
});
module.exports = router;
