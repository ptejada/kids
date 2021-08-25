import { join, dirname } from 'path'
import { LowSync, JSONFileSync } from 'lowdb'
import { fileURLToPath } from 'url'

type Data = {
  characters: {
    [key: string]: CharacterInfo
  }
}

type CharacterInfo = {
  words: WordInfo[]
}

type WordInfo = {
  word: string
  url: string
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbFile = join(__dirname, '../../store/db.json')
const db = new LowSync<Data>(new JSONFileSync(dbFile))

db.read()

class Character {
  constructor(private key, private info: CharacterInfo) {

  }

  words(): string[] {
    return Object.keys(this.info.words)
  }

  image(word: string): string {
    return this.info.words[word]
  }
}

function getCharacter(char: string): Character {
  const charKey = char.toUpperCase()
  const info = db.data.characters[charKey]

  if (info) {
    return new Character(charKey, info)
  }

  // Create character
  return new Character(charKey, {words: []})
}

export {getCharacter}
