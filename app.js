const express = require('express')
const bcrypt = require('bcrypt')

const app = express()


const users = [

]

app.use(express.json())

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  // Create user
  const user = users.find(user => user.username === req.body.username)
  if (user != null)
    return res.status(409).send('User already exists')
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = {
      username: req.body.username,
      password: hashedPassword
    }
    users.push(user)
    res.status(201).send()
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  // Find user
  const user = users.find(user => user.username === req.body.username)
  if (user == null) {
    return res.status(400).send('User not found')
  }
  try {
    console.log(user.password)
    if (await bcrypt.compare(req.body.password, user.password))
      res.status(200).send('Login success')
    else
      res.status(401).send('Login failed')
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
})

app.listen(3000, () => console.log('App started on port 3000'))
