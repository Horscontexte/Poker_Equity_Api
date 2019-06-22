# Poker_Equity_Api
## Summary

- Setup :rocket:
  - Node.js
  - MongoDB
  - Project

- Data Model :file_folder:
  - Equity model
  - Result model

## Setup

### Node.js

Node.js is a prerequisite, to get it on your system: https://nodejs.org/en/

### MongoDB

MongoDB Server (Community Edition) is also a prerequisite, to get it on your system : https://docs.mongodb.com/manual/installation/

  - `sudo service mongod start` to start your MongoDB server
  - `mongo` to start the mongo shell and get your mongodb url
    - example : mongodb://127.0.0.1:27017/

### Project

  - `git clone` the repo :octocat:
  - `npm install express`
    - to see more documentation about express : https://www.npmjs.com/package/express
  - `npm install mongoose`
    - to see more documentation about mongoose : https://www.npmjs.com/package/mongoose
  - `npm install body-parser`
    - to see more documentation about body-parser : https://www.npmjs.com/package/body-parser
  - Edit the `config.js` file with your mongodb url
  - `node index.js` to start the API
    - The output should be `Server is listening on port 3000` and `Successfully connected to the database`

## Data

### Equity model

Sample :

`[
    {
        "_id": "5d05b4ca0db5122a80bc6965",
        "title": "AcAdAs9h",
        "heroHand": "AcAd",
        "vilainHand": "As9h",
        "heroEquity": "93",
        "vilainEquity": "6",
        "splitEquity": "1",
    }
]`
  - id (String)
    - example : `"5d05b4ca0db5122a80bc6965"`
  - title (String)
    - example : `"AcAdAs9h"`
  - heroHand (String)
    - example : `"AcAd"`
  - vilainHand (String)
    - example : `"As9h"`
  - heroEquity (String)
    - example : `"93"`
  - vilainEquity (String)
    - example : `"6"`
  - splitEquity (String)
    - example : `"1"`

### Result model

Sample :

`[
    {
        "_id": "5d0d88f522cfc63634d2ae45",
        "heroHand": "AcAd",
        "ev": "1.20000",
        "callingRange": {
          "vilainRange1": "Test1",
          "vilainRange2": "Test2"
          },
        "gameConfiguration": {
          "ante": "0.12",
          "players": "3",
          "stack": "11"
          },
        "createdAt": "2019-06-22T01:48:37.120Z",
        "updatedAt": "2019-06-22T01:48:37.120Z",
      }
]`
  - id (String)
    - example : `"5d0d88f522cfc63634d2ae45"`
  - heroHand (String)
    - example : `"AcAd"`
  - ev (String)
    - example : `"1.20000"`
  - callingRange (Object)
    - example : `{
          "vilainRange1": "Test1",
          "vilainRange2": "Test2"
          }`
  - gameConfiguration (Object)
    - example : `{
          "ante": "0.12",
          "players": "3",
          "stack": "11"
          }`
  - createdAt (Date)
    - example : `"2019-06-22T01:48:37.120Z"`
  - updatedAt (Date)
    - example : `"2019-06-22T01:48:37.120Z"`
