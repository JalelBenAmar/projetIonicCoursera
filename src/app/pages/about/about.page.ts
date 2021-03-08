import { LeaderService } from './../../services/leader.service';
import { Leader } from './../../../shared/leader';
import { Component, OnInit } from '@angular/core';
import { BaseURL } from 'src/shared/baseurl';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  leaders: Leader[];
  leaderErrMess: string;
  baseURL: string;

  constructor(
    private leaderService: LeaderService
  ) {this.baseURL = BaseURL;}

  ngOnInit() {
    this.getAllLeaders();
  }

  getAllLeaders(){
    this.leaderService.getLeaders().subscribe(
      (data) =>{
        this.leaders = data;
      }, error => {
        this.leaderErrMess = error;
      }
    );
  }

}
