import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current = 'recipes';

  onSectionChange(menu: string) {
    if (menu !== this.current) {
      this.current = menu;
    }
  }
}
