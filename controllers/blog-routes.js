const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')


router.post('/post', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        userId: req.session.userId,
      });
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Route to add a comment to a blog post
  router.post('/comment', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.session.userId,
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Route to update a blog post
  router.put('/post/:id', withAuth, async (req, res) => {
    try {
      const updatedPost = await Post.update(req.body, {
        where: {
          id: req.params.id,
          userId: req.session.userId, // ensure the post belongs to the logged-in user
        },
      });
      if (updatedPost > 0) {
        res.status(200).json(updatedPost);
      } else {
        res.status(404).json({ message: 'Post not found or user not authorized' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Route to delete a blog post
  router.delete('/post/:id', withAuth, async (req, res) => {
    try {
      const deletedPost = await Post.destroy({
        where: {
          id: req.params.id,
          userId: req.session.userId, // ensure the post belongs to the logged-in user
        },
      });
      if (deletedPost) {
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found or user not authorized' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'content', 'post_id', 'user_id', 'createdAt'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            order: [['createdAt', 'DESC']] // Optional: Orders posts by creation date
        });
        
        // Serialize data so the template can read it
        const posts = dbPostsData.map((post) => post.get({ plain: true }));
        
        // Pass serialized posts and session flag into template
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
    router.get('/login', (req, res) => {
        if (req.session.loggedIn) {
          res.redirect('/');
          return;
        }
      
        res.render('login');
      });



module.exports = router;