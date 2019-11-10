import mongoose, { Schema } from 'mongoose'

const urlvalidatorSchema = new Schema({
  url: {
    type: String
  },
  calificacion: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

urlvalidatorSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      url: this.url,
      calificacion: this.calificacion,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Urlvalidator', urlvalidatorSchema)

export const schema = model.schema
export default model
