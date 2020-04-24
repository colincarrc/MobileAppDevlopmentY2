import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VincentPage } from './vincent.page';

describe('VincentPage', () => {
  let component: VincentPage;
  let fixture: ComponentFixture<VincentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VincentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
