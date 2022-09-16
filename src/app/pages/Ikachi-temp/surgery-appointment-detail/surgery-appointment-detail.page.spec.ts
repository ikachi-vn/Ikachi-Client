import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurgeryAppointmentDetailPage } from './surgery-appointment-detail.page';

describe('SurgeryAppointmentDetailPage', () => {
  let component: SurgeryAppointmentDetailPage;
  let fixture: ComponentFixture<SurgeryAppointmentDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeryAppointmentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurgeryAppointmentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
