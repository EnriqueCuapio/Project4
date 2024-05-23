// CreatePostForm.jsx
import React, { useState } from 'react';

function CreatePostForm({ onAddPost }) {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      content: postContent,
    };
    onAddPost(newPost);
    setPostContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        cols={50}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePostForm;

