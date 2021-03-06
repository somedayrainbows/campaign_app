const passport = require('passport')

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
      // scope: google has a list of all the different items we can ask for access to
    })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}
