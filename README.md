# Sys-stats-panel
A dashboard where your servers stats can be seen 
## Features

- Real-time system statistics
- Support for multiple servers
- User-friendly dashboard
- Responsive design
- Easy setup

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- NPM (version 7 or higher)


### How To Setup?
There are two directories `frontend` and `backend`. 

You need to move the `frontend` directory to the place  where you want to host the panel and `backend` to be placed in the servers you want to get stats for

Now go frontend file there you will get `.env` file, JUST OPEN IT, you will know what to do there

Now copy paste following in respective directories

#### Frontend Setup
```bash
echo "[=] Running Frontend Setup" && npm i > /dev/null && npm run build > /dev/null && echo "[+] Great! Frontend Setup Done"
```
#### Backend Setup
```bash
echo "[=] Running Backend Setup" && npm i > /dev/null && echo "[+] Great! Frontend Setup Done"
```
### How To Get It Working?
#### Starting Frontend !
```bash
npm run start
```
#### Starting Backend !
```bash
node infoserver.js
```
