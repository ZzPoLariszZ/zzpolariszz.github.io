---
layout: single
title: "[arXiv] Talking Transactions: Decentralized Communication through Ethereum Input Data Messages (IDMs)"
excerpt_separator: <!--more-->
author_profile: true
read_time: true
toc: true
---

Xihan Xiong, Zhipeng Wang, Qin Wang, Endong Liu, Pascal Berrang, William Knottenbelt

<!--more-->

- [Link to arXiv](https://arxiv.org/abs/2507.11721) 

### Abstract

Can you imagine, blockchain transactions can talk! In this paper, we study how they talk and what they talk about. 

We focus on the input data field of Ethereum transactions, which is designed to allow external callers to interact with smart contracts. In practice, this field also enables users to embed natural language messages into transactions. Users can leverage these Input Data Messages (IDMs) for peer-to-peer communication. This means that, beyond Ethereum's well-known role as a financial infrastructure, it also serves as a decentralized communication medium.

We present the first large-scale analysis of Ethereum IDMs from the genesis block to February 2024 (3134 days). We filter IDMs to extract 867,140 transactions with informative IDMs and use LLMs for language detection. We find that English (95.4%) and Chinese (4.4%) dominate the use of natural languages in IDMs. Interestingly, English IDMs center on security and scam warnings (24%) with predominantly negative emotions, while Chinese IDMs emphasize emotional expression and social connection (44%) with a more positive tone. We also observe that longer English IDMs often transfer high ETH values for protocol-level purposes, while longer Chinese IDMs tend to involve symbolic transfer amounts for emotional intent. Moreover, we find that the IDM participants tend to form small, loosely connected communities (59.99%). Our findings highlight culturally and functionally divergent use cases of the IDM channel across user communities. 

We further examine the security relevance of IDMs in on-chain attacks. Many victims use them to appeal to attackers for fund recovery. IDMs containing negotiations or reward offers are linked to higher reply rates. We also analyze IDMs' regulatory implications. Their misuse for abuse, threats, and sexual solicitation reveals the urgent need for content moderation and regulation in decentralized systems.

### BibTeX

```
@article{DBLP:journals/corr/abs-2505-24724,
  author       = {Xihan Xiong and
                  Zhipeng Wang and
                  Qin Wang and
                  Endong Liu and
                  Pascal Berrang and
                  William Knottenbelt},
  title        = {Talking Transactions: Decentralized Communication through Ethereum
                  Input Data Messages (IDMs)},
  journal      = {CoRR},
  volume       = {abs/2505.24724},
  year         = {2025},
  url          = {https://doi.org/10.48550/arXiv.2505.24724},
  doi          = {10.48550/ARXIV.2505.24724},
  eprinttype   = {arXiv},
  eprint       = {2505.24724},
  timestamp    = {Mon, 21 Jul 2025 16:58:21 +0200},
  biburl       = {https://dblp.org/rec/journals/corr/abs-2505-24724.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}
```