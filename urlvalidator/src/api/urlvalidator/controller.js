import { success, notFound } from '../../services/response/'
import { Urlvalidator } from '.'
import request from 'request'

import nock from 'nock'

export const validate = async ({ params, query }, res, next) => {
  const value = await response()

  const data = { url: query.url, calificacion: value }
  return Urlvalidator.create(data)
    .then((urlvalidator) => urlvalidator.view(true))
    .then(success(res, 201))
    .catch(next)
}

const response = async () => {
  nock('https://api.github.com/')
    .get('/repos/atom/atom/license')
    .reply(200, Math.random().toFixed(2))

  return new Promise((resolve, reject) => {
    request('https://api.github.com/repos/atom/atom/license', function (error, response, body) {
      if (error) reject(error)
      else resolve(body)
    })
  })
}