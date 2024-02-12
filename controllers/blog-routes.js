const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => {
    const dbPostsData = await Post.findAll({
        include: [
          {
            model: Comment,
            attributes: ['content', 'createdAt'],
          },
        ],
      });
    res.render('dashboard', {
        
    });
});

module.exports = router;