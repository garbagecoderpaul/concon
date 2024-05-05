import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashAddress'
})
export class DashAddressPipe implements PipeTransform {

  transform(value: any): any {
    return (value) ? `*****${value.substr(-4)}`: '';
  }

}

@Pipe({
  name: 'showHashID'
})
export class ShowHashIDPipe implements PipeTransform {

  transform(value: string): any {
    return (value && value.indexOf('#')) ? `#${value.split('#')[1]}`: value;
  }

}
