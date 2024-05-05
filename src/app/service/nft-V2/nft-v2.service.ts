import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBalance } from 'src/app/models/user-balance';
import { environment } from 'src/environments/environment';
import { ContractServiceService } from '../contract-service.service';

@Injectable({
  providedIn: 'root'
})
export class NftV2Service {
  nftCardContractAbi = [{"inputs":[{"internalType":"contract ERC1155Tradable","name":"_NFTFactoryAddress","type":"address"},{"internalType":"contract IERC20","name":"tokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"card","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"points","type":"uint256"}],"name":"CardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeemed","type":"event"},{"constant":true,"inputs":[],"name":"NFTFactory","outputs":[{"internalType":"contract ERC1155Tradable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"cardId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addCard","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cardCosts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"card","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_fundAddress","type":"address"}],"name":"setFundAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ERC1155Tradable","name":"_NFTFactoryAddress","type":"address"}],"name":"setNFTFactoryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalTokenSpend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
  nftCardContractAddress = '0x6Dc1b4BD3A977017e205ff15a72641E8F7c78C6a';
  nftCardContractSet: any;

  nftMainContractAbi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenMaxSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"uri","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_ids","type":"uint256[]"},{"name":"_amounts","type":"uint256[]"},{"name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"removeMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceWhitelistAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"removeWhitelistAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"uint256"},{"name":"_quantity","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addWhitelistAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newURI","type":"string"}],"name":"setBaseMetadataURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"maxSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"endMinting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxSupply","type":"uint256"},{"name":"_initialSupply","type":"uint256"},{"name":"_uri","type":"string"},{"name":"_data","type":"bytes"}],"name":"create","outputs":[{"name":"tokenId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isWhitelistAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_addresses","type":"address[]"}],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"creators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"isOperator","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_id","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_id","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_proxyRegistryAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"WhitelistAdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"WhitelistAdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_uri","type":"string"},{"indexed":true,"name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_operator","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_operator","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_ids","type":"uint256[]"},{"indexed":false,"name":"_amounts","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];
  nftMainContractAddress = '0x7f589e8cA7F5B22D25a9f17cD31713189Fa4C026';
  nftMainContractSet: any;
  public userBalance: UserBalance = new UserBalance();
  private selectedAccount: string = '';
  constructor(private http: HttpClient, public connectionService: ContractServiceService) {
    this.connectionService.connectionStatus.subscribe(connection => {
      this.selectedAccount = (connection) ? this.connectionService.selectedAccount : '';
      if (this.selectedAccount) {
        this.getUpdatedBalance();
      }
    })

    if(this.connectionService.web3) {
      this.setContract();
      this.setMainContract();
    }
     
  }

  async setContract() {
    if(!this.nftCardContractSet) {
      this.nftCardContractSet = await new this.connectionService.web3.eth.Contract(this.nftCardContractAbi, this.nftCardContractAddress);
    }
    return this.nftCardContractSet;
  }

  async setMainContract() {
    if(!this.nftMainContractSet) {
      this.nftMainContractSet = await new this.connectionService.web3.eth.Contract(this.nftMainContractAbi, this.nftMainContractAddress);
    }
    return this.nftMainContractSet;
  }

  async getUpdatedBalance() {
    await this.connectionService.getBalance();
    this.userBalance = this.connectionService.userBalance;
  }

  async transferNftToken(nftId:any, toAddress:string, amount:any) {
    // redeem
    await this.setMainContract();
    return await this.nftMainContractSet.methods.safeTransferFrom(this.selectedAccount, toAddress, nftId, amount, 0x0).send({ from: this.selectedAccount});


  }

  async redeemToken(card:any) {
    // redeem
    await this.setContract();
    return await this.nftCardContractSet.methods.redeem(card).send({ from: this.selectedAccount});


  }

  // https calls
  nftMint(address:any):Observable<any> {
    return this.http.get(`${environment.baseApi}/mintNft?address=${address}&nft_id=2&nft_quantity=1&nft_data=0x0`);
  }

  resetPassword(data:any):Observable<any> {
    return this.http.post(`${environment.baseApi}/resetPassword?lang=en`, data);
  }

  confirmation(data:any):Observable<any> {
    return this.http.get(`${environment.baseApi}/confirmation/${data}/?lang=en`);
  }

  emailconfirmation(data:any):Observable<any> {
    return this.http.get(`${environment.baseApi}/emailconfirmation/${data}/?lang=en`);
  }

  addNfthistory(body:any):Observable<any> {
    return this.http.post(`${environment.baseApi}/addNfthistory`, body);
  }

  getNfthistory(address:any):Observable<any> {
    let pram = address ? `address=${address}` : '';
    return this.http.get(`${environment.baseApi}/getNfthistory?${pram}`);
  }

  getNfData(Limit:any, startFrom:any, searchStr = '', type='5', address = ''):Observable<any> {    
    return this.http.post(`${environment.baseApi}/getallnft`, {
      start:startFrom,
      limit:Limit,
      searchStr:searchStr,
      typeUser:type,
      address:address
    });
  }

  getNftDetail(id:any):Observable<any> {    
    return this.http.get(`${environment.baseApi}/getNftDetail/${id}`);
  }

  handleError(error: any) {
    let err = '';
    try {
      let sr = JSON.parse(error.toString().substr(error.toString().indexOf('{')));
      err = sr.message;
    } catch (er) {
      err = error.message;
    }
    return err;
  }
  
}
