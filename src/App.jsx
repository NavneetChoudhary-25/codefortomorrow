import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost } from './actions';
import Card from './Components/Card';
import Navigation from './Components/Navigation';
// import CardList from './Components/CardList'




const App =() => {
  const dispatch =useDispatch();
  const { loading, posts, currentPage } =useSelector(state => state.posts);

  useEffect(()=>{
    dispatch(fetchPosts());

  },[dispatch]);

  const handleRemoveCard = postId =>{
    dispatch(removePost(postId));
  };


  return (
    <div className='container mt-4'>
      {loading ? (
        <p>Loading...</p>
      ):(
        <div>
          {posts.slice(currentPage *6, currentPage *6 + 6).map(post =>(
            <Card key={post.id} post={post} onRemove={handleRemoveCard} />
          ))}
          {/* <CardList /> */}
          <Navigation/>
          
        </div>
      )};
    
    </div>
  );
};

export default App;
