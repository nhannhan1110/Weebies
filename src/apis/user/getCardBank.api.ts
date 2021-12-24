// user/getCard
import { ApiMethods } from "../defineApi";
import Repository from "../RepositoryApi";

const route = {
  method: ApiMethods.GET,
  url: "user/getCard",
};
export const getCardService = async () => {
  return Repository(route);
};
