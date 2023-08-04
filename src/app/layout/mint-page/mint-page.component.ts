import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-mint-page',
  templateUrl: './mint-page.component.html',
  styleUrls: ['./mint-page.component.scss']
})
export class MintPageComponent implements OnInit {

  imageUrls: string[] = [
    'assets/images/cat-1.jpeg',
    'assets/images/psd-2.png',
    'assets/images/cat-2.jpeg',
    'assets/images/psd-6.png',
    'assets/images/psd-3.png',
    // Add more image URLs as needed
  ];
  currentImageIndex = 0;
  currentImageSrc: string;
  nft: any[]=[];
  mint_nft: any[]=[];
  selectedIndex: number = 0;
  selectedItem: any;
  translateValue: number = 0;
  currentImage: number = 0;
  constructor(private api:ApiService) { 
    this.getallnft()
  }

  ngOnInit(): void {
    this.switchImage(); // Start the image switching
  }

  switchImage() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
      this.currentImageSrc = this.imageUrls[this.currentImageIndex];
    }, 200); // Adjust the interval (in milliseconds) as needed
  }

  getallnft() {
    this.api.getallnft('').subscribe((res:any)=>{ 
      this.nft = res.body
      this.nft.map((i) => {
        if (i.nft_attributes_meta) {
          i.nft_attributes_meta = JSON.parse(i.nft_attributes_meta);
          i.json_meta_file = JSON.parse(i.json_meta_file);
        }
        return i;
      });
      this.nft.filter(i =>{
        if(i.is_minting == '1'){
          this.mint_nft.push(i)
        }
      })
    })
    console.log(this.mint_nft);
  }
  previousImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.mint_nft.length) % this.mint_nft.length;
    this.selectedItem = this.mint_nft[this.selectedIndex];
    // this.scrollToActiveItem();
  }
  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.mint_nft.length;
    this.selectedItem = this.mint_nft[this.selectedIndex];
    // this.scrollToActiveItem();
    console.log(this.selectedItem);
    
  }
  changeImage(direction: 'prev' | 'next') {
    if (direction === 'prev') {
      this.currentImage = (this.currentImage - 1 + this.mint_nft.length) % this.mint_nft.length;
    } else if (direction === 'next') {
      this.currentImage = (this.currentImage + 1) % this.mint_nft.length;
    }
  }
}
