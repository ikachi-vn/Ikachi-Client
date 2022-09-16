import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-review-pdf',
  templateUrl: 'review-pdf.page.html',
  styleUrls: ['review-pdf.page.scss'],
})
export class ReviewPdfPage implements OnInit {
  @Input() pdfLink: string;
  @Input() reviewNumber: string;
  pdfSrc;
  zoomNumber = 0.8;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.pdfSrc = this.pdfLink;
  }

  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  approve() {
    this.modalController.dismiss({
      'approved': true
    });
  }

  zoom(ev) {
    if (ev == 'in') {
      this.zoomNumber += 0.1;
    }
    else {
      this.zoomNumber -= 0.1;
    }
  }

}
