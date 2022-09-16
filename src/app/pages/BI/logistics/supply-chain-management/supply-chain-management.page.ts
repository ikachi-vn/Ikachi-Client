import { Component, OnInit } from '@angular/core';
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
  selector: 'app-supply-chain-management',
  templateUrl: './supply-chain-management.page.html',
  styleUrls: ['./supply-chain-management.page.scss'],
})
export class SupplyChainManagementPage extends PageBase {

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
    this.buildInventoryToSalesChart();
    this.buildInventoryTurnoverChart();
    this.buildCarryingCostOfInventoryChart();
    this.buildInventoryAccuracyChart();
    this.buildOutOfStockItemsChart();
  }

  async buildInventoryToSalesChart() {
    //-----------Trend-Lines-Chart

    console.log('buildInventoryToSalesChart');
    // await this.charts.InventoryToSalesChart.Chart?.dispose();

    // Create root element
    let amTrendLinesRoot = this.rpt.newTrendLinesRoot("InventoryToSalesChart");

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

  async buildInventoryTurnoverChart() {
    //-----------Column-Lines-Mix-Chart

    console.log('buildInventoryTurnoverChart');
    // await this.charts.InventoryTurnoverChart.Chart?.dispose();

    // Create root element
    let amColumnLineMixRoot = this.rpt.newColumnLineMixRoot("InventoryTurnoverChart");

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

  async buildCarryingCostOfInventoryChart() {
    //-----------Column-Chart

    console.log('buildCarryingCostOfInventoryChart');
    // await this.charts.CarryingCostOfInventoryChart.Chart?.dispose();

    // Create root element
    let amColumnRoot = this.rpt.newColumnRoot("CarryingCostOfInventoryChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amColumnRoot.setThemes([
      am5themes_Animated.new(amColumnRoot)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = amColumnRoot.container.children.push(am5xy.XYChart.new(amColumnRoot, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX"
    }));


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(amColumnRoot, {
      behavior: "zoomX"
    }));
    cursor.lineY.set("visible", false);

    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;

    function generateData() {
      value = Math.round((Math.random() * 10 - 5) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    }

    function generateDatas(count) {
      var data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(amColumnRoot, {
      maxDeviation: 0,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(amColumnRoot, {}),
      tooltip: am5.Tooltip.new(amColumnRoot, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(amColumnRoot, {
      renderer: am5xy.AxisRendererY.new(amColumnRoot, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(amColumnRoot, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(amColumnRoot, {
        labelText: "{valueY}"
      })
    }));



    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(amColumnRoot, {
      orientation: "horizontal"
    }));

    var data = generateDatas(5);
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }

  async buildInventoryAccuracyChart() {
    //-----------Two-Level-Pie-Chart

    console.log('buildInventoryAccuracyChart');
    // await this.charts.InventoryAccuracyChart.Chart?.dispose();


    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let amTwoLevelPieRoot = this.rpt.newTwoLevelPieRoot("InventoryAccuracyChart");

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

  async buildOutOfStockItemsChart() {
    //-----------Trend-Lines-Chart

    console.log('buildOutOfStockItemsChart');
    // await this.charts.OutOfStockItemsChart.Chart?.dispose();

    // Create root element
    let amTrendLinesRoot2 = this.rpt.newTrendLinesRoot("OutOfStockItemsChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amTrendLinesRoot2.setThemes([
      am5themes_Animated.new(amTrendLinesRoot2)
    ]);

    amTrendLinesRoot2.dateFormatter.setAll({
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
    let chart = amTrendLinesRoot2.container.children.push(
      am5xy.XYChart.new(amTrendLinesRoot2, this.rpt.AmChartGlobal.trendlinesOpt.Chart)
    );

    let easing = am5.ease.linear;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(amTrendLinesRoot2, {
        maxDeviation: 0.5,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(amTrendLinesRoot2, {
          pan: "zoom",
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(amTrendLinesRoot2, {})
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(amTrendLinesRoot2, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(amTrendLinesRoot2, { pan: "zoom" })
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.LineSeries.new(amTrendLinesRoot2, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(amTrendLinesRoot2, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      })
    );

    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(amTrendLinesRoot2, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });

    series.data.setAll(data);

    series.bullets.push(function () {
      let circle = am5.Circle.new(amTrendLinesRoot2, {
        radius: 4,
        fill: series.get("fill"),
        stroke: amTrendLinesRoot2.interfaceColors.get("background"),
        strokeWidth: 2
      });

      return am5.Bullet.new(amTrendLinesRoot2, {
        sprite: circle
      });
    });

    // createTrendLine(
    //   [
    //     { date: "2012-01-02", value: 10 },
    //     { date: "2012-01-11", value: 19 }
    //   ],
    //   amTrendLinesRoot2.interfaceColors.get("positive")
    // );

    // createTrendLine(
    //   [
    //     { date: "2012-01-17", value: 16 },
    //     { date: "2012-01-22", value: 10 }
    //   ],
    //   amTrendLinesRoot2.interfaceColors.get("negative")
    // );

    // function createTrendLine(data, color) {
    //   let series = chart.series.push(
    //     am5xy.LineSeries.new(amTrendLinesRoot2, {
    //       xAxis: xAxis,
    //       yAxis: yAxis,
    //       valueXField: "date",
    //       stroke: color,
    //       valueYField: "value"
    //     })
    //   );

    //   series.data.processor = am5.DataProcessor.new(amTrendLinesRoot2, {
    //     dateFormat: "yyyy-MM-dd",
    //     dateFields: ["date"]
    //   });

    //   series.data.setAll(data);
    //   series.appear(1000, 100);
    // }

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(amTrendLinesRoot2, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);

    // add scrollbar
    chart.set("scrollbarX", am5.Scrollbar.new(amTrendLinesRoot2, {
      orientation: "horizontal"
    }));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000, 100);
    chart.appear(1000, 100);
  }
}
