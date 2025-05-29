
// Fetch all necessary data and initialize the application
document.addEventListener('DOMContentLoaded', function () {
    fetchPosts();
    fetchStories();
    setupNavigation();
});

function fetchPosts() {
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const feedContainer = document.querySelector('.feed');
            posts.forEach(post => {
                const postElement = createPostElement(post);
                feedContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

function fetchStories() {
    fetch('/api/stories')
        .then(response => response.json())
        .then(stories => {
            const storiesContainer = document.querySelector('.stories');
            stories.forEach(story => {
                const storyElement = createStoryElement(story);
                storiesContainer.appendChild(storyElement);
            });
        })
        .catch(error => console.error('Error fetching stories:', error));
}

function createPostElement(post) {
    const postTemplate = document.querySelector('.post[data-id="1"]');
    const postElement = postTemplate.cloneNode(true);
    postElement.hidden = false;
    postElement.setAttribute('data-id', post.id);

    postElement.querySelector('img').src = post.imageUrl;
    postElement.querySelector('.user-profile span').textContent = post.username;
  
    const likeButton = postElement.querySelector('.actions img[alt="Like Button"]');
    likeButton.addEventListener('click', () => toggleLike(post.id, likeButton));
  
    const commentButton = postElement.querySelector('.actions img[alt="Comment Button"]');
    commentButton.addEventListener('click', () => showComments(post.id));
  
    return postElement;
}

function createStoryElement(story) {
    const storyElement = document.createElement('div');
    storyElement.classList.add('story-circle');
    storyElement.style.backgroundImage = `url(${story.avatarUrl})`;
    storyElement.title = story.username;
  
    return storyElement;
}

function toggleLike(postId, likeButton) {
    fetch(`/api/posts/${postId}/like`, { method: 'POST' })
        .then(() => {
            likeButton.classList.toggle('liked');
        })
        .catch(error => console.error('Error liking post:', error));
}

function showComments(postId) {
    const postElement = document.querySelector(`.post[data-id="${postId}"]`);
    const commentSection = postElement.querySelector('.comment-section');
    commentSection.hidden = !commentSection.hidden;
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.textContent.toLowerCase();
            navigateToSection(section);
        });
    });
}

function navigateToSection(section) {
    // Placeholder for section navigation logic, e.g., Home, Stories, Discovery
    console.log(`Navigating to section: ${section}`);
}