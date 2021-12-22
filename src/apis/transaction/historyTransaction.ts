import { ApiMethods } from '../defineApi';
import Repository from '../RepositoryApi';

const route = {
	method: ApiMethods.GET,
	url: 'transaction'
};
export const historyTransaction = async () => {
	return Repository(route, {});
};
