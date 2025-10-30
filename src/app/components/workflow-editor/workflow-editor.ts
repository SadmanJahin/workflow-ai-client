import { Component, ElementRef, ViewChild } from '@angular/core';
import Drawflow from 'drawflow';

@Component({
  selector: 'app-workflow-editor',
  imports: [],
  templateUrl: './workflow-editor.html',
  styleUrl: './workflow-editor.scss',
})
export class WorkflowEditor {
@ViewChild('drawflowContainer', { static: true }) 
drawflowContainer!: ElementRef;

editor!: Drawflow;

ngOnInit() {
  const container = this.drawflowContainer.nativeElement;
  this.editor = new Drawflow(container);
  this.editor.start();
}

addNode() {
  const html = `<div><input type="text" placeholder="Node name"></div>`;
  
  this.editor.addNode(
    'node-1',           // name
    1,                  // inputs
    1,                  // outputs
    100,                // posx
    200,                // posy
    'node-class',       // className
    {},                 // data
    html,               // html
    false               // typenode (false for regular node)
  );
}

exportData() {
  console.log(this.editor.export());
}
}
