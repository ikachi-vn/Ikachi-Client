import { Component, Input, OnInit } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from '@amcharts/amcharts5/xy';
import { AmChartTheme } from '../am-chart-theme';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements OnInit {
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
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = this.root.container.children.push(am5percent.PieChart.new(this.root, {
      layout: this.root.verticalLayout,
      innerRadius: am5.percent(50)
    }));

    // chartdata = [
    //   { value: 10, category: "One" },
    //   { value: 9, category: "Two" },
    //   { value: 6, category: "Three" },
    //   { value: 5, category: "Four" },
    //   { value: 4, category: "Five" },
    //   { value: 3, category: "Six" },
    //   { value: 1, category: "Seven" },
    // ];

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
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(am5percent.PieSeries.new(this.root, {
      valueField: keyNames[1],
      categoryField: keyNames[0],
      alignLabels: false
    }));
    
    series.labels.template.setAll({
      textType: "circular",
      centerX: 0,
      centerY: 0
    });

    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(data);
    
    
    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(am5.Legend.new(this.root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15,
    }));
    
    legend.data.setAll(series.dataItems);
    
    
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
  }

}
