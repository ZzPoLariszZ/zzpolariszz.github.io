---
layout: single
title: "Tor Project (Tor Browser + Debian Repository)"
excerpt_separator: <!--more-->
tags: Privacy
author_profile: true
read_time: true
toc: true
classes: wide
---

The Instructions of Tor Project via Tor Browser and Tor Package Repository

<!--more-->

---
### System Information

Intel x86-64 + Ubuntu 22.04.4 LTS + Linux 6.5.0-25-generic


---
### Using Tor Browser

1. Download the Tor Browser:

    ```
    wget https://www.torproject.org/dist/torbrowser/13.5/tor-browser-linux-x86_64-13.5.tar.xz
    ```

2. Verify Tor Browser's Signature:

    2.1 Download the Tor Browser Signature:

    ```
    wget https://www.torproject.org/dist/torbrowser/13.5/tor-browser-linux-x86_64-13.5.tar.xz.asc
    ```

    2.2 Fetching the Tor Developers Key:
   
    ```
    gpg --auto-key-locate nodefault,wkd --locate-keys torbrowser@torproject.org
    ```

    2.3 Generate the Keyring:

    ```
    gpg --output ./tor.keyring --export 0xEF6E286DDA85EA2A4BA7DE684E2C6E8793298290
    ```

    2.4 Verify the Signature:

    ```
    gpgv --keyring ./tor.keyring \
    ./tor-browser-linux-x86_64-13.5.tar.xz.asc ./tor-browser-linux-x86_64-13.5.tar.xz
    ```

    which should display  
    
    `gpgv: Good signature from "Tor Browser Developers (signing key) <torbrowser@torproject.org>"`

3. Extract Tor Browser:

    ```
    tar -xvf tor-browser-linux-x86_64-13.5.tar.xz 
    ```

4. Run Tor Browser:

    ```
    cd cd tor-browser
    ./start-tor-browser.desktop
    ```

5. Click the **Connect** Button in Tor Browser

6. Verify Tor Browser is Working

   Please visit the website [check.torproject.org](https://check.torproject.org/), Tor Browser is working when the page shows the following text:
   
   **<span style="color:Green">Congratulations. This browser is configured to use Tor.</span>**


---
### Using Tor Package Repository

1. Switch to the Root User

    ```
    sudo su
    whoami
    ```

    which should display `root` after entering the password

2. Install Necessary Package

    ```
    apt install apt-transport-https
    ```

3. Check CPU Architecture

    ```
    dpkg --print-architecture
    ```

    which displays `amd64`

4. Create a New File and Add Entries

    New File

    ```
    touch /etc/apt/sources.list.d/tor.list
    sudo vim /etc/apt/sources.list.d/tor.list
    ```

    Entries

    ```
    deb     [arch=amd64 signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org focal main
    deb-src [arch=amd54 signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org focal main
    ```

    Note that you can replace `amd64` if you use a different CPU architecture.

5. Add the gpg Key used to Sign the Packages

    ```
    deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --dearmor | tee /usr/share/keyrings/tor-archive-keyring.gpg >/dev/null
    ```

6. Install Tor and Keyring

    ```
    apt update
    apt install tor deb.torproject.org-keyring
    ```

7. Exit the Root User

    ```
    exit
    ```

8. Start, Enable, Verify Status, and Stop Tor

    ```
    sudo systemctl start tor
    sudo systemctl enable tor
    sudo systemctl status tor
    sudo systemctl stop tor
    ```