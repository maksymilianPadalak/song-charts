import axios from 'axios';
import { Credentials, JwtHeader, Song, SongDetails } from '../../interfaces';
import {
  CleanLyricsArguments,
  DeleteArtistArguments,
  FetchSongsArguments,
  ReviveArtistArguments,
} from '../user/reactQueryInterfaces';

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

export async function fetchRemovedArtists(jwtHeader: JwtHeader | undefined) {
  const { data } = await axios.get<string[]>(adminUrlPrefix + '/removed/artists', {
    headers: { ...jwtHeader },
  });
  return data;
}

export async function deleteArtist({ jwtHeader, artist }: DeleteArtistArguments) {
  const { data } = await axios.delete<void>(adminUrlPrefix + `/artists/${artist}`, {
    headers: { ...jwtHeader },
  });
  return data;
}

export async function reviveArtist({ jwtHeader, artist }: ReviveArtistArguments) {
  const { data } = await axios.put<void>(
    adminUrlPrefix + `/removed/artists/${artist}`,
    {},
    { headers: { ...jwtHeader } },
  );
  return data;
}
