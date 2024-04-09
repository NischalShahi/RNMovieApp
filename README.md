# Getting Started

## Clone the git repository to your local machine

## Step 1: Install all the dependencies

First, you will need to run the following command from the _root_ of your React Native project:

```bash
# using npm
npm i
cd ios && pod install && cd ..
```

## Step 2: Start the Metro Server

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

```

### For iOS

```bash
# using npm
npm run ios

```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Additionally, to run a webApp, use the following command:

```bash
# using npm
npm run web

```
