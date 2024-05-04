import React from 'react';
import '../index.css'

const Card = ({ post, onRemove }) => {
  const handleRemove = () => {
    onRemove(post.id);
  };

  return (

    <div>
    <div className='col-lg-4 col-md-6 mb-3'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.body}</p>
          <button className='btn btn-danger' onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Card;




// import React from 'react'
// import '../index.css'

// const Card = ({post, onRemove}) => {
//   const handleRemove = () => {
//     onRemove(post.id);
//   }
//   return (
//     <div className='container bg-info ' style={{padding:'10px',}}>
//     <div className='row'>
//       <div className='col'>
//     <div className='card mb-3' style={{width:'300px', padding:'20px'}} >
//       <div className='card-body '>
//         <h5 className='card-title'>{post.title}</h5>
//         <p className='card-text'>{post.body}</p>
//         <button className='btn btn-danger' onClick={handleRemove}>
//           remove
//         </button>
//       </div>
//     </div>  
//     </div>
//     </div>
//     </div>
    
//   )
// }

// export default Card;