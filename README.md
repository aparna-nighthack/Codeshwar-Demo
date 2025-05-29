
## Overview

This project is a simplified Instagram clone featuring a scrollable feed for posts (images/videos), user profiles, likes/comments functionality, and a clean UI inspired by Instagram's modern design. It includes sections for stories and a discovery tab.

## Project Structure

- **client/index.html**: Main HTML file with the structure and layout of the application.
- **client/styles/main.css**: Stylesheet for the application, implementing a clean and modern UI.
- **client/scripts/main.js**: JavaScript for handling dynamic behavior, fetching and displaying posts, stories, and the discovery tab.
- **server/app.js**: Express server handling requests and serving data.
- **server/routes/posts.js**: API endpoints for post-related operations, including fetching and updating likes/comments.
- **server/routes/users.js**: API endpoints for user-related operations, including fetching profiles and stories.
- **server/data/mockData.js**: Mock data simulating a database for users and posts.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Setup Instructions

### Cloning the Repository

```bash
git clone <repository_url>
cd <repository_directory>
```

### Installing Dependencies

- Navigate to the root directory of the project:
  ```bash
  cd server
  npm install
  ```

  This will install all server-side dependencies.

### Running the Server

- Start the server:
  ```bash
  node app.js
  ```

  The server will run at `http://localhost:3000`.

### Running the Client

- Simply open `client/index.html` in a browser. This client will interact with the running server to fetch and display data.

## Command Examples

Navigate to `server` folder and use the following command to start the server:

```bash
node app.js
```

## Additional Notes

- Ensure the server is running before opening the client file to see the dynamic data being fetched.
- The client setup requires no additional build process as it runs directly from the HTML file.
- Data is served from `server/data/mockData.js`, representing a mock database setup for the MVP phase.

Feel free to explore, and modify the project to suit your needs and extend functionality!