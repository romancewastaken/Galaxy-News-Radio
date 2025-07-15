## Galaxy News Radio
<img src="https://github.com/romancewastaken/Galaxy-News-Radio/blob/main/logos/wasteland.png?raw=true" alt="Logo" width="500" height="400">

### Built With
<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Logo" width="300" height="300">
</a>
    <p align="center">        
        Made with love with Javascript, this can run on any system
    </p>
</div>

## Getting Started
To get a local copy up and running follow these simple steps.

### Installation
1. Clone the repo (or download manually)
2. Install NPM packages (make sure you are in the server/radio directory)
   ```sh
   npm install
   ```
   If "npm" does not appear as a command and you just installed node.js, try restarting your device
3. Install PM2 to run 24/7
    ```sh
    npm install pm2@latest -g
    ```
4. Add process to PM2
    ```sh
    pm2 start server.js
    ```
5. Save PM2 list
    ```sh
    pm2 save
    ```


## Usage
1.) You can head to http://127.0.0.1:80/stream for webpage streaming or connecting via API, if you are hosting on a VPS 127.0.0.1 is replaced with your VPS IP and 80 port can be changed within the config
2.) Shuffling, you can head to http://127.0.0.1:80/API/shuffle/(config.key) and pass in your correct key to shuffle the radio playlist

## Acknowledgments
<div>
    <a href="https://nodejs.org/en/download/current">node.js</a> - run javascript on the CLI
    <br>
    <a href="https://pm2.keymetrics.io/">pm2</a> - run processes 24/7 after exiting SSH
    <br>
    <a href="https://github.com/ch1ller0/fridgefm-radio-core">ch1ller0</a> - awesome radio package
</div>

## Licensing 
Permissions
* ✔️ Commercial use
* ✔️ Modification
* ✔️ Distribution
* ✔️ Private use
<br></br>

Release conditions
* ❕ License and copyright notice
* ❕ State changes
* ❕ Disclose source
* ❕ Same license
<br></br>

Limitations
* ❌ Liability
* ❌ Warranty
<br></br>

License being used: **GNU General Public License v2.0 license**
