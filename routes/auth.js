const express = require('express')
const passport = require('passport')
const router = express.Router()

//desc Auth Google
//@route GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//desc Google auth call back
//@route GEt /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

//desc Logout
//@route /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})
module.exports = router