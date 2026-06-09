import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcompAbout } from './fullcomp-about';

describe('FullcompAbout', () => {
  let component: FullcompAbout;
  let fixture: ComponentFixture<FullcompAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullcompAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(FullcompAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
