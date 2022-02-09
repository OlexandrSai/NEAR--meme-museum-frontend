import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemeFormComponent } from './add-meme-form.component';

describe('AddMemeFormComponent', () => {
  let component: AddMemeFormComponent;
  let fixture: ComponentFixture<AddMemeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMemeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
