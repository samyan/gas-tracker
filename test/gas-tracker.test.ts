import { describe, expect, it } from 'vitest';
import { BlockchainType, EthereumResult, GasTracker } from '../src';

describe('GasTracker integration', () => {
	it('fetches Ethereum gas prices', async () => {
		const apiKey = '3YSEGSY368Z47EWCW25WM7FU6475FKXIZQ';

		if (!apiKey) {
			throw new Error('ETHERSCAN_API_KEY not set');
		}

		const gasTracker = new GasTracker(apiKey);
		const result = (await gasTracker.getBlockchain(BlockchainType.ETHEREUM).getPrices()) as EthereumResult;

		expect(result.getFastPrice()).toBeDefined();
	});
});
