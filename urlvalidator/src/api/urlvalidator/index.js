import { Router } from 'express'
import { validate } from './controller'
export Urlvalidator, { schema } from './model'

const router = new Router()

/**
 * @api {get} /urlvalidator/:id Retrieve urlvalidator
 * @apiName RetrieveUrlvalidator
 * @apiGroup Urlvalidator
 * @apiSuccess {Object} urlvalidator Urlvalidator's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Urlvalidator not found.
 */
router.get('/url', validate)

export default router
