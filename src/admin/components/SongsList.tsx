import React from 'react';
import SongsListItem from './SongListItem';

interface Props {
  className?: string;
}

const x = [1, 2, 3];

const SongsList: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {x.map(() => (
        <SongsListItem className={'m-4'}></SongsListItem>
      ))}
    </div>
  );
};

export default SongsList;
