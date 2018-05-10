import { Component, OnInit } from '@angular/core';
import { Game } from './Game';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	games: Game[];

 	constructor(private gameservice: GameService) { }

  	ngOnInit() {
  		this.gameservice
      		.getGames()
      		.subscribe((data: Game[]) => {
        		this.games = data;
        });
 	}
   deleteGame(id) {
     this.gameservice.deleteGame(id).subscribe(res => {
      console.log('Deleted');
    });
   }
}
