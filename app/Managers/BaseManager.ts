import Logger from '@ioc:Adonis/Core/Logger'
import { setFillObject } from 'App/Utils/Complements'
import { model } from 'mongoose'

export default abstract class BaseManager {
  protected managerName: string

  constructor (ManagerName) {
    this.managerName = (ManagerName || 'BaseManager')
  }

  public fillObject (Model: model, data: any): model {
    Logger.info(`${this.constructor.name} - ${this.managerName} - ${this.fillObject.name}: Fillind ${model.name} data whit => ${JSON.stringify(data)}`)

    return setFillObject(Model, data)
  }
}
