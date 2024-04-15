import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    MatListModule, 
    MatButtonModule, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {

}
