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
  selector: 'app-customer-satisfaction',
  templateUrl: './customer-satisfaction.page.html',
  styleUrls: ['./customer-satisfaction.page.scss'],
})
export class CustomerSatisfactionPage extends PageBase {

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
    this.buildNetPromoterChart();
    this.buildCustomerEffortChart();
    this.buildDevelopmentByMonthChart();
  }

  async buildNetPromoterChart() {
    //-----------Gauge-Chart
    console.log('buildNetPromoterChart');
    // await amGaugeRoot?.dispose();

    var amGaugeRoot = this.rpt.newGaugeRoot("buildNetPromoterChart");
    // this.charts.NetPromoterChart.Chart = amGaugeRoot;

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amGaugeRoot.setThemes([am5themes_Animated.new(amGaugeRoot)]);


    // Create Chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    let chart = amGaugeRoot.container.children.push(am5radar.RadarChart.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.Chart));


    // Create axis and its renderer
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
    let axisRenderer = am5radar.AxisRendererCircular.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.AxisRenderer);

    axisRenderer.grid.template.setAll({
      stroke: amGaugeRoot.interfaceColors.get("background"),
      visible: true,
      strokeOpacity: 0.8
    });

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(amGaugeRoot, {
      maxDeviation: 0,
      min: 0,
      max: 100,
      strictMinMax: true,
      renderer: axisRenderer
    }));

    // Add clock hand
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
    let axisDataItem = xAxis.makeDataItem({});

    let clockHand = am5radar.ClockHand.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.ClockHand)

    let bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(amGaugeRoot, {
      sprite: clockHand
    }));

    xAxis.createAxisRange(axisDataItem);

    //Add Label
    let label = chart.radarContainer.children.push(am5.Label.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.Label));

    axisDataItem.set("value", 50);
    bullet.get("sprite").on("rotation", function () {
      let value = axisDataItem.get("value");
      let text = Math.round(axisDataItem.get("value")).toString();
      let fill = am5.color(0x000000);
      xAxis.axisRanges.each(function (axisRange) {
        if (value >= axisRange.get("value") && value <= axisRange.get("endValue")) {
          fill = axisRange.get("axisFill").get("fill");
        }
      })

      label.set("text", Math.round(value).toString());

      clockHand.pin.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
      clockHand.hand.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
    });

    /// Set Gauge Hand To Change
    // setInterval(function () {
    //   axisDataItem.animate({
    //     key: "value",
    //     to: Math.round(Math.random() * 140 - 40),
    //     duration: 500,
    //     easing: am5.ease.out(am5.ease.cubic)
    //   });
    // }, 2000)

    chart.bulletsContainer.set("mask", undefined);


    // Create axis ranges bands
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
    let bandsData = [{
      title: "Low",
      color: "#ee1f25",
      lowScore: 0,
      highScore: 33
    }, {
      title: "Medium",
      color: "#f04922",
      lowScore: 34,
      highScore: 66
    }, {
      title: "High",
      color: "#fdae19",
      lowScore: 67,
      highScore: 100
    }];

    am5.array.each(bandsData, function (data) {
      let axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

      axisRange.setAll({
        value: data.lowScore,
        endValue: data.highScore
      });

      axisRange.get("axisFill").setAll({
        visible: true,
        fill: am5.color(data.color),
        fillOpacity: 0.8
      });

      axisRange.get("label").setAll({
        text: data.title,
        inside: true,
        // radius: 15,
        fontSize: "0.9em",
        fill: amGaugeRoot.interfaceColors.get("background")
      });
    });


    // Make stuff animate on load
    chart.appear(1000, 100);
  }

  async buildCustomerEffortChart() {
    //-----------Gauge-Chart
    console.log('buildCustomerEffortChart');
    // await amGaugeRoot?.dispose();

    var amGaugeRoot = this.rpt.newGaugeRoot("buildCustomerEffortChart");
    // this.charts.CustomerEffortChart.Chart = amGaugeRoot;

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amGaugeRoot.setThemes([am5themes_Animated.new(amGaugeRoot)]);


    // Create Chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    let chart = amGaugeRoot.container.children.push(am5radar.RadarChart.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.Chart));


    // Create axis and its renderer
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
    let axisRenderer = am5radar.AxisRendererCircular.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.AxisRenderer);

    axisRenderer.grid.template.setAll({
      stroke: amGaugeRoot.interfaceColors.get("background"),
      visible: true,
      strokeOpacity: 0.8
    });

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(amGaugeRoot, {
      maxDeviation: 0,
      min: 0,
      max: 100,
      strictMinMax: true,
      renderer: axisRenderer
    }));

    // Add clock hand
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
    let axisDataItem = xAxis.makeDataItem({});

    let clockHand = am5radar.ClockHand.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.ClockHand)

    let bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(amGaugeRoot, {
      sprite: clockHand
    }));

    xAxis.createAxisRange(axisDataItem);

    //Add Label
    let label = chart.radarContainer.children.push(am5.Label.new(amGaugeRoot, this.rpt.AmChartGlobal.gaugeOpt.Label));

    axisDataItem.set("value", 50);
    bullet.get("sprite").on("rotation", function () {
      let value = axisDataItem.get("value");
      let text = Math.round(axisDataItem.get("value")).toString();
      let fill = am5.color(0x000000);
      xAxis.axisRanges.each(function (axisRange) {
        if (value >= axisRange.get("value") && value <= axisRange.get("endValue")) {
          fill = axisRange.get("axisFill").get("fill");
        }
      })

      label.set("text", Math.round(value).toString());

      clockHand.pin.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
      clockHand.hand.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
    });

    /// Set Gauge Hand To Change
    // setInterval(function () {
    //   axisDataItem.animate({
    //     key: "value",
    //     to: Math.round(Math.random() * 140 - 40),
    //     duration: 500,
    //     easing: am5.ease.out(am5.ease.cubic)
    //   });
    // }, 2000)

    chart.bulletsContainer.set("mask", undefined);


    // Create axis ranges bands
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
    let bandsData = [{
      title: "Low",
      color: "#ee1f25",
      lowScore: 0,
      highScore: 33
    }, {
      title: "Medium",
      color: "#f04922",
      lowScore: 34,
      highScore: 66
    }, {
      title: "High",
      color: "#fdae19",
      lowScore: 67,
      highScore: 100
    }];

    am5.array.each(bandsData, function (data) {
      let axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

      axisRange.setAll({
        value: data.lowScore,
        endValue: data.highScore
      });

      axisRange.get("axisFill").setAll({
        visible: true,
        fill: am5.color(data.color),
        fillOpacity: 0.8
      });

      axisRange.get("label").setAll({
        text: data.title,
        inside: true,
        // radius: 15,
        fontSize: "0.9em",
        fill: amGaugeRoot.interfaceColors.get("background")
      });
    });


    // Make stuff animate on load
    chart.appear(1000, 100);
  }

  async buildDevelopmentByMonthChart() {
    //-----------Trend-Lines-Chart

    console.log('buildDevelopmentByMonthChart');
    // await this.charts.DevelopmentByMonthChart.Chart?.dispose();

    // Create root element
    let amTrendLinesRoot = this.rpt.newTrendLinesRoot("DevelopmentByMonthChart");

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

}
