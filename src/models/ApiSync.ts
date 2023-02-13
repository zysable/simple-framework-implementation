import { AxiosPromise } from 'axios'
import { http } from '../utils'

interface HasId {
  id?: number
}

export class ApiSync<T extends HasId> {
  fetch = (id: number): AxiosPromise => {
    return http.get(`/${id}`)
  }

  save = (data: T): AxiosPromise => {
    const { id } = data
    if (id) {
      return http.put(`/${id}`, data)
    } else {
      return http.post('/', data)
    }
  }
}
