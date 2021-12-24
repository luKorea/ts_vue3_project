import type { ILoginState } from "@/store/login/types";
import type { ISystemState } from "@/store/main/system/types";

export interface IRootState {
  name: string;
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
}

export type IStoreType = IRootState & IRootWithModule;
