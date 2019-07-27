import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

declare const Websocket: Pusher;

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  websocket: any;
  channel: any;


  constructor(private http: HttpClient) {
    this.websocket = new Pusher(environment.websocket.key, {
      cluster: environment.websocket.cluster,
      encrypted: true,

    });
  }

  subscribeToChannel(channelName: string, events: string[], cb: Function) {
    var channel = this.websocket.subscribe(channelName);

    events.forEach( event => {
      channel.bind(event, function(data) {
        cb(data)
      });
    })
  }
}
