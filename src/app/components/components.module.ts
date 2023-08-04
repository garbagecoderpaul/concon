import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonPipe } from '../pipes/common-pipe.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ], exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CommonPipe,
    NgbModule
  ]
})
export class ComponentsModule { }
