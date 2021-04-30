export interface APIInterface {
  authUrl: string;
  APIUrl: string;
}

const baseUrl: string = "https://api.dowcodeploy.com/api";

export const baseApi: APIInterface = {
  get authUrl(): string {
    return `${baseUrl}/auth`;
  },
  get APIUrl(): string {
    return `${baseUrl}`;
  },
};

export const apiHelper: object = {
  async toJson(response: any): Promise<any> {
    return response.json();
  },
};

export interface AuthAPIInterface {
  postLogin(data: any): Promise<object>;
  postRegister(data: any): Promise<object>;
}

export const AuthAPI: AuthAPIInterface = {
  async postLogin(data: any): Promise<object> {
    const postLoginUrl: string = `${baseApi.authUrl}/login`;
    //console.log('[URL FOR postLogin]', postLoginUrl);

    return fetch(postLoginUrl, {
      method: "POST",
      headers: data.headers,
      credentials: "same-origin",
      body: JSON.stringify(data.body),
    });
  },
  async postRegister(data: any): Promise<object> {
    const postRegisterUrl: string = `${baseApi.authUrl}/register`;
    //console.log('[URL FOR postRegister]', postRegisterUrl);

    return fetch(postRegisterUrl, {
      method: "POST",
      headers: data.headers,
      credentials: "same-origin",
      body: JSON.stringify(data.body),
    });
  },
};
