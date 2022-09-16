import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurgeryAppointmentListMobilePage } from './surgery-appointment-list-mobile.page';

describe('SurgeryAppointmentListMobilePage', () => {
  let component: SurgeryAppointmentListMobilePage;
  let fixture: ComponentFixture<SurgeryAppointmentListMobilePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeryAppointmentListMobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurgeryAppointmentListMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
