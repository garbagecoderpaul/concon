import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var window: any;
declare var ethereum: any;
declare var Web3: any;
import Swal from 'sweetalert2';
import { UserBalance } from 'src/app/models/user-balance';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
declare var window: any;
declare var ethereum: any;
declare var Web3: any;

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {
  Web3Modal: any = window.Web3Modal?.default;
  WalletConnectProvider: any = window.WalletConnectProvider?.default;
  EvmChains: any = window.EvmChains;
  Fortmatic: any = window.Fortmatic;
  // const web3Modal = new Web3Modal();

  web3: any;
  web3Modal: any;
  provider: any;
  public selectedAccount: any;
  public accountSelected:string="";
  isConnected: boolean = false;
  public userBalance: UserBalance = new UserBalance();

  usdSDValue = { price: 1.09, toCalimAmount: (5*1.09)};
  public tokenAbicode = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "cap", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "distributionContract", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_distributionContract", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }];
  // live
  public tokenAddress = '0x0Df044b7f0aadfEaB21bC134fE525A19484Ac133';
  public tokenContractSet: any;

  public connectionStatus = new BehaviorSubject<any>(null);
  circulatingSupplyBal:any = 0;

  globeData : any;
  chainId = 5;


  constructor(
    private https: HttpClient
  ) {
    this.loadConversionPrice();
  }
  
  loadConversionPrice() {
    this.https.get(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=MATIC`).subscribe((res:any) => {
      // console.log(res);
      if(res?.MATIC) {
        this.usdSDValue.price = res?.MATIC;
        this.usdSDValue.toCalimAmount = (5* this.usdSDValue.price)
      }
    })
    
  }
  init(WalletType:any) {
    localStorage.setItem("WalletType", WalletType);
    switch(WalletType) {
      case 'WalletConnect':
        this.connectWithWalletConnect();
        break;
      case 'TrustWallet':
        this.connectWithTrustWallet();
        break;
        case 'coinbase':
          this.connectWithCoinBase();
        break;
        case 'torus':
          this.connectWithTorus();
        break;
        case 'enkrypt':
          this.connectWithMyEtherWallet();
          break;
      default :
        this.connectWithMetaMask();
        break;
    }
    // this.connect();
  }

  connectWithTrustWallet(){
    try {
      if(this.isTrustWalletInstalled()){
        this.provider = ethereum;
        this.provider.request({ method: 'eth_requestAccounts' }).then((address: any) => {});
        this.bindEvents();
      } else {
        this.notInstalled('TrustWallet')
      }
    } catch(e) {
      this.unabletoConnect();
    }
  }

  async connectWithWalletConnect(){
    try{
      const providerOptions = {
        walletconnect: {
          package: this.WalletConnectProvider,
          options: {
            rpc: {
              // 56: "https://bsc-dataseed.binance.org",
              // 80001: "https://rpc-mumbai.maticvigil.com/"
              5 :"https://rpc.goerli.mudit.blog"
            },
          }
        },
      };
  
      this.web3Modal = new this.Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: true
      });
      this.provider = await this.web3Modal.connect('walletconnect');
      this.bindEvents();
    } catch(e) {
      this.unabletoConnect();
    }
  }

  async connectWithMetaMask() {
    try {
      // if (typeof window.ethereum !== 'undefined') {
      //   // Disconnect from any previously connected wallet
      //   await window.ethereum.disconnect();
      // }
      
        if(this.isMetaMaskInstalled()){
          this.provider = ethereum;
          this.provider.request({ method: 'eth_requestAccounts' }).then((address: any) => {});
          this.bindEvents();
        } else {
          this.notInstalled('Metamask')
        }
      
    } catch(e) {
      this.unabletoConnect();
    }
  }

  async connectWithCoinBase(){
    try {
      // if (typeof window.ethereum !== 'undefined') {
      //   // Disconnect from any previously connected wallet
      //   await window.ethereum.disconnect();
      // }
      
        if(this.isCoinbaseInstalled()){
          this.provider = ethereum;
          this.provider.request({ method: 'eth_requestAccounts' }).then((address: any) => {});
          this.bindEvents();
        } else {
          this.notInstalled('coinbase')
        }
      
     
    } catch(e) {
      this.unabletoConnect();
    }
  }

  async connectWithTorus(){
    try{
      const providerOptions = {
        walletconnect: {
          package: this.WalletConnectProvider,
          options: {
            rpc: {
              // 56: "https://bsc-dataseed.binance.org",
              // 80001: "https://rpc-mumbai.maticvigil.com/"
              5 :"https://rpc.goerli.mudit.blog"
            },
          }
        },
      };
  
      this.web3Modal = new this.Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: true
      });
      this.provider = await this.web3Modal.connect('torus');
      this.bindEvents();
    } catch(e) {
      this.unabletoConnect();
    }
  }

  async connectWithMyEtherWallet(){
    try {
        if(this.isMyEtherWalletInstalled()){
          this.provider = ethereum;
          this.provider.request({ method: 'eth_requestAccounts' }).then((address: any) => {});
          this.bindEvents();
        } else {
          this.notInstalled('enkrypt')
        }
    } catch(e) {
      this.unabletoConnect();
    }
  }

  async bindEvents() {
    try{
      // Subscribe to accounts change
        this.provider.on("accountsChanged", (accounts: any) => {
          this.selectAcccount(accounts[0]);
        });

        // Subscribe to chainId change
        this.provider.on("chainChanged", (chainId: any) => {
          if (chainId != this.chainId) {
            this.chainNotSupported();
          }
        });

        // Subscribe to chainId change
        this.provider.on("networkChanged", () => {
          if (this.chainId == ethereum.networkVersion) {
            this.chainNotSupported();
          }
        });

        // Subscribe to session disconnection
        this.provider.on("disconnect", (code: any, reason: any) => {
          console.log('dsadsa')
          this.clearAll();
        });

        this.web3 = new Web3(this.provider);
        const chainId = await this.web3.eth.getChainId();
        const accounts =  await this.web3.eth.requestAccounts();
        const maticBalance =  await this.web3.eth.getBalance(accounts[0]);
        const account = accounts[0];
        if (chainId == this.chainId) {
          this.selectAcccount(account);
        } else {
          this.chainNotSupported();
        }
        
    } catch(e) {

    }
  
  }

  notInstalled(type:any) {
    Swal.fire(
      'Oops!',
      `${type} not installed, please try other methods`,
      'error'
    )
  }
  unabletoConnect() {
    Swal.fire(
      'Oops!',
      `Something went wrong while connecting, please try again.`,
      'error'
    )
  }

  async connect() {
    try {
      try {
        if (!this.isMetaMaskInstalled()) {
          this.provider = await this.web3Modal.connect('walletconnect');
        } else {
          this.provider = ethereum;
          this.provider.request({ method: 'eth_requestAccounts' }).then((address: any) => {

          });
        }
      } catch (e) {
        Swal.fire(
          'Oops!',
          `something went wrong while connecting.`,
          'error'
        )
        return;
      }
      // Subscribe to accounts change
      this.provider.on("accountsChanged", (accounts: any) => {
        this.selectAcccount(accounts[0]);
      });

      // Subscribe to chainId change
      this.provider.on("chainChanged", (chainId: any) => {
        if (chainId != this.chainId) {
          this.chainNotSupported();
        }
      });

      // Subscribe to chainId change
      this.provider.on("networkChanged", () => {
        if (this.chainId == ethereum.networkVersion) {
          this.chainNotSupported();
        }
      });

      // Subscribe to session disconnection
      // this.provider.on("disconnect", (code: any, reason: any) => {
      //   this.clearAll();
      // });

      this.web3 = new Web3(this.provider);
      const chainId = await this.web3.eth.getChainId();

      const accounts = await this.web3.eth.getAccounts();
      const account = accounts[0];
      if (chainId == this.chainId) {
        this.selectAcccount(account);
      } else {
        this.chainNotSupported();
      }


    } catch (e) {
      // console.log('authenticate failed', e);
    }
  }

  selectAcccount(account: any) {
    if (account) {
      this.selectedAccount = account;
      this.accountSelected = account;
      
      this.isConnected = true;
      // const web3 = new Web3(window.ethereum);
            const accounts =  this.web3.eth.requestAccounts();
            const maticBalance =  this.web3.eth.getBalance(this.selectedAccount);
            if(!localStorage.getItem('walletAddress')){
      Swal.fire(
        'Wallet Connected',
        `${this.selectedAccount} has been connected`,
        'success'
      )}
      this.getBalance()
      this.connectionStatus.next(this.selectedAccount)
    } else {
      this.clearAll();
    }
  }

  chainNotSupported() {
    Swal.fire(
      'Unsupported Network',
      `Please change network to GoerliETH`,
      'error'
    )
  }

  isMetaMaskInstalled() {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }

  isTrustWalletInstalled() {
    return Boolean((window.ethereum && window.ethereum.isTrust) || (window.trustwallet.solana.isTrust));
  }

  isCoinbaseInstalled() {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }
  isTrustInstalled() {
    return Boolean(window.ethereum && window.ethereum.isTrust);
  }
  isWalletConnectInstalled() {
    return Boolean(window.ethereum && window.ethereum.walletConnect );
  }
  isTorusWalletInstalled() {
    return Boolean(window.ethereum && window.ethereum.isTorus );
  }
  isMyEtherWalletInstalled() {
    return Boolean(window.ethereum && window.ethereum.isEnkrypt)
  }

  // getBalance() {

  //   this.userBalance.address = this.selectedAccount;
  //   return this.userBalance.balances;
    
  // }
  async getBalance() {

      // Get the balance of the specified Ethereum address
      const balanceWei = await this.web3.eth.getBalance(this.selectedAccount);
      this.userBalance.balances.mainBalance = balanceWei
      this.userBalance.balances.mainBalanceEther = this.web3.utils.fromWei(balanceWei, 'ether')
      // Convert balance to Ether
      this.addWalletHistory(this.selectedAccount,this.userBalance.balances.mainBalanceEther);
      localStorage.setItem("walletAddress", this.selectedAccount);
      
      return this.userBalance.balances.mainBalanceEther;
  }


  clearAll() {
    this.userBalance = new UserBalance();
    this.selectedAccount = null;
      localStorage.removeItem("walletAddress");
      localStorage.removeItem("WalletType");
      localStorage.clear();
      Swal.fire(
        'Wallet Disconnected',
        `Your account has been disconnected`,
        'warning'
      )
    this.connectionStatus.next(null)
  }

  async onDisconnect() {
    if (this.provider.close) {
      await this.provider.close();
      await this.web3Modal.clearCachedProvider();
      this.provider = null;
    }
    this.selectedAccount = null;
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("WalletType");
    this.isConnected = false;
    this.connectionStatus.next(null)
    Swal.fire(
      'Wallet Disconnected',
      `Your account has been disconnected`,
      'warning'
    )
  }

  async transferMain(fromAddress: string, toAddress: string, amount: any) {
    let val = this.web3.utils.toWei(`${amount}`, 'ether');
    const receipt = await this.web3.eth.sendTransaction({
      from: fromAddress, // The user's active address.
      to: '0x4aE32E2dD715cD99e9D1c8f2043945F97FF50FB0', // Required except during contract publications.
      value: val, // Only required to send ether to the recipient from the initiating external account.
    })
    return receipt;
  }

  async transfer(fromAddress: string, toAddress: string, amount: any) {
    let val = this.web3.utils.toWei(`${amount}`, 'ether');
    let tokenContractSet = await new this.web3.eth.Contract(this.tokenAbicode, this.tokenAddress);
    let transfer = await tokenContractSet.methods.transfer(toAddress, val).send({ from: fromAddress });
    return transfer;
  }

  async approve(amount: any, toAddress: string) {
    let amt = this.convertValueToEther(amount);
    let tokenContractSet = await new this.web3.eth.Contract(this.tokenAbicode, this.tokenAddress);
    return await tokenContractSet.methods.approve(toAddress, amt).send({ from: this.selectedAccount });
  }

  convertTOusdPrice(amount: any = 0) {
    return parseFloat(this.convertEtherToValue(amount)) * this.usdSDValue.price;
  }
  convertValueToEther(value: any) {
    return Web3.utils.toWei(`${value}` || 0)
  }

  convertEtherToValue(value: any) {
    return Web3.utils.fromWei(`${value}` || 0)
  }

  handleError(error:any) {
    let err;
    try {
      let sr = JSON.parse(error.toString().substr(error.toString().indexOf('{')));
      err = sr.message;
    } catch (er) {
      err = error.message;
    }
    Swal.fire({
      title: 'Error!',
      text: err,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
  addWalletHistory(acc,bal){
    let body = {
     "wallet_address": acc,
     "balance":  bal,
     "activity": "Wallet Connected"
    }
     this.https.post(`${environment.baseApi}/addWalletHistory`,body).subscribe((res:any)=>{
       console.log(res);
     })
     
   }
}
