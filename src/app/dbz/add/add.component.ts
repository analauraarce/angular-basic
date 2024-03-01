import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfac/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
  
})
export class AddComponent  {

 
  @Input() new: Character = {
    name: '',
    power: 0
  }
  //@Output() onNewChar:EventEmitter<Character>=new EventEmitter(); // onNewChar will emit Characters
  constructor(private dbzService:DbzService) {} // import service

  add() {
    if (this.new.name.trim().length === 0) { //if name is empty, end of method
      return;
    }
    
    //this.onNewChar.emit(this.new);// emits new
    this.dbzService.addCharacter(this.new);
   
    this.new={ //initializi to '' and 0, to clear values
      name: '',
      power: 0
    }
    
  }

}
