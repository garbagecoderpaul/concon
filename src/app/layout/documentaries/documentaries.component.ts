import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-documentaries',
  templateUrl: './documentaries.component.html',
  styleUrls: ['./documentaries.component.scss']
})
export class DocumentariesComponent implements OnInit, AfterViewInit {
  banner: any[]=[];
  myElement !: HTMLDivElement;
  story: any[] = [];
  story_mob :any[] = [];
  direction: any[] = [];
  direction_mob: any[] = [];
  docBanner: any[]=[];
  vid: any;
  loadslider:boolean=false;
  deviceInfo:any;
  ShowMac: boolean = false
  normalDevice: boolean = false
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef;
  constructor(private api:ApiService, private deviceService:DeviceDetectorService) { 
    this.getBannerVideo()
    this.getDocumentryVideo()
    this.deviceInfo = this.deviceService.getDeviceInfo(); //to identify the device type
      if(this.deviceInfo.device === 'iPhone'){ 
        this.ShowMac = true;
        }else{
        this.ShowMac = false;}
    this.story =[ //for desktop first slider
    {id: 0 ,image:'assets/images/documentry/desktop-slider-1/1.png'},
    {id: 1 ,image:'assets/images/documentry/desktop-slider-1/2.png'},
    {id: 2 ,image:'assets/images/documentry/desktop-slider-1/3.png'},
    {id: 3 ,image:'assets/images/documentry/desktop-slider-1/4.png'},
    {id: 4 ,image:'assets/images/documentry/desktop-slider-1/5.png'},
    {id: 5 ,image:'assets/images/documentry/desktop-slider-1/6.png'}
  ]
  this.story_mob = [ //for mobile first slider
    {id: 0 ,image:'assets/images/documentry/mobile-slider-1/1.png'},
    {id: 1 ,image:'assets/images/documentry/mobile-slider-1/2.png'},
    {id: 2 ,image:'assets/images/documentry/mobile-slider-1/3.png'},
    {id: 3 ,image:'assets/images/documentry/mobile-slider-1/4.png'},
    {id: 4 ,image:'assets/images/documentry/mobile-slider-1/5.png'},
    {id: 5 ,image:'assets/images/documentry/mobile-slider-1/6.png'}
  ]
  this.direction =[ //for desktop second slider
    {id: 0 ,image:'assets/images/documentry/desktop-slider-2/1.png'},
    {id: 1 ,image:'assets/images/documentry/desktop-slider-2/2.png'},
    {id: 2 ,image:'assets/images/documentry/desktop-slider-2/3.png'},
    {id: 3 ,image:'assets/images/documentry/desktop-slider-2/4.png'},
    {id: 4 ,image:'assets/images/documentry/desktop-slider-2/5.png'},
  ]
  this.direction_mob =[ //for mobile second slider
    {id: 0 ,image:'assets/images/documentry/mobile-slider-2/1.png'},
    {id: 1 ,image:'assets/images/documentry/mobile-slider-2/2.png'},
    {id: 2 ,image:'assets/images/documentry/mobile-slider-2/3.png'},
    {id: 3 ,image:'assets/images/documentry/mobile-slider-2/4.png'},
    {id: 4 ,image:'assets/images/documentry/mobile-slider-2/5.png'},
  ]
  }
 
  ngOnInit(): void {
    // console.log(this.deviceInfo);
  }
  
  ngAfterViewInit() {
    const media = this.videoRef?.nativeElement;
    // media.muted = true;
    // media.play();
  }

  getBannerVideo(){
    this.api.getBannerVideo().subscribe((res:any)=>{
      if(res) {
        // this.banner = res.body[0].video_url;
        this.banner = res?.body;
        this.banner?.map((i=>{
          i.isPlaying = false
        }))
      }
    })
  }

  navigate(){
    window.open("https://discord.gg/6jHCX2R532", "_blank");
  }

  getDocumentryVideo(){
    this.api.getDocumentryVideo().subscribe((res:any)=>{
      if(res) {
        this.docBanner = res?.body;
        this.docBanner?.map((i=>{
          i.isPlaying = false
        }))
      }
    })
  }

  slickInit(e: any) {
    this.loadslider = true;
    // console.log('slick initialized');
  }

  breakpoint(e: any) {
    // console.log('breakpoint');
  }

  afterChange(e: any) {
    // console.log('afterChange');
  }

  beforeChange(e: any) {
    // console.log('beforeChange');
  }

  slideConfigpart = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:true,
        },
      },
    ],
  };

  slideConfigpBanner = { //text slider for first section of the page.
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    vertical:true,
    arrows:false,
    speed: 500,
    // lazyLoad:this.loadslider=true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows:false,
        },
      },
    ],
  };

  togglePlayPause(video: HTMLVideoElement,data:any) {
    // console.log('dxfcgvhjk',data);
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
      const currentVideo = this.banner.find(v => v.video_url === video.src);
      if (currentVideo) {
        currentVideo.isPlaying = false;
      }
    }
  }

  onVideoPlay(video: any,play?) {
    play.isPlaying = true
    video.isPlaying = true;
  }

  onVideoPause(video: any) {
    video.isPlaying = false;
  }
  onVideoEnded(video:any) {
     video.isPlaying= false;
  }
}
