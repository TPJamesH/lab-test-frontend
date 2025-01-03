import { useState, useEffect } from 'react';

const usePagination = ({ fetchData, pageSize, setItems, reloadFunction }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        const loadPage = async () => {
            const response = await fetchData(currentPage, pageSize);
            setItems(response.content);
            setTotalItems(response.totalElements)
        };
        loadPage();
    }, [currentPage, pageSize, fetchData])

    const nextPage = () => {
        if (currentPage !== pageSize - 1) {
            setCurrentPage(currentPage + 1)
        }
    };

    const prevPage = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1)
        }
    };

    const setPage = (pageNo) => { setCurrentPage(pageNo) }

    return { currentPage, nextPage, prevPage, setPage, totalItems }

}

export default usePagination