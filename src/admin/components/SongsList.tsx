import React, { useState } from 'react';
import SongsListItem from './SongListItem';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

interface Props {
  className?: string;
}

const x = [1, 2, 3, 4, 5, 6, 7, 8];

const SongsList: React.FC<Props> = ({ className }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(x.slice(0, itemsPerPage));
  const totalPages = Math.ceil(x.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentItems(x.slice(pageNumber * itemsPerPage - itemsPerPage, pageNumber * itemsPerPage));
  };

  return (
    <div className={className}>
      {currentItems.map(() => (
        <SongsListItem className={'m-4'}></SongsListItem>
      ))}
      <div className={'mx-5'}>
        <Pagination
          {...bootstrap5PaginationPreset}
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SongsList;
