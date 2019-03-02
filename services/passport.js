const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken)
      console.log("refreshToken", refreshToken)
      console.log("profile", profile)
      console.log("first name", profile.name.givenName)
      console.log("last name", profile.name.familyName)
      console.log("email", profile.emails[0].value)
      console.log("done", done)
    }
  )
)
