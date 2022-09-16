import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PipelinePage } from './pipeline.page';

describe('PipelinePage', () => {
  let component: PipelinePage;
  let fixture: ComponentFixture<PipelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipelinePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PipelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
