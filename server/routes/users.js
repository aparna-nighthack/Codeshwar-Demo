
const express = require('express');
const router = express.Router();
const mockData = require('../data/mockData');

// Endpoint to fetch user profile
router.get('/profile/:userId', (req, res) => {
    const userId = req.params.userId;
    const userProfile = mockData.users.find(user => user.id === userId);

    if (userProfile) {
        res.json({
            avatar: userProfile.avatar,
            username: userProfile.username,
            bio: userProfile.bio
        });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Endpoint to fetch user stories
router.get('/stories/:userId', (req, res) => {
    const userId = req.params.userId;
    const userStories = mockData.stories.filter(story => story.userId === userId);

    if (userStories.length > 0) {
        res.json(userStories);
    } else {
        res.status(404).json({ error: 'No stories found for this user' });
    }
});

module.exports = router;