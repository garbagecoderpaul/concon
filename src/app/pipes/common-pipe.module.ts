import { NgModule } from '@angular/core';
import { FromEtherPipe, ToEther } from './from-ether/from-ether.pipe';
import { DashAddressPipe, ShowHashIDPipe } from './dash-address/dash-address.pipe';
import { ToDollarPipe } from './to-dollar/to-dollar.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    FromEtherPipe,
    DashAddressPipe,
    ToDollarPipe,
    ToEther,
    ShowHashIDPipe,
    SafePipe

  ],
  exports: [
    FromEtherPipe,
    DashAddressPipe,
    ToDollarPipe,
    ToEther,
    ShowHashIDPipe,
    SafePipe
  ]
})
export class CommonPipe { }
