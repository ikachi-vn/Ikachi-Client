import { Component, Input, OnInit } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from '@amcharts/amcharts5/xy';
import { AmChartTheme } from '../am-chart-theme';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
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
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: this.root.verticalLayout
    }));

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

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: keyNames[0],
      renderer: am5xy.AxisRendererY.new(this.root, {
        inversed: true,
        cellStartLocation: 0.1,
        cellEndLocation: 0.9,
      }),
    }));

    yAxis.get("renderer").labels.template.setAll({
      tooltipText: "{category}",
      oversizedBehavior: "truncate",
      maxWidth: 150,
    });

    
    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererX.new(this.root, {}),
      min: 0
    }));

    // createSeries("income", "Income", this.root);
    // createSeries("expenses", "Expenses", this.root);

    for (let i = 0; i < serieNum; i++) { 
      createSeries(keyNames[i+1],keyNames[i+1].slice(0,-1),this.root);
    }

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    
    function createSeries(field, name, root) {
      let i = 0;
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: field,
        categoryYField: keyNames[0],
        sequencedInterpolation: true,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          tooltipX: am5.percent(100),
          tooltipY: am5.percent(50),
          labelText: "[bold]"+`${name}` + ": {valueX}",
          // labelText: 
          // "[bold]"+`${name}`      + ": {valueX}" +"[/]\n"+
          // "[bold]"+`${serieName2 ? serieName2 : empty}`+ ": {valueX}",
          maxWidth: 150,
        })
      }));

      series.columns.template.setAll({
        visible: true,
        fillOpacity: 0.9 - i / 10,
        strokeOpacity: 0.9 - i / 10,
        strokeWidth: 2,
      })


      // Show value at side
      // series.bullets.push(function () {
      //   return am5.Bullet.new(root, {
      //     locationX: 1,
      //     locationY: 0.5,
      //     sprite: am5.Label.new(root, {
      //       centerY: am5.p50,
      //       text: "{valueX}",
      //       populateText: true
      //     })
      //   });
      // });
      

      // series.bullets.push(function () {
      //   return am5.Bullet.new(root, {
      //     locationX: 1,
      //     locationY: 0.5,
      //     sprite: am5.Label.new(root, {
      //       centerX: am5.p100,
      //       centerY: am5.p50,
      //       text: "{name}",
      //       fill: am5.color(0xffffff),
      //       populateText: true
      //     })
      //   });
      // });

      i += 1;

      series.data.setAll(data);
      series.appear();

      return series;
    }

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(am5.Legend.new(this.root, {
      centerX: am5.p50,
      x: am5.p50
    }));

    legend.data.setAll(chart.series.values);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {
      behavior: "zoomY"
    }));
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

}
