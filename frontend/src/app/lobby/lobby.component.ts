import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {
  createGame() {
    // throw new Error('Method not implemented.')
    const uuid = uuidv4()
    this.router.navigate(['/game', uuid])
    console.log(uuid)
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
