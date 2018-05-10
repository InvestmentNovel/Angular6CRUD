import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { GameService } from '../../game.service';
import { Game } from '../index/Game';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	game: any = {};
	angForm: FormGroup;
	constructor(private route: ActivatedRoute, 
				private router: Router, 
				private service: GameService, 
				private fb: FormBuilder) { 
		this.createForm();
	}

	createForm() {
    this.angForm = this.fb.group({
	     	name: ['', Validators.required ],
	      	price: ['', Validators.required ]
   		});
  	}

  	updateGame(name, price) {
	    this.route.params.subscribe(params => {
	    this.service.updateGame(name, price, params['id']);
	    this.router.navigate(['index']);
  		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
     		this.service.editGame(params['id']).subscribe(res => {
        		this.game = res;
      	});
    });
	}

}
