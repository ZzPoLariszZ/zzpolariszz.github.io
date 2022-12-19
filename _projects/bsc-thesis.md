---
layout: single
title: "Enhancing Geographic Routing in Vehicular Delay Tolerant Network"
excerpt_separator: <!--more-->
author_profile: true
read_time: true
toc: true
---

Thesis for BSc Computer Science Degree

<!--more-->

Here is the [PDF version](/assets/BSc-Thesis.pdf)

### Abstract

Vehicular Ad Hoc NETwork (VANET) is an important application for Delay Tolerant Network (DTN). In this network, the mobile node itself serves as a communication node to build the network, storing, carrying, and forwarding information from the source node to the destination node to solve frequent disconnection between ends to ends. Since this kind of network does not depend on infrastructure and is easy to deploy on vehicles, it is helpful for the vehicle to vehicle (V2V) communication in the construction of Smart City.

However, previous routing algorithms in DTNs are mostly limited to historically topological information. This kind of information is not suitable for VANET since it is difficult to predict network when nodes are moving in high speed. This shortcoming results in difficulty in prediction of suitability of relay nodes, which affects performances in delivery probability and average latency.

At the same time, energy issues have always been the key to transportation and vehicle communications. An excellent energy policy can not only help reduce the weight of cars, but also make up for the lack of battery life for electric vehicles. As governments have begun to promote the construction of smart cities, the popularity of electric vehicles has made it easier for more vehicles to access VANET. Therefore, for the selection of relay nodes, the measurement of energy level is necessary.

Over literatures, this project proposes an enhanced routing algorithm in DTN based on geographically topological information, and makes the following improvements in VANET and energy constraints parts: Firstly, design a geographical metric based on real time location data, which enables vehicles to accurately select relay nodes even they are in high speed. Next, define energy consumption behaviors during vehicle communications, and apply energy policy to ensure the energy balance in the system when the remaining energy level is low. Then, use binary spray mode to maximize delivery probability, and strictly control the number of replicated messages in the network based on the value of geographical metric and energy level of each node. Finally, build a priority queue for messages in the buffer to ensure the order of message transmission within the limited connection time.

After designing the enhanced geographical routing protocol in vehicular delay tolerant network, the algorithm was also implemented on the Opportunistic Networking Environment (ONE) simulator. Then, a performance evaluation system for routing protocols was established based on simulation experiment results. At last, compared with the four basic routing algorithms Direct Delivery Router, First Contact Router, Epidemic Router and Prophet Router, the enhanced algorithm developed in this project has improvements in delivery probability, overhead ratio, average latency and average energy level aspects.

