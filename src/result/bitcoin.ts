import ResultContract from '../contract/result';

interface ResponseProps {
	regular: number;
	priority: number;
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
	 * Get price for regular in satoshis
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getRegularPrice(): string {
		return this.response.regular.toString();
	}

	/**
	 * Get price for priority in satoshis
	 *
	 * @return {*}  {string}
	 * @memberof BitcoinResult
	 */
	public getPriorityPrice(): string {
		return this.response.priority.toString();
	}
}

export default BitcoinResult;
