---
layout: single
title: "PostgreSQL Remote Access (Linux + macOS)"
excerpt_separator: <!--more-->
tags: Database
author_profile: true
read_time: true
toc: true
classes: wide
---

The Instructions for Setting Remote Access to PostgreSQL Database

<!--more-->

---
### Enable Remote Access to PostgresSQL on Linux

#### System Information

- Ubuntu 22.04.4 LTS + Linux 6.5.0-25-generic

- PostgreSQL version 14 (following [official installation steps](https://www.postgresql.org/download/linux/ubuntu/))

#### Step 1 - Necessary File Modifications

- For the file `postgresql.conf`:

    ```
    sudo nano /etc/postgresql/14/main/postgresql.conf
    ```

    change the line

    ```
    #listen_addresses = 'localhost'
    ```

    to

    ```
    listen_addresses = '*'
    ```

    which allows PostgreSQL to listen on all available IP addresses

- For the file `pg_hba.conf`:

    ```
    sudo nano /etc/postgresql/14/main/pg_hba.conf
    ```

    change the line

    ```
    host    all             all             127.0.0.1/32            scram-sha-256
    ```

    to

    ```
    host    all             all             0.0.0.0/0               scram-sha-256
    ```

    which allows remote access to all users and databases from any IP address

#### Step 2 - Restart PostgreSQL

```
sudo service postgresql restart
sudo service postgresql status
```


---
### Enable Remote Access to PostgresSQL on macOS

#### System Information

- macOS Sonoma 14.4 (Apple Silicon M2)

- PostgreSQL version 16 (following [tutorial installation steps](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/))

#### Step 1 - Necessary File Modifications

- For the file `postgresql.conf`:

    the `root` user owns this file

    ```
    sudo nano /Library/PostgreSQL/16/data/postgresql.conf
    ```

    change the line

    ```
    #listen_addresses = 'localhost'
    ```

    to

    ```
    listen_addresses = '*'
    ```

    which allows PostgreSQL to listen on all available IP addresses

- For the file `pg_hba.conf`:

    since the PostgresSQL is installed along with a new system-level user, by default named `postgres`

    which owns the directory `/Library/PostgreSQL/16/data` and the file `pg_hba.conf`, it is necessary to switch user

    ```
    sudo su postgres
    whoami
    ```

   then, modifications can be done acting as `postgres`

    ```
    nano  /Library/PostgreSQL/16/data/pg_hba.conf
    ```

    change the line

    ```
    host    all             all             127.0.0.1/32            scram-sha-256
    ```

    to

    ```
    host    all             all             0.0.0.0/0               scram-sha-256
    ```

    which allows remote access to all users and databases from any IP address

#### Step 2 - Restart PostgreSQL

```
/Library/PostgreSQL/16/bin/pg_ctl stop -D /Library/PostgreSQL/16/data/
/Library/PostgreSQL/16/bin/pg_ctl start -D /Library/PostgreSQL/16/data/
```


---
### Remote Access PostgreSQL Databases via pgAdmin 4

#### Step 1 - Installation

Follow the offical installation steps for [Linux](https://www.pgadmin.org/download/pgadmin-4-apt/) and [macOS](https://www.pgadmin.org/download/pgadmin-4-macos/)

#### Step 2 - Connection

Follow the official installation steps in [help documentation](http://127.0.0.1:52278/help/help/server_dialog.html)