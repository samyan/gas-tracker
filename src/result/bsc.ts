import ResultContract from '../contract/result';

interface ResponseProps {
	SafeGasPrice: string;
	ProposeGasPrice: string;
	FastGasPrice: string;
}

class BscResult extends ResultContract {
	private response: ResponseProps;

	/**
	 * Constructor
	 * 
	 * @param {ResponseProps} response
	 * @memberof BscResult
	 */
	public constructor(response: ResponseProps) {
		super();
		
		this.response = response;
	}

	/**
	 * Get safe fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof BscResult
	 */
	public getSafePrice(): string {
		return this.response.SafeGasPrice;
	}

	/**
	 * Get propose gas fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof BscResult
	 */
	public getProposePrice(): string {
		return this.response.ProposeGasPrice;
	}

	/**
	 * Get fast gas fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof BscResult
	 */
	public getFastPrice(): string {
		return this.response.FastGasPrice;
	}
}

export default BscResult;
