export class Post {
  name: string;
  duration: number;
  playcount: number;
  listeners: number;
  mbid: string;
  url: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.duration = obj && obj.duration || null;
    this.playcount = obj && obj.playcount || null;
    this.listeners = obj && obj.listeners || null;
    this.mbid = obj && obj.mbid || null;
    this.url = obj && obj.url || null;
  }
}
