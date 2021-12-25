import { ApiMethods } from '../defineApi';
import Repository from '../RepositoryApi';

const route = {
	method: ApiMethods.GET,
	url: 'transaction/allTransactions'
};
export const historyTransactionAdmin = async () => {
	return Repository(route, {});
};
