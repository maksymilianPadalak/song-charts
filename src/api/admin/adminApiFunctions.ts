import axios from 'axios';
import { Credentials, JwtHeader, Song, SongDetails } from '../../interfaces';

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

export async function fetchSong(jwtHeader: JwtHeader | undefined, id: string) {
  const { data } = await axios.get<SongDetails>(adminUrlPrefix + `/songs/${id}`, {
    headers: { ...jwtHeader },
  });
  return data;
}
