import { Component, OnInit ,Renderer2  } from '@angular/core';
import AOS from "aos";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  constructor(private renderer:Renderer2, public config: NgbCarouselConfig) {config.interval = 0;config.animation=false }

  ngOnInit(): void {
    AOS.init({ delay:1000,debounceDelay: 50,mirror:true,duration: 1000,throttleDelay: 99,easing: 'ease-in-out',offset:200,once:true,});
    // AOS.init({disable: 'mobile'});
  }
  
}
