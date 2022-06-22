import {useState, useEffect} from 'react';
// import axios from 'axios';
import TransactionData from '../dataTypes/transactionData';
// import chaingrepConfig from '../services/chaingrep';
import { Link } from 'react-router-dom'


const Transaction = () => {
    const contract = "Uniswap V3: Router 2"
    const description = "This is a description"

    const apiResponse = {
        "status": "success",
        "response": {
          "transaction_hash": "0x99cef2e55fd85e60c60ed6db8bd13ee95bb9db682d583a50f5398045bb32c589",
          "transaction_type": "DEX_SWAP",
          "transaction_metadata": {
            "account": "0x8D6c17Df259C8c11eb334D1B52F44bB6F9752aeF",
            "swappedFrom": {
              "asset": {
                "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                "name": "USD Coin",
                "symbol": "USDC",
                "decimals": 6,
                "logoURI": "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389"
              },
              "amount": {
                "raw": "5000000",
                "formatted": "5.0"
              }
            },
            "swappedTo": {
              "asset": {
                "address": "0x4d224452801aced8b2f0aebe155379bb5d594381",
                "name": "ApeCoin",
                "symbol": "APE",
                "decimals": 18,
                "logoURI": "https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg?1647476455"
              },
              "amount": {
                "raw": "1142961956528469339",
                "formatted": "1.142961956528469339"
              }
            }
          },
          "standard_events": [
            {
              "type": "ERC20_APPROVAL",
              "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              "data": {
                "owner": "0x8D6c17Df259C8c11eb334D1B52F44bB6F9752aeF",
                "spender": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                "value": "5000000"
              }
            },
            {
              "type": "ERC20_TRANSFER",
              "address": "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
              "data": {
                "from": "0xB07Fe2F407F971125D4EB1977f8aCEe8846C7324",
                "to": "0x8D6c17Df259C8c11eb334D1B52F44bB6F9752aeF",
                "value": "1142961956528469339"
              }
            },
            {
              "type": "ERC20_TRANSFER",
              "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              "data": {
                "from": "0x8D6c17Df259C8c11eb334D1B52F44bB6F9752aeF",
                "to": "0xB07Fe2F407F971125D4EB1977f8aCEe8846C7324",
                "value": "5000000"
              }
            }
          ],
          "protocol": {
            "contract_address": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
            "protocol": "Uniswap V3"
          },
          "attached_eth": {
            "raw": "0",
            "formatted": "0"
          },
          "from": "0x8D6c17Df259C8c11eb334D1B52F44bB6F9752aeF",
          "to": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
          "action": "Swapped 5.00000 USDC for 1.14296 APE on Uniswap V3",
          "transaction_cost": {
            "gas_price": {
              "price": 38,
              "unit": "gwei"
            },
            "gas_used": 183857,
            "paid": {
              "raw": "7076889027030169",
              "formatted": "0.007076889027030169"
            }
          },
          "fraud_detection": {
            "is_fraudulent": false,
            "from": {
              "is_fraudulent": false,
              "info": ""
            },
            "to": {
              "is_fraudulent": false,
              "info": ""
            }
          },
          "time": {
            "formatted": "06/21/2022, 09:05:11 PM",
            "timeago": "just now",
            "unix_timestamp": 1655845511
          },
          "status": 1,
          "chain": {
            "id": 1,
            "name": "Ethereum"
          }
        },
        "context": {
          "object": "simulation",
          "request": {
            "from_": "0x8D6c17Df259C8c11eb334D1B52F44bB6F9752aeF",
            "to": "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
            "nonce": null,
            "gasLimit": 258884,
            "gasPrice": null,
            "data": "0x5ae401dc0000000000000000000000000000000000000000000000000000000062b23733000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000c4f3995c67000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000000000000000000000000000000000062b23bdc000000000000000000000000000000000000000000000000000000000000001c61cb8ba1a72ca2533290edb0e60b90fe47cdfca06747fef2bb9aa2335b1afbd1216d8def827cd8150b245ebbb426619f846413eb75e451f59f80d38e5c468bec0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000004d224452801aced8b2f0aebe155379bb5d5943810000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000008d6c17df259c8c11eb334d1b52f44bb6f9752aef00000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000000000000000000000000000cb07e4668882aaf000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "value": "0",
            "chainId": null,
            "type_": null,
            "maxFeePerGas": null,
            "maxPriorityFeePerGas": null
          }
        }
    }


    const boxStyling = {border: "solid 1px black", borderRadius: "10px", minHeight: "400px", margin:"5px"};

    const [transaction, setTransaction] = useState([]);

    const createNewTransaction = (data) => {

        setTransaction([
            new TransactionData(data)
        ]);

    }

    useEffect(() => {
        getTransactionInformation();
    }, []);

    const getTransactionInformation = () => {

        //This should be later obtained by another API
        // const data = JSON.stringify({
        //     "from":"0xe126b3E5d052f1F575828f61fEBA4f4f2603652a",
        //     "to":"0xf4d2888d29D722226FafA5d9B24F9164c092421E",
        //     "value":"0",
        //     "data":"0x095ea7b3000000000000000000000000881d40237659c251811cec9c364ef91dc08d300c0000000000000000000000000000000000000000000000000000000000000000",
        //     "gasLimit":"1000000"   
        // });

        // axios(chaingrepConfig(data))
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data.response));
        //         createNewTransaction(response.data.response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
                
        createNewTransaction(apiResponse);
    }

    return (
        <div>
            {
                transaction[0]
                ? (
                    <div>
                        <h1 style={{textAlign: "center"}}> Overview </h1>
                        <p style={{textAlign: "center", fontSize: "25px", marginLeft: "30%", marginRight: "30%"}}>
                            Transaction Type: &nbsp;
                            <span style={{fontWeight: 'bold'}}>
                                {transaction[0].type}
                            </span>
                        </p>
                        <div className="ui grid">
                            <div className="four wide column"></div> {/*  change to one wide after  */}
                            <div className="eight wide column" style={boxStyling}> {/*  change to seven wide after  */}
                                <h3 style={{textAlign: "center"}}>What will happen in your wallet:</h3>

                                <table className="ui fixed table">
                                    <thead>
                                        <tr>
                                        <th>Assets Out/In</th>
                                        <th>Token</th>
                                        <th>Amount (Token)</th>
                                        <th>Purpose</th>
                                        <th>To</th>
                                        </tr>
                                    </thead>
                                </table>

                                {transaction[0] && <table className="ui fixed table">
                                     <tbody>
                                        <tr>
                                        <td>Out</td>
                                        <td>{transaction[0].inputCryptoSymbol}</td>
                                        <td>{parseFloat(transaction[0].inputCryptoAmount).toFixed(2)}</td> 
                                        <td>Swap</td>
                                        <td>{transaction[0].to.slice(0,5)}...{transaction[0].to.slice(37,42)}</td>
                                        </tr>
                                    </tbody> 
                                    <tbody>
                                        <tr>
                                        <td>Out</td>
                                        <td>{transaction[0].gasUnit == "gwei" ? 'ETH' : transaction[0].gasUnit}</td>
                                        <td>{parseFloat(transaction[0].gasAmount).toFixed(8)}</td>
                                        <td>Gas</td>
                                        <td>Miners</td>
                                        </tr>
                                    </tbody>
                                </table> }

                                {transaction[0] && <table className="ui fixed table">
                                <tbody>
                                        <tr>
                                        <td>In</td>
                                        <td>{transaction[0].outputCryptoSymbol}</td>
                                        <td>{parseFloat(transaction[0].outputCryptoAmount).toFixed(8)}</td>
                                        <td>Swap</td>
                                        <td>{transaction[0].you.slice(0,5)}...{transaction[0].you.slice(37,42)}</td>
                                        </tr>
                                    </tbody>
                                </table> }
                            </div>

                            {/* <div className="seven wide column" style={boxStyling}>
                                <h3 style={{textAlign: "center"}}>What contract you are interacting with:</h3>
                                <h4>Contract: {contract}</h4>
                                <h6>Description: {description}</h6>
                                <table className="ui fixed table" >
                                    <thead>
                                        <tr>
                                        <th>Function Calls</th>
                                        <th>Contract Calls</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>fc1</td>
                                        <td>All time: cc1</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                        <td>fc2</td>
                                        <td>Avg per day: cc2</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                        <td>fc1</td>
                                        <td>Last hour: cc3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </div>

                        <div style={{display: "flex",  justifyContent: "center", marginTop: "2%"}}><button className="ui pink button" onClick = {() => window.close()}>Back to Uniswap</button></div>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default Transaction;