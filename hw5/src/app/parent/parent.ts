import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  toSendData?: Item;

  activeIndex?: number;

  isTitleChange = false;

  data: Item[] = [
    {
      name: 'James',
      description:
        'Welcome to the Angular Tutorial. This Tutorial covers all versions of Angular Starting from Angular 2 to the latest editions.',
      color: 'red',
    },
    {
      name: 'Will Kenny',
      description:
        'Angular is a development platform for building Single Page Applications for mobile and desktop.',
      color: 'green',
    },
    {
      name: 'Beth Williams',
      description:
        'Angular is a UI framework for building mobile and desktop web applications using HTML, CSS, and TypeScript.',
      color: 'blue',
    },
    {
      name: 'Rev Shawn',
      description:
        'Angular has evolved through many versions and provides powerful tools for building modern web applications.',
      color: 'black',
    },
  ];

  onClick(item: Item, index: number) {
    this.isTitleChange = false;
    this.toSendData = item;
    this.activeIndex = index;
  }

  changeTitleColor() {
    this.isTitleChange = true;
  }
}
