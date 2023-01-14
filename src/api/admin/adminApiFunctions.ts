import axios from 'axios';
import { Credentials, JwtHeader, Song, SongDetails } from '../../interfaces';
import { CleanLyricsArguments, FetchSongsArguments } from '../useQueryInterfaces';

const adminUrlPrefix = '/api/admin';

export async function logIn(credentials: Credentials) {
  const { data } = await axios.get<{ token: string }>(adminUrlPrefix + '/login', {
    auth: { username: credentials.username, password: credentials.password },
  });
  return data;
}

export async function fetchSongs({ jwtHeader, author, albumTitle }: FetchSongsArguments) {
  const { data } = await axios.get<Song[]>(adminUrlPrefix + '/songs', {
    headers: { ...jwtHeader },
    params: { author, albumTitle },
  });
  return data;
}

export async function fetchSong(jwtHeader: JwtHeader | undefined, id: string) {
  const { data } = await axios.get<SongDetails>(adminUrlPrefix + `/songs/${id}`, {
    headers: { ...jwtHeader },
  });
  return data;
}

export async function cleanLyrics({ jwtHeader, cleanedLyrics, id }: CleanLyricsArguments) {
  const { data } = await axios.patch<SongDetails>(
    adminUrlPrefix + `/songs/${id}`,
    { cleanedLyrics },
    {
      headers: { ...jwtHeader },
    },
  );
  return data;
}
