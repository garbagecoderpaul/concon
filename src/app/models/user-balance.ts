export class UserBalance { 
    address?: string;
    balances = {
        // general
        mainBalance:0, //wei
        mainBalanceEther:0, //ether
        usdBnb:0, //floating number
        zyth:0, //ether
        usdZyth:0, //floating number
        
        // staking
        circulatingSupply: '16534795.5348', // floating number
        stakeBal:0, //ether
        usdstakeBal:0, //floating number
        earnedBal:0, // ether,
        usdEarnedBal:0, // ether,
        rewardBal: 0, //ether
        usdRewardBal: 0, //floating number
        totalSkated: 4107866.28940944,// 11683519.46, // ether
        totalPercent: 36, //
        usdTotalSkated:0, // floating number
        totalSkatedV1:0, // ether
        usdTotalSkatedV1:0, // floating number
        totalSkatedV2:0, // ether
        usdTotalSkatedV2:0, // floating number
        stakeAddressV2:0, //ether

    }
}