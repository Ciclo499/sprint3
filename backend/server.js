import express from 'express';
import cors from 'cors'
import {router} from './routes/route.js'



const app = express()
app.use(cors())
app.use(express.static('../frontend/build'))
app.use(express.json())
app.use(router)

app.use(function(req,res){
    res.redirect('/')
})

app.listen('5000', function() {
console.log("Servidor Iniciado")

})



