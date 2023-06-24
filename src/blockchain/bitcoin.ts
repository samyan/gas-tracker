import { AxiosInstance, AxiosRequestConfig } from 'axios';
import AbstractBlockchain from '../abstract-blockchain';
import BitcoinResult from '../result/bitcoin';

class BitcoinBlockchain extends AbstractBlockchain {
	/**
	 * Constructor
	 * 
	 * @param {AxiosInstance} client
	 * @memberof BitcoinBlockchain
	 */
	public constructor(client: AxiosInstance) {
		super(client, 'https://api.blockchain.info/mempool/fees');
	}

	/**
	 * Get gas prices in Gwei
	 *
	 * @return {*}  {(Promise<BitcoinResult>)}
	 * @memberof BscBlockchain
	 */
	public async getPrices(): Promise<BitcoinResult> {
		const response = await this.requestHttp('GET', this.getEndpoint());

		return new BitcoinResult(response);
	}

	/**
	 * Request http
	 *
	 * @param {string} method
	 * @param {string} endpoint
	 * @param {AxiosRequestConfig<any>} [options]
	 * @return {*}  {Promise<any>}
	 * @memberof BitcoinBlockchain
	 */
	public async requestHttp(method: string, endpoint: string, options?: AxiosRequestConfig<any>): Promise<any> {
		// Request
		const response = await this.getClient().request({ method, url: endpoint, ...options });

		// Parse the response
		return response.data;
	}
}

export default BitcoinBlockchain;
