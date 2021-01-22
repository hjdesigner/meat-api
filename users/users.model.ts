const users = [
  {
    id: '1',
    name: 'Peter Park',
    email: 'peter@marvel.com'
  },
  {
    id: '2',
    name: 'Bruce Wayne',
    email: 'bruce@dc.com'
  }
]

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users)
  }
  static findById(id: string): Promise<any> {
    return new Promise(resolve => {
      const filterd = users.filter(user => user.id === id)
      let user = undefined
      if (filterd.length > 0) {
        user = filterd[0]
      }
      resolve(user)
    })
  }
}