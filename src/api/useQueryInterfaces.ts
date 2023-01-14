import { JwtHeader } from '../interfaces';

export interface CleanLyricsArguments {
  jwtHeader: JwtHeader | undefined;
  id: string;
  cleanedLyrics: string;
}

export interface FetchSongsArguments {
  jwtHeader: JwtHeader | undefined;
  author?: string;
  albumTitle?: string;
}
