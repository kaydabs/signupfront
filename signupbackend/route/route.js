const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')


router.post('/signup', (request,response) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email
    }) 
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router