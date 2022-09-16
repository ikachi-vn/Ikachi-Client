import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
	selector: 'app-list-toolbar',
	templateUrl: './list-toolbar.component.html',
	styleUrls: ['./list-toolbar.component.scss'],
})
export class ListToolbarComponent implements OnInit {
	@ViewChild('importfile') importfile: any;
	@Input() pageTitle;
	@Input() selectedTitle;
	@Input() pageConfig;
	@Input() selectedItems;
	@Input() query;

	@Input() ShowAdd = true;
	@Input() ShowSearch = true;
	@Input() ShowRefresh = true;
	@Input() ShowArchive = true;
	@Input() ShowExport = true;
	@Input() ShowImport = true;
	@Input() ShowHelp = true;
	@Input() ShowFeature = true;
	@Input() ShowPopover = false;
	@Input() NoBorder = false;
	@Input() canSelect = true;

	@Output() add = new EventEmitter();
	@Output() refresh = new EventEmitter();
	@Output() export = new EventEmitter();
	@Output() import = new EventEmitter();
	@Output() help = new EventEmitter();
	@Output() unselect = new EventEmitter();
	@Output() archiveItems = new EventEmitter();
	@Output() deleteItems = new EventEmitter();
	@Output() mergeOrders = new EventEmitter();
	@Output() splitOrder = new EventEmitter();
	@Output() approveOrders = new EventEmitter();
	@Output() disapproveOrders = new EventEmitter();
	@Output() cancelOrders = new EventEmitter();
	@Output() presentPopover = new EventEmitter();
	@Output() submitOrdersForApproval = new EventEmitter();
	@Output() createReceipt = new EventEmitter();
	@Output() submitReceipt = new EventEmitter();
	
	

	constructor() { }

	ngOnInit() { }

	emit(eventName) {
		this[eventName].emit();
	}

	onClickImport() {
		this.importfile.nativeElement.value = "";
		this.importfile.nativeElement.click();
	}

	importFileChange(event) {
		this.import.emit(event);
	}

}
