const express = require('express');
const router = express.Router();
const Blog = require('../models/blog')

//route to het all blog and sort by new created
router.get('/', async (req, res) => {
    try {
        const blog = await Blog.find().sort({ createdAt: -1 });
        res.render('index', { title: "All Blogs", blogs: blog })
    }
    catch (error) {
        console.log(error);
    }
})

//route to get blog from user input and save to db
router.post('/', (req, res) => {
    const blog = new Blog(req.body);
    try {
        blog.save()
        res.redirect('/blogs')
    }
    catch (error) {
        console.log(error);
    }
})

//route to create new log
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create New Blog' });
})


// to get specific id info or blog
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => {
            console.log(err);
        })
})

//delete blog route
router.delete('/:id',( req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({ redirect : '/blogs'})
    })
    .catch( err => console.log(err))
})



module.exports = router;