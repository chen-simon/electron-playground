# ⚛ My first electron app!
Hi, I'm Simon! This is my first electron app to learn how electron works!
It uses React and react-router-dom

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
Build the react app with:
```
npm build
```

# 📦 Packaging for Desktop
After building, run the following command to package for your system:
```
electron-builder
```
To package for linux or mac, add a `-w` (Windows), `-m` (MacOS), or `-l` (Linux) flag, for example:
##### MacOS:
```
electron-builder -m
```
Then, the ready-to-distribute app installer should be in the `./dist/` folder!! 🎉