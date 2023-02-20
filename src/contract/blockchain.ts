import { AxiosRequestConfig } from 'axios';
import Result from './result';

abstract class Blockchain {
	/**
	 * Get prices
	 *
	 * @abstract
	 * @return {*}  {(Promise<null | Result>)}
	 * @memberof Blockchain
	 */
	public abstract getPrices(): Promise<null | Result>;

	/**
	 * Request http
	 *
	 * @protected
	 * @abstract
	 * @param {string} method
	 * @param {string} endpoint
	 * @param {AxiosRequestConfig<any>} options
	 * @return {*}  {*}
	 * @memberof Blockchain
	 */
	protected abstract requestHttp(method: string, endpoint: string, options: AxiosRequestConfig<any>): any;
}

export default Blockchain;
