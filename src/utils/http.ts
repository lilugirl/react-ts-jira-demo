import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    methods: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.methods.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[enpoint, config]: Parameters<typeof http>) =>
    http(enpoint, { ...config, token: user?.token });
};
