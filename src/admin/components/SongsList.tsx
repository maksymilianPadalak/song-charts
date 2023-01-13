import React, { useState } from 'react';
import SongsListItem from './SongListItem';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import { useQuery } from 'react-query';
import { queryKeys } from '../../api/queryKeys';
import { fetchPosts } from '../../api/admin/adminApiFunctions';
import Loader from '../../shared/components/Loader';
import Error from '../../shared/components/Error';

interface Props {
  className?: string;
}

const x = [1, 2, 3, 4, 5, 6, 7, 8];

const SongsList: React.FC<Props> = ({ className }) => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(x.length / itemsPerPage);

  const { data, isLoading, isError } = useQuery(queryKeys.songs, () => fetchPosts());
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(x.slice(0, itemsPerPage));

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentItems(x.slice(pageNumber * itemsPerPage - itemsPerPage, pageNumber * itemsPerPage));
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

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
