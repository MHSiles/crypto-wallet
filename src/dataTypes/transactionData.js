class TransactionData {
    constructor(
        data
    ) {
      this.type = data.transaction_type;
      this.from = data.from;
      this.fromFraudDetection = data.fraud_detection.from.is_fraudulent;
      this.to = data.to;
      this.toFraudDetection = data.fraud_detection.to.is_fraudulent;
      this.inputCryptoName =  data.transaction_metadata.asset.name;
      this.inputCryptoSymbol = data.transaction_metadata.asset.symbol;
      this.inputCryptoAmount = data.transaction_metadata.amount.formatted;
      this.inputCryptoLogo = data.transaction_metadata.asset.logoURI;
      this.outputCryptoName = '';
      this.outputCryptoSymbol = '';
      this.outputCryptoAmount = '';
      this.outputCryptoLogo = '';
      this.gasAmount = data.transaction_cost.paid.formatted;
      this.timestamp = data.time.unix_timestamp;
    }
}

export default TransactionData;