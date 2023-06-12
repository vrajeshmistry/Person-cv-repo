import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderMastheadComponent } from './home-header-masthead.component';

describe('HomeHeaderMastheadComponent', () => {
  let component: HomeHeaderMastheadComponent;
  let fixture: ComponentFixture<HomeHeaderMastheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeaderMastheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
