import { FetchAlbumsArguments } from '../admin/reactQueryInterfaces';
import axios from 'axios';

const userUrlPrefix = '/api';

export async function fetchAlbums({ author }: FetchAlbumsArguments) {
  const { data } = await axios.get<string[]>(userUrlPrefix + '/albums', {
    params: { author },
  });
  return data;
}
