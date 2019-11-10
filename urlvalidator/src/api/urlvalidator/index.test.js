import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Urlvalidator } from '.'

const app = () => express(apiRoot, routes)

let urlvalidator

beforeEach(async () => {
  urlvalidator = await Urlvalidator.create({})
})

test('GET /urlvalidator/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${urlvalidator.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(urlvalidator.id)
})

test('GET /urlvalidator/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
