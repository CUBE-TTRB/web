import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://randomuser.me/api"

export const userConnect = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path

  const { data, error } = useSWR(url, fetcher)

  return { data, error }
}