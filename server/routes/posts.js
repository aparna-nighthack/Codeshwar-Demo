
const express = require('express');
const router = express.Router();
const mockData = require('../data/mockData');

// Fetch all posts
router.get('/posts', (req, res) => {
  res.json(mockData.posts);
});

// Fetch a specific post by ID
router.get('/posts/:id', (req, res) => {
  const post = mockData.posts.find(p => p.id === req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Update likes on a post
router.post('/posts/:id/like', (req, res) => {
  const post = mockData.posts.find(p => p.id === req.params.id);
  if (post) {
    post.likes += 1;
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Update comments on a post
router.post('/posts/:id/comment', (req, res) => {
  const post = mockData.posts.find(p => p.id === req.params.id);
  if (post) {
    const { comment } = req.body;
    if (comment) {
      post.comments.push(comment);
      res.json(post);
    } else {
      res.status(400).json({ message: 'Comment text required' });
    }
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports = router;