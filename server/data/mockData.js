
const mockData = {
  users: [
    {
      id: '1',
      username: 'john_doe',
      avatar: 'https://example.com/avatars/john_doe.png',
      bio: 'Love traveling and photography',
    },
    {
      id: '2',
      username: 'jane_smith',
      avatar: 'https://example.com/avatars/jane_smith.png',
      bio: 'Foodie and nature lover',
    },
    {
      id: '3',
      username: 'alice_wong',
      avatar: 'https://example.com/avatars/alice_wong.png',
      bio: 'Tech enthusiast',
    },
  ],
  posts: [
    {
      id: '101',
      userId: '1',
      imageUrl: 'https://example.com/posts/post1.jpg',
      videoUrl: '',
      likes: 34,
      comments: ['Looks amazing!', 'Awesome shot!'],
    },
    {
      id: '102',
      userId: '2',
      imageUrl: '',
      videoUrl: 'https://example.com/videos/video1.mp4',
      likes: 56,
      comments: ['Great video!', 'Loved the transition.'],
    },
    {
      id: '103',
      userId: '3',
      imageUrl: 'https://example.com/posts/post2.jpg',
      videoUrl: '',
      likes: 45,
      comments: ['Beautiful!', 'So peaceful!'],
    },
  ],
  stories: [
    {
      userId: '1',
      imageUrl: 'https://example.com/stories/story1.jpg',
      timestamp: '2023-10-01T12:00:00',
    },
    {
      userId: '2',
      imageUrl: 'https://example.com/stories/story2.jpg',
      timestamp: '2023-10-01T15:00:00',
    },
    {
      userId: '3',
      imageUrl: 'https://example.com/stories/story3.jpg',
      timestamp: '2023-10-01T18:00:00',
    },
  ],
};

module.exports = mockData;