import Transaction from "./Transaction";


const App = () => {

    return (
        <div>
            <div className="ui message">
                <h1 className="header" style={{marginLeft: "0px"}}>
                Atomic Crypto Wallet
                </h1>
                <Transaction/>
            </div>
        </div>
    )

};

export default App;