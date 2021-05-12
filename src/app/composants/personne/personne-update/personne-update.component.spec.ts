import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneUpdateComponent } from './personne-update.component';

describe('PersonneUpdateComponent', () => {
  let component: PersonneUpdateComponent;
  let fixture: ComponentFixture<PersonneUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
