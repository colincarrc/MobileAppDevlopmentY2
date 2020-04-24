import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalvadorPage } from './salvador.page';

describe('SalvadorPage', () => {
  let component: SalvadorPage;
  let fixture: ComponentFixture<SalvadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalvadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
