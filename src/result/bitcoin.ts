import ResultContract from '../contract/result';

interface ResponseProps {
	fastestFee: number;
	halfHourFee: number;
	hourFee: number;
}

class BitcoinResult extends ResultContract {
	private result: ResponseProps;

	/**
	 * Constructor
	 *
	 * @param {*} result
	 * @memberof BitcoinResult
	 */
	public constructor(result: any) {
		super();
		
		this.result = result;
	}

	/**
	 * Get safe fee
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getHourPrice(): string {
		return this.result.hourFee.toString();
	}

	/**
	 * Get propose gas fee
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getHalfHourPrice(): string {
		return this.result.halfHourFee.toString();
	}

	/**
	 * Get fast gas fee
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getFastestPrice(): string {
		return this.result.fastestFee.toString();
	}
}

export default BitcoinResult;
