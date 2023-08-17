import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message (message : string, options : Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    const msg = alertify[options.messageType](message);
    if(options.dismissOthers)
    msg.dismissOthers();

  }
  dismiss(){
    alertify.dismissAll();
  }
}


export class AlertifyOptions {
  messageType : MessageType = MessageType.Message;
  position : Position = Position.Bottomleft;
  delay : number = 3;
  dismissOthers : boolean = false;
}

export enum MessageType {
  Error = "error",
  Message = "message",
  Notify ="notify",
  Success ="success",
  Warning = "warning"
}

export enum Position {
  Bottomright = "bottom-right",
  Bottomleft = "bottom-left",
  Bottomcenter = "bottom-center",
  Topcenter = "top-center",
  Topright = "top-right",
  Topleft  = "top-left"

}