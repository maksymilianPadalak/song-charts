export interface JwtHeader {
  jwt: string;
}

export interface Song {
  albumTitle: string;
  author: string;
  id: string;
  songTitle: string;
}

export interface Credentials {
  username: string;
  password: string;
}
