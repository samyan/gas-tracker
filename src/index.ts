import axios, { AxiosInstance } from 'axios';
import BitcoinBlockchain from './blockchain/bitcoin';
import BscBlockchain from './blockchain/bsc';
import EthereumBlockchain from './blockchain/ethereum';
import PolygonBlockchain from './blockchain/polygon';
import Blockchain from './contract/blockchain';
import Factory from './contract/factory';

class GasTracker implements Factory {
	private axiosInstance: AxiosInstance;
	private blockchains: string[];
	private defaultBlockchain: string;
	private apiKey: string;

	/**
	 * Constructor
	 * 
	 * @param {string} [apiKey]
	 * @memberof GasTracker
	 */
	public constructor(apiKey?: string) {
		this.axiosInstance = axios.create();

		this.blockchains = ['ethereum', 'polygon', 'bsc', 'bitcoin'];
		this.defaultBlockchain = 'ethereum';

		this.apiKey = apiKey ?? '';
	}

	/**
	 * Set proxy
	 *
	 * @param {string} protocol
	 * @param {string} host
	 * @param {number} port
	 * @param {{ username: string; password: string }} auth
	 * @memberof CurrencyRates
	 */
	public setProxy(protocol: string, host: string, port: number, auth: { username: string; password: string }): void {
		this.axiosInstance.defaults.proxy = {
			protocol,
			host,
			port,
			auth,
		};
	}

	/**
	 * Get blockchain
	 *
	 * @param {string} [blockchain]
	 * @return {*}  {Blockchain}
	 * @memberof GasTracker
	 */
	public getBlockchain(blockchain?: string): Blockchain {
		const defaultBlockchain: string = blockchain ?? this.defaultBlockchain;

		// Checking if the current blockchain is exists in blockchain list
		if (!this.blockchains.includes(defaultBlockchain)) {
			throw new Error(`Blockchain [${defaultBlockchain}] not supported`);
		}

		switch (defaultBlockchain) {
			case 'ethereum':
				return new EthereumBlockchain(this.apiKey, this.axiosInstance);
			case 'polygon':
				return new PolygonBlockchain(this.apiKey, this.axiosInstance);
			case 'bsc':
				return new BscBlockchain(this.apiKey, this.axiosInstance);
			case 'bitcoin':
				return new BitcoinBlockchain(this.axiosInstance);
			default:
				throw new Error('Unsupported blockchain');
		}
	}
}

export default GasTracker;
