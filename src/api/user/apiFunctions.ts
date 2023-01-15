import { FetchAlbumsArguments, FetchAlbumStatsArguments } from '../admin/reactQueryInterfaces';
import axios from 'axios';
import { AlbumStats } from '../../interfaces';

const userUrlPrefix = '/api';

export async function fetchAlbums({ author }: FetchAlbumsArguments) {
  const { data } = await axios.get<string[]>(userUrlPrefix + '/albums', {
    params: { author },
  });
  return data;
}

export async function fetchAlbumStats({ albumTitle }: FetchAlbumStatsArguments) {
  const { data } = await axios.get<AlbumStats>(userUrlPrefix + '/analysis', {
    params: { titles: albumTitle },
  });
  return data;
}

export async function fetchActiveArtists() {
  const { data } = await axios.get<string[]>(userUrlPrefix + '/artists');
  return data;
}
