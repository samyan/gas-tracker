import axios, { AxiosInstance } from 'axios';
import BlockchainType from './blockchain-type';
import BitcoinBlockchain from './blockchain/bitcoin';
import BscBlockchain from './blockchain/bsc';
import EthereumBlockchain from './blockchain/ethereum';
import PolygonBlockchain from './blockchain/polygon';
import Blockchain from './contract/blockchain';
import Factory from './contract/factory';
import BitcoinResult from './result/bitcoin';
import BscResult from './result/bsc';
import EthereumResult from './result/ethereum';
import PolygonResult from './result/polygon';

class GasTracker implements Factory {
	private axiosInstance: AxiosInstance;
	private defaultBlockchain: BlockchainType;
	private apiKey: string;
	private isMainNet: boolean;

	/**
	 * Constructor
	 *
	 * @param {string} [apiKey]
	 * @param {boolean} [isMainNet=true]
	 * @memberof GasTracker
	 */
	public constructor(apiKey?: string, isMainNet: boolean = true) {
		this.axiosInstance = axios.create();

		this.defaultBlockchain = BlockchainType.ETHEREUM;
		this.apiKey = apiKey ?? '';
		this.isMainNet = isMainNet;
	}

	/**
	 * Set api key
	 *
	 * @param {string} apiKey
	 * @memberof GasTracker
	 */
	public setApiKey(apiKey: string): void {
		this.apiKey = apiKey;
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
	 * @param {BlockchainType} [blockchain]
	 * @return {*}  {Blockchain}
	 * @memberof GasTracker
	 */
	public getBlockchain(blockchain?: BlockchainType): Blockchain {
		const defaultBlockchain: BlockchainType = blockchain ?? this.defaultBlockchain;

		switch (defaultBlockchain) {
			case BlockchainType.ETHEREUM:
				return new EthereumBlockchain(this.apiKey, this.isMainNet, this.axiosInstance);
			case BlockchainType.POLYGON:
				return new PolygonBlockchain(this.apiKey, this.isMainNet, this.axiosInstance);
			case BlockchainType.BSC:
				return new BscBlockchain(this.apiKey, this.isMainNet, this.axiosInstance);
			case BlockchainType.BITCOIN:
				return new BitcoinBlockchain(this.axiosInstance);
			default:
				throw new Error('Unsupported blockchain');
		}
	}
}

export { BitcoinResult, BlockchainType, BscResult, EthereumResult, GasTracker, PolygonResult };
