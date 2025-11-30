import express from 'express' 
import 'dotenv/config'
import cors from 'cors'
import Razorpay from 'razorpay'
import payments from './routes/productRoutes.js'

const app = express();

//Middlewares for the accessing the routes :
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1', payments)

app.get('/',(req, res) => {
    res.send('This is home page')
})

const port = process.env.PORT || 3000

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
