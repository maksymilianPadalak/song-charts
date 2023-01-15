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

//TODO delete after test
export async function test1() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return data;
}

//TODO delete after test
export async function test2() {
  const { data } = await axios.get('https://lyrics-373516.ew.r.appspot.com/api/artists');
  return data;
}
