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
    {header_title:'Phase 1',roadNum:1,bottom_title:'Launch',description:'<p>launch</p><p>Iniswap / CoinGecko Listing</p><p>1,000+ Holders</p><p>Get $UCC Trending</p>'},
    {header_title:'Phase 2',roadNum:2,bottom_title:'Stake',description:'<p>Community Collaborations</p><p>CEX Listings 10,000+ Holders</p>'},
    {header_title:'Phase 3',roadNum:3,bottom_title:'Creativity',description:'<p>T1 Exchange Listings</p><p>UCC Tools</p><p>UCC Creative initiatives</p>'},

  ]
  }
  
  joinTelegram() {
    window.open('https://t.me/ukraineconfidential','_blank')
  }
  
pop(){
  // alert('join telegram')
}
}
