import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  roadMap:any[]=[]
  constructor() { }

  ngOnInit(): void {

  this.roadMap = [
    {header_title:'Phase 1',roadNum:1,bottom_title:'Preppe',description:'<p>Launch</p><p>Dex Listing</p><p>Be prepped for the WW3</p>'},
    {header_title:'Phase 2',roadNum:2,bottom_title:'Shock & Awe',description:'<p>Community Collaborations</p><p>CEX Listings</p><p>WW3 on Fire</p>'},
    {header_title:'Phase 3',roadNum:3,bottom_title:'New Era',description:'<p>T1 Exchange Listings</p><p>WW3 Tools & Governing</p><p>WW3 Piece Conference</p>'},

  ]
  }
  
  joinTelegram() {
    window.open('https://t.me/ukraineconfidential','_blank')
  }
  
pop(){
  // alert('join telegram')
}
}
