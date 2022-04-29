const {Router} = require("express")
const PostController = require("./PostController")

const router = Router()

// router.post('/', async (req,res) => {

//     try {
//         // Destruting
//         const {author, title, content, picture} = req.body;
//         //  const author = req.body.author; yukarıdakinin aynısı
//         const post = await Post.create({author, title, content, picture})
//         res.json(post)

//     } catch (error) {
        
//     }

// })

const postController = new PostController()

router.post('/posts', postController.create)


module.exports = router