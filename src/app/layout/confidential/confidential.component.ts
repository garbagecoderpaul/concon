import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';
import { createWidget } from "@typeform/embed";
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-confidential',
  templateUrl: './confidential.component.html',
  styleUrls: ['./confidential.component.scss'],
})
export class ConfidentialComponent implements OnInit {
  activeTab = 1;
  selectedOption:any;
  slides = [
    {img: "assets/images/3.1.png",bgText: 'South Park'},
    {img: "assets/images/2.1.png",bgText: 'South Park'},
    {img: "assets/images/1.2.png",bgText: 'South Park'},
    {img: "assets/images/2.1.png",bgText: 'South Park'},
    {img: "assets/images/3.1.png",bgText: 'South Park'},
  ];
  video=[
    {img: "assets/images/3.1.png",bgText: 'South Park',session:'S14 . E14',info:'South Park',date:'09/05/2023'},
    {img: "assets/images/2.1.png",bgText: 'South Park',session:'S14 . E15',info:'South Park',date:'09/05/2023'},
    {img: "assets/images/1.2.png",bgText: 'South Park',session:'S14 . E16',info:'South Park',date:'09/05/2023'},
    {img: "assets/images/2.1.png",bgText: 'South Park',session:'S14 . E17',info:'South Park',date:'09/05/2023'},
    {img: "assets/images/3.1.png",bgText: 'South Park',session:'S14 . E18',info:'South Park',date:'09/05/2023'},
  ]
  openUp: boolean;
  closeResult: any='';
  youtube: any;
  constructor(private modalService: NgbModal,
    private api:ApiService) {
      this.getVideoSet()
     }

  ngOnInit(): void {
    createWidget("tIvK5nQM", { container: document.querySelector("#form") });
  }
  getVideoSet(){
    this.api.getVideoSet().subscribe((res:any)=>{
      // console.log(res);
      this.youtube = res.body      
    })
  }

  navigate(){
    window.open("https://discord.gg/uGJ3CJG3", "_blank");
  }
  
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'infinite': false,
    arrows:false,
    'responsive': [{
      'breakpoint': 1024,
      'settings': {
        'slidesToShow': 3,
        'slidesToScroll': 1,
        'centerMode': false,
        arrows:false,
      }
    },
    {
    'breakpoint': 991,
    'settings': {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'centerMode': false,
    arrows:false,
    }
    },
    {
    'breakpoint': 767,
    'settings': {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'centerMode': false,
    arrows:false,
    }
    },
    {
      'breakpoint': 480,
      'settings': {
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'centerMode': false,
      arrows:false,
      }
      }
    ]
    };
    removeSlide() {
      this.slides.length = this.slides.length - 1;
    }
    
    slickInit(e:any) {
      // console.log('slick initialized');
    }
    
    breakpoint(e:any) {
      // console.log('breakpoint');
    }
    
    afterChange(e:any) {
      // console.log('afterChange');
    }
    
    beforeChange(e:any) {
      // console.log('beforeChange');
    }
    openPop() {
      this.openUp = true;
    }
    onClose() {
      this.openUp = false;
    }
    open(content:any) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',size:'xl' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
}
