import { Component, Input, OnInit } from '@angular/core';

// amCharts imports
import * as am5 from "@amcharts/amcharts5/index";
import * as am5xy from '@amcharts/amcharts5/xy';
import { AmChartTheme } from '../am-chart-theme';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-xy-chart',
  templateUrl: './xy-chart.component.html',
  styleUrls: ['./xy-chart.component.scss'],
})
export class XyChartComponent implements OnInit {
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
      am5xy.XYChart.new(this.root, {
        panY: false,
        layout: this.root.verticalLayout
      })
    );

    let data = chartdata;

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(this.root, {})
      })
    );

    // Create X-Axis
    // categoryField tương ứng với mỗi nhóm của dữ liệu.
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        renderer: am5xy.AxisRendererX.new(this.root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    // Series tương ứng với các cột, mỗi serie = mỗi cột. 
    // Check màu theme giao diện
    // Cần tạo vòng lặp loop để tạo series

    let serieNum;
    let serieName;
    let keyNames;

    // Update data
    for (var i = 0; i < chartdata.length; i++) {
      keyNames = [];
      keyNames = Object.keys(chartdata[i]);
    }

    if ( keyNames.length == 2) {
      serieNum = 0;
      serieName = '';
      serieNum = keyNames[1].slice(-1);
      serieName = keyNames[1].slice(0,-1);

      let series = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          // name: "Series #" + `${i + 1}`, // Tên hiển thị dưới legend
          name: serieName, // Tên hiển thị dưới legend
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: keyNames[1],  // Dữ liệu cho mỗi cột của serie
          categoryXField: keyNames[0],
          tooltip: am5.Tooltip.new(this.root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
          }),
        })

      );
      series.data.setAll(data);

      series.columns.template.setAll({
        visible: true,
        fillOpacity: 0.9,
        strokeOpacity: 0.9,
        strokeWidth: 2,
      })
    }
    else {
      for (let i = 1; i < keyNames.length; i++) {
        // serieNum = 0;
        serieName = '';
        // serieNum = keyNames[i].slice(-1);
        serieName = keyNames[i].slice(0,-1);

        let series = chart.series.push(
          am5xy.ColumnSeries.new(this.root, {
            name: serieName, // Tên hiển thị dưới legend
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: keyNames[i],  // Dữ liệu cho mỗi cột của serie
            categoryXField: keyNames[0],
            tooltip: am5.Tooltip.new(this.root, {
              pointerOrientation: "horizontal",
              labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
            }),
          })

        );
        series.data.setAll(data);

        series.columns.template.setAll({
          visible: true,
          fillOpacity: 0.9 - (i-1) / 10,
          strokeOpacity: 0.9 - (i-1) / 10,
          strokeWidth: 2,
        })
      }
    }

    // Add legend
    let legend = chart.children.push(am5.Legend.new(this.root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {
      behavior: "zoomY"
    }));
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);
  };

}
