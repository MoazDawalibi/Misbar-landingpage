import useGetQuery from "./helper/useGetQuery"

const API = {
    GET:"api/project",
}

const KEY = "PROJECT"

export const useGetProject = (params?:any) => useGetQuery(KEY , API.GET, params)
