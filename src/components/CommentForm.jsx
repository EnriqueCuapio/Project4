// CommentForm.jsx
import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      content: commentContent,
    };
    onAddComment(newComment); // Call the onAddComment function with the new comment
    setCommentContent(''); // Reset the comment content input
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
        cols={50}
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default CommentForm;
