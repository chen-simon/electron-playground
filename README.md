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
After building, run to package for windows:
```
electron-builder -w -c.extraMetadata.main=build/main.js
```
To package for linux or mac, substitute `-w` with `-m` (MacOS) or `-l` (Linux)