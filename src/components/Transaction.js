import {useState, useEffect} from 'react';
import axios from 'axios';
import TransactionData from '../dataTypes/transactionData';
import chaingrepConfig from '../services/chaingrep';

const Transaction = () => {
    const swap1 = "0.1 ETH"
    const swap2 = "100 USDC"
    const chain = "Ethereum Mainnet"
    const contract = "Uniswap V3: Router 2"
    const description = "This is a description"

    const apiResponse = {"transaction_hash":"0x69ccefb1c1d87d0b317dcabf1105a384ba76650e2d4cc61665934c469b7ce42e","transaction_type":"ERC20_APPROVAL","transaction_metadata":{"from":"0xe126b3E5d052f1F575828f61fEBA4f4f2603652a","to":"0x881D40237659C251811CEC9c364ef91dC08D300C","asset":{"address":"0xf4d2888d29d722226fafa5d9b24f9164c092421e","name":"LooksRare","symbol":"LOOKS","decimals":18,"logoURI":"https://assets.coingecko.com/coins/images/22173/small/circle-black-256.png?1641173160"},"amount":{"raw":"0","formatted":"0.0"}},"standard_events":[{"type":"ERC20_APPROVAL","address":"0xf4d2888d29D722226FafA5d9B24F9164c092421E","data":{"owner":"0xe126b3E5d052f1F575828f61fEBA4f4f2603652a","spender":"0x881D40237659C251811CEC9c364ef91dC08D300C","value":"0"}}],"protocol":{"contract_address":"0xf4d2888d29d722226fafa5d9b24f9164c092421e","protocol":"UNKNOWN"},"attached_eth":{"raw":"0","formatted":"0"},"from":"0xe126b3E5d052f1F575828f61fEBA4f4f2603652a","to":"0xf4d2888d29D722226FafA5d9B24F9164c092421E","action":"Revoked a contract's allowance to spend LOOKS","transaction_cost":{"gas_price":{"price":36,"unit":"gwei"},"gas_used":26255,"paid":{"raw":"962859266285490","formatted":"0.00096285926628549"}},"fraud_detection":{"is_fraudulent":false,"from":{"is_fraudulent":false,"info":""},"to":{"is_fraudulent":false,"info":""}},"time":{"formatted":"06/21/2022, 07:01:43 PM","timeago":"just now","unix_timestamp":1655838103},"status":1,"chain":{"id":1,"name":"Ethereum"}}

    const boxStyling = {border: "solid 1px black", borderRadius: "10px", minHeight: "400px", margin:"5px"};

    const [transaction, setTransaction] = useState([]);

    const createNewTransaction = (data) => {

        setTransaction([
            new TransactionData(
                    data.transaction_type,
                    data.from,
                    data.fraud_detection.from.is_fraudulent,
                    data.to,
                    data.fraud_detection.to.is_fraudulent,
                    data.transaction_metadata.asset.name,
                    data.transaction_metadata.amount.formatted,
                    data.transaction_metadata.asset.logoURI,
                    '',
                    '',
                    '',
                    data.transaction_cost.paid.formatted,
                    data.time.unix_timestamp
                )
        ]);

    }

    useEffect(() => {
        getTransactionInformation();
    }, []);

    const getTransactionInformation = () => {

        //This should be later obtained by another API
        const data = JSON.stringify({
            "from":"0xe126b3E5d052f1F575828f61fEBA4f4f2603652a",
            "to":"0xf4d2888d29D722226FafA5d9B24F9164c092421E",
            "value":"0",
            "data":"0x095ea7b3000000000000000000000000881d40237659c251811cec9c364ef91dc08d300c0000000000000000000000000000000000000000000000000000000000000000",
            "gasLimit":"1000000"   
        });

        createNewTransaction(apiResponse);

        // axios(chaingrepConfig(data))
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data.response));
        //         createNewTransaction(response.data.response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}> Overview </h1>
            <p style={{textAlign: "center", fontSize: "25px", marginLeft: "30%", marginRight: "30%"}}> You would swap <span style={{fontWeight: 'bold'}}>{transaction[0] && transaction[0].unix_timestamp}</span> for <span style={{fontWeight: 'bold'}}>{swap2}</span> on the {chain} </p>

            <div className="ui grid">
                <div className="one wide column"></div>
                <div className="seven wide column" style={boxStyling}>
                    <h3 style={{textAlign: "center"}}>What will happen in your wallet:</h3>

                    <table className="ui fixed table">
                        <thead>
                            <tr>
                            <th>Assets Out/In</th>
                            <th>Token</th>
                            <th>Amount (USD/Token)</th>
                            <th>Purpose</th>
                            <th>To</th>
                            </tr>
                        </thead>
                    </table>

                    <table className="ui fixed table">
                        <tbody>
                            <tr>
                            <td>Out</td>
                            <td>ETH</td>
                            <td>$100/0.1</td>
                            <td>Swap</td>
                            <td>383r83jilsj8dsklfjsaielfjgaiselfjklasehgkusaeghukaesht4osjtj8ostj484osjt8osj</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="ui fixed table">
                        <tbody>
                            <tr>
                            <td>In</td>
                            <td>USDC</td>
                            <td>$100/100</td>
                            <td>Swap</td>
                            <td>0xfi3jieljf3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="seven wide column" style={boxStyling}>
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
                </div>
            </div>

            <div style={{display: "flex",  justifyContent: "center", marginTop: "2%"}}><button className="ui pink button">Back to Uniswap</button></div>
        </div>
    )

}

export default Transaction;