import React, { useState } from 'react';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

interface Props {
  albums: string[];
  className?: string;
}

const AlbumsList: React.FC<Props> = ({ albums, className }) => {
  const albumsPerPage = 10;
  const totalPages = Math.ceil(albums.length / albumsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentAlbums, setCurrentAlbums] = useState<string[]>(albums.slice(0, albumsPerPage));

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentAlbums(
      albums.slice(pageNumber * albumsPerPage - albumsPerPage, pageNumber * albumsPerPage),
    );
  };

  return (
    <div className={className}>
      {currentAlbums.map((song) => (
        <h1>Album</h1>
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

export default AlbumsList;
