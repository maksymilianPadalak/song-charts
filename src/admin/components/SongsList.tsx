import React from 'react';
import SongsListItem from './SongListItem';

const SongsList: React.FC = () => {
  return (
    <div>
      <SongsListItem></SongsListItem>
      <SongsListItem></SongsListItem>
      <SongsListItem></SongsListItem>
      <SongsListItem></SongsListItem>
    </div>
  );
};

export default SongsList;
