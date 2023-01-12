import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}

const x = [1, 2, 3];

const SongsListItem: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const handleNavigateToSong = () => {
    navigate('song');
  };

  return (
    <div className={`${className} song-list-item`} onClick={handleNavigateToSong}>
      <div className={'d-flex flex-column flex-sm-row justify-content-around'}>
        {x.map(() => {
          return (
            <div
              className={
                'd-flex justify-content-around align-items-end align-items-sm-center flex-sm-column'
              }
            >
              <label>Artist</label>
              <h3>Mata</h3>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default SongsListItem;