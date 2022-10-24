import * as IPFS from "ipfs-core";
import fs from "fs";
const node = await IPFS.create();
export default async function getTokenUri(uri) {
  let test = "test";
  //const image = fs.readFileSync("./Image/doge1.jpg");
  // const image = fs.readFileSync(uri);
  const fileAdded = await node.add(uri);
  const initailUri = "https://ipfs.io/ipfs/";
  test = initailUri + fileAdded.cid;
  return test;
}
