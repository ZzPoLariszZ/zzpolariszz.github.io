---
layout: single
title: "[WWW '26] Evasion Under Blockchain Sanctions"
excerpt_separator: <!--more-->
author_profile: true
read_time: true
toc: true
---

Accepted at the ACM Web Conference 2026 (WWW '26)

<!--more-->

- [Link to arXiv](https://arxiv.org/abs/2507.11721) 

- [Link to ACM Digital Library](https://dl.acm.org/doi/abs/10.1145/3774904.3792715)

- [PDF version](/assets/Evasion-Under-Blockchain-Sanctions.pdf)

### Abstract

Sanctioning blockchain addresses has become a common regulatory response to malicious activities. However, enforcement on permissionless blockchains remains challenging due to complex transaction flows and sophisticated fund-obfuscation techniques.

Using cryptocurrency mixing tool Tornado Cash as a case study, we quantitatively assess the effectiveness of U.S. Office of Foreign Assets Control (OFAC) sanctions over a 957-day period, covering 6.79 million Ethereum blocks and 1.07 billion transactions. Our analysis reveals that while OFAC sanctions reduced overall Tornado Cash deposit volume by 71.03% to approximately 2 billion USD, attackers still relied on Tornado Cash in 78.33% of Ethereum-related security incidents, underscoring persistent evasion strategies.

In this paper, we identify three significant, structural limitations in current sanction enforcement practices: (i) fragmented censorship in blockchain consensus and application layer; (ii) the complexity of obfuscation virtual asset services exploited by users; and (iii) the susceptibility of naive binary sanction classifications to dusting attacks. Our analysis and findings contribute to ongoing discussions around regulatory effectiveness in Decentralized Finance by providing empirical evidence, clarifying enforcement challenges, and informing future compliance strategies in response to sanctions and blockchain-based security risks.

### BibTeX

```
@inproceedings{DBLP:conf/www/LiuRZB26,
  author       = {Endong Liu and
                  Mark Ryan and
                  Liyi Zhou and
                  Pascal Berrang},
  editor       = {Hakim Hacid and
                  Yoelle Maarek and
                  Francesco Bonchi and
                  Ido Guy and
                  Emine Yilmaz},
  title        = {Evasion Under Blockchain Sanctions},
  booktitle    = {Proceedings of the {ACM} Web Conference 2026, {WWW} 2026, Dubai, United
                  Arab Emirates, originally scheduled for April 13-17, 2026, rescheduled
                  for June 29 - July 3, 2026},
  pages        = {3507--3518},
  publisher    = {{ACM}},
  year         = {2026},
  url          = {https://doi.org/10.1145/3774904.3792715},
  doi          = {10.1145/3774904.3792715},
  timestamp    = {Thu, 07 May 2026 20:28:58 +0200},
  biburl       = {https://dblp.org/rec/conf/www/LiuRZB26.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}
```