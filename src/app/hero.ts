export class Hero {
  artist_name: string = '';
  song_name: string = '';


  constructor(obj?: any) {
    this.artist_name = obj && obj.artist_name || null;
    this.song_name = obj && obj.song_name || null;

  }
}



export const HEROES = [
  {artist_name: 'Linkin Park', song_name: 'In The End'},
  {artist_name: 'Linkin Park', song_name: 'Numb'},
  {artist_name: 'Linkin Park', song_name: 'Breaking the Habit'},
  {artist_name: 'Kendrick Lamar', song_name: 'HUMBLE.'}
];
