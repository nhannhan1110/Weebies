import { ApiMethods } from "../defineApi";
import Repository from "../RepositoryApi";

const route = {
  method: ApiMethods.POST,
  url: "transaction/transfer",
};
export const transferToUserApi = async (payload:any) => {
  return Repository(route,payload);
};
