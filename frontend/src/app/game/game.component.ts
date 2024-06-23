import { Component, OnInit } from '@angular/core'
// import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router'
import { SocketioService } from 'app/services/socketio.service'
// import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  startGame() {
    throw new Error('Method not implemented.')
  }
  // gameId: string
  role = 'operative'
  // words

  constructor(
    private socketIoService: SocketioService, // private snackbar: MatSnackBar, // private route: ActivatedRoute, // ,
  ) {}

  ngOnInit(): void {
    // this.gameId = this.route.snapshot.paramMap.get('id');
    this.socketIoService.connect()
    // this.recieveJoinedPlayers()
    // this.recieveStartGame()
    // this.recieveGameUpdate()
  }

  nextGame() {
    // this.socketIoService.startGame(this.gameId);
  }

  // startGame() {
  //   this.socketIoService.startGame(this.gameId);
  // }

  // clickWord(word) {
  //   word.selected = true;
  //   this.socketIoService.sendGameUpdate(this.gameId, this.words);
  // }

  // recieveJoinedPlayers() {
  //   this.socketIoService.recieveJoinedPlayers().subscribe((message: string) => {
  //     this.snackbar.open(message, '', {
  //       duration: 3000,
  //     });
  //   });
  // }

  // recieveStartGame() {
  //   this.socketIoService.recieveStartGame().subscribe((words) => {
  //     this.role = 'operative';
  //     this.words = words;
  //   });
  // }

  // recieveGameUpdate() {
  //   this.socketIoService.recieveGameUpdate(this.gameId).subscribe((words) => {
  //     this.words = words;
  //   });
  // }
}
