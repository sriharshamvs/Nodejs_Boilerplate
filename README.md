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

### Installation
* Clone the directory withe the command
```
git clone git@code.swecha.org:sriharshamvs/nodejs-boilerplate.git
```
* Change Directory to node boilerplate
```
cd nodejs-boilerplate
```

* Install node modules needed
```
npm install
```
**Note** : Wait for few minutes to install the node modules, it may few hours if your internet connection is slow 

## Running App
* To run the app 
```
node server.js
```
It will output the message 
```
Server Started on http://localhost:3000
Connected to database successfully mongodb://localhost:27017/userData
```
### Test the App
Open browser 
* Enter URL : *http://localhost:3000/* then you should see :
```
{
    "messsage": "Server running at http://localhost:3000",
    "status": "up",
    "success": true
}
```
* Enter URL : *http://localhost:3000/users* then you should see :
```
"You are in User's Root directory"
```
* Enter URL : *http://localhost:3000/users/test* then you should see :
```
"You are in User's Testing Route"
```
### Performing CRUD operations
CRUD stands for (*Create, Read, Update, Delete*)

