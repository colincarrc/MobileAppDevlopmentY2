import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoetryPage } from './poetry.page';

describe('PoetryPage', () => {
  let component: PoetryPage;
  let fixture: ComponentFixture<PoetryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
