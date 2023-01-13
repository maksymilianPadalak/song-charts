import axios from 'axios';
import { JwtHeader, Song } from '../../interfaces';

export async function fetchSongs(jwtHeader: JwtHeader | undefined) {
  const { data } = await axios.get<Song[]>('/api/admin/songs', { headers: { ...jwtHeader } });
  return data;
}
