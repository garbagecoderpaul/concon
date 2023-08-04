import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ContractServiceService } from 'src/app/service/contract-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  data: any;
  id: any;
  show: any;

  constructor(private act:ActivatedRoute,private api:ApiService,public contractService:ContractServiceService) {
    this.act
        .params
        .subscribe(params => {
            console.log(params,'params');
            this.id = params
        });
      
        this.show = this.contractService.selectedAccount
        if(!this.contractService.selectedAccount){
          Swal.fire(
            'Oops!',
            `To view blured content <br> Please connect with wallet first.`,
            'warning'
          )
          return
        }

   }

  ngOnInit(): void {
    this.api.getComicById(this.id.d).subscribe((res)=>{
      console.log('szdxfcghj',res);
      this.data = res.body[0]
    })
  }

}
