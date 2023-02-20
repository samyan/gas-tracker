import { AxiosInstance, AxiosRequestConfig } from 'axios';
import AbstractBlockchain from '../abstract-blockchain';
import EthereumResult from '../result/ethereum';

class EthereumBlockchain extends AbstractBlockchain {
	private apiKey: string;

	/**
	 * Constructor
	 * 
	 * @param {string} apiKey
	 * @param {AxiosInstance} client
	 * @memberof EthereumBlockchain
	 */
	public constructor(apiKey: string, client: AxiosInstance) {
		super(client, 'https://api.etherscan.io/api');

		this.apiKey = apiKey;
	}

	/**
	 * Get gas prices in Gwei
	 *
	 * @return {*}  {(Promise<EthereumResult>)}
	 * @memberof EthereumBlockchain
	 */
	public async getPrices(): Promise<EthereumResult> {
		const response = await this.requestHttp('GET', this.getEndpoint(), {
			params: {
				module: 'gastracker',
				action: 'gasoracle',
				apikey: this.apiKey,
			},
		});

		// Destructuring the response
		const { status, result } = response;
		
		if (status !== '1') {
			throw new Error(result);
		}

		return new EthereumResult(result);
	}

	/**
	 * Request http
	 *
	 * @param {string} method
	 * @param {string} endpoint
	 * @param {AxiosRequestConfig<any>} [options]
	 * @return {*}  {Promise<any>}
	 * @memberof EthereumBlockchain
	 */
	public async requestHttp(method: string, endpoint: string, options?: AxiosRequestConfig<any>): Promise<any> {
		// Request
		const response = await this.getClient().request({ method, url: endpoint, ...options });

		// Parse the response
		return response.data;
	}
}

export default EthereumBlockchain;
