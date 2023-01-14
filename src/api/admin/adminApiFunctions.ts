import axios from 'axios';
import { Credentials, JwtHeader, Song } from '../../interfaces';

const adminUrlPrefix = '/api/admin';

export async function logIn(credentials: Credentials) {
  const { data } = await axios.get<{ token: string }>(adminUrlPrefix + '/login', {
    auth: { username: credentials.username, password: credentials.password },
  });
  return data;
}

export async function fetchSongs(jwtHeader: JwtHeader | undefined) {
  const { data } = await axios.get<Song[]>(adminUrlPrefix + '/songs', {
    headers: { ...jwtHeader },
  });
  return data;
}
