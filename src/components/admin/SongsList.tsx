import React, { useState } from 'react';
import SongsListItem from './SongListItem';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import { Song } from '../../interfaces';

interface Props {
  songs: Song[];
  className?: string;
}

const SongsList: React.FC<Props> = ({ songs, className }) => {
  const songsPerPage = 10;
  const totalPages = Math.ceil(songs.length / songsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSongs, setCurrentSongs] = useState<Song[]>(songs.slice(0, songsPerPage));

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentSongs(
      songs.slice(pageNumber * songsPerPage - songsPerPage, pageNumber * songsPerPage),
    );
  };

  if (songs.length === 0)
    return (
      <div className={'d-flex justify-content-center'}>
        <h3>Songs not found :(</h3>
      </div>
    );

  return (
    <div className={className}>
      {currentSongs.map((song) => (
        <SongsListItem song={song} key={song.id} className={'m-4'}></SongsListItem>
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
