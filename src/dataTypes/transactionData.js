class TransactionData {
    constructor(
        type,
        from,
        fromFraudDetection,
        to,  
        toFraudDetection,
        inputCryptoName,
        inputCryptoSymbol,
        inputCryptoAmount,
        inputCryptoLogo,
        outputCryptoName,
        outputCryptoSymbol,
        outputCryptoAmount,
        outputCryptoLogo,
        gasAmount,
        timestamp
    ) {
      this.type = type;
      this.from = from;
      this.fromFraudDetection = fromFraudDetection;
      this.to = to;
      this.toFraudDetection = toFraudDetection;
      this.inputCryptoName = inputCryptoName;
      this.inputCryptoSymbol = inputCryptoSymbol;
      this.inputCryptoAmount = inputCryptoAmount;
      this.inputCryptoLogo = inputCryptoLogo;
      this.outputCryptoName = outputCryptoName;
      this.outputCryptoSymbol = outputCryptoSymbol;
      this.outputCryptoAmount = outputCryptoAmount;
      this.outputCryptoLogo = outputCryptoLogo;
      this.gasAmount = gasAmount;
      this.timestamp = timestamp;
    }
}

export default TransactionData;