import React, { useState } from 'react';
import UserInfo from './UserInfo';
import CommentSection from './CommentSection';

const Post = ({ post, comment }) => {
  const [displayComments, setDisplayComments] = useState(true);

  return (
    <>
      <article id='post'>
        <h1>{post.headline}</h1>
        <i>{post.date.toLocaleString()}</i>
        <p>{post.content}</p>
      </article>

      <UserInfo author={post.author} />

      <button
        onClick={() => {
          setDisplayComments(!displayComments);
        }}>
        Show/Hide comments
      </button>

      {/* {displayComments ? <CommentSection comment={comment} /> : false} */}
      {displayComments && <CommentSection comment={comment} />}
    </>
  );
};

export default Post;
