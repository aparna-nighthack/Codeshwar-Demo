
import React, { useState, useEffect } from 'react';
import './Feed.css';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Static data for demonstration, replace with a call to an actual API if needed
        const mockData = [
            {
                id: 1,
                username: 'user1',
                imageUrl: 'https://via.placeholder.com/600',
                caption: 'A beautiful day!',
                likes: 10,
                comments: 4
            },
            {
                id: 2,
                username: 'user2',
                imageUrl: 'https://via.placeholder.com/600',
                caption: 'Loving the weather.',
                likes: 25,
                comments: 8
            }
        ];
        setPosts(mockData);
    }, []);

    const handleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleComment = (postId) => {
        // Placeholder for comment functionality
        alert('Comment functionality to be implemented');
    };

    return (
        <div className="feed-container">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <div className="post-meta">
                        <span>{post.username}</span>
                    </div>
                    <img src={post.imageUrl} alt={post.caption} />
                    <div className="post-details">
                        <div className="post-caption">{post.caption}</div>
                        <div className="post-actions">
                            <button className="action-btn" onClick={() => handleLike(post.id)}>❤️ {post.likes}</button>
                            <button className="action-btn" onClick={() => handleComment(post.id)}>💬 {post.comments}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feed;