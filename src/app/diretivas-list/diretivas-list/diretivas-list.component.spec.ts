import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasListComponent } from './diretivas-list.component';

describe('DiretivasListComponent', () => {
  let component: DiretivasListComponent;
  let fixture: ComponentFixture<DiretivasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
