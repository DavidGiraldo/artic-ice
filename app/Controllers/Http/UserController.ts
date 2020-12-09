/* eslint-disable @typescript-eslint/no-useless-constructor */
import { inject } from '@adonisjs/fold'
import BaseController from './BaseController'
import UserManager from 'App/Managers/UserManager'

@inject([UserManager])
export default class UserController extends BaseController {
  constructor (UserManager) {
    super(UserManager)
  }
}
