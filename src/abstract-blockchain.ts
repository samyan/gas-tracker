import { AxiosInstance } from 'axios';
import Blockchain from './contract/blockchain';

abstract class AbstractBlockchain extends Blockchain {
	private client: AxiosInstance;
	private endpoint: string;

	/**
	 * Constructor
	 *
	 * @param {AxiosInstance} client
	 * @param {string} endpoint
	 * @memberof AbstractBlockchain
	 */
	public constructor(client: AxiosInstance, endpoint: string) {
		super();

		this.client = client;
		this.endpoint = endpoint;
	}

	/**
	 * Get client
	 *
	 * @return {*}  {AxiosInstance}
	 * @memberof AbstractProvider
	 */
	protected getClient(): AxiosInstance {
		return this.client;
	}

	/**
	 * Get endpoint
	 *
	 * @protected
	 * @return {*}  {string}
	 * @memberof AbstractBlockchain
	 */
	protected getEndpoint(): string {
		return this.endpoint;
	}
}

export default AbstractBlockchain;
