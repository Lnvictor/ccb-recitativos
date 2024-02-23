import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ccb-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  isAuthenticated: boolean = true;
  openSideBar: boolean = false;

  ngOnInit(): void {
    if (!this.isAuthenticated){
      console.log("Não esta autenticado");
    }
  }

  tooggleSideBar(){
    this.openSideBar = !this.openSideBar;
  }
}
