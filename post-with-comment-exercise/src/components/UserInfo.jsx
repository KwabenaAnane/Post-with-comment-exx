import React from 'react';

//props is author, then in the post.jsx= <UserInfo author={post.author} />
const UserInfo = ({ author }) => {
  return (
    <>
      <div className='author-info'>
        <h2>{author.fullname}</h2>
        <img
          src={author.image}
          alt={`${author.fullname}'s profile picture`}
          height='50'
        />
      </div>
    </>
  );
};

export default UserInfo;
