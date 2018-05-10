import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './components/index/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

	uri: String = 'http://localhost:4000/games';

 	constructor(private http: HttpClient) { }

  	addGame(name, price) {
	    const obj = {
	      name: name,
	      price: price
	    };
	    this
	    	.http
	    	.post(`${this.uri}/add`, obj)
	        .subscribe(res => 
	        	console.log('Done')
	        );
  	}

  	getGames() {
  		return this
            .http
            .get(`${this.uri}`);
    }

    editGame(id) {
    	return this
            .http
            .get(`${this.uri}/edit/${id}`)
    	}

 	updateGame(name, price, id) {

		const obj = {
			name: name,
			price: price
	    };
	    this
	    	.http
	    	.post(`${this.uri}/update/${id}`, obj)
	     	.subscribe(res => console.log('Done'));
  	}

  	deleteGame(id) {
  		return this
            .http
            .get(`${this.uri}/delete/${id}`)
  	}
}
