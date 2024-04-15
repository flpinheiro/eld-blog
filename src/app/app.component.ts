import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainHeaderComponent } from './shared/main/main-header/main-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MainSidenavComponent } from './shared/main/main-sidenav/main-sidenav.component';
import { MainFooterComponent } from './shared/main/main-footer/main-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainSidenavComponent,
    MainHeaderComponent,
    MainFooterComponent,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eld-blog';
}
