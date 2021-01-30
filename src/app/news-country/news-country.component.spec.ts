import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCountryComponent } from './news-country.component';

describe('NewsCountryComponent', () => {
  let component: NewsCountryComponent;
  let fixture: ComponentFixture<NewsCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
