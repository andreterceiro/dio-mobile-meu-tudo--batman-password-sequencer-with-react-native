# Gerneral


### Creating the project

Please type this command in the terminal:

```
npx create-expo-app bat-pass-app -t
```

I requested by terminal to confirm the installation of 'create-expo-app'. After the installation, when requested to select a template, I selected "Blank (TypeScript)".

Then I entered in the created directory (`cd bat-pass-app`).


### Installing the dependencies

Before run the project, I installed the project dependencies with the following command:

```
npm install
```


### Running the project

```
npm run start
```


### Seeing the project in the app

To see the project in the App, in the Expo App already installed in the cellphone, I scanned the QR code showed by the command `npm run start`.


### Testing the created project

To test, I changed a text in App.tsx in the created project.


### Directory structure

Teacher instructed us to create in the root folder the directory **src** and inside this directory we can put directories, as example "components" and "screens".


### All in React Native is a component

Teacher enforced this concept **"all in React Native is a component"**. As example, a screen is also a component and can return another component.


### Vysor App

If viewing the app in PC is be necessary, you could install Vysor app.

OBS:

- you will need to enable developer options in the cellphone;
- in the developer options, you will need to enable USB Debugging in the cellphone;
- On connecting the cellphone in the PC, when requested please authorize the connectiom om the cellphone;
- You will can see the device listed in the result of the command `adb devices`.