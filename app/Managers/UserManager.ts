import { inject } from '@adonisjs/fold'
import Logger from '@ioc:Adonis/Core/Logger'
import { UserModel, User } from 'App/Models/User'
import UserRepository from 'App/Repositories/UserRepository'
import _ from 'lodash'
import BaseManager from './BaseManager'

@inject([UserRepository])
export default class UserManager extends BaseManager {
  protected userRepository: UserRepository

  constructor (UserRepository: UserRepository) {
    super('UserManager')
    this.userRepository = UserRepository
  }

  public async manage () { }

  public async create ({ requestBody: dataUser = {} }) {
    let newUserCreated: any = {}
    try {
      Logger.info(`${this.constructor.name} - ${this.create.name}: Atempting to create a new user`)

      const formatedDataUser: User = this.fillObject(UserModel, dataUser)
      newUserCreated = await this.userRepository.createUser(formatedDataUser)
    } catch (error) {
      Logger.error(`${this.constructor.name} - ${this.create.name}: Error trying to create a new user, due to => ${error.stack}`)
    }

    return !_.isEmpty(newUserCreated)
      ? { msg: 'OK', created_user_id: newUserCreated }
      : { msg: 'Something is wrong...', status: 'FAILED' }
  }

  public async find (userData) {
    let userFound: any = {}
    try {
      Logger.info(`${this.constructor.name} - ${this.find.name}: Trying to find user by userDNI`)
      userFound = await this.userRepository.findUser(userData)
    } catch (error) {
      Logger.error(`${this.constructor.name} - ${this.find.name}: Error trying find user, due to => ${error.stack}`)
      userFound = error.stack
    }

    return !_.isEmpty(userFound)
      ? { msg: 'User found success', userFound }
      : { msg: !_.isEmpty(userFound) ? userFound : 'Unregistered user' }
  }
}
