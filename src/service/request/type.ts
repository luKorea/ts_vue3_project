// 配置请求响应拦截器
import type { AxiosRequestConfig } from "axios";

export interface KoreaInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;
  responseInterceptors?: (config: any) => any;
  responseInterceptorsCatch?: (error: any) => any;
}

// 扩展原有属性
export interface KoreaRequestConfig extends AxiosRequestConfig {
  interceptors?: KoreaInterceptors;
  // 控制请求是否显示loading效果
  showLoading?: boolean;
}
