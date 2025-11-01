import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNode } from './input-node';

describe('InputNode', () => {
  let component: InputNode;
  let fixture: ComponentFixture<InputNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
