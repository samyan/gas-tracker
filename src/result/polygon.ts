import ResultContract from '../contract/result';

interface ResponseProps {
	suggestBaseFee: string;
	SafeGasPrice: string;
	ProposeGasPrice: string;
	FastGasPrice: string;
}

class PolygonResult extends ResultContract {
	private response: ResponseProps;

	/**
	 * Constructor
	 * 
	 * @param {ResponseProps} response
	 * @memberof PolygonResult
	 */
	public constructor(response: ResponseProps) {
		super();
		
		this.response = response;
	}

	/**
	 * Get base fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof PolygonResult
	 */
	public getBaseFee(): string {
		return this.response.suggestBaseFee;
	}

	/**
	 * Get safe fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof PolygonResult
	 */
	public getSafePrice(): string {
		return this.response.SafeGasPrice;
	}

	/**
	 * Get propose gas fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof PolygonResult
	 */
	public getProposePrice(): string {
		return this.response.ProposeGasPrice;
	}

	/**
	 * Get fast gas fee in Gwei
	 *
	 * @return {*}  {string}
	 * @memberof PolygonResult
	 */
	public getFastPrice(): string {
		return this.response.FastGasPrice;
	}
}

export default PolygonResult;
