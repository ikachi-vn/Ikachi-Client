import { Component, Input, OnInit } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { AmChartTheme } from '../am-chart-theme';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() ChartName;

  public root: am5.Root;

  constructor() { }

  ngOnInit() { }

  startingChart(div, chartData) {
    this.maybeDisposeChart(div, chartData);
  }

  maybeDisposeChart(div, chartdata) {
    //If re-renderChart >> If existed >> dispose chart >> build new.
    //Work with multiple same-type charts in onepage.
    for (let i = 0; i < am5.registry.rootElements.length; i++) {
      if (am5.registry.rootElements[i].dom.id == div) {
        am5.registry.rootElements[i].dispose();
      }
    }
    this.buildChart(div, chartdata);
  }

  buildChart(div, chartdata) {
    // Create root and chart
    this.root = am5.Root.new(div);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    this.root.setThemes([am5themes_Animated.new(this.root),
      AmChartTheme.new(this.root)]);

    // Resize 
    this.root.autoResize = true;
    this.root.fps = 60;

    // Create chart
    let chart = this.root.container.children.push(
      am5percent.PieChart.new(this.root, {
        layout: this.root.verticalLayout
      })
    );

    let data = chartdata;

    // Create series
    let serieNum;
    let serieName;
    let serieName2;
    let keyNames;

    keyNames = Object.keys(chartdata[0]);
    serieNum = keyNames[1].slice(-1);
    serieNum = parseInt(serieNum);
    serieName = keyNames[1].slice(0,-1);
    if (keyNames.length > 2) {
      serieName2 = keyNames[2].slice(0,-1);
    }

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(this.root, {
        name: serieName,
        valueField: keyNames[1],
        categoryField: keyNames[0],
        alignLabels: true
      })
    );

    series.slices.template.setAll({
      visible: true,
      strokeWidth: 2,
    })

    series.slices.template.states.create("active", {
      shiftRadius: 10,
    });

    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(this.root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: this.root.horizontalLayout
    }));

    legend.data.setAll(series.dataItems);
  }

}
