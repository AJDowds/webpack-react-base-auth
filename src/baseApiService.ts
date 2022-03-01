export interface APIInterface {
  authUrl: string
  APIUrl: string
}

const baseUrl: string = "https://api.dowcodeploy.com/api"
// process.env.NODE_ENV === "development"
//   ? "https://localhost:5001/api"
//   : "https://localhost:5001/api"

// process.env.NODE_ENV === "production"
//   ? "https://api.dowcodeploy.com/api"
//   : "https://api.dowcodeploy.com/api"

export const baseApi: APIInterface = {
  get authUrl(): string {
    return `${baseUrl}/auth`
  },
  get APIUrl(): string {
    return `${baseUrl}`
  },
}

export const apiHelper: object = {
  async toJson(response: any): Promise<any> {
    return response.json()
  },
}
