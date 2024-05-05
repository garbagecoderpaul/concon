import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';
import { ContractServiceService } from 'src/app/service/contract-service.service';
import { UserBalance } from 'src/app/models/user-balance';
import { createPopup, createWidget } from "@typeform/embed";
import * as typeformEmbed from '@typeform/embed'

declare var $:any;
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  isMenuOpen :boolean = false;
  closeResult: any='';
  userBal: any;
  @ViewChild('navbarContent') navbarContent: ElementRef;
  isNavbarOpen = false;
  public userBalance: UserBalance = new UserBalance();
  storedWalletAddress: string;
  walletType: string;
  active: boolean =false;

  constructor(public contractService: ContractServiceService,private modalService: NgbModal,
    public router: Router,
    private api:ApiService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    this.storedWalletAddress = localStorage.getItem("walletAddress");
    this.walletType =localStorage.getItem("WalletType");
    if(this.walletType && this.storedWalletAddress){
      this.contractService.init(this.walletType)
    }
    // if(!this.contractService.selectedAccount){
    //   this.router.navigateByUrl('/')
    // }
  }
  opensideMenu(){
    this.isMenuOpen = !this.isMenuOpen
    if(this.isMenuOpen == true){
    document.body.classList.add('stop_scroll');
    }else{
      document.body.classList.remove('stop_scroll');
    }
  }
  confidential(){
      Swal.fire(
        'Oops!',
        `Please connect with wallet first.`,
        'warning'
      )
  }
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    if (this.isNavbarOpen) {
      this.navbarContent.nativeElement.classList.add('show');
    } else {
      this.navbarContent.nativeElement.classList.remove('show');
    }
  }

  navigate(){
    window.open("https://discord.gg/6jHCX2R532", "_blank");
  }

  closeNavbar() {
    if (this.isNavbarOpen) {
      this.toggleNavbar();
    }
    this.isMenuOpen = false
    document.body.classList.remove('stop_scroll');

    if(this.router.url == '/'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent)
    // createWidget("dnmlRzbL", { container: document.querySelector("#form") });
  }
  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
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
  
  disonnect() {
    this.contractService.onDisconnect()
  }
  connect(WalletType:any) {
    this.contractService.init(WalletType)
    this.modalService.dismissAll()
  }

  scrollEvent() {
    let body: any = document.querySelector('body');
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 30) {
      body.classList.add('sticky');
    } else {
      body.classList.remove('sticky');
    }
  }

  // get getTitle(): any {
  //   // *ngIf="router.url=='/network' || router.url=='/networkV1'"
  //   let url = this.router.url ? this.router.url.split('?')[0] : '';
  //   switch (url) {
  //     case '/stake':
  //     case '/networkV1':
  //       return 'Zyth Stake';
  //     case '/help':
  //       return 'Help';
  //     case '/zyth-world':
  //     case '/zyth-world-v3':
  //       case '/zyth-world-v3-demo':
  //       return 'Zyth World'
  //     case '/market-place':
  //       return 'MarketPlace'
  //     default:
  //       return ''
  //   }
  // }

  goToUrl(url: string) {
    window.open(url, "_blank")
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {

    var themeWhite = document.getElementById("themeWhite");
    var windowScrollPosition = window.scrollY +0;
    if(windowScrollPosition > themeWhite.offsetTop ){
      $('#logo').addClass('active');
    }else{
      $('#logo').removeClass('active');
    }
    if(windowScrollPosition > themeWhite.offsetTop ){
      $('#logo2').addClass('active');
    }else{
      $('#logo2').removeClass('active');
    }
  }
  openTypeform() {
    createPopup("dnmlRzbL",{ container: document.querySelector("#show") }).open(); // call open() on created popup
    this.closeNavbar()
  }
}
