import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
         transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),
  ]
})
export class HomeComponent implements OnInit {

 state: string = 'small';

  constructor(private router: Router) {
  }
  
  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
  }

  goToAttendees() {
    this.router.navigate(['/attendees']);
  }

}
