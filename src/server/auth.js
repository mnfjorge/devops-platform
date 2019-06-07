import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'
import session from 'express-session'
import * as redis from 'connect-redis'

const RedisStore = redis(session)
const sessionStore = new RedisStore({ url: process.env.REDIS_URL })

export default app => {
  app.use(session({ store: sessionStore, secret: 'ok ok ok', resave: false, saveUninitialized: true }))
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
    scope: ['profile', 'email']
  }, (accessToken, refreshToken, profile, done) => {
    done(null, {
      id: profile.id,
      name: profile.displayName,
      email: profile._json.email
    })
  }))

  app.get('/auth/google', passport.authenticate('google'))
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/')
  })
}