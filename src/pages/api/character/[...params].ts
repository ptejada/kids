import {NextApiRequest, NextApiResponse} from 'next'
import {getCharacter} from '../../../db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const [char, action] = req.query.params as string[]
  const character = getCharacter(char)

  console.log(character)

  res.status(200).json(character.words())
}
