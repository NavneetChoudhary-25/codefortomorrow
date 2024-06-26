import React from 'react'

const Pagination = ({currentPage, postsPerPage,totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil (totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map((Number) =>(
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <button onClick={()=>paginate(number)} className='page-link'>
                        {number}
                    </button>
                </li>
             ))}
        </ul>
      
    </nav>
  )
}

export default Pagination
