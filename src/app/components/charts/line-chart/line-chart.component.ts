import { Component, Input, OnInit } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { AmChartTheme } from '../am-chart-theme';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
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
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    // Generate random data
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    let data = generateDatas(20);

    function generateData() {
      value = Math.round((Math.random() * 10 - 5) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    }

    function generateDatas(count) {
      let data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(this.root, {
      maxDeviation: 0.5,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(this.root, {
        pan: "zoom"
      }),
      tooltip: am5.Tooltip.new(this.root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      maxDeviation: 1,
      renderer: am5xy.AxisRendererY.new(this.root, {
        pan: "zoom"
      })
    }));

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.SmoothedXLineSeries.new(this.root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(this.root, {
        labelText: "{valueY}"
      }),
    }));

    // Create Different Shades Of Color
    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.7,
    });

    series.bullets.push(function (root: am5.Root) {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          radius: 4,
          stroke: root.interfaceColors.get("background"),
          strokeWidth: 2,
        })
      });
    });

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(this.root, {
      orientation: "horizontal"
    }));

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

  }

}
