import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onAddPost={handleAddPost} />
      <Feed posts={posts} />
      <Post content="Sample post content" />
    </div>
  );
}

export default App;

