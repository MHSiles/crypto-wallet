// export interface TransactionData {
//   type: String;
//   from: String;
//   fromFraudDetection: String;
//   to: String;
//   toFraudDetection: String;
//   inputCryptoCurrencyName: String;
//   inputCryptoAmount: String;
//   inputCryptoLogo: String;
//   outputCryptoCurrency: String;
//   outputCryptoAmount: String;
//   outputCryptoLogo: String;
//   gasAmount: String;
//   timestamp: String;
// }


class TransactionData {
    constructor(
        type,
        from,
        fromFraudDetection,
        to,  
        toFraudDetection,
        inputCryptoCurrencyName,
        inputCryptoAmount,
        inputCryptoLogo,
        outputCryptoCurrency,
        outputCryptoAmount,
        outputCryptoLogo,
        gasAmount,
        timestamp
    ) {
      this.type = type || '';
      this.from = from || '';
      this.fromFraudDetection = fromFraudDetection || '';
      this.to = to || '';
      this.toFraudDetection = toFraudDetection || '';
      this.inputCryptoCurrencyName = inputCryptoCurrencyName || '';
      this.inputCryptoAmount = inputCryptoAmount || '';
      this.inputCryptoLogo = inputCryptoLogo || '';
      this.outputCryptoCurrency = outputCryptoCurrency || '';
      this.outputCryptoAmount = outputCryptoAmount || '';
      this.outputCryptoLogo = outputCryptoLogo || '';
      this.gasAmount = gasAmount || '';
      this.timestamp = timestamp || '';
    }
}

export default TransactionData;