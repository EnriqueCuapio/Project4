// Post.jsx
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      {comments.map((comment) => (
        <Comment key={comment.id} content={comment.content} />
      ))}
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
}

export default Post;
