import { Injectable } from '@angular/core';
import { UserBalance } from 'src/app/models/user-balance';
import { environment } from 'src/environments/environment';
import { ContractServiceService } from '../contract-service.service';

@Injectable({
  providedIn: 'root'
})
export class StakeV2Service {
  stakeabicode = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerNominated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPaused","type":"bool"}],"name":"PauseChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"IntervalRewardsOf1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"divider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastPauseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimunStake1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"nominateNewOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nominatedOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unstake1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"updateDivider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMinimumStakeAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user","outputs":[{"internalType":"uint256","name":"stakedBal1","type":"uint256"},{"internalType":"uint256","name":"stakedTime1","type":"uint256"},{"internalType":"uint256","name":"lockTime1","type":"uint256"},{"internalType":"uint256","name":"rewardBal","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawReward1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
  stakeAdrress = environment.stakeAddressV2;

  stakeabicodeV1 = [{ "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "earned", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "removeRewardSupply", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "stakeReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "nominateNewOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_paused", "type": "bool" }], "name": "setPaused", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "stakeTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "unstake", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_rewardInterval", "type": "uint256" }], "name": "setRewardsInterval", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "nominatedOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "startIndex", "type": "uint256" }, { "name": "endIndex", "type": "uint256" }], "name": "updateChunkUsersRewards", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "lockInReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "minStakeBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "withdrawUnstakedBalance", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stakingToken", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "addRewardSupply", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "nextRewardApplicableTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "stakedIntervalsCountOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "unstakingTimeOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardDistributorBalanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastPauseTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_minStakeBalance", "type": "uint256" }], "name": "setMinStakeBalance", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_rewardPerIntervalDivider", "type": "uint256" }], "name": "setRewardsDivider", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "allAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "perIntervalRewardOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "unstakingBalanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getAddressesLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPerIntervalDivider", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "rewardBalanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "i", "type": "uint256" }], "name": "getAddresses", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_stakingToken", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "reward", "type": "uint256" }], "name": "RewardAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Unstaked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "reward", "type": "uint256" }], "name": "RewardWithdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "reward", "type": "uint256" }], "name": "RewardPaid", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newDuration", "type": "uint256" }], "name": "RewardsDurationUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "token", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Recovered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "isPaused", "type": "bool" }], "name": "PauseChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newOwner", "type": "address" }], "name": "OwnerNominated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "oldOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" }], "name": "OwnerChanged", "type": "event" }];
  stakeAdrressV1 = environment.stakeAddressV1;

  stakeContractSet:any;
  zythSuplly:any = 0;
  public userBalance:UserBalance = new UserBalance();
  public selectedAccount:string = '';
  constructor(public connectionService: ContractServiceService) {
    this.connectionService.connectionStatus.subscribe(connection => {
        this.selectedAccount = (connection) ? this.connectionService.selectedAccount : '';
        if(this.selectedAccount) {
          this.getStakeBalance();
        } else {
          this.clearAll();
        }
    })
    if(this.connectionService.selectedAccount) {
      this.getStakeBalance();
    }
  }

  clearAll() {
    Object.assign(this.connectionService.userBalance.balances, 
      { 
        stakeBal:0, rewardBal:0, totalSkated:0, earnedBal:0,
        usdstakeBal:0, usdRewardBal:0, usdTotalSkated:0, usdEarnedBal:0,
      }
    )
  }

  async getStakeBalance() {
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    let balance = await stakeContractSet.methods.user(this.selectedAccount).call();
    this.connectionService.userBalance.balances.stakeBal = balance?.stakedBal1 || '0';
    this.connectionService.userBalance.balances.usdstakeBal = await this.connectionService.convertTOusdPrice(this.connectionService.userBalance.balances.stakeBal || 0);
    this.connectionService.userBalance.balances.rewardBal = balance?.rewardBal || '0';
    this.connectionService.userBalance.balances.usdRewardBal = await this.connectionService.convertTOusdPrice(this.connectionService.userBalance.balances.rewardBal || 0);

    let earnedBal = await stakeContractSet.methods.IntervalRewardsOf1(this.selectedAccount).call();
    this.connectionService.userBalance.balances.earnedBal = earnedBal || '0';
    this.connectionService.userBalance.balances.usdEarnedBal = await this.connectionService.convertTOusdPrice(earnedBal || 0);

    await this.calculateSupply();
    this.userBalance = this.connectionService.userBalance
  }

  async approve(amount:any) {
    let amt = this.connectionService.convertValueToEther(amount);
    let tokenContractSet = await new this.connectionService.web3.eth.Contract(this.connectionService.tokenAbicode, this.connectionService.tokenAddress);
    return await tokenContractSet.methods.approve(this.stakeAdrress, amt).send({ from: this.selectedAccount });
  }

  async stake(amount:any) {
    let amt = this.connectionService.convertValueToEther(amount);
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    return await stakeContractSet.methods.stake(amt).send({ from: this.selectedAccount });
  }

  async unstake(amount:any) {
    let amt = this.connectionService.convertValueToEther(amount);
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    return await stakeContractSet.methods.unstake1().send({ from: this.selectedAccount });
  }

  async reward() {
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    return await stakeContractSet.methods.withdrawReward1().send({ from: this.selectedAccount });
  }

  async calculateSupply() {
    let stakeContractSetV1 = await new this.connectionService.web3.eth.Contract(this.stakeabicodeV1, this.stakeAdrressV1);
    let stakeContractSetV2 = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    console.log(stakeContractSetV2);
    let tokenContractSet = await new this.connectionService.web3.eth.Contract(this.connectionService.tokenAbicode, this.connectionService.tokenAddress);
    let balance = await tokenContractSet.methods.balanceOf(environment.stakeAddressV2).call();
    
    let totalSkatedV2:any = balance // await stakeContractSetV2.methods.getBalance().call(); //stakeContractSetV2.methods.totalStaked1().call(); //await '11683519461120029002542442';
    this.connectionService.userBalance.balances.totalSkatedV2 = totalSkatedV2 || '0';
    this.connectionService.userBalance.balances.usdTotalSkatedV2 = await this.connectionService.convertTOusdPrice(totalSkatedV2 || 0)

    let totalSkatedV1 = await stakeContractSetV1.methods.totalSupply().call();
    this.connectionService.userBalance.balances.totalSkatedV1 = totalSkatedV1 || '0';
    this.connectionService.userBalance.balances.usdTotalSkatedV1 = await this.connectionService.convertTOusdPrice(totalSkatedV1 || 0)

    // this.connectionService.userBalance.balances.totalSkated = ( parseFloat(this.connectionService.convertEtherToValue(totalSkatedV1)) + parseFloat(this.connectionService.convertEtherToValue(totalSkatedV2)))
    this.connectionService.userBalance.balances.totalSkated = ( parseFloat(this.connectionService.convertEtherToValue(totalSkatedV2)))

    if(this.userBalance?.balances) { 
      this.userBalance.balances = this.connectionService.userBalance.balances;
      this.userBalance.balances.totalPercent = ((  this.connectionService.userBalance.balances.totalSkated / 25000000 ) * 100)
    }
  }


  handleError(error:any) {
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
