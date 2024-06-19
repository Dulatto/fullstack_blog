import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'

mongoose
    .connect('mongodb+srv://dukaomarrich:013309do@cluster0.aenh8u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB error', err))


const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/auth/login', (req, res) => {
    console.log(req.body)

    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Vasia Pupkin'
    },
        'secret123');

    res.json({
        success: true,
        token
    })
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})