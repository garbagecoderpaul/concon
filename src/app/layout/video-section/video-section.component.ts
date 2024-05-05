import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ContractServiceService } from 'src/app/service/contract-service.service';
import Swal from 'sweetalert2';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {
  videosets: any;
  deviceInfo:any;
  ShowMac: boolean = false
  normalDevice: boolean = false
  error: boolean = false;
  constructor(private api: ApiService,public contractService: ContractServiceService,
    private deviceService:DeviceDetectorService
    ) {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      if(this.deviceInfo.device === 'iPhone'){
        this.ShowMac = true;
        }else{
        this.ShowMac = false;}
    this.getVideoSet();
   }

  ngOnInit(): void {
    // console.log(this.deviceInfo);
  }

  getVideoSet(): void {
    this.api.getVideoSet().subscribe((res: any) => {
      if(!res.error){
        this.error = false
        this.videosets =res.body.sort((a, b) => a.order - b.order);
        this.videosets.map((i=>{
          i.isPlaying = false
          // if(!i.url){
          //   i.url = 'javascript:void(0)';
          // }
        }))
      }else if(res.error) {
        this.error = true;
      }
    }, (err) => {
      this.error = true;
    });
    
  }

  slideConfigVideo = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows:true,
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
  slickInit(e: any) {
    // console.log('slick initialized',e);
  }

  breakpoint(e: any) {
    // console.log('breakpoint',e);
  }

  afterChange(e: any) {
    // console.log('afterChange',e);
  }

  beforeChange(e: any) {
    // console.log('beforeChange',e);
  }

  togglePlayPause(video: HTMLVideoElement,data:any) {
    // if(!this.contractService.selectedAccount){
      if(!this.contractService.selectedAccount && data.is_restrict == '1'){
      Swal.fire(
        'Oops!',
        `This video is restricted <br> Please connect with wallet first.`,
        'warning'
      )
      return
    }
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
      const currentVideo = this.videosets.find(v => v.video_url === video.src);
      if (currentVideo) {
        currentVideo.isPlaying = false;
      }
    }
  }

  onVideoPlay(video: any,play?) {
    play.isPlaying = true
    video.isPlaying = true;
  }

  onVideoPause(video: any,play?) {
    video.isPlaying = false;
  }
  onVideoEnded(video:any) {
     video.isPlaying= false;
  }
}
