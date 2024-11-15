import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
constructor(private dataStorage:DataStorageService){}

  @Input() cartCount:number=0;
  ngOnInit(): void {
    var getVal = this.dataStorage.getCartData();
    this.cartCount = getVal ? getVal.length : 0;
  }

}
