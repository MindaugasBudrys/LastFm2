export class Song {
  name: string = '';
  artist_name: string = '';
  mbid: string = '';
  url: string = '';

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.artist_name = obj && obj.artist_name || null;
    this.mbid = obj && obj.mbid || null;
    this.url = obj && obj.url || null;
  }
}
