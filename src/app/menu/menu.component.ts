import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  MenuPath: string;

  constructor() { 
    this.MenuPath = "\\assets\\images\\Menu.png"
  }

  ngOnInit(): void {
  }

}
