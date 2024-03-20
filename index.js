import express from 'express'
import cors from 'cors'

import { readAll } from './repository.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT | 3000

app.get('/api/synonym', (req, res) => {
    return res.status(200).json(readAll())
})

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT)
})