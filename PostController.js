const Post = require("./Post")

class PostService {

    async create(post){

        const createdPost = await Post.create(post)
        return createdPost;

    }

    async getAll(){


    }

    async getOne(){


    }

    async update(){


    }

    async delete(){


    }

}

module.exports = PostService