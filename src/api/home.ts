import useGetQuery from "./helper/useGetQuery"

const API = {
    GET:"api/home",
}

const KEY = "Home"

export const useGetHome = (params?:any) => useGetQuery(KEY , API.GET, params)
