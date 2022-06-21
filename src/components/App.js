import Transaction from "./Transaction";

const App = () => {

    return (
        <div>
            <div className="ui message">
                <h1 className="header" style={{display:"flex",justifyContent:"right"}}>
                chain/balance/address buttons here
                </h1>
            </div>
            <Transaction/>
        </div>
    )

};

export default App;