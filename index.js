const express = require("express")
const mongoose = require("mongoose")
const Post = require("./Post")
const router = require("./router")

app = express()

app.use(express.json())

PORT = process.env.PORT || 3000 //env içinde port varsa al yoksa 3000 al

// app.get('/', (req,res) => {
//     console.log(req.query.test);

//     res.status(200).json("running")
// })

// app.post('/', async (req,res) => {

//     try {
//         // Destruting
//         const {author, title, content, picture} = req.body;
//         //  const author = req.body.author; yukarıdakinin aynısı
//         const post = await Post.create({author, title, content, picture})
//         res.json(post)

//     } catch (error) {
        
//     }

// })

app.use('/api',router)

const DB_URL = 'mongodb+srv://admin:1q2w3e@cluster0.j1wis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const stratApp = async () => {

    try {
       await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log("Server Running..."))
    } catch (error) {
        console.log(error);  
    }

}


stratApp()
