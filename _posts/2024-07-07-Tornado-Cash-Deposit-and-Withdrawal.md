---
layout: single
title: "Tornado Cash Deposit and Withdrawal via CLI"
excerpt_separator: <!--more-->
tags: Blockchain
author_profile: true
read_time: true
toc: true
classes: wide
---

The Instructions for Tornado Cash Deposit and Withdrawal via CLI

<!--more-->

---
### Declaration

- Tornado Cash was sanctioned by the [U.S. Treasury](https://home.treasury.gov/news/press-releases/jy0916) on 08/08/2022,
    
    making it **illegal for U.S. citizens to interact with the core and governance contracts**.

- This blog is for **<span style="color:Red">Research Purposes ONLY</span>**. 

-  <span style="color: red; text-decoration: underline; text-decoration-color: red;"><b>ALL CRIMES WILL BE BROUGHT TO JUSTICE.</b></span>


---
### System Information

Intel x86-64 + Ubuntu 22.04.4 LTS + Linux 6.5.0-25-generic


---
### Step 1 - Node.js Installation

1. Install **Node.js** using [Package Manager](https://nodejs.org/en/download/package-manager):

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    nvm install 14
    ```

    Note that the Tornado Cash CLI used in this blog only supports `v14.21.3`

2. Optional - If you have multiple versions of **Node.js**:
   
   ```
   nvm use 14
   ```

   which displays `Now using node v14.21.3 (npm v6.14.18)`

3. Check **Node.js** and **NPM** versions after **Node.js** installation completes:
   
   ```
   node --version
   ```

   which should be `v14.21.3`

   ```
   npm --version
   ```
   which currently is `6.14.18`


---
### Step 2 - Tornado Cash CLI Installation (Build from Source)

Ref-1: [GitHub-Official-Repository](https://github.com/tornadocash/tornado-cli/) (public archive after the OFAC sanctions)

Ref-2: [Community-Repository](https://git.tornado.ws/tornadocash/tornado-cli) & [Docs](https://docs.tornado.ws/) (please pay attention to any difference from the official one)

1. Dependencies:

    ```
    sudo apt-get update
    sudo apt-get install build-essential
    ```

2. Build **Tornado Cash CLI**:

    Optional-1-Official Version:

    ```
    git clone https://github.com/tornadocash/tornado-cli.git
    mv tornado-cli tornado-cash-cli-official
    cd tornado-cash-cli-official
    ```

    ```
    npm install
    ```

    Optional-2-Community Version:

    ```
    git clone https://github.com/tornadocash/tornado-cli.git
    mv tornado-cli tornado-cash-cli-community
    cd tornado-cash-cli-community
    ```

    ```
    npm install 
    ```

    Note that the official version has issues with the function `fetchGasPrice()` in the file `cli.js` (Line 702) due to the lack of necessary maintenance. **<span style="color:Red">If you do not trust Tornado Cash Community, please fix all possible issues by yourself.</span>**

    <b><u>All the following steps are run on the community version but should also work with the official version.</u></b>


---
### Step 3 - Deposit ETH into Tornado Cash

Use the following command:

```
node cli.js deposit <currency> <amount> \ 
--rpc <rpc-url> --tor <tor-port> --private-key <private-key> --gas-speed <gas-speed>
```

- Parameter `<currency>`: set it to `ETH` for depositing ETH

- Parameter `<amount>`: select from `[ 0.1, 1, 10, 100 ]` when depositing ETH

- Parameter `<rpc-url>`: set it to the URL of RPC provider

    which can be selected from RPC Server Address under Ethereum on [chainlist](https://chainlist.org/) 
    
    Please choose the ones that ensure privacy since many RPC providers (i.e., [Infura](https://www.infura.io/) & [Alchemy](https://www.alchemy.com/)) censor Tornado Cash.

    **<span style="color:Red">Highly recommend</span>** to use [Ethereum Archive Node](https://zzpolariszz.github.io/Ethereum-Archive-Node/) built by yourself as the RPC provider: `http://localhost:8545`

- Parameter `<tor-port>`: set it to `9150` when using Tor Browser, or `9050` when using Tor standalone

    **<span style="color:Red">Highly recommend</span>** to use [Tor Project](https://zzpolariszz.github.io/Tor-Project/) when you are using a public RPC provider to hide your IP Address

    Note that you do not have access to your own Ethereum Archive Node when using Tor (need more configuration)

- Parameter `<private-key>`: set it to the private key of Ethereum Account who sends deposit transaction (Pay Tx Fee)

- Parameter `gas-speed`: select from `[ instant, fast, standard, low ]` 

A successful deposit process looks like this:

```
Connecting to remote node
Local RPC detected
Creating new random deposit note
Your note: <your-deposit-note>
Backed up deposit note as ./backup-<your-deposit-note>.txt
Tornado contract balance is XXX1 ETH
Sender account balance is YYY1 ETH
Submitting deposit transaction
Gas price:  AAAA
Gas limit:  BBBB
Transaction fee:  CCCC ETH
Transaction cost:  DDDD ETH
Confirm the transaction [Y/n] Y
Submitting transaction to the remote node
View transaction on block explorer https://etherscan.io/tx/<your-deposit-transaction>
Tornado contract balance is XXX2 ETH
Sender account balance is YYY2 ETH
```

---
### Step 4 - Withdraw ETH from Tornado Cash

#### If you DO use Tornado Cash Relayer

Use the following command:

```
node cli.js withdraw <deposit-note> <recipient> \
--rpc <rpc-url> --tor <tor-port> --relayer <relayer-url>  --gas-speed <gas-speed>
```

**<span style="color:Red">For the first withdrawal to new ethereum account without ETH Balance</span>**

- Parameter `<deposit-note>`: set it to the deposit note generated by the deposit process (not the backup file)

- Parameter `<recipient>`: set it to the public key (address) of Ethereum Account who receives the ETH

- Parameter `<rpc-url>`: set it to the URL of RPC provider

    which can be selected from RPC Server Address under Ethereum on [chainlist](https://chainlist.org/) 
    
    Please choose the ones that ensure privacy since many RPC providers (i.e., [Infura](https://www.infura.io/) & [Alchemy](https://www.alchemy.com/)) censor Tornado Cash.

    **<span style="color:Red">Highly recommend</span>** to use [Ethereum Archive Node](https://zzpolariszz.github.io/Ethereum-Archive-Node/) built by yourself as the RPC provider: `http://localhost:8545`

- Parameter `<tor-port>`: set it to `9150` when using Tor Browser, or `9050` when using Tor standalone

    **<span style="color:Red">Highly recommend</span>** to use [Tor Project](https://zzpolariszz.github.io/Tor-Project/) when you are using a public RPC provider to hide your IP Address

    Note that you do not have access to your own Ethereum Archive Node when using Tor (need more configuration)

- Parameter `<relayer-url>`: set it to the URL of Tornado Cash Relayer on Ethereum (Pay Tx Fee). 

- Parameter `gas-speed`: select from `[ instant, fast, standard, low ]` 

    Here are some active relayers (unverified):

    | Relayer-URL                       | ENS Name       | Address                                                                                     | Service Fee   |
    |-----------------------------------|----------------|------------------------------------------------------------------------------------------|-------|
    | https://black-hardy.com/          | k-relayer.eth  | [0xC494...e35c](https://etherscan.io/address/0xC49415493eB3Ec64a0F13D8AA5056f1CfC4ce35c) | &nbsp; &nbsp; 0.43% |
    | https://eth.t-relayer.com/        | t-relayer.eth  | [0x0000...74fe](https://etherscan.io/address/0x000000Cd6521Ed1a65FAe0678eA15aF4EEAD74fe) | &nbsp; &nbsp; 0.43% |
    | https://torn.relayersdao.finance/ | relayer007.eth | [0xa010...f012](https://etherscan.io/address/0xa0109274F53609f6Be97ec5f3052C659AB80f012) | &nbsp; &nbsp; 0.39% |
    | https://eth.reltor.su/            | reltor.eth     | [0x4750...29C5](https://etherscan.io/address/0x4750BCfcC340AA4B31be7e71fa072716d28c29C5) | &nbsp; &nbsp; 0.42% |
    
A successful withdrawal process using a relayer looks like this:

```
Connecting to remote node
Local RPC detected
Relay address: <relayer-address>
Loaded cached XXX ETH deposit events for BBB1 block
Fetching XXX ETH deposit events for Ethereum network
Querying latest events from RPC
...
Fetched XXX ETH deposit events to block: BBB2
Added XXX ETH deposit zero event to block: BBB2
Cache updated for Tornado deposit XXX eth instance to block BBB2 successfully
Total deposits: DDDDD
Computing deposit events merkle tree and its root
Generating SNARK proof
Proof time: TTT1s
Generating SNARK proof
Proof time: TTT2s
Sending withdraw transaction through relay
Relayer fee:  FFF1 ETH
Total fees:  FFF2 ETH
Amount to receive:  ZZZ1 ETH 
Confirm the transaction [Y/n] Y
Current job status ACCEPTED, confirmations: undefined
Current job status SENT, confirmations: undefined
Current job status MINED, confirmations: 0
...
Current job status MINED, confirmations: N
Current job status CONFIRMED, confirmations: N+1
Transaction submitted through the relay. 
View transaction on block explorer https://etherscan.io/tx/<your-withdrawal-transaction>
Transaction mined in block BBB3
STATUS CONFIRMED
Recipient balance is ZZZ2 ETH
Done withdrawal from Tornado Cash
```

#### If you DO NOT use Tornado Cash Relayer

Use the following command:

```
node cli.js withdraw <deposit-note> <recipient> \
--rpc <rpc-url> --tor <tor-port> --private-key <private-key>  --gas-speed <gas-speed>
```

**<span style="color:Red">Warning: This will link the recipient and the sender of withdrawal transaction</span>**

- Parameter `<deposit-note>`: set it to the deposit note generated by the deposit process (not the backup file)

- Parameter `<recipient>`: set it to the public key (address) of Ethereum Account who receives the ETH

- Parameter `<rpc-url>`: set it to the URL of RPC provider

    which can be selected from RPC Server Address under Ethereum on [chainlist](https://chainlist.org/) 
    
    Please choose the ones that ensure privacy since many RPC providers (i.e., [Infura](https://www.infura.io/) & [Alchemy](https://www.alchemy.com/)) censor Tornado Cash.

    **<span style="color:Red">Highly recommend</span>** to use [Ethereum Archive Node](https://zzpolariszz.github.io/Ethereum-Archive-Node/) built by yourself as the RPC provider: `http://localhost:8545`

- Parameter `<tor-port>`: set it to `9150` when using Tor Browser, or `9050` when using Tor standalone

    **<span style="color:Red">Highly recommend</span>** to use [Tor Project](https://zzpolariszz.github.io/Tor-Project/) when you are using a public RPC provider to hide your IP Address

    Note that you do not have access to your own Ethereum Archive Node when using Tor (need more configuration)

- Parameter `<private-key>`: set it to the private key of Ethereum Account who sends withdrawal transaction (Pay Tx Fee)

- Parameter `gas-speed`: select from `[ instant, fast, standard, low ]` 


---
### Miscellaneous

- Parameter `gas-speed` seems not to work. Please ignore it and choose a low gas price to deposit and withdraw.

- There is a website [https://ipfs.io/ipns/tornadocash.eth](https://ipfs.io/ipns/tornadocash.eth) deployed on IPFS by Tornado Cash Community (unsure safety)

- Plan to check the difference between community versions ([v1](https://git.tornado.ws/tornadocash/tornado-cli) + [v2](https://git.tornado.ws/tornadocontrib/tornado-cli)) and the official version ([public archive](https://github.com/tornadocash/tornado-cli/))

- Be aware of any ***<span style="color:Red">suspected phishing attempts</span>*** (which could steal your money and identity)

    **<span style="color:Red">Even if they are Tornado Cash Community, Tornado Cash Relayer, and THIS BLOG</span>** 