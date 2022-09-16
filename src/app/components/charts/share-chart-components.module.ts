import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyChartComponent } from './xy-chart/xy-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FunnelChartComponent } from './funnel-chart/funnel-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarImageChartComponent } from './bar-image-chart/bar-image-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    XyChartComponent,
    PieChartComponent,
    FunnelChartComponent,
    LineChartComponent,
    BarChartComponent,
    BarImageChartComponent,
    DonutChartComponent,
    GanttChartComponent,
  ],
	exports: [
		XyChartComponent,
    PieChartComponent,
    FunnelChartComponent,
    LineChartComponent,
    BarChartComponent,
    BarImageChartComponent,
    DonutChartComponent,
    GanttChartComponent
	],
})
export class ShareChartComponentsModule { }
