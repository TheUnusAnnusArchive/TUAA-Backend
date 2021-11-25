import express, { Application } from 'express'
import fs from 'fs'
import User from '../../../../../ts/types/user'

export default function getVideoProgress(app:Application) {
  app.use('/v2/acount/videoprogress', express.json())

  app.post('/v2/account/videoprogress', (req, res) => {
    const { uid, loginKey, uaid } = req.body
    const users = fs.readdirSync('src/db/users')

    var loginIsValid = false

    for (let i = 0; i < users.length; i++) {
      const user:User = JSON.parse(fs.readFileSync(`src/db/users/${users[i]}`, 'utf-8'))
      if (user.id === uid && user.loginKeys.includes(loginKey)) {
        loginIsValid = true
        break
      }
    }

    if (loginIsValid) {
      try {
        const videoProgress = JSON.parse(fs.readFileSync(`src/db/uservideoprogress/${uid}/${uaid}.json`, 'utf-8'))
        res.send(videoProgress)
      } catch {
        res.send({uaid,progress:0})
      }
    } else {
      res.status(401).send({error:{code:401,message:'Unauthorized'}})
    }
  })
}
