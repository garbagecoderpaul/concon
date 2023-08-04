import { Injectable } from '@angular/core';
import { UserBalance } from 'src/app/models/user-balance';
import { environment } from 'src/environments/environment';
import { ContractServiceService } from '../contract-service.service';

@Injectable({
  providedIn: 'root'
})
export class StakeV1Service {
    stakeabicode = [{ "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_stakingToken", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldOwner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnerChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnerNominated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "isPaused", "type": "bool" }], "name": "PauseChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstaked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "IntervalRewardsOf1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "divider", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lastPauseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "minimunStake1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "nominateNewOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "nominatedOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bool", "name": "_paused", "type": "bool" }], "name": "setPaused", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "stakingToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalStaked1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unstake1", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "num", "type": "uint256" }], "name": "updateDivider", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "updateMinimumStakeAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "user", "outputs": [{ "internalType": "uint256", "name": "stakedBal1", "type": "uint256" }, { "internalType": "uint256", "name": "stakedTime1", "type": "uint256" }, { "internalType": "uint256", "name": "lockTime1", "type": "uint256" }, { "internalType": "uint256", "name": "rewardBal", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawReward1", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawTokens", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
  stakeAdrress = environment.stakeAddressV2;
  stakeContractSet: any;
  public userBalance: UserBalance = new UserBalance();
  private selectedAccount: string = '';
  constructor(public connectionService: ContractServiceService) {
    this.connectionService.connectionStatus.subscribe(connection => {
      this.selectedAccount = (connection) ? this.connectionService.selectedAccount : '';
      if (this.selectedAccount) {
        this.getStakeBalance();
      } else {
        this.clearAll();
      }
    })
    if (this.connectionService.selectedAccount) {
      this.getStakeBalance();
    }
  }

  clearAll() {
    Object.assign(this.connectionService.userBalance.balances,
      {
        stakeBal: 0, rewardBal: 0, totalSkated: 0, earnedBal: 0,
        usdstakeBal: 0, usdRewardBal: 0, usdTotalSkated: 0, usdEarnedBal: 0,
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

    let totalSkated = await stakeContractSet.methods.totalStaked1().call();
    this.connectionService.userBalance.balances.totalSkated = totalSkated || '0';
    this.connectionService.userBalance.balances.usdTotalSkated = await this.connectionService.convertTOusdPrice(totalSkated || 0);;

    this.userBalance = this.connectionService.userBalance
  }

  async approve(amount: any) {
    let amt = this.connectionService.convertValueToEther(amount);
    let tokenContractSet = await new this.connectionService.web3.eth.Contract(this.connectionService.tokenAbicode, this.connectionService.tokenAddress);
    return await tokenContractSet.methods.approve(this.stakeAdrress, amt).send({ from: this.selectedAccount });
  }

  async stake(amount: any) {
    let amt = this.connectionService.convertValueToEther(amount);
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    return await stakeContractSet.methods.stake(amt).send({ from: this.selectedAccount });
  }

  async unstake(amount: any) {
    let amt = this.connectionService.convertValueToEther(amount);
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    return await stakeContractSet.methods.unstake1().send({ from: this.selectedAccount });
  }

  async reward() {
    let stakeContractSet = await new this.connectionService.web3.eth.Contract(this.stakeabicode, this.stakeAdrress);
    return await stakeContractSet.methods.withdrawReward1().send({ from: this.selectedAccount });
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
