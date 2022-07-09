import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";
import "/global.css"
import "bootstrap/dist/css/bootstrap.min.css";
const BN = require("bn.js")


import getConfig from "./config";
const { networkId } = getConfig("development");

export default function App() {
  const [userHasNFT1, setuserHasNFT1] = useState(false);
  const [userHasNFT2, setuserHasNFT2] = useState(false);
  const [userHasNFT3, setuserHasNFT3] = useState(false);


  useEffect(() => {
    const receivedNFT1 = async () => {
      if (window.accountId !== "") {
        setuserHasNFT1(
          await window.contract.nft_token({
            token_id: `${window.accountId}-tree1`
          })
        );
      }
    };
    receivedNFT1();
    const receivedNFT2 = async () => {
      if (window.accountId !== "") {
        setuserHasNFT2(
          await window.contract.nft_token({
            token_id: `${window.accountId}-tree2`
          })
        );
      }
    };
    receivedNFT2();
    const receivedNFT3 = async () => {
      if (window.accountId !== "") {
        setuserHasNFT3(
          await window.contract.nft_token({
            token_id: `${window.accountId}-tree3`
          })
        );
      }
    };
    receivedNFT3();
  }, []);
  const mintNFT1 = async () => {
    await window.contract.nft_mint(
        {
            token_id: `${window.accountId}-tree1`,
            metadata: {
                title: "Small Tree",
                description: "tree nft",
                media:
                    "https://bafkreifob6yvmkpwmdoojhstcmo4eg3u3w3vjyvbxxeefjylhyaj7rrs3m.ipfs.nftstorage.link/",
            },
            receiver_id: window.accountId,
        },
        300000000000000, 
        new BN("1000000000000000000000000")
    );
  };
  const mintNFT2 = async () => {
    await window.contract.nft_mint(
        {
            token_id: `${window.accountId}-tree2`,
            metadata: {
                title: "Medium Tree",
                description: "tree nft",
                media:
                    "https://bafkreibgwqdpqfbotgaeac35hiesjtbmy4u4qq5j6sxezyxfns7qsuhdr4.ipfs.nftstorage.link/",
            },
            receiver_id: window.accountId,
        },
        300000000000000, 
        new BN("2000000000000000000000000")
    );
  };
  const mintNFT3 = async () => {
    await window.contract.nft_mint(
        {
            token_id: `${window.accountId}-tree3`,
            metadata: {
                title: "Big Tree",
                description: "tree nft",
                media:
                    "https://bafkreiaojgpmoan2lq4grdulpf2fi2rcrkbow6xqhz4zjaia34fvb7xhiy.ipfs.nftstorage.link/",
            },
            receiver_id: window.accountId,
        },
        300000000000000, 
        new BN("3000000000000000000000000")
    );
  };
  return (
    <div className="pb-5">
        <div className="header d-flex justify-content-end align-items-center position-relative">
            <div className="logo-ct d-flex align-items-center position-absolute">
                <img className="logo-near" src="https://www.pngall.com/wp-content/uploads/10/NEAR-Protocol-Crypto-Logo-PNG-Image-180x180.png" />
                <p className="text-logo mb-1">EAR</p>
            </div>

            <button className="btn btn-info rounded-0"
                onClick={window.walletConnection.isSignedIn() ? logout : login}
            >
                {window.walletConnection.isSignedIn()
                    ? window.accountId
                    : "Login"}
            </button>
        </div>
        
        <div className="body-page container mt-5">
            <div className="posts-page d-flex">
                <img className="me-3" src="https://thumbs.gfycat.com/AltruisticEminentFireant-size_restricted.gif" />
                <div className="pt-3">
                  <h4>Protect the earth</h4>
                  <p>Planting trees, creating forests, developing sustainably... is now an urgent job.</p> 
                  <p>
                  Through the campaign for the environment, anyone can join mint nft, sowing seeds for the future, from the simplest actions.
                  </p>
                </div>
            </div>
            
            <p className="text-center mt-5 fs-3 font-weight-bold">Mint Tree</p>

            <div className="d-flex justify-content-between mt-3">
                <div className="card-item">
                    {userHasNFT1 ? <div className="bought">
                      <a href={"https://wallet.testnet.near.org/?tab=collectibles"} target="_blank">successfully purchase</a>
                    </div> : ''}
                    <img src="https://bafkreifob6yvmkpwmdoojhstcmo4eg3u3w3vjyvbxxeefjylhyaj7rrs3m.ipfs.nftstorage.link/" />
                    <div className="p-2">
                        <p className="fw-bold">Small Tree</p>
                        <div className="price"><span className="text-danger">Price</span>: <span className="text-success fw-bold">1 Near</span></div>
                        <button className="btn btn-success rounded-0 w-100 mt-3" disabled={window.accountId == ""} onClick={mintNFT1}>Buy</button>
                    </div>
                </div>
                <div className="card-item">
                {userHasNFT2 ? <div className="bought">
                  <a href={"https://wallet.testnet.near.org/?tab=collectibles"} target="_blank">successfully purchase</a>
                </div> : ''}
                    <img src="https://bafkreibgwqdpqfbotgaeac35hiesjtbmy4u4qq5j6sxezyxfns7qsuhdr4.ipfs.nftstorage.link/" />
                    <div className="p-2">
                        <p className="fw-bold">Medium Tree</p>
                        <div className="price"><span className="text-danger">Price</span>: <span className="text-success fw-bold">2 Near</span></div>
                        <button className="btn btn-success rounded-0 w-100 mt-3" disabled={window.accountId == ""} onClick={mintNFT2}>Buy</button>
                    </div>
                </div>
                <div className="card-item">
                {userHasNFT3 ? <div className="bought">
                  <a href={"https://wallet.testnet.near.org/?tab=collectibles"} target="_blank">successfully purchase</a>
                </div> : ''}
                    <img src="https://bafkreiaojgpmoan2lq4grdulpf2fi2rcrkbow6xqhz4zjaia34fvb7xhiy.ipfs.nftstorage.link/" />
                    <div className="p-2">
                        <p className="fw-bold">Big Tree</p>
                        <div className="price"><span className="text-danger">Price</span>: <span className="text-success fw-bold">3 Near</span></div>
                        <button className="btn btn-success rounded-0 w-100 mt-3" disabled={window.accountId == ""} onClick={mintNFT3}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}