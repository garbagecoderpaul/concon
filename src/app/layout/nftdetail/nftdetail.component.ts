import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiService } from 'src/app/service/api.service';
import { TagInputComponent } from 'ngx-chips';


export interface AutoCompleteModel {
  value: any;
  display: string;
}



@Component({
  selector: 'app-nftdetail',
  templateUrl: './nftdetail.component.html',
  styleUrls: ['./nftdetail.component.scss']
})
export class NftdetailComponent implements OnInit {
  @ViewChild('listContainer') listContainer: ElementRef;
  @ViewChild('tagInput', { static: true }) tagInput: TagInputComponent;
  @ViewChild('tagInputMob', { static: true }) tagInputMob: TagInputComponent;

  defaultTouch = { x: 0, y: 0, time: 0 };
  dscOurNft: any;
  nfts: any[] = [];
  nft: any[] = [];
  scarcity: any;
  nftDetails: any;
  displNFTs: any[];
  selectednftList: string;
  selectedImage: number;
  disabled: boolean;
  translateValue: number = 0;
  allowRead: boolean = false;
  currentIndex: number = 0;
  CheckType: any;
  active: number;
  selectedIndex: number = 0;
  selectedItem: any;
  startX: number = 0;
  endX: number = 0;
  threshold: number = 50;
  filterDrp:any[] = [];
  dropdownList = [];
  selectedItems:any[] = [];
  dropdownSettings = {};
  searchStr:any='';
  filterType:any[]=[]
  error: boolean = false;
  load: boolean = false;
  constructor(
    private api: ApiService
  ) {
    this.getallnft();
  }

  public items = [
    // {display: 'All', value: 0},
    // {display: 'Russia', value: 1},
    // {display: 'Ukraine', value: 2},
  ];

  ngOnInit(): void {
    this.filterDrp = [
      {id:'1',value:'All',label:'All'},
      {id:'2',value:'Russia',label:'Russian'},
      {id:'3',value:'Ukraine',label:'Ukrainian'},
      {id:'4',value:'historical',label:'historical'},
      {id:'5',value:'leaders',label:'leaders'},
      {id:'6',value:'oligarchs',label:'oligarchs'},
      {id:'7',value:'military',label:'military'},
      {id:'8',value:'influencers',label:'influencers'},
      {id:'9',value:'angel',label:'angel'},
      {id:'10',value:'cowboy',label:'cowboy'},
      {id:'11',value:'nuclear',label:'nuclear'},
      {id:'12',value:'cyborg',label:'cyborg'},
      {id:'13',value:'van gogh',label:'van gogh'},
      {id:'14',value:'stoner',label:'stoner'},
      {id:'15',value:'LSD',label:'LSD'},
      {id:'16',value:'demon',label:'demon'},
      {id:'17',value:'beast',label:'beast'},
      {id:'18',value:'soviet',label:'soviet'},
      {id:'19',value:'zombie',label:'zombie'},
      {id:'20',value:'weapon',label:'weapon'},
      {id:'21',value:'hat',label:'hat'},
      {id:'22',value:'hoodie',label:'hoodie'},
    ]
  }

  openTagInputDropdown() { //used to open dropdown on filter button click in desktop
    if (this.tagInput) {
      this.tagInput.dropdown.show();
    }
  }

  openTagInputDropdownMob() { //used to open dropdown on filter button click in mobile
    if (this.tagInputMob) {
      this.tagInputMob.dropdown.show();
    }
  }

  onItemSelect(item: any) {
    this.getallnft(this.searchStr,item)
    this.nfts = [];
    this.nfts = this.nft.filter((i: any) => {
          if (i.item_type == i.item_type) {
            return i;
          }
        })
  }

  onItemDeSelect(item: any) {
    this.selectedItems.pop()
    this.selectedItem = []
    // this.getallnft(this.searchStr,this.selectedItems)
    // this.nfts = [];
    // this.nfts = this.nft
  }
  onSelectAll(items: any) {
    this.selectedItems.push(items.value)
    // this.getallnft(this.searchStr,this.selectedItems)
    // this.nfts = [];
    // this.nfts = this.nft.filter((i: any) => {
    //       if (i.item_type == i.item_type) {
    //         return i;
    //       }
    //     })
  }

  filter(data) { //for chips
    this.searchStr = ''
    data= this.filterType.map(i=> {return i.value.toLowerCase()})
    data = data.join(',')
    this.getallnft('',data)
    this.items=[]
    this.nfts = [];
    this.nfts = this.nft
  }

  getallnft(data?: any,type?:any) {
    this.items.push(type)
    let body:any
    if(type?.length){
      body = {
       searchStr:data ?? '',
       type:type ?? null
     }
    }else{
      body = {
        searchStr:data ?? '',
        type:''
      }
    }
    this.api.getallnft(body).subscribe((res: any) => {
      if(!res.error){
        this.error = false
        this.nfts = [];
        this.items = []
        this.nft = [];
        this.nfts = res.body;
        this.nftDetails = res.body[0]
        this.nft = res.body;
        this.displNFTs = []
        this.nft.map((i: any) => {
          if (i.is_discover_nft == 1) {
            this.displNFTs.push(i)
          }
          // let data = JSON.parse(i.type)
          this.items.push(JSON.parse(i._type))
          this.items = this.items.filter(i=> {return i !== null;})
        })
        const concatenatedArray = [].concat(...this.items); // to concat the multiple arrays in one array
        this.items = concatenatedArray

        const uniqueValues = {}; // Create an object to keep track of unique combinations of 'display' and 'value'

      // Filter the array to remove objects with duplicate combinations of 'display' and 'value'
          const filteredArray = this.items.filter((obj) => {
            const key = `${obj.display}-${obj.value}`;
            if (!uniqueValues[key]) {
              uniqueValues[key] = true;
              return true;
            }
            return false;
          });
          this.items = filteredArray
        this.items = this.items.sort(function(a, b){ //sort the array alphabeticaly
          if(a.display.toUpperCase() < b.display.toUpperCase()) { return -1; }
          if(a.display.toUpperCase() > b.display.toUpperCase()) { return 1; }
          return 0;
        });
        this.dscOurNft = res.body[0]?.nft_image;
        this.scarcity = JSON.parse(res?.body[0]?.nft_attributes_meta);
        this.nfts = this.nft = this.nfts.map((i) => {
          if (i.nft_attributes_meta) {
            i.nft_attributes_meta = JSON.parse(i.nft_attributes_meta);
            i.json_meta_file = JSON.parse(i.json_meta_file);
          }
          return i;
        });
        this.nfts.map((i) => {
          if (i.json_meta_file) {
            i.json_meta_file.map((it) => {
              if (it.trait_type?.indexOf('_') > -1) {
                it.trait_type = it.trait_type.split('_').join(' ');
              }
              return it;
            });
          }
          switch (i.nft_attributes_meta.scarcity) {
            case 'Limited':
              i.scarcityValue = {
                scarcityN: '1/3000',
                votingPower: 5
              };
              break;
  
            case 'Rare':
              i.scarcityValue = {
                scarcityN: '1/300',
                votingPower: 30
              };
              break;
  
            case 'Legend':
              i.scarcityValue = {
                scarcityN: '1/40',
                votingPower: 200
              };
              break;
  
            default:
              i.scarcityValue = {
                scarcityN: '1/5',
                votingPower: 500
              }
          }
          return i;
        });
      }else if(res.error) {
        this.error = true
      }
    }, (error) => {
      this.error = true;
    });
  }

  readMore() {
    this.allowRead = !this.allowRead;
    if(!this.allowRead){
      this.allowRead = this.allowRead
    }
  }
  previous(data?) {
    this.nftdetails(data)
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next(data?) {
    this.nftdetails(data)
    if (this.currentIndex < this.nfts.length - 1) {
      this.currentIndex++;
    }
  }

  nftdetails(data?: any) {
    this.nftDetails = data;
    this.selectednftList = data?.nft_image;
    this.selectedImage = this.nfts.indexOf(data);
    this.allowRead = false
  }

  getItemColor(item) {
    if (item == 'Russia') {
      return '#ff0000'
    } else if (item == 'Ukraine') {
      return '#005bbb'
    }
    return '#ffd500'
  }

  change(event: any) { //for input box
    this.filterType = null
    this.CheckType = event;
    if (this.CheckType == 'Russia') {
      this.getallnft(this.CheckType,this.CheckType)
      this.nfts = [];
      this.nfts = this.nft.filter((i: any) => {
        if (i.item_type == 'Russia') {
          return i;
        }
      });
    } else if (this.CheckType == 'Ukraine') {
      this.getallnft(this.CheckType,this.CheckType)
      this.nfts = [];
      this.nfts = this.nft.filter((i: any) => {
        if (i.item_type == 'Ukraine') {
          return i;
        }
      });
    } 
    else {
      this.searchStr = this.CheckType.target.value
      this.getallnft(this.searchStr,this.selectedItems)
      this.nfts = [];
      this.nfts = this.nft
  }
    this.active = 0;
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event) {
    let touch = event.touches[0] || event.changedTouches[0];
    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;
      if (deltaTime < 500) {
        if (Math.abs(deltaX) > 60) {
          if (deltaX > 0) {
            this.doSwipeRight(event);
          } else {
            this.doSwipeLeft(event);
          }
        }
      }
    }
  }

  doSwipeLeft(event) {
    if (event.target.classList.value = 'imageEvent') {
      if ((this.currentIndex + 1) != this.nfts.length) {
        this.next(this.nfts[this.currentIndex + 1])
        this.nextImage()
      }
    }
  }

  doSwipeRight(event) {
    if (event.target.classList.value = 'imageEvent') {
      if (this.currentIndex > 0) {
        this.previous(this.nfts[this.currentIndex - 1])
        this.previousImage()
      }
    }
  }

  selectItem(index: number) {
    this.selectedIndex = index;
    this.selectedItem = this.nfts[index];
    this.allowRead = false
  }

  nextImage() {
    this.load = true
    let index = (this.selectedIndex + 1) % this.nfts.length;
    if(this.nfts.length - index == 0){ 
      this.selectedIndex = 0
    }else{
      this.selectedIndex = (this.selectedIndex + 1) % this.nfts.length;

    }
    
    this.selectedItem = this.nfts[this.selectedIndex];
    this.scrollToActiveItem();
    this.allowRead = false
    this.load = false
  }

  previousImage() {
    this.load = true;
    let index = (this.selectedIndex - 1 + this.nfts.length) % this.nfts.length; 
    if(index == 0){ 
      this.selectedIndex = this.nfts.length
    }else{
      this.selectedIndex = (this.selectedIndex - 1 + this.nfts.length) % this.nfts.length;

    }
    this.selectedItem = this.nfts[this.selectedIndex];
    this.scrollToActiveItem();
    this.allowRead = false
    this.load = false;
  }
  scrollToActiveItem() {
    if (this.listContainer && this.listContainer.nativeElement) {
      const containerWidth = this.listContainer.nativeElement.offsetWidth;
      const activeItem = this.listContainer.nativeElement.getElementsByClassName('active')[0];
      if (activeItem) {
        const itemWidth = activeItem.offsetWidth;
        const itemOffset = activeItem.offsetLeft;
        const scrollOffset = itemOffset - (containerWidth - itemWidth) / 2;
        this.listContainer.nativeElement.scrollLeft = scrollOffset;
      }
    }
  } 
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.endX = event.clientX;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    const swipeDistance = this.endX - this.startX;
    if (swipeDistance > this.threshold && this.selectedIndex > 0) {
      this.previousImage();
    } else if (swipeDistance < -this.threshold && (this.selectedIndex + 1) != this.nfts.length) {
      this.nextImage();
    }
  }

  openMailTemplate() {
    const recipient = 'info@ukraineconfidential.com';
    const subject = '';
    const body = '';

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // window.location.href = mailtoUrl;
    window.open(mailtoUrl, '_blank');
  }
}
