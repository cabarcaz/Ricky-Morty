import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (infoApi) => {
    updatePageNumber(infoApi.selected +1)
  }
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div>
    <ReactPaginate
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName=""
        nextClassName=""
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 3}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName=""
      />
    </div>
  )
}

export default Pagination
