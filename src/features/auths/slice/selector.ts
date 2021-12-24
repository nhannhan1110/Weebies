import { RootState } from "../../../stores/store";

export const selectCurrentUser = (state: RootState) => state?.auth?.user;
export const indexCard = (state: RootState) => state?.auth?.indexCard;
