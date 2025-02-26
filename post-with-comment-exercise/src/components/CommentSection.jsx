import React from 'react';
import { useState } from 'react';

import UserInfo from './UserInfo';

const CommentSection = ({ comment }) => {
  const [displayComments, setDisplayComments] = useState(true);

  return (
    <>
      {/* <button
        onClick={() => {
          setDisplayComments(!displayComments);
        }}>
        {displayComments ? 'Hide Comment' : 'Show Comment'}
      </button> */}

      <div id='comment-section'>
        {/* style={{ display: displayComments ? 'block' : 'none' }}> */}
        <h3>Comment Section</h3>

        <div className='comment'>
          <div>
            <p>{comment.content}</p>
            <p>{comment.date.toLocaleString()}</p>
          </div>

          <UserInfo author={comment.author} />
        </div>
      </div>
    </>
  );
};

export default CommentSection;
