import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBridgeLabzComponent } from './hello-bridge-labz.component';

describe('HelloBridgeLabzComponent', () => {
  let component: HelloBridgeLabzComponent;
  let fixture: ComponentFixture<HelloBridgeLabzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloBridgeLabzComponent]
    });
    fixture = TestBed.createComponent(HelloBridgeLabzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
