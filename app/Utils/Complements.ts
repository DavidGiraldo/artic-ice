import { model } from 'mongoose'
import _ from 'lodash'

const setFillObject = (Model: model, data: any): any => {
  const newModel = {}
  const modelFields = Object.entries(_.get(Model, 'schema.obj', {}))

  modelFields.forEach(([field]: any) => {
    if (field in data) {
      newModel[field] = data[field]
    }
  })

  return newModel
}

export {
  setFillObject,
}
