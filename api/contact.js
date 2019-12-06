import express from 'express'
const postmark = require('postmark')
const cors = require('cors')
const app = express()

// Process .env on server
require('dotenv').config()

app.use(express.json())
app.use(cors())

// POST request
app.post('/', (req, res) => {
  const token = process.env.POSTMARK_TOKEN
  const client = new postmark.ServerClient(token)

  // Parse body
  const user = req.body

  // Send client mail
  client.sendEmail({
    From: user.from,
    To: user.to,
    Subject: user.subject,
    TextBody: user.text,
    HtmlBody: user.html
  })

  res.end()
  console.log('New mail sent!')
})

// Export serverMiddleware path and handler
export default {
  path: '/api/contact',
  handler: app
}
