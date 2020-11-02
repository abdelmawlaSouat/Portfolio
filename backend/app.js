/*
 * app.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/10/15 22:13:02
 *
 * Copyright (c) 2020 Shuriken
 */

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:8080',
  methods: 'GET'
}))
app.get('/api/download/cv', (req, res) => {
  const file = 'CV - Souat Abdelmawla.pdf'
  res.download(`${__dirname}/assets/${file}`)
})

const PORT = process.env.PORT || 3000
app.listen(
  PORT,
  console.log(`Server starting in port ${PORT}`)
)
