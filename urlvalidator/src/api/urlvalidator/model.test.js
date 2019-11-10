import { Urlvalidator } from '.'

let urlvalidator

beforeEach(async () => {
  urlvalidator = await Urlvalidator.create({ url: 'test', calificacion: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = urlvalidator.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(urlvalidator.id)
    expect(view.url).toBe(urlvalidator.url)
    expect(view.calificacion).toBe(urlvalidator.calificacion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = urlvalidator.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(urlvalidator.id)
    expect(view.url).toBe(urlvalidator.url)
    expect(view.calificacion).toBe(urlvalidator.calificacion)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
