import {useState} from 'react';
import axios from 'axios';
import TransactionData from '../dataTypes/transactionData';
import chaingrepConfig from '../services/chaingrep';

const Transaction = () => {
    const swap1 = "0.1 ETH"
    const swap2 = "100 USDC"
    const chain = "Ethereum Mainnet"
    const contract = "Uniswap V3: Router 2"
    const description = "This is a description"

    const boxStyling = {border: "solid 1px black", borderRadius: "10px", minHeight: "400px", margin:"5px"};

    const [transaction, setTransaction] = useState([]);

    const createNewTransaction = (data) => {

        console.log(data.transaction_type);

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

    const getTransactionInformation = () => {

        //This should be later obtained by another API
        const data = JSON.stringify({
            "from":"0xe126b3E5d052f1F575828f61fEBA4f4f2603652a",
            "to":"0xf4d2888d29D722226FafA5d9B24F9164c092421E",
            "value":"0",
            "data":"0x095ea7b3000000000000000000000000881d40237659c251811cec9c364ef91dc08d300c0000000000000000000000000000000000000000000000000000000000000000",
            "gasLimit":"1000000"   
        });

        axios(chaingrepConfig(data))
            .then(function (response) {
                console.log(JSON.stringify(response.data.response));
                createNewTransaction(response.data.response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        // <div className='ui grid'>
        //         <div className="sixteen wide column">
        //             <div className="ui orange bottom attached button" tabIndex="0"  onClick={getTransactionInformation}>Get Transaction Information</div>
        //         </div>
        //     </div>
        <div>
            <h1 style={{textAlign: "center"}}> Overview </h1>
            <p style={{textAlign: "center", fontSize: "25px", marginLeft: "30%", marginRight: "30%"}}> You would swap <span style={{fontWeight: 'bold'}}>{swap1}</span> for <span style={{fontWeight: 'bold'}}>{swap2}</span> on the {chain} </p>

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
                        <tbody>
                            <tr>
                            <td>Out</td>
                            <td>ETH</td>
                            <td>$100/0.1</td>
                            <td>Swap</td>
                            <td>383r83jilsj8dsklfjsaielfjgaiselfjklasehgkusaeghukaesht4osjtj8ostj484osjt8osj</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <td>In</td>
                            <td>USDC</td>
                            <td>$100/100</td>
                            <td>Swap</td>
                            <td>0xfi3jieljf3</td>
                            </tr>
                        </tbody>
                        {/* <tbody>
                            {listOfWallets.map((wallet,i) => {
                                return (
                                    <tr key={"wallet-" + i}>
                                        <td>{wallet}</td>
                                    </tr>
                                );
                            })}
                        </tbody> */}
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