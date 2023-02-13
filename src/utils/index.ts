import axios from 'axios'
export const http = axios.create({
  baseURL: process.env.SERVER_URL ?? ''
})

export const $fetch = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  return fetch(process.env.SERVER_URL ?? '' + input, init)
}
