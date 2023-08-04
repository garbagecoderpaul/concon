import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';
declare var $: any;
import 'core-js/es/function/bind';
import { Router } from '@angular/router';
import { ContractServiceService } from 'src/app/service/contract-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  openUp: boolean = false;
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef;
  description: any;
  vid: any;
  active = 0;
  slides = [];
  closeResult: any = '';
  banner: any;
  bannerVideo: any;
  finalVideo: any;
  myElement!: HTMLDivElement;
  video: any;
  CheckType: any;
  allComics: any;
  json_meta_file: any[] = [];
  ourTeam: any[] = [];
  roadMap: any;
  prjDesc: any;
  error: boolean = false;
  constructor(
    private modalService: NgbModal,
    private renderer: Renderer2,
    private router: Router,
    private api: ApiService,
    public contractService: ContractServiceService,
  ) {
    this.getBannerVideo();
    this.getComics();
    this.getallappTeam();
    this.getallroadmap();
    this.getProjectDesc()
  }

  getallroadmap() {
    this.api.getallapproadmap().subscribe((res: any) => {
      if(!res.error) {
        this.error = false
        this.roadMap = res.body;
        this.roadMap.map(i => {
          i.description = JSON.parse(i.description)
          i.roadNum = (this.roadMap.indexOf(i) + 1)
        })
      }else if (res.error) {
        this.error = true;
      }
    },(error) =>{
      this.error = true
    });
  }
  getBannerVideo() {
    this.api.getBannerVideo().subscribe((res: any) => {
      if(!res.error) {
        this.error = false
        this.banner = res.body[0].video_url;
      }else if (res.error) {
        this.error = true;
      }
    }, (error) =>{
      this.error = true
    });
  }
  getallappTeam() {
    this.api.getallappTeam().subscribe((res: any) => {
      if(!res.error) {
        this.error = false
        this.ourTeam = res.body.sort((a, b) => a.order - b.order);
      }else if (res.error) {
        this.error = true;
      }
    }, (error) =>{
      this.error = true
    });
  }
  ngAfterViewInit() {
    const media = this.videoRef.nativeElement;
    media.muted = true;
    media.play();
  }

  ngOnInit(): void { }

  getComics() {
    this.api.getComics().subscribe((res: any) => {
      if(!res.error) {
        this.error = false
        this.allComics = res.body;
      this.slides = this.allComics.map((i: any) => {
        return { img: i.comics_path };
      });
      }else if (res.error) {
        this.error = true;
      }
    }, (error) =>{
      this.error = true
    });
  }

  navigate(){
    window.open("https://discord.gg/6jHCX2R532", "_blank");
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
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
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          centerMode: false,
        },
      },
    ],
  };

  slideConfigure = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };

  slideConfiging = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  slideConfiguree = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
    ],
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    // console.log('slick initialized', e);
  }

  slickInitt(e: any) {
    // console.log('slick initialized', e);
  }

  breakpoint(e: any) {
    // console.log('breakpoint', e);
  }

  breakpointt(e: any) {
    // console.log('breakpoint', e);
  }

  afterChange(e: any) {
    // console.log('afterChange', e);
  }

  afterChangee(e: any) {
    // console.log('afterChange', e);
  }

  beforeChange(e: any) {
    // console.log('beforeChange', e);
  }

  beforeChangee(e: any) {
    // console.log('beforeChange', e);
  }

  openPop() {
    this.openUp = true;
  }
  onClose() {
    this.openUp = false;
  }
  navigrate(data) {
    this.router.navigate(['/comicss/', data.id]);
  }

  getProjectDesc(){
    this.api.getProjectDesc().subscribe((res:any)=>{
      this.prjDesc = JSON.parse(res.body[0].project_description)
    })
  }
}