import { JwtHeader } from '../interfaces';

export interface CleanLyricsArguments {
  jwtHeader: JwtHeader | undefined;
  id: string;
  cleanedLyrics: string;
}
