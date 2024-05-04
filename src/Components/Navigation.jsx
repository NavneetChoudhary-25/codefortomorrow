
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../actions/postActions';
import '../index.css'

const Navigation = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.posts.currentPage);
    const totalPages = useSelector(state => state.posts.totalPages);

    const handlePageChange = page => {
        // Ensure page is within valid range
        if (page >= 1 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    }

    // Generate an array of page numbers from 1 to totalPages
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav aria-label='Page navigation'>
            <ul className='pagination justify-content-between'>
                <li className='page-item'>
                    <button
                        className='btn btn-primary'
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}>
                        Previous
                    </button>
                </li>

                {/* Display page numbers */}
                {pageNumbers.map(pageNumber => (
                    <li key={pageNumber} className='page-item'>
                        <button
                            className={`btn btn-primary ${pageNumber === currentPage ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNumber)}>
                            {pageNumber}
                        </button>
                    </li>
                ))}

                <li className='page-item'>
                    <button
                        className='btn btn-primary'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentPage } from '../actions/postActions';

// const Navigation = () => {
//     const dispatch = useDispatch();
//     const currentPage = useSelector(state => state.posts.currentPage);
//     const totalPages = useSelector(state => state.posts.totalPages);

//     const handlePageChange = page => {
//         // Ensure page is within valid range
//         if (page >= 1 && page <= totalPages) {
//             dispatch(setCurrentPage(page));
//         }
//     }

//     return (
//         <nav aria-label='Page navigation'>
//             <ul className='pagination justify-content-between'>
//                 <li className='page-item'>
//                     <button
//                         className='btn btn-primary'
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}>
//                         Previous
//                     </button>
//                 </li>

//                 <li className='page-item'>
//                     <button
//                         className='btn btn-primary'
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}>
//                         Next
//                     </button>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navigation;





// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {setCurrentPage} from '../actions/postActions';

// import '../index.css'

// const Navigation = () => {
   

//     const dispatch = useDispatch();
//     const currentPage = useSelector(state => state.posts.currentPage);

//     const handlePageChange = page => {
//         dispatch (setCurrentPage(page))  
//     }
    
//   return (
//     <nav aria-label='Page navigation'>
//         <ul className='Pagination' >
//             <li className='page-item '>
//                 <button 
//                 className='btn btn-primary'
//                 onClick={()=>handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 0}>
//                     Previous
//                 </button>
//             </li>
            
//             <li className='page-item'>
//                 <button 
//                 className=' btn btn-primary'
//                 onClick={()=>handlePageChange(currentPage + 1)} 
//                 >
//                     Next 
//                 </button>
                
//             </li>
          
//         </ul>
//     </nav>
//   );
// };

// export default Navigation;

