import React, { useState } from 'react';
import './App.css';
import Post from './components/Post.jsx';
// import CommentSection from './components/CommentSection.jsx';
import profilePicture from './assets/profile-picture.png';

function App() {
  const post = {
    headline: 'Some headline',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos',
    date: new Date(),
    author: {
      fullname: 'John Doe',
      image: profilePicture,
    },
  };

  const comment = {
    content: 'Awesome post dude!',
    date: new Date(),
    author: {
      fullname: 'Jane Doe',
      image: profilePicture,
    },
  };

  return (
    <>
      {/* <div id='post'> */}
      <Post post={post} comment={comment} />

      {/* Because the comment is from the Post.jsx file, you have to put the comment={comment} in the <Post/> also */}
    </>
  );
}

export default App;
