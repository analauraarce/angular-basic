import { Component } from "@angular/core";


@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;
  get nameToUpperCase(): string {
    return this.name.toUpperCase();
  }
  getName(): string //method
  {
    //return this.name+'-'+this.age;
    return `${this.name}-${this.age}`; //` create string templates
  }
  changeName(): void //method
  {
    this.name = 'Spiderman';

  }
  changeAge(): void //method
  {
    this.age = 30;

  }
}