import React, { useState } from 'react';
import "./CommentBox.css"


function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  return (
    <div>
      {/* <h1>Comment Box</h1> */}
      <p>
      <form onSubmit={handleSubmit}>
      <h3>Leave your comments: </h3>
        <label>
                   <textarea rows="10" cols="50" value={newComment} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </p>
      {/* <h2>Comments</h2> */}
      <ul>
        <p>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
          
        ))}</p>
      </ul>
    </div>
  );
}

export default CommentBox;
