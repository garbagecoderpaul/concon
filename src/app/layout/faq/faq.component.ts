import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  allFaq: any;
  showIndexFaq: boolean=false;
  error: boolean = false;
  constructor(private api: ApiService) {
    this.getallappFAQ()
  }
  ngOnInit(): void {
  }
  getallappFAQ(){
    this.api.getallappFAQ().subscribe((res:any)=>{
      if(!res.error){
        this.error = false
        this.allFaq =res.body.sort((a, b) => a.order_1 - b.order_1);
        this.allFaq.map(i =>{
         return i.answer = JSON.parse(i.answer)
        })
        setTimeout(() => {
          document.getElementById('faqElemnt')?.setAttribute('aria-expanded', 'true')
        }, 100);
      }else if(res.error) {
        this.error = true;
      }
    }, (error) => {
      this.error = true;
    });
  }
  selectVal(event){
    if(event){
      this.showIndexFaq = true;
    }

  }

}
