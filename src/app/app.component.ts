import { Component } from '@angular/core';
import { ResumeComponent } from "./resume/resume.component";

@Component({
  selector: 'app-root',
  imports: [ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ezequiel-cicala';
}
