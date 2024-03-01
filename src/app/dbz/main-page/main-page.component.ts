import { Component, Input } from '@angular/core';
import { Character } from '../interfac/dbz.interface';
//import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})
export class MainPageComponent {
  new:Character={
    name: 'Roshi',
   power: 1000
  };
 
  

  constructor(){}

}
