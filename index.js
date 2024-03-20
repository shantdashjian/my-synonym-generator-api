import express from 'express'
import cors from 'cors'

import { readAll, create, read, update } from './repository.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT | 3000

app.get('/api/synonym', (req, res) => {
    return res.status(200).json(readAll())
})


app.post('/api/synonym', (req, res) => {
    const synonym = req.body
    try {
        return res.status(201).json(create(synonym))
    } catch(error) {
        return res.status(422).json({error: error.message })
    }
})

app.get('/api/synonym/:text', (req, res) => {
    const { text } = req.params
    try {
        return res.status(200).json(read(text))
    } catch(error) {
        return res.status(404).json({error: error.message })
    }
})


app.put('/api/synonym/:text', (req, res) => {
    const { text } = req.params
    const synonym = req.body
    try {
        read(text)
        return res.status(200).json(update(text, synonym))
    } catch(error) {
        return res.status(201).json(create(synonym))
    }
})


app.listen(PORT, () => {
    console.log('Listening to port ' + PORT)
})