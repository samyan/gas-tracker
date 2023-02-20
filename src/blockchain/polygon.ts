import { AxiosInstance, AxiosRequestConfig } from 'axios';
import AbstractBlockchain from '../abstract-blockchain';
import PolygonResult from '../result/polygon';

class PolygonBlockchain extends AbstractBlockchain {
	private apiKey: string;

	/**
	 * Constructor
	 *
	 * @param {string} apiKey
	 * @param {AxiosInstance} client
	 * @memberof PolygonBlockchain
	 */
	public constructor(apiKey: string, client: AxiosInstance) {
		super(client, 'https://api.polygonscan.com/api');

		this.apiKey = apiKey;
	}
	/**
	 * Get gas prices in Gwei
	 *
	 * @return {*}  {(Promise<PolygonResult>)}
	 * @memberof PolygonBlockchain
	 */
	public async getPrices(): Promise<PolygonResult> {
		// Request
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

		return new PolygonResult(result);
	}

	/**
	 * Request http
	 *
	 * @param {string} method
	 * @param {string} endpoint
	 * @param {AxiosRequestConfig<any>} options
	 * @return {*}  {Promise<any>}
	 * @memberof PolygonBlockchain
	 */
	public async requestHttp(method: string, endpoint: string, options?: AxiosRequestConfig<any>): Promise<any> {
		// Request
		const response = await this.getClient().request({ method, url: endpoint, ...options });

		// Parse the response
		return response.data;
	}
}

export default PolygonBlockchain;
