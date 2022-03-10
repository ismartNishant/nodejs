const Blog = require('../models/blog');

const blog_index = async (req, res) =>{
    try {
        const blog = await Blog.find().sort({ createdAt: -1 });
        res.render('blogs/index', { title: "All Blogs", blogs: blog })
    }
    catch (error) {
        console.log(error);
    }
}

const blog_details = (req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => {
            res.status(404).render('404', {title: 'Not found' })
        })
}

const blog_create_get = (req,res) =>{
    res.render('blogs/create', { title: 'Create New Blog' });
}

const blog_post_user = (req,res) =>{
    const blog = new Blog(req.body);
    try {
        blog.save()
        res.redirect('/blogs')
    }
    catch (error) {
        console.log(error);
    }
}

const blog_delete = (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({ redirect : '/blogs'})
    })
    .catch( err => console.log(err))
}

module.exports ={
    blog_index,
    blog_details,
    blog_create_get,
    blog_delete,
    blog_post_user
}