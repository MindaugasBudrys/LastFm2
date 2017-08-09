export class Post {
  name: string = '';
  duration: number;
  playcount: number;
  listeners: number;
  mbid: string;
  url: string;
  artist_mbid: string;
  artist_name: string = '';
  album_title: string = '';

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.duration = obj && obj.duration || null;
    this.playcount = obj && obj.playcount || null;
    this.listeners = obj && obj.listeners || null;
    this.mbid = obj && obj.mbid || null;
    this.url = obj && obj.url || null;
    this.artist_mbid = obj && obj.artistmbid || null;
    this.artist_name = obj && obj.artist_name || null;
    this.album_title = obj && obj.album_title || null;
    
  }
}

export const RANDOM_SONGS = [
  {name: 'Linkin Park', artist: 'In The End'},
  {name: 'Linkin Park', artist: 'Numb'},
  {name: 'Linkin Park', artist: 'Breaking the Habit'},
  {name: 'Kendrick Lamar', artist: 'HUMBLE.'}
];