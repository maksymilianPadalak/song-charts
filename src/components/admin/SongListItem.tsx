import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Song } from '../../interfaces';

interface Props {
  song: Song;
  className?: string;
}

const SongsListItem: React.FC<Props> = ({ className, song }) => {
  const navigate = useNavigate();

  const handleNavigateToSong = () => {
    navigate(`song/${song.id}`);
  };

  const songInfoCells: { label: string; value: string }[] = [
    { label: 'Artist', value: song.author },
    { label: 'Album', value: song.albumTitle },
    { label: 'Song', value: song.songTitle },
  ];

  return (
    <div className={`${className} list-item`} onClick={handleNavigateToSong}>
      <div className={'d-flex flex-column flex-lg-row justify-content-around'}>
        {songInfoCells.map((cell) => (
          <div
            key={cell.label}
            className={
              'd-flex flex-column justify-content-between align-items-center col-12 col-lg-4 text-center m-1'
            }
          >
            <label>{cell.label}</label>
            <h5>{cell.value}</h5>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SongsListItem;
