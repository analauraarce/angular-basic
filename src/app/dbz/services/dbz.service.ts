import { Injectable } from "@angular/core";
import { Character } from '../interfac/dbz.interface';

@Injectable()
export class DbzService {

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];
  get characters(): Character[] { //retusn array of Character
    return [...this._characters];// breaks the reference
  }

  constructor() {
    console.log('initialized service')
  }

  addCharacter(character: Character) {
    this._characters.push(character);
  }
}