import { Component } from '@angular/core';

@Component({
  selector: 'app-categoryMenu',
  templateUrl: './categoryMenu.component.html',
  styleUrls: ['./categoryMenu.component.css']
})
export class CategoryMenuComponent {
  item: string[] = ['Car', 'Zoom', 'TV'];
}
