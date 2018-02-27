import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  technologies = [
    {
      name: 'JavaScript',
      time: 10,
      id: this.generateId()
    },
    {
      name: 'TypeScript',
      time: 15,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.technologies.push({
      name: name,
      time: 5,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 100);
  }
}
