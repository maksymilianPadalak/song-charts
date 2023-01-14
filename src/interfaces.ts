export interface JwtHeader {
  jwt: string;
}

export interface Song {
  albumTitle: string;
  author: string;
  id: string;
  songTitle: string;
}
export interface SongDetails {
  albumTitle: string;
  author: string;
  cleanedLyrics: string;
  songTitle: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface SearchSongsFormValues {
  author: string | undefined;
  albumTitle: string | undefined;
}

export interface SearchAlbumsFormValues {
  author: string | undefined;
}

export interface Freq {
  freq: Record<string, number>;
}

export type AlbumStats = Record<string, Freq> | { includedSongs: string[] };
