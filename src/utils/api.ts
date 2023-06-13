import axios from 'axios'

const timeOut = 30000
const API_KEY = '19b5c713' // OMDb API Key

export const restTransport = () => {
  //create api client
  const client = axios.create({
    baseURL: 'https://www.omdbapi.com/?apikey=' + API_KEY + '',
    timeout: timeOut
  })

  /**
   * This is an asynchronous function that sends a GET request to a specified URL with optional
   * parameters and configuration.
   * @param {string} url - The URL of the API endpoint that the function will make a GET request to.
   * @param params - The `params` parameter is an object that contains query parameters to be sent with
   * the GET request. These parameters are appended to the URL as key-value pairs in the form of a
   * query string. For example, if `params` is `{ page: 1, limit: 10 }`, the
   * @param config - The `config` parameter is an optional object that contains additional headers to
   * be included in the HTTP request. These headers will be merged with the default headers of the HTTP
   * client. If no additional headers are needed, an empty object can be passed as the `config`
   * parameter.
   */
  const get = async (url: string, params = {}, config = {}) => await client.get(url, { headers: { ...config }, params })

  const rootUrl = () => client.defaults.baseURL

  return { get, rootUrl }
}
