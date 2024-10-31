import { useEffect, useState } from 'react';

import { PaginationWrapper, Arrow, PaginationItem } from "./style";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPageList, setShowPageList] = useState([]);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    getPageList();
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const getPageList = () => {
    if (currentPage <= 3) {
        setShowPageList([1, 2, 3, 4, 5]);
        return;
    }

    const newPageList = Array.from({ length: 5 }, (_, index) => {
        if (currentPage >= totalPages - 4) {
          return totalPages - 4 + index;
        } else {
          return currentPage - 2 + index;
        }
    })
    setShowPageList(newPageList);
  }

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleClickArrowBtn = (isNext) => {
    if (isNext) {
        goToPage(currentPage + 1);
    } else {
        goToPage(currentPage - 1);
    }
  }

  return (
    <PaginationWrapper>
        {currentPage !== 1 && (
            <Arrow onClick={() => handleClickArrowBtn(false)}>
                <ion-icon name="chevron-back-outline" size="large"></ion-icon>
            </Arrow>
        )}
        {showPageList.map((page) => {
            return (
            <PaginationItem
                key={page}
                onClick={() => goToPage(page)}
                disabled={currentPage === page}
                $isActive={currentPage === page}
            >
                {page}
            </PaginationItem>
            );
        })}
       {currentPage !== totalPages && (
            <Arrow onClick={() => handleClickArrowBtn(true)}>
                <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
            </Arrow>
        )} 
    </PaginationWrapper>
  );
};

export default Pagination;