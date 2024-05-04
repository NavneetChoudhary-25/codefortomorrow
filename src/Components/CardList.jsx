import React from 'react'
import { useSelector } from 'react-redux'

const CardList = () => {
const posts = useSelector(selectPosts);

  return (
    <div className='row'>
        {postMessage.map ((post)=>(
            <div key={post.id} className='col-md-4'>
                <Card post ={post} />
            </div>
        ))}
      
    </div>
  )
}

export default CardList
