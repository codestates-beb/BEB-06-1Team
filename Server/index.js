//const express = require("express");
import express, { json } from "express";
import cors from "cors";
//const getTokenUri = require("./apps/tokenUri");
import getTokenUri from "./apps/tokenUri.js";
import mysql from 'mysql'

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database: "nft_list",
});
connection.connect();
const app = express();
app.use(express.json());
app.listen(4000);
app.use(cors());
// app.use(
//   cors({
//     origin: ["https://localhost:4000/"],
//     credentials: true,
//     methods: ["GET", "POST", "OPTIONS"],
//   })
// );

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/tokenuri", (req, res) => {
  const dataAddr = req.body.data;
  const stopdata = { network: 1, preload: 2, ipns: 3, repo: 4, mfsPreload: 5 };
  const test = getTokenUri(dataAddr)
    .then((e) => {
      res.send(e);
    })
    .catch((err) => {
      console.error(err);
    });
});
// 저장 따로 전송 따로 ?
//@ Data 저장 ??
app.post("/getthedata", (req, res) => {
  // console.log(req.body);
  // connection.query("CREATE DATABASE nft_list", (error, results, fields) => {
  //   if (error) throw error;
  //   console.log(results);
  // });
  connection.query("USE nft_list", function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    if (error) throw error;
    console.log(results)
  });
  // connection.query(
  //   "CREATE TABLE information(account varchar(255),artist varchar(255), collection varchar(255), name varchar(255), tokenUri varchar(255)) ",
  //   function (error, results, fields) {
  //     // error will be an Error if one occurred during the query
  //     // results will contain the results of the query
  //     // fields will contain information about the returned results fields (if any)
  //     if (error) throw error;
  //     console.log(results);
  //   }
  // );
  connection.query( 
    `INSERT INTO information (account, artist ,collection, name, tokenUri) VALUES ("${req.body.account}", "${req.body.artist}", "${req.body.collection}", "${req.body.name}", "${req.body.tokenUri}")`,
    function (error, results, fields) {

      if (error) throw error;
      console.log(fields);
    }
  );

  // res.send(fields);
});

//@ Data 전송
app.get("/senddata", (req, res) => {
  res.send("data를 받으세요 ");
});