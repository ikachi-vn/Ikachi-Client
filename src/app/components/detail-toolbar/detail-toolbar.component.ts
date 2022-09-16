import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail-toolbar',
  templateUrl: './detail-toolbar.component.html',
  styleUrls: ['./detail-toolbar.component.scss'],
})
export class DetailToolbarComponent implements OnInit {
  @Input() item;
  @Input() pageConfig;

	@Input() ShowFeature = false;

  @Output() refresh = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() help = new EventEmitter();


  constructor() { }

  ngOnInit() {}
  
  emit(eventName) {
		this[eventName].emit();
	}
}





// <ion-buttons slot="end">
//   <ion-button (click)="refresh()" title="Refresh">
//       <ion-icon slot="icon-only" name="reload-outline"></ion-icon>
//   </ion-button>
//   <ion-button *ngIf="item.Id && pageConfig.canDelete" (click)="delete()" title="Xóa bỏ">
//       <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
//   </ion-button>
//   <ion-button title="Trợ giúp" (click)="help()">
//       <ion-icon slot="icon-only" name="help-circle-outline"></ion-icon>
//   </ion-button>
// </ion-buttons>