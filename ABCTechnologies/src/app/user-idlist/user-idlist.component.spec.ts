import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIDListComponent } from './user-idlist.component';

describe('UserIDListComponent', () => {
  let component: UserIDListComponent;
  let fixture: ComponentFixture<UserIDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIDListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
