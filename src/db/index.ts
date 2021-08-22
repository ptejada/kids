import {JSONFile, Low} from 'lowdb'

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

const db = new Low<Data>(new JSONFile('../store/db.json'))

db.read()

db.data.characters = {
  A: {
    words: []
  }
}

db.write()

class Character {
  constructor(private info: CharacterInfo) {

  }

  words(): string[] {
    return Object.keys(this.info.words)
  }

  image(word: string): string {
    return this.info.words[word]
  }
}

function getCharacter(char: string): Character {
  const info = db.data.characters[char.toLowerCase()]

  return new Character(info)
}

export {getCharacter}
