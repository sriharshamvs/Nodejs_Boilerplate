# NodeJS boilerplate

## Introduction 
* A Node boilerplate using express, mongodb
* This Projects gives you an idea about __CRUD__ (*Create, Read, Update, Delete*)
* We can store *username, age* and *mobileNumber* in our Database

## Getting Started

### Requirements 
You need to install the following before starting the project
* [npm](https://www.npmjs.com/) - Node package manager
* [node](https://nodejs.org/en/) - If you don't have node installed, you can donwload from [here](https://nodejs.org/en/)
* [mongodb](https://www.mongodb.com/) - MongoDB ( you can install mongod [here](https://docs.mongodb.com/manual/installation/) )

### **Installation**
* Clone the directory withe the command
```
git clone https://192.168.0.3:newsclick/node_boilerplate.git
```
* Change Directory to node boilerplate
```
cd node_boilerplate
```

* Install node modules needed
```
npm install
```
**Note** : Wait for few minutes to install the node modules, it may few hours if your internet connection is slow 

## **Running app**
* To run the app 
```
node server.js
```
It will output the message 
```
App running at http://localhost:3000/
```
### **Test the app**
Open browser and enter url : http://localhost:3000/ and then you should see :
```
{
    "messsage": "Server running at http://localhost:3000",
    "status": "up",
    "success": true
}
```
**Voila lets start building the app** :stuck_out_tongue_winking_eye:
