import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'

import { io, Socket } from 'socket.io-client'
@Injectable()
export class SocketioService {
  socket: Socket

  constructor() {}

  connect(gameId) {
    // this.socket = io(environment.SOCKET_ENDPOINT)
    // this.socket.emit('joinGame', { gameId: gameId })
    this.socket = io(environment.SOCKET_ENDPOINT)
    this.socket.emit('joinGame', { gameId: gameId })
    console.log('socket.io work')
  }
}
