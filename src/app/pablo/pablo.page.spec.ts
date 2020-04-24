import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PabloPage } from './pablo.page';

describe('PabloPage', () => {
  let component: PabloPage;
  let fixture: ComponentFixture<PabloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PabloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PabloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
