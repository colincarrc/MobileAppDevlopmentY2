import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JeanPage } from './jean.page';

describe('JeanPage', () => {
  let component: JeanPage;
  let fixture: ComponentFixture<JeanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JeanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
