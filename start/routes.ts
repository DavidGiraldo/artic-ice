import Route from '@ioc:Adonis/Core/Route'
import Config from '@ioc:Adonis/Core/Config'

const { appPrefixRoot } = Config.get('app')

Route.get('healthCheck', async () => {
  return { status: 'OK' }
}).prefix(appPrefixRoot)

Route.group(() => {
  Route.post('/', 'UserController.create')
  Route.delete('/', 'UserController.index')
  Route.put('/', 'UserController.index')
  Route.get('/:userDNI', 'UserController.find').as('findUserByDNI')
  Route.get('/:email', 'UserController.find').as('findUserByEmail')
  Route.get('/:phone', 'UserController.find').as('findUserByPhone')
}).prefix('user-basic-ops')
  .prefix(appPrefixRoot)

Route.makeUrl('findUserByDNI')
Route.makeUrl('findUserByEmail')
Route.makeUrl('findUserByPhone')
