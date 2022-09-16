import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { ReportService } from 'src/app/services/report.service';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-consumer-goods',
  templateUrl: './consumer-goods.page.html',
  styleUrls: ['./consumer-goods.page.scss'],
})
export class ConsumerGoodsPage extends PageBase {

  constructor(
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public env: EnvService,
    public navCtrl: NavController,
    public rpt: ReportService,
  ) {
    super();
  }

  ionViewDidEnter() {
    this.buildPerformanceChart();
    this.buildOnShelfAvailability();
  }

  async buildPerformanceChart() {
    //-----------Column-Lines-Mix-Chart

    console.log('buildPerformanceChart');
    // await this.charts.PerformanceChart.Chart?.dispose();

    // Create root element
    let amColumnLineMixRoot = this.rpt.newColumnLineMixRoot("PerformanceChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amColumnLineMixRoot.setThemes([am5themes_Animated.new(amColumnLineMixRoot)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = amColumnLineMixRoot.container.children.push(
      am5xy.XYChart.new(amColumnLineMixRoot, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: amColumnLineMixRoot.verticalLayout
      })
    );

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(amColumnLineMixRoot, {
        orientation: "horizontal"
      })
    );

    var data = [
      {
        year: "2016",
        income: 23.5,
        expenses: 21.1
      },
      {
        year: "2017",
        income: 26.2,
        expenses: 30.5
      },
      {
        year: "2018",
        income: 30.1,
        expenses: 34.9
      },
      {
        year: "2019",
        income: 29.5,
        expenses: 31.1
      },
      {
        year: "2020",
        income: 30.6,
        expenses: 28.2,
        strokeSettings: {
          stroke: chart.get("colors").getIndex(1),
          strokeWidth: 3,
          strokeDasharray: [5, 5]
        }
      },
      {
        year: "2021",
        income: 34.1,
        expenses: 32.9,
        columnSettings: {
          strokeWidth: 1,
          strokeDasharray: [5],
          fillOpacity: 0.2
        },
        info: "(projection)"
      }
    ];



    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(amColumnLineMixRoot, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(amColumnLineMixRoot, {}),
        tooltip: am5.Tooltip.new(amColumnLineMixRoot, {})
      })
    );

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(amColumnLineMixRoot, {
        min: 0,
        extraMax: 0.1,
        renderer: am5xy.AxisRendererY.new(amColumnLineMixRoot, {})
      })
    );


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    var series1 = chart.series.push(
      am5xy.ColumnSeries.new(amColumnLineMixRoot, {
        name: "Income",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "income",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(amColumnLineMixRoot, {
          pointerOrientation: "horizontal",
          labelText: "{name} in {categoryX}: {valueY} {info}"
        })
      })
    );

    series1.columns.template.setAll({
      tooltipY: am5.percent(10),
      templateField: "columnSettings"
    });

    series1.data.setAll(data);

    var series2 = chart.series.push(
      am5xy.LineSeries.new(amColumnLineMixRoot, {
        name: "Expenses",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "expenses",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(amColumnLineMixRoot, {
          pointerOrientation: "horizontal",
          labelText: "{name} in {categoryX}: {valueY} {info}"
        })
      })
    );

    series2.strokes.template.setAll({
      strokeWidth: 3,
      templateField: "strokeSettings"
    });


    series2.data.setAll(data);

    series2.bullets.push(function () {
      return am5.Bullet.new(amColumnLineMixRoot, {
        sprite: am5.Circle.new(amColumnLineMixRoot, {
          strokeWidth: 3,
          stroke: series2.get("stroke"),
          radius: 5,
          fill: amColumnLineMixRoot.interfaceColors.get("background")
        })
      });
    });

    chart.set("cursor", am5xy.XYCursor.new(amColumnLineMixRoot, {}));

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(amColumnLineMixRoot, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    legend.data.setAll(chart.series.values);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    series1.appear();
  }

  async buildOnShelfAvailability() {
    //-----------Highlighting-Chart

    console.log('buildOnShelfAvailability');
    // await this.charts.OnShelfAvailability.Chart?.dispose();

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
    let amHighlightingRoot = this.rpt.newHighlightingRoot("OnShelfAvailability");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/ 
    amHighlightingRoot.setThemes([
      am5themes_Animated.new(amHighlightingRoot)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = amHighlightingRoot.container.children.push(am5xy.XYChart.new(amHighlightingRoot, this.rpt.AmChartGlobal.highlightingOpt.Chart));


    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData() {
      value = Math.round((Math.random() * 10 - 4.2) + value);
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
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(amHighlightingRoot, {
      maxDeviation: 0.2,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(amHighlightingRoot, {}),
      tooltip: am5.Tooltip.new(amHighlightingRoot, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(amHighlightingRoot, {
      renderer: am5xy.AxisRendererY.new(amHighlightingRoot, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    for (var i = 0; i < 4; i++) {
      let series = chart.series.push(am5xy.LineSeries.new(amHighlightingRoot, {
        name: "Series " + i,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        legendValueText: "{valueY}",
        tooltip: am5.Tooltip.new(amHighlightingRoot, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      }));

      date = new Date();
      date.setHours(0, 0, 0, 0);
      value = 0;

      let data = generateDatas(100);
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    }


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(amHighlightingRoot, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);


    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(amHighlightingRoot, {
      orientation: "horizontal"
    }));

    chart.set("scrollbarY", am5.Scrollbar.new(amHighlightingRoot, {
      orientation: "vertical"
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.rightAxesContainer.children.push(am5.Legend.new(amHighlightingRoot, {
      width: 200,
      paddingLeft: 15,
      height: am5.percent(100)
    }));

    // When legend item container is hovered, dim all the series except the hovered one
    legend.itemContainers.template.events.on("pointerover", function (e) {
      let itemContainer = e.target;

      // As series list is data of a legend, dataContext is series
      let series = itemContainer.dataItem.dataContext;

      chart.series.each(function (chartSeries: any) {
        if (chartSeries != series) {
          chartSeries.strokes.template.setAll({
            strokeOpacity: 0.15,
            stroke: am5.color(0x000000)
          });
        } else {
          chartSeries.strokes.template.setAll({
            strokeWidth: 3
          });
        }
      })
    })

    // When legend item container is unhovered, make all series as they are
    legend.itemContainers.template.events.on("pointerout", function (e) {
      let itemContainer = e.target;
      let series = itemContainer.dataItem.dataContext;

      chart.series.each(function (chartSeries: any) {
        chartSeries.strokes.template.setAll({
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: chartSeries.get("fill")
        });
      });
    })

    legend.itemContainers.template.set("width", am5.p100);
    legend.valueLabels.template.setAll({
      width: am5.p100,
      textAlign: "right"
    });

    // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
    legend.data.setAll(chart.series.values);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

}
