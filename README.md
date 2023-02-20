
# GasTracker ![Version](https://img.shields.io/npm/v/@samyan/gas-tracker) ![License](https://img.shields.io/npm/l/@samyan/gas-tracker)

### Library for get gas price from different sources. The currently supported blockchains:

- Bitcoin
- Ethereum (requires **API TOKEN** from [etherscan.io](https://etherscan.io))
- Polygon (requires **API TOKEN** from [polygonscan.com](https://polygonscan.com))
- BNB Chain / Binance Smart Chain (requires **API TOKEN** from [bscscan.com](https://bscscan.com))

---

## Install

```sh
npm i @samyan/gas-tracker
```

## Usage

### Example 1

````typescript
const gasTracker = new GasTracker();

gasTracker
    .getBlockchain('bitcoin')
    .getPrices()
    .then((result: BitcoinResult) => {
        console.log(result.getHourPrice());
    })
    .catch((error: any) => {
        console.log(error.message);
    });
````

--------------

### Example 2
````typescript
try {
    const gasTracker = new GasTracker('YOUR_API_TOKEN');

    const result: EthereumResult = (await gasTracker
        .getBlockchain('ethereum')
        .getPrices()
    ) as EthereumResult;

    console.log(result.getFastPrice());
} catch (error) {
    console.log(reason.message);
}
````
