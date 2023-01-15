import React, { useState } from 'react';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import { useNavigate } from 'react-router-dom';

interface Props {
  albums: string[];
  className?: string;
}

const AlbumsList: React.FC<Props> = ({ albums, className }) => {
  const albumsPerPage = 10;
  const totalPages = Math.ceil(albums.length / albumsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentAlbums, setCurrentAlbums] = useState<string[]>(albums.slice(0, albumsPerPage));
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentAlbums(
      albums.slice(pageNumber * albumsPerPage - albumsPerPage, pageNumber * albumsPerPage),
    );
  };

  const handleNavigateToAlbumStats = (album: string) => {
    navigate(`album/${encodeURIComponent(album)}`);
  };

  return (
    <div className={className}>
      {currentAlbums.map((album) => (
        <div
          key={album}
          className={'m-4 list-item'}
          onClick={() => handleNavigateToAlbumStats(album)}
        >
          <h5>{album}</h5>
          <hr />
        </div>
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
