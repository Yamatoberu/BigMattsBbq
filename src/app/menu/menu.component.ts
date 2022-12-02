import { Component, OnInit } from '@angular/core';
import mains from 'src\\assets\\json\\mains.json';
import sides from 'src\\assets\\json\\sides.json';
import desserts from 'src\\assets\\json\\desserts.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public mainsList:{name:string, price:string, unit:string}[] = mains;
  public sidesList:{name:string, price:string, unit:string}[] = sides;
  public dessertsList:{name:string, price:string, unit:string}[] = desserts;
  MenuPath: string;

  constructor() { 
    this.MenuPath = "\\assets\\images\\Menu.png"
  }

  ngOnInit(): void {
  }

}
