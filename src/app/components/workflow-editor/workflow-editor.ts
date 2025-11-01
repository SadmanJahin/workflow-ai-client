import { Component, ElementRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import Drawflow from 'drawflow';
import { InputNode } from '../input-node/input-node';

@Component({
  selector: 'app-workflow-editor',
  imports: [],
  templateUrl: './workflow-editor.html',
  styleUrl: './workflow-editor.scss',
})
export class WorkflowEditor {
  @ViewChild('drawflowContainer', { static: true }) drawflowContainer!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  editor!: Drawflow;

  ngOnInit() {
    const container = this.drawflowContainer.nativeElement;
    this.editor = new Drawflow(container);
    this.editor.start();

    this.editor.on('nodeSelected', (id) => {
      const node = this.editor.getNodeFromId(id);
      console.log('Node clicked:', id, node);
      // you can do whatever you want here:
      // open a side panel, show details, etc.
    });

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

  addIfNode() {
    const html = `
    <div class="if-node">
      <label>Condition:</label>
      <input type="text" placeholder="x > 5" />
      <div class="if-outputs">
        <div class="true-label">True → Output 1</div>
        <div class="false-label">False → Output 2</div>
      </div>
    </div>
  `;

    const posx = 400 + Math.random() * 100;
    const posy = 200 + Math.random() * 100;

    this.editor.addNode(
      'if-node',
      1, // 1 input
      2, // 2 outputs (True, False)
      posx,
      posy,
      'node-if',
      { type: 'if', outputs: ['true', 'false'] },
      html,
      false
    );
  }

}
