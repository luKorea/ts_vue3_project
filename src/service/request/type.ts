// 配置请求响应拦截器
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface KoreaInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  responseInterceptors?: (res: T) => T;
  responseInterceptorsCatch?: (error: any) => any;
}

// 扩展原有属性
export interface KoreaRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: KoreaInterceptors<T>;
  // 控制请求是否显示loading效果
  showLoading?: boolean;
}
