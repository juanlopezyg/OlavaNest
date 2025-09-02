import { Injectable } from '@nestjs/common';

export interface iTrack { //para que se respete la estructura
id:number;
title:string;
duration:number;
artist:string;
}

export const tracks: iTrack[] = [ //no es lo ideal, es solo de prueba
  { 
    id:1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
    },
    { 
      id:2,
      title: "cancion 2",
      duration: 130,
      artist: "interprete 2"
      }

]

@Injectable()
export class AppService {
  getTraks(): iTrack[] {
    return tracks;
  }
}

 

