import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';
import { ContractServiceService } from 'src/app/service/contract-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  allComics: any;
  closeResult: string;
  zoomLevel: number = 1.0;
  pdfsrc = 'assets/images/Chapter-1.pdf';
  comicdesc: any;
  comicBody: any;
  error: boolean = false;
  constructor(private api: ApiService, private modalService: NgbModal,
    public contractService: ContractServiceService,
  ) {
    this.getComics()
    this.getallappcomicdesc()
  }

  ngOnInit(): void {
  }
  getallappcomicdesc(){
    this.api.getallappcomicdesc().subscribe((res: any) => {
      if(!res.error) {
        this.error = false
        this.comicdesc = res.body[0]
        this.comicBody = JSON.parse(this.comicdesc?.body)
      }else if(res.error) {
        this.error = true
      }
    }, (error) => {
      this.error = true;
    })
  }
  getComics() {
    this.api.getComics().subscribe((res: any) => {
      if(!res.error) {
        this.error = false
        this.allComics = res.body;
      }else if (res.error) {
        this.error = true;
      }
    }, (error) =>{
      this.error = true
    });
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
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

  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    this.zoomLevel -= 0.1;
  }
}
