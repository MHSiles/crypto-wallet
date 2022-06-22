import Transaction from "./Transaction";

const App = () => {

    return (
        <div style={{backgroundColor:"#132127", height: "100vh", color:"white"}}>
            {/* <div className="ui message">
                <h1 className="header" style={{display:"flex",justifyContent:"left"}}>
                Transaction Information{/* chain/balance/address buttons here 
                </h1>
            </div> */}
            <Transaction/>

            
        </div>
    )

};

export default App;