import {NextApiRequest, NextApiResponse} from 'next'
import {getCharacter} from '../../../db'

class CharacterController {
  constructor(private character, private action: string, private params: any[]) {
  }

  words() {
    return this.character.words()
  }

  respond(res: NextApiResponse) {
    if (this[this.action] && typeof this[this.action] === 'function') {
      const result = this[this.action]()
      res.status(200).json(result)
    } else {
      console.log(typeof this[this.action], this.action)
      res.status(404).json({status: 404})
    }
  }
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const [char, action, ...params] = req.query.params as string[]
  const character = getCharacter(char)
  const controller = new CharacterController(character, action, params)

  controller.respond(res)
}
