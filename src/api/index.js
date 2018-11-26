import { Router } from 'express';
import math from './math';
import status from './status';

export default () => {
	let api = Router();

	// mount the facets resource
	api.use('/math', math());
	api.use('/status', status());
	
	return api;
}
