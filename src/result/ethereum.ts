import ResultContract from '../contract/result';

interface ResponseProps {
	suggestBaseFee: string;
	SafeGasPrice: string;
	ProposeGasPrice: string;
	FastGasPrice: string;
}

class EthereumResult extends ResultContract {
	private response: ResponseProps;

	/**
	 * Constructor
	 * 
	 * @param {ResponseProps} response
	 * @memberof EthereumResult
	 */
	public constructor(response: ResponseProps) {
		super();
		
		this.response = response;
	}

	/**
	 * Get base fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getBaseFee(): string {
		return this.response.suggestBaseFee;
	}

	/**
	 * Get safe fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getSafePrice(): string {
		return this.response.SafeGasPrice;
	}

	/**
	 * Get propose gas fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getProposePrice(): string {
		return this.response.ProposeGasPrice;
	}

	/**
	 * Get fast gas fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof EthereumResult
	 */
	public getFastPrice(): string {
		return this.response.FastGasPrice;
	}
}

export default EthereumResult;
