import axios, {AxiosRequestConfig, Method} from "axios";

export default class HTTPService {
    private readonly basePath: string;

    private readonly host: string;

    constructor(basePath: string, host = "https://jsonplaceholder.typicode.com/posts") {
        this.basePath = basePath
        this.host = host
    }

    public GET<T>(path = "", options?: AxiosRequestConfig): Promise<T> {
        return this.saveFetch(`${this.basePath}/${path}`, "get", null, options)
    }

    public PUT<T>(path = "", data?: any, options?: AxiosRequestConfig): Promise<T> {
        return this.saveFetch(`${this.basePath}/${path}`, "put", data, options)
    }

    public POST<T>(
        path = "",
        data?: any,
        options?: AxiosRequestConfig
    ): Promise<T> {
        return this.saveFetch(`${this.basePath}/${path}`, "post", data, options)
    }

    private async saveFetch(
        path: String,
        method: Method,
        data?: any,
        options: AxiosRequestConfig = {}
    ): Promise<any> {
        if (!options.headers) {
            options.headers = {"Content-Type": "application/json"}
        }

        if (options.headers && !options.headers["Content-Type"]) {
            options.headers["Content-Type"] = "application/json";
        }

        const baseURL = 'https://jsonplaceholder.typicode.com/posts'
        const url = `${path}`

        await axios.request({baseURL, url, method, data, ...options})
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
                return null
            })
    }


}