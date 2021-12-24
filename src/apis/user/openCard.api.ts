import { ApiMethods } from '../defineApi';
import Repository from '../RepositoryApi';

const route = {
	method: ApiMethods.POST,
	url: 'user/openCard'
};
export const openCard = async (payload: any) => {
	return Repository(route, payload);
};