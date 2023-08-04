import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ContractServiceService } from './service/contract-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beauty-dashboard';
  showloader = true;
  constructor(private router: Router, private contractService: ContractServiceService) { 
    setTimeout(()=>{
      this.showloader = false
    },1500)
   }

}
