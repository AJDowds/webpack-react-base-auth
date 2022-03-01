export const get = (url: string, data: any) => {
  return fetch(url, {
    method: "GET",
    headers: data.headers,
    credentials: "same-origin",
  })
}

export const post = (url: string, data: any) => {
  return fetch(url, {
    method: "POST",
    headers: data.headers,
    credentials: "same-origin",
    body: JSON.stringify(data.body),
  })
}

export const put = (url: string, data: any) => {
  return fetch(url, {
    method: "PUT",
    headers: data.headers,
    credentials: "same-origin",
    body: JSON.stringify(data.body),
  })
}

export const isSuccess = (response) => {
  return response.status >= 200 && response.status <= 300
}
