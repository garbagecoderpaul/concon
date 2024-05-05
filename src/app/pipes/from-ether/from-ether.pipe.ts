import { Pipe, PipeTransform } from '@angular/core';
import { ContractServiceService } from 'src/app/service/contract-service.service';
import { environment } from 'src/environments/environment';
declare var Web3:any;

@Pipe({
  name: 'fromEther'
})
export class FromEtherPipe implements PipeTransform {
  transform(value: any): string | number {
    let val:string = '';
    try {
      val = Web3.utils.fromWei(`${value}` || 0)
    } catch (e) {
      console.warn(e);
    }
    return val.substring(0, 8);
  }

  convertToViewAble(num:any, decimal = 8) {
    if (num && !isNaN(num)) {
        let toShow = (num / environment.decimals).toFixed(18);
        let nums:any = toShow.toString().split('.');
        if (nums.length >= 2) {
            nums[1] = nums[1].substr(0, decimal);
        }
        nums = nums.join('.')
        return nums
    } else {
        return 0;
  }
}

}

@Pipe({
  name: 'toEther'
})
export class ToEther implements PipeTransform {

  constructor(private contractService: ContractServiceService) {

  }
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.contractService.convertValueToEther(value);
  }

}
