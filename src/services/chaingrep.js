const { REACT_APP_CHAINGREP_API_KEY } = process.env;

const chaingrepConfig = (data) => {
    return {
        method: 'post',
        url: 'https://api.chaingrep.com/v0/transaction/simulation',
        headers: { 
          'X-API-KEY': REACT_APP_CHAINGREP_API_KEY, 
          'Content-Type': 'application/json'
        },
        data : data
    }
};

export default chaingrepConfig;

