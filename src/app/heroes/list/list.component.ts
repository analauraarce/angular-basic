import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  //len:number=this.heroes.length;
  her: string="" ;//| undefined;
  eraseHero(): void {
    this.her = this.heroes.shift() || "";// return empty string if this.heroes.shift() undefined 
    console.log(this.her);


  }
}
