export class Hero {
  artist_name: string = '';
  song_name: string = '';


  constructor(obj?: any) {
    this.artist_name = obj && obj.artist_name || null;
    this.song_name = obj && obj.song_name || null;

  }
}

