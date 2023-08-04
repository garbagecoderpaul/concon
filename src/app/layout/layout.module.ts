import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module'
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgbAccordionModule, NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonPipe } from '../pipes/common-pipe.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FaqComponent } from './faq/faq.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ComicsComponent } from './comics/comics.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { ComicIssueComponent } from './comic-issue/comic-issue.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { ConfidentialComponent } from './confidential/confidential.component';
import { MintPageComponent } from './mint-page/mint-page.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NftdetailComponent } from './nftdetail/nftdetail.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TokenComponent } from './token/token.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    FaqComponent,
    ArtworkComponent,
    ComicsComponent,
    VideoSectionComponent,
    ComicIssueComponent,
    DocumentariesComponent,
    ConfidentialComponent,
    MintPageComponent,
    ComicDetailComponent,
    NftdetailComponent,
    BenefitsComponent,
    TokenComponent,
  ],
  imports: [
    NgbAccordionModule,
    ComponentsModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonPipe,
    CommonModule,
    NgbModule,
    InfiniteScrollModule,
    SlickCarouselModule,
    NgbCarouselModule,
    PdfViewerModule,
    NgMultiSelectDropDownModule.forRoot(),
    TagInputModule
  ],
  exports: [],
  providers: [NgbCarouselConfig]
})
export class LayoutModule { }
