'use strict'

const Drive = use('Drive')
const Helpers = use('Helpers')
// const imgConvert = require('image-convert')

class FileController {
  async store ({ request, params }) {
    const profilePics = request.file('picture', {
      types: ['image'],
      size: '2mb'
    })
    const id = params.id

    console.log('request', request.file('picture'))
    return { "eusei": profilePics._files, "type": typeof profilePics._files }
    // profilePics._files.map(pic => console.log(pic))
    /*await profilePics.moveAll(`${Helpers._appRoot}/uploads/restaurant_${id}`)
    
  
    if (!profilePics.movedAll()) {
      return profilePics.errors()
    }
  
    return 'File moved'*/
  }

  async view ({ params }) {
    const drive = await Drive.disk('local')

    return drive
  }
}

module.exports = FileController
