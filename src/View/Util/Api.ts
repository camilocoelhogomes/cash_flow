export interface ApiParams { pagination: 1, limit: 15, query: {} }

class Api {
  listAnalisys(queryParams: ApiParams) {
    return (window.api).listAnalisys(queryParams)
  }
}

export const api = new Api()