import { OK, CREATED } from 'http-status'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BaseController {
  protected manager: any

  constructor (Manager) {
    this.manager = Manager
  }

  public async index ({ request, response }: HttpContextContract) {
    const result: any = await this.manager.manage(request)

    return response.status(OK).send(result)
  }

  public async create ({ request, response }: HttpContextContract) {
    const result: any = await this.manager.create(request)

    return response.status(CREATED).send(result)
  }

  public async find ({ params, response }: HttpContextContract) {
    const result: any = await this.manager.find(params)

    return response.status(OK).send(result)
  }
}
