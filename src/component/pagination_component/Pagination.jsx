import usePagination from "./hook/usePagination"
import PaginationControls from "./child_component/paginationControl";
import showByPage from "./api/showByPage";
const Pagination = ({items,setItems,pageSize,totalElement, reloadFunction}) => {
    const {currentPage,nextPage,prevPage,setPage,totalItems} = usePagination({
        reloadFunction:reloadFunction,
        fetchData: showByPage,
        pageSize,setItems});
    
    return (
        <PaginationControls
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize ={pageSize}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
            />
    )
}

export default Pagination