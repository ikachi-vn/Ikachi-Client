import { Component, Input, OnInit } from '@angular/core';

// amCharts imports
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5 from "@amcharts/amcharts5/index";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { AmChartTheme } from '../am-chart-theme';

@Component({
  selector: 'app-funnel-chart',
  templateUrl: './funnel-chart.component.html',
  styleUrls: ['./funnel-chart.component.scss'],
})
export class FunnelChartComponent implements OnInit {
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
    // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/
    let chart = this.root.container.children.push(am5percent.SlicedChart.new(this.root, {
      layout: this.root.verticalLayout
    }));

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
    // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
    let series = chart.series.push(am5percent.FunnelSeries.new(this.root, {
      alignLabels: true,
      orientation: "vertical",
      valueField: keyNames[1],
      categoryField: keyNames[0],
      tooltip: am5.Tooltip.new(this.root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{category}: {value}"
      }),
    }));

    let data = chartdata;

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Setting_data
    series.data.setAll(data);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear();

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(am5.Legend.new(this.root, {
      centerX: am5.p50,
      x: am5.p50,
      marginTop: 15,
      marginBottom: 15
    }));

    legend.data.setAll(series.dataItems);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

}
