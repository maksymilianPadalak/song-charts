import React from 'react';

interface Props {
  className?: string;
}

const x = [1, 2, 3];

const SongsListItem: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} song-list-item`}>
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
