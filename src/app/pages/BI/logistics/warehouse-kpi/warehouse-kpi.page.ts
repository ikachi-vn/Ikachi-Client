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
  selector: 'app-warehouse-kpi',
  templateUrl: './warehouse-kpi.page.html',
  styleUrls: ['./warehouse-kpi.page.scss'],
})
export class WarehouseKpiPage extends PageBase {

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
    this.buildWarehouseOperatingChart();
    this.buildPerfectOrderRateChart();
    this.buildTotalShipmentChart();
    this.buildOnTimeShipmentsChart();
  }

  async buildWarehouseOperatingChart() {
    //-----------Pie-Chart

    console.log('buildWarehouseOperatingChart');
    // await this.charts.WarehouseOperatingChart.Chart?.dispose();

    // Create root element
    let amPieRoot = this.rpt.newPieRoot("WarehouseOperatingChart");
    // this.charts.DeliveriesbyDestinationChart.Chart = amPieRoot;


    // Create Chart
    let chart = amPieRoot.container.children.push(
      am5percent.PieChart.new(amPieRoot, this.rpt.AmChartGlobal.pieOpt.Chart)
    );

    // Define data
    let data = [
      {
        type: "Order Picking",
        volume: 100000
      },
      {
        type: "Storage",
        volume: 160000
      },
      {
        type: "Shipping",
        volume: 80000
      },
      {
        type: "Receiving",
        volume: 75000
      },
      {
        type: "Other",
        volume: 40000
      },
    ];

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(amPieRoot, {
        name: "Series",
        valueField: "volume",
        categoryField: "type"
      })
    );

    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(amPieRoot, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: amPieRoot.horizontalLayout
    }));

    legend.data.setAll(series.dataItems);

    // Make stuff animate on load
    chart.appear(1000, 100);
  }

  async buildPerfectOrderRateChart() {
    //-----------Trend-Lines-Chart

    console.log('buildPerfectOrderRateChart');
    // await this.charts.PerfectOrderRateChart.Chart?.dispose();

    // Create root element
    let amTrendLinesRoot = this.rpt.newTrendLinesRoot("PerfectOrderRateChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amTrendLinesRoot.setThemes([
      am5themes_Animated.new(amTrendLinesRoot)
    ]);

    amTrendLinesRoot.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });

    let data = [
      {
        date: "2012-01-01",
        value: 8
      },
      {
        date: "2012-01-02",
        value: 10
      },
      {
        date: "2012-01-03",
        value: 12
      },
      {
        date: "2012-01-04",
        value: 14
      },
      {
        date: "2012-01-05",
        value: 11
      },
      {
        date: "2012-01-06",
        value: 6
      },
      {
        date: "2012-01-07",
        value: 7
      },
      {
        date: "2012-01-08",
        value: 9
      },
      {
        date: "2012-01-09",
        value: 13
      },
      {
        date: "2012-01-10",
        value: 15
      },
      {
        date: "2012-01-11",
        value: 19
      },
      {
        date: "2012-01-12",
        value: 21
      },
      {
        date: "2012-01-13",
        value: 22
      },
      {
        date: "2012-01-14",
        value: 20
      },
      {
        date: "2012-01-15",
        value: 18
      },
      {
        date: "2012-01-16",
        value: 14
      },
      {
        date: "2012-01-17",
        value: 16
      },
      {
        date: "2012-01-18",
        value: 18
      },
      {
        date: "2012-01-19",
        value: 17
      },
      {
        date: "2012-01-20",
        value: 15
      },
      {
        date: "2012-01-21",
        value: 12
      },
      {
        date: "2012-01-22",
        value: 10
      },
      {
        date: "2012-01-23",
        value: 8
      }
    ];

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = amTrendLinesRoot.container.children.push(
      am5xy.XYChart.new(amTrendLinesRoot, this.rpt.AmChartGlobal.trendlinesOpt.Chart)
    );

    let easing = am5.ease.linear;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(amTrendLinesRoot, {
        maxDeviation: 0.5,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(amTrendLinesRoot, {
          pan: "zoom",
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(amTrendLinesRoot, {})
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(amTrendLinesRoot, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(amTrendLinesRoot, { pan: "zoom" })
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.LineSeries.new(amTrendLinesRoot, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(amTrendLinesRoot, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      })
    );

    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(amTrendLinesRoot, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });

    series.data.setAll(data);

    series.bullets.push(function () {
      let circle = am5.Circle.new(amTrendLinesRoot, {
        radius: 4,
        fill: series.get("fill"),
        stroke: amTrendLinesRoot.interfaceColors.get("background"),
        strokeWidth: 2
      });

      return am5.Bullet.new(amTrendLinesRoot, {
        sprite: circle
      });
    });

    // createTrendLine(
    //   [
    //     { date: "2012-01-02", value: 10 },
    //     { date: "2012-01-11", value: 19 }
    //   ],
    //   amTrendLinesRoot.interfaceColors.get("positive")
    // );

    // createTrendLine(
    //   [
    //     { date: "2012-01-17", value: 16 },
    //     { date: "2012-01-22", value: 10 }
    //   ],
    //   amTrendLinesRoot.interfaceColors.get("negative")
    // );

    // function createTrendLine(data, color) {
    //   let series = chart.series.push(
    //     am5xy.LineSeries.new(amTrendLinesRoot, {
    //       xAxis: xAxis,
    //       yAxis: yAxis,
    //       valueXField: "date",
    //       stroke: color,
    //       valueYField: "value"
    //     })
    //   );

    //   series.data.processor = am5.DataProcessor.new(amTrendLinesRoot, {
    //     dateFormat: "yyyy-MM-dd",
    //     dateFields: ["date"]
    //   });

    //   series.data.setAll(data);
    //   series.appear(1000, 100);
    // }

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(amTrendLinesRoot, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);

    // add scrollbar
    chart.set("scrollbarX", am5.Scrollbar.new(amTrendLinesRoot, {
      orientation: "horizontal"
    }));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000, 100);
    chart.appear(1000, 100);
  }

  async buildTotalShipmentChart() {
    //-----------Highlighting-Chart

    console.log('buildTotalShipmentChart');
    // await this.charts.TotalShipmentChart.Chart?.dispose();

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
    let amHighlightingRoot = this.rpt.newHighlightingRoot("TotalShipmentChart");


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

      chart.series.each(function (chartSeries:any) {
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

      chart.series.each(function (chartSeries:any) {
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

  async buildOnTimeShipmentsChart() {
    //-----------Two-Level-Pie-Chart

    console.log('buildOnTimeShipmentsChart');
    // await this.charts.OnTimeShipmentsChart.Chart?.dispose();

    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let amTwoLevelPieRoot = this.rpt.newTwoLevelPieRoot("OnTimeShipmentsChart");

    // Set themes
    amTwoLevelPieRoot.setThemes([am5themes_Animated.new(amTwoLevelPieRoot)]);

    // Create chart
    // start and end angle must be set both for chart and series
    let chart = amTwoLevelPieRoot.container.children.push(
      am5percent.PieChart.new(amTwoLevelPieRoot, {
        layout: amTwoLevelPieRoot.verticalLayout
      })
    );

    // Create series
    // start and end angle must be set both for chart and series
    let series0 = chart.series.push(
      am5percent.PieSeries.new(amTwoLevelPieRoot, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
        radius: am5.percent(100),
        innerRadius: am5.percent(80)
      })
    );

    series0.states.create("hidden", {
      startAngle: 180,
      endAngle: 180
    });

    series0.slices.template.setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: "settings"
    });

    series0.slices.template.states.create("hover", { scale: 1 });
    series0.slices.template.states.create("active", { shiftRadius: 0 });

    series0.labels.template.setAll({
      templateField: "settings"
    });

    series0.ticks.template.setAll({
      templateField: "settings"
    });

    series0.labels.template.setAll({
      textType: "circular",
      radius: 30
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series0.data.setAll([
      {
        category: "First + Second",
        value: 60
      },
      {
        category: "Unused",
        value: 30,
        settings: { forceHidden: true }
      }
    ]);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    let series1 = chart.series.push(
      am5percent.PieSeries.new(amTwoLevelPieRoot, {
        radius: am5.percent(95),
        innerRadius: am5.percent(85),
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      })
    );

    series1.states.create("hidden", {
      startAngle: 180,
      endAngle: 180
    });

    series1.slices.template.setAll({
      templateField: "sliceSettings",
      strokeOpacity: 0
    });

    series1.labels.template.setAll({
      textType: "circular"
    });

    series1.labels.template.adapters.add("radius", function (radius, target: any) {
      let dataItem = target.dataItem;
      let slice = dataItem.get("slice");
      return -(slice.get("radius") - slice.get("innerRadius")) / 2 - 10;
    });

    series1.slices.template.states.create("hover", { scale: 1 });
    series1.slices.template.states.create("active", { shiftRadius: 0 });

    series1.ticks.template.setAll({
      forceHidden: true
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series1.data.setAll([{
      category: "First",
      value: 30
    }, {
      category: "Second",
      value: 30
    }, {
      category: "Remaining",
      value: 30,
      sliceSettings: { fill: am5.color(0xdedede) }
    }]);
  }

}
