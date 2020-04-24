import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaintingPage } from './painting.page';

describe('PaintingPage', () => {
  let component: PaintingPage;
  let fixture: ComponentFixture<PaintingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaintingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
