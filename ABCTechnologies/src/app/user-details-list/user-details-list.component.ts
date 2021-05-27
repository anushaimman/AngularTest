import { Component, OnInit } from '@angular/core';
import {UserDEtailsService} from '../user-details.service'
@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.css']
})
export class UserDetailsListComponent implements OnInit {

  public userdetails :any =[]
  public errorMessage : any 
  stringifiedData: any;  
  constructor(private _userDEtailsService:UserDEtailsService) {  }
    ngOnInit() {  
    debugger;

 

    this.stringifiedData = JSON.stringify(this._userDEtailsService.getUserDetails().subscribe(data =>    
      this.userdetails=data , error  => this.errorMessage= error ));
  //  this.employees= this._employeeservice.getEmployees();
    // .subscribe(data =>    
    // this.employees=data, error=> this.errorMessage= error
    // );
   }
   }