import { Component } from '@angular/core';

@Component({
    selector:'app-counter', //name i choose
    template:`
        <h1>{{title}}</h1>
        <h3>La base es <strong>{{base}}</strong></h3>

        <button (click)="operation(base)">+{{base}}</button>

        <span>{{num}}</span>

        <button (click)="operation(-base)">-{{base}}</button>
    `
})
export class CounterComponent //export to use it outside this file
{
    public title:string = 'App Counter';
    num:number=10;
    base:number=5;
    operation(valor:number)
    {
      this.num+=valor;// class AppComponent instance, use this
  
    }
}