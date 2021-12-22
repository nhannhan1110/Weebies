import { ApiMethods } from '../defineApi';
import Repository from '../RepositoryApi';

const route = {
	method: ApiMethods.POST,
	url: 'transaction/payIn'
};
export const paypalTransaction = async (payload: any) => {
	return Repository(route, payload);
};
