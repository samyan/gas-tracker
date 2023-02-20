import ResultContract from '../contract/result';

interface ResponseProps {
	SafeGasPrice: string;
	ProposeGasPrice: string;
	FastGasPrice: string;
}

class BscResult extends ResultContract {
	private result: ResponseProps;

	/**
	 * Constructor
	 *
	 * @param {*} result
	 * @memberof BscResult
	 */
	public constructor(result: any) {
		super();
		
		this.result = result;
	}

	/**
	 * Get safe fee
	 *
	 * @return {*}  {string}
	 * @memberof BscResult
	 */
	public getSafePrice(): string {
		return this.result.SafeGasPrice;
	}

	/**
	 * Get propose gas fee
	 *
	 * @return {*}  {string}
	 * @memberof BscResult
	 */
	public getProposePrice(): string {
		return this.result.ProposeGasPrice;
	}

	/**
	 * Get fast gas fee
	 *
	 * @return {*}  {string}
	 * @memberof BscResult
	 */
	public getFastPrice(): string {
		return this.result.FastGasPrice;
	}
}

export default BscResult;
