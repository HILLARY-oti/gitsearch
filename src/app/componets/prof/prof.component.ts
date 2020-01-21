import { Component, OnInit } from '@angular/core';
import { ProfService } from '../../services/prof.service';
@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  public profile:any;
   repos: any;
  userName:string;

  constructor(private profService: ProfService) { 

    this.profService.getprofInfo().subscribe(profile => {
    
      this.profile = profile;
    });

  	this.profService.getprofRepos().subscribe(repos => {
     
      this.repos = repos;
    })
  }

  findProfile(){
    this.profService.updateProf(this.userName);
  	this.profService.getprofInfo().subscribe(profile => {
    
      this.profile = profile;
    });

  	this.profService.getprofRepos().subscribe(repos => {
     
      this.repos = repos;
    })
  }
  ngOnInit() {
 
  }

}