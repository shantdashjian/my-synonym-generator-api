import express from 'express'
import cors from 'cors'

import { readAll, create } from './repository.js'

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

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT)
})