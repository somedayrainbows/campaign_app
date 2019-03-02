const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const kays = require('./config/keys')
const app = express()

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret
}))

app.get('/', (req, res) => {
  res.send({ key: 'value' })
})



const PORT = process.env.PORT || 5000
app.listen(PORT)
