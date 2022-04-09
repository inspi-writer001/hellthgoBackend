const express = require("express");
const Moralis = require("moralis/node");
const fs = require("fs");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// Moralis.initialize(process.env.APPLICATION_ID);
// Moralis.serverURL = process.env.SERVER_URL;

const serverUrl = process.env.SERVER_URL;
const appId = process.env.APPLICATION_ID;
const masterKey = process.env.MASTER_KEY;

await Moralis.start({ serverUrl, appId, masterKey });

const init = async () => {
  global.web3 = await Moralis.Web3.enable();
  const user = await Moralis.User.current();
};

const login = async () => {
  await Moralis.Web3.authenticate();
  const user = await Moralis.User.current();
};

const logout = async () => {
  await Moralis.User.logOut();
};

const PORT = 5003;
//
app.get("/", (req, res) => {
  init();
  login();
  res.status(201).send(`<button onClick = login() >Login</button>`);
});
app.all("*", (req, res) => {
  return res.send("Cannot find that page");
});
//
app.listen(PORT, () => {
  console.log(`server started online @ ${PORT}`);
});
