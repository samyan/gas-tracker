import ResultContract from '../contract/result';

interface ResponseProps {
	fastestFee: number;
	halfHourFee: number;
	hourFee: number;
}

class BitcoinResult extends ResultContract {
	private response: ResponseProps;

	/**
	 * Constructor
	 * 
	 * @param {ResponseProps} response
	 * @memberof BitcoinResult
	 */
	public constructor(response: ResponseProps) {
		super();
		
		this.response = response;
	}

	/**
	 * Get hour fee price in satoshis
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getHourPrice(): string {
		return this.response.hourFee.toString();
	}

	/**
	 * Get half hour fee price in satoshis
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getHalfHourPrice(): string {
		return this.response.halfHourFee.toString();
	}

	/**
	 * Get fastest fee price in satoshis
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getFastestPrice(): string {
		return this.response.fastestFee.toString();
	}
}

export default BitcoinResult;
