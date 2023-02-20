import Blockchain from './blockchain';

abstract class Factory {
	/**
	 * Set proxy
	 *
	 * @abstract
	 * @memberof Factory
	 */
	public abstract setProxy: (protocol: string, host: string, port: number, auth: { username: string; password: string }) => void;

	/**
	 * Get blockchain
	 *
	 * @abstract
	 * @memberof Factory
	 */
	public abstract getBlockchain: (blockchain?: string) => Blockchain;
}

export default Factory;
