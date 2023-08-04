import { Pipe, PipeTransform } from '@angular/core';
import { ContractServiceService } from 'src/app/service/contract-service.service';

@Pipe({
  name: 'toDollar'
})
export class ToDollarPipe implements PipeTransform {

  constructor(private contractService: ContractServiceService) {

  }
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.contractService.convertTOusdPrice(value);
  }

}
