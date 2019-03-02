const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const kays = require('./config/keys')
const app = express()

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    accessToken => {
      console.log(accessToken)
    }
  )
)

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
    // scope: google has a list of all the different items we can ask for access to
  })
)

const PORT = process.env.PORT || 5000
app.listen(PORT)
