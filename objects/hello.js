const user = {}

user.name = 'Mario'
user.surname = 'Rossi'

Object.defineProperties(user, {
  'surname': {
    configurable: false,
    writable: false
  }
})

user.name = 'Marco'
delete user.name

console.log(user)
