import { User, UserModel } from 'App/Models/User'

export default class OrderRepository {
  public async createUser (userData: User): Promise<any> {
    const user: any = await UserModel.create(userData)

    return user ? user._id : null
  }

  public async findUser (userData): Promise<User> {
    const user: any = await UserModel.find(userData)

    return user ? user : null
  }
}
