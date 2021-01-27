import * as restify from 'restify'

export const handleError = (req: restify.Request, resp: restify.Response, err, done)=>{
  Object.defineProperty(err, 'toJSON', {
    value() {
      const alt = {}
 
      Object.getOwnPropertyNames(this).forEach(function (key) {
        alt[key] = this[key]
      }, this)
      return alt
    },
    configurable: true,
    writable: true
  })
  err.toJSON = () => {
    return {
      message : err.message
    }
  }
  switch(err.name){
    case 'MongoError':
      if(err.code === 11000){
        err.statusCode = 400
      }
      break
    case 'ValidationError':
      err.statusCode = 400
      const messages: any[] = []
      for(let name in err.errors){
        messages.push({message: err.errors[name].message})
      }
      err.toJSON = () => ({
        message: 'ValidationError error while processing yout request',
        errors: messages
      })
      break
  }
  done()
}

