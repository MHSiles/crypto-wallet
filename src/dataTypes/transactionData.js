class TransactionData {
    constructor(
        data
    ) {
      this.type = data.response.transaction_type;
      this.you = data.response.transaction_metadata.swappedFrom.asset.address;
      this.to = data.response.transaction_metadata.swappedTo.asset.address;
      this.inputCryptoName =  data.response.transaction_metadata.swappedFrom.asset.name;
      this.inputCryptoSymbol = data.response.transaction_metadata.swappedFrom.asset.symbol;
      this.inputCryptoAmount = data.response.transaction_metadata.swappedFrom.amount.formatted;
      this.inputCryptoLogo = data.response.transaction_metadata.swappedFrom.asset.logoURI;
      this.outputCryptoName = data.response.transaction_metadata.swappedTo.asset.name;
      this.outputCryptoSymbol = data.response.transaction_metadata.swappedTo.asset.symbol;
      this.outputCryptoAmount = data.response.transaction_metadata.swappedTo.amount.formatted;
      this.outputCryptoLogo = data.response.transaction_metadata.swappedTo.asset.logoURI;
      this.gasAmount = data.response.transaction_cost.paid.formatted;
      this.timestamp = data.response.time.unix_timestamp;
  
      

    }
}

export default TransactionData;