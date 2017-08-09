import { Artist } from '../artist/artist';

export class Song {
  name: string = '';
  artist_name : string = new Artist().name;
  mbid: string = '';
  url: string = '';
  duration: number = 0;
  listeners: number = 0;
  playcount: number = 0;
  title : string = '';
  wiki_content: string = '';

  

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.artist_name = obj && obj.artist_name || null;
    this.mbid = obj && obj.mbid || null;
    this.url = obj && obj.url || null;
    this.duration = obj && obj.duration || null;
    this.listeners = obj && obj.listeners || null;
    this.playcount = obj && obj.playcount || null;
    this.title = obj && obj.title || null;
    this.wiki_content = obj && obj.wiki_content || null;

  }
}