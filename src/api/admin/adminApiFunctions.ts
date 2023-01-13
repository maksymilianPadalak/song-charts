import axios from 'axios';
import { JwtHeader, Song } from '../../interfaces';

const adminUrlPrefix = '/api/admin';

export async function logIn() {
  const { data } = await axios.get<{ token: string }>(adminUrlPrefix + '/login', {
    auth: { username: 'test', password: 'test' },
  });
  return data;
}

export async function fetchSongs(jwtHeader: JwtHeader | undefined) {
  const { data } = await axios.get<Song[]>(adminUrlPrefix + '/songs', {
    headers: { ...jwtHeader },
  });
  return data;
}
