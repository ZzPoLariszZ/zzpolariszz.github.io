---
layout: single
title: "Ethereum Archive Node (Reth + Lighthouse)"
excerpt_separator: <!--more-->
tags: Blockchain
author_profile: true
read_time: true
toc: true
classes: wide
---

The Installation of Ethereum Archive Node using Reth and Lighthouse

<!--more-->

---
### System Information

- **CPU**: 12th Gen Intel® Core™ i9-12900H Processor

- **Memory**: 32GB (16GB * 2) DDR5-4800 RAM

- **Storage**: 4TB PCIe® 4.0 NVMe™ M.2 Performance TLC SSD (WD_BLACK SN850X from [Hardware Comparison](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038))

- **Network**: 100 Mb/s Download + 20 Mb/s Upload

- **Platform**: Ubuntu 22.04.4 LTS + Linux 6.5.0-25-generic

---
### Step 1 - Rust Installation

1. Install **Rust** using [rustup](https://rustup.rs/):

    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

    During installation, enter 1 for the default installation when prompted

2. Check **Cargo** version after **Rust** installation completes:

    ```
    source $HOME/.cargo/env
    cargo version
    ```

    which is `cargo 1.76.0 (c84b36747 2024-01-18)`

---
### Step 2 - Reth Installation (Build from Source)

Ref: [GitHub](https://github.com/paradigmxyz/reth) & [Docs](https://paradigmxyz.github.io/reth/)

1. Dependencies:
   
   ```
   sudo apt-get update
   sudo apt-get install libclang-dev pkg-config build-essential
   ```

2. Build **Reth**:
   
   ```
   git clone https://github.com/paradigmxyz/reth
   cd reth
   ```

   ```
   cargo install --locked --path bin/reth --bin reth
   ```

3. Check **Reth** version after installation completes:

    ```
    reth --version
    ```

    which is `reth Version: 0.2.0-beta.1`

---
### Step 3 - Lighthouse Installation (Build from Source)

Ref: [GitHub](https://github.com/sigp/lighthouse) & [Docs](https://lighthouse-book.sigmaprime.io/)

1. Dependencies:
   
   ```
   sudo apt-get update
   sudo apt-get install -y git gcc g++ make cmake pkg-config llvm-dev libclang-dev clang
   ```

2. Build **Lighthouse**

    ```
    git clone https://github.com/sigp/lighthouse.git
    cd lighthouse
    ```

    ```
    git checkout stable
    make
    ```

3. Check **Lighthouse** version after installation completes:

    ```
    lighthouse --version
    ```

    which is `Lighthouse v5.0.0-b5bae6e`

---
### Step 4 - Run Ethereum Archive Node on Mainnet

1. Run **Reth** Execution Client

    ```
    RUST_LOG=info reth node
    ```

    > If you want to enable all JSON-RPC namespaces on the HTTP or WebSocket server, you can add:
    > ```
    > --http --http.api all
    > ```
    > then, you can use `localhost:8545` to interact with Reth Execution Node over HTTP JSON-RPC, OR
    > ```
    > --ws --ws.api all
    > ```
    > then, you can use `localhost:8546` to interact with Reth Execution Node over WebSocket JSON-RPC

    > If you want fine-grained JSON-RPC namespaces on the server, you can use:
    > ```
    > --http --http.api eth,web3,net,txpool,debug,trace
    > ```
    > Similarly,
    > ```
    > --ws --ws.api eth,web3,net,txpool,debug,trace
    > ```

    > If you want to configure the listen address and port, you can add:
    > ```
    > --http.addr <IP_ADDRESS> --http.port <PORT_NUM>
    > ```
    > Similarly,
    > ```
    > --ws.addr <IP_ADDRESS> --ws.port <PORT_NUM>
    > ```

    > If you want to allow any application local to your node will be able to access the RPC server,  
    > which means allowing any domains for Cross-Origin requests, you can add:
    > ```
    > --http.corsdomain "*"
    > ```
    > Similarly,
    > ```
    > --ws.origins "*"
    > ```

    > If you want to view metrics of Reth Execution Node, you can add:
    > ```
    > --metrics localhost:9001
    > ```
    > You can use **Prometheus** to collect metrics off of the endpoint  
    > and use **Grafana** to scrape the metrics from Prometheus   
    > Detailed instructions can be found in [Metrics](https://paradigmxyz.github.io/reth/run/observability.html) Page

2. Run **Lighthouse** Consensus Client

    ```
    RUST_LOG=info lighthouse bn \
    --network mainnet \
    --execution-endpoint http://localhost:8551 \
    --execution-jwt /home/<UserName>/.local/share/reth/mainnet/jwt.hex \
    --checkpoint-sync-url https://mainnet.checkpoint.sigp.io
    ```

    You MUST use the same JWT secret in BOTH Reth Execution Client and Lighthouse Consensus Client,  
    where `/home/<UserName>/.local/share/reth/mainnet/jwt.hex` is the default JWT secret generated by Reth

    > If you do not want to become validators on your node, you can add:  
    > ```
    > --disable-deposit-contract-sync
    > ```
    > which will disable the syncing of deposit logs from the execution node


Note that the beta version of Reth has some issues: it might be stuck or killed (i.e., OOM) unexpectedly during syncing

Please re-execute Step 4 to restart both Reth Execution Client and Lighthouse Consensus Client when issues happen

You should also use `htop` to monitor CPU and Memory usage (and `smartctl` to monitor SSD health information)

---
### Step 5 - Test JSON-RPC APIs

After the syncing completes, you can use the following command in Terminal:

**For HTTP Server**

- Request 

    ```
    curl http://localhost:8545 \ 
    -X POST \ 
    -H "Content-Type: application/json" \ 
    --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}'
    ```

- Response

    ```
    {"jsonrpc":"2.0","result":"0x1","id":1}
    ```

**For WebSocket Server**

- Connect

    ```
    wscat -c ws://localhost:8546
    ```

- Request 
  
    ```
    {"jsonrpc":"2.0","id":1,"method":"eth_chainId","params":[]}
    ```

- Response

    ```
    {"jsonrpc":"2.0","result":"0x1","id":1}
    ```

---
### ALL DONE!!!

---

### What if You want to Update Rust

1. Update **Rust** using [rustup](https://rustup.rs/):

    ```
    rustup update stable
    ```

2. Check **Cargo** version after **Rust** installation completes:

    ```
    cargo version
    ```

    e.g., `cargo 1.79.0 (ffa9cf99a 2024-06-03)`

### What if You want to Update Reth

1. Fetch the latest **Reth** version 

    ```
    cd reth
    git fetch
    git checkout ${VERSION}
    ```

    e.g., `git checkout v1.0.0`

2. Build **Reth**

    ```
    cargo install --locked --path bin/reth --bin reth
    ```

3. Check **Reth** version after installation completes:

    ```
    reth --version
    ```

### What if You want to Update Lighthouse

1. Fetch the latest **Lighthouse** version

    ```
    cd lighthouse
    git fetch
    git checkout ${VERSION}
    ```

    e.g., `git checkout v5.2.0`

2. Build **Lighthouse**

    ```
    make
    ```

3. Check **Lighthouse** version after installation completes:

    ```
    lighthouse --version
    ```