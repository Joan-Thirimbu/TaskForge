import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isExpanded = !this.isExpanded;
  }

}
