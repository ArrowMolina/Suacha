import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestinoarioComponent } from './cuestinoario.component';

describe('CuestinoarioComponent', () => {
  let component: CuestinoarioComponent;
  let fixture: ComponentFixture<CuestinoarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestinoarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestinoarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
