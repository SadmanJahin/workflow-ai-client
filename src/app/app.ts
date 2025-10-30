import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkflowEditor } from './components/workflow-editor/workflow-editor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkflowEditor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('workflow-ai-client');
}
