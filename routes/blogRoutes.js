const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

//route to het all blog and sort by new created
router.get('/', blogController.blog_index)

//route to get blog from user input and save to db
router.post('/', blogController.blog_post_user)

//route to create new log
router.get('/create',blogController.blog_create_get)

// to get specific id info or blog
router.get('/:id', blogController.blog_details)

//delete blog route
router.delete('/:id',blogController.blog_delete)

module.exports = router;