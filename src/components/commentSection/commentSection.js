import React from "react";

const CommentSection = ({ comments }) => {
  return (
    <div className="comment-section">
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            <h3>{comment.title}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
