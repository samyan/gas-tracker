import ResultContract from '../contract/result';

interface ResponseProps {
	suggestBaseFee: string;
	SafeGasPrice: string;
	ProposeGasPrice: string;
	FastGasPrice: string;
}

class EthereumResult extends ResultContract {
	private result: ResponseProps;

	/**
	 * Constructor
	 *
	 * @param {*} result
	 * @memberof EthereumResult
	 */
	public constructor(result: any) {
		super();
		
		this.result = result;
	}

	/**
	 * Get base fee
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getBaseFee(): string {
		return this.result.suggestBaseFee;
	}

	/**
	 * Get safe fee
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getSafePrice(): string {
		return this.result.SafeGasPrice;
	}

	/**
	 * Get propose gas fee
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getProposePrice(): string {
		return this.result.ProposeGasPrice;
	}

	/**
	 * Get fast gas fee
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getFastPrice(): string {
		return this.result.FastGasPrice;
	}
}

export default EthereumResult;
