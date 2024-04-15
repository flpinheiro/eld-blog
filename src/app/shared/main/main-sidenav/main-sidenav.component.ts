import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-main-sidenav',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './main-sidenav.component.html',
  styleUrl: './main-sidenav.component.css'
})
export class MainSidenavComponent {

}
