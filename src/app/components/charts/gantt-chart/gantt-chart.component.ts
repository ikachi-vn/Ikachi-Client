import { Component, Input, OnInit } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from '@amcharts/amcharts5/xy';
import { AmChartTheme } from '../am-chart-theme';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss'],
})
export class GanttChartComponent implements OnInit {
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
    // Create root element
    this.root = am5.Root.new(div);
    this.root.dateFormatter.setAll({
      dateFormat: "yyyy-MM-dd",
      dateFields: ["valueX", "openValueX"]
    });

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    this.root.setThemes([am5themes_Animated.new(this.root),
      AmChartTheme.new(this.root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: this.root.verticalLayout
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(am5.Legend.new(this.root, {
      centerX: am5.p50,
      x: am5.p50
    }))

    let colors = chart.get("colors");

    chartdata = [{
      category: "Module #1",
      start: new Date(2016, 0, 1).getTime(),
      end: new Date(2016, 0, 14).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(0), 0)
      },
      task: "Gathering requirements"
    }, {
      category: "Module #1",
      start: new Date(2016, 0, 16).getTime(),
      end: new Date(2016, 0, 27).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(0), 0.4)
      },
      task: "Producing specifications"
    }, {
      category: "Module #1",
      start: new Date(2016, 1, 5).getTime(),
      end: new Date(2016, 3, 18).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(0), 0.8)
      },
      task: "Development"
    }, {
      category: "Module #1",
      start: new Date(2016, 3, 18).getTime(),
      end: new Date(2016, 3, 30).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(0), 1.2)
      },
      task: "Testing and QA"
    }, {
      category: "Module #2",
      start: new Date(2016, 0, 8).getTime(),
      end: new Date(2016, 0, 10).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(2), 0)
      },
      task: "Gathering requirements"
    }, {
      category: "Module #2",
      start: new Date(2016, 0, 12).getTime(),
      end: new Date(2016, 0, 15).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(2), 0.4)
      },
      task: "Producing specifications"
    }, {
      category: "Module #2",
      start: new Date(2016, 0, 16).getTime(),
      end: new Date(2016, 1, 5).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(2), 0.8)
      },
      task: "Development"
    }, {
      category: "Module #2",
      start: new Date(2016, 1, 10).getTime(),
      end: new Date(2016, 1, 18).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(2), 1.2)
      },
      task: "Testing and QA"
    }, {
      category: "Module #3",
      start: new Date(2016, 0, 2).getTime(),
      end: new Date(2016, 0, 8).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(4), 0)
      },
      task: "Gathering requirements"
    }, {
      category: "Module #3",
      start: new Date(2016, 0, 8).getTime(),
      end: new Date(2016, 0, 16).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(4), 0.4)
      },
      task: "Producing specifications"
    }, {
      category: "Module #3",
      start: new Date(2016, 0, 19).getTime(),
      end: new Date(2016, 2, 1).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(4), 0.8)
      },
      task: "Development"
    }, {
      category: "Module #3",
      start: new Date(2016, 2, 12).getTime(),
      end: new Date(2016, 3, 5).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(4), 1.2)
      },
      task: "Testing and QA"
    }, {
      category: "Module #4",
      start: new Date(2016, 0, 1).getTime(),
      end: new Date(2016, 0, 19).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(6), 0)
      },
      task: "Gathering requirements"
    }, {
      category: "Module #4",
      start: new Date(2016, 0, 19).getTime(),
      end: new Date(2016, 1, 3).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(6), 0.4)
      },
      task: "Producing specifications"
    }, {
      category: "Module #4",
      start: new Date(2016, 2, 20).getTime(),
      end: new Date(2016, 3, 25).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(6), 0.8)
      },
      task: "Development"
    }, {
      category: "Module #4",
      start: new Date(2016, 3, 27).getTime(),
      end: new Date(2016, 4, 15).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(6), 1.2)
      },
      task: "Testing and QA"
    }, {
      category: "Module #5",
      start: new Date(2016, 0, 1).getTime(),
      end: new Date(2016, 0, 12).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(8), 0)
      },
      task: "Gathering requirements"
    }, {
      category: "Module #5",
      start: new Date(2016, 0, 12).getTime(),
      end: new Date(2016, 0, 19).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(8), 0.4)
      },
      task: "Producing specifications"
    }, {
      category: "Module #5",
      start: new Date(2016, 0, 19).getTime(),
      end: new Date(2016, 2, 1).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(8), 0.8)
      },
      task: "Development"
    }, {
      category: "Module #5",
      start: new Date(2016, 2, 8).getTime(),
      end: new Date(2016, 2, 30).getTime(),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(8), 1.2)
      },
      task: "Testing and QA"
    }]

    // Data
    let data = chartdata;


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererY.new(this.root, {}),
        tooltip: am5.Tooltip.new(this.root, {})
      })
    );

    yAxis.data.setAll([
      { category: "Module #1" },
      { category: "Module #2" },
      { category: "Module #3" },
      { category: "Module #4" },
      { category: "Module #5" }
    ]);

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(this.root, {
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(this.root, {})
      })
    );


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      xAxis: xAxis,
      yAxis: yAxis,
      openValueXField: "start",
      valueXField: "end",
      categoryYField: "category",
      sequencedInterpolation: true
    }));

    series.columns.template.setAll({
      templateField: "columnSettings",
      strokeOpacity: 0,
      tooltipText: "{task}:\n[bold]{openValueX}[/] - [bold]{valueX}[/]"
    });

    series.data.setAll(data);

    // Add scrollbars
    chart.set("scrollbarX", am5.Scrollbar.new(this.root, { orientation: "horizontal" }));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);
  }

}
