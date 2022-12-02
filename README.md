# ⚛ My first electron app!
Hi, Simon here! This is my first electron app just playing around

# 🛠 Setup
Install node packages:
```
npm install
```

# 🚗 Run
Start dev server:
```
npm start
```
Then, host with electron app in separate terminal:
```
npm run electron-dev
```

# 🏠 Build
Build the react app
```
npm build
```

# 📦 Packaging for Desktop
After building, run the following command to package for your system:
##### Windows:
```
electron-builder -w -c.extraMetadata.main=build/electron.js
```
To package for linux or mac, substitute `-w` with `-m` (MacOS) or `-l` (Linux):
##### MacOS:
```
electron-builder -m -c.extraMetadata.main=build/electron.js
```
##### Linux:
```
electron-builder -l -c.extraMetadata.main=build/electron.js
```
Then, the ready-to-distribute installer should be in the `./dist/` folder!!