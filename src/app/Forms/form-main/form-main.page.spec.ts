import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormMainPage } from './form-main.page';

describe('FormMainPage', () => {
  let component: FormMainPage;
  let fixture: ComponentFixture<FormMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
