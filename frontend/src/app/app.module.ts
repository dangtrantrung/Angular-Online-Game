import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { LobbyComponent } from './lobby/lobby.component'
import { GameComponent } from './game/game.component'
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material/material.module'
@NgModule({
  declarations: [AppComponent, LobbyComponent, GameComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
