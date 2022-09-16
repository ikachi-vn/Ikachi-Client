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
  selector: 'app-production-quality',
  templateUrl: './production-quality.page.html',
  styleUrls: ['./production-quality.page.scss'],
})
export class ProductionQualityPage extends PageBase {

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
    this.buildRateOfReturnChart();
    this.buildRightFirstTimeChart();
    this.buildMostCommonDefectsChart();
    this.buildDefectDensityChart();
  }

  async buildRateOfReturnChart() {
    //-----------Column-Chart

    console.log('buildRateOfReturnChart');
    // await this.charts.RateOfReturnChart.Chart?.dispose();

    // Create root element
    let amColumnRoot = this.rpt.newColumnRoot("RateOfReturnChart");

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

  async buildRightFirstTimeChart() {
    //-----------Gauge-Chart
    console.log('buildRightFirstTimeChart');
    // await amGaugeRoot?.dispose();

    var amGaugeRoot = this.rpt.newGaugeRoot("RightFirstTimeChart");
    // this.charts.RightFirstTimeChart.Chart = amGaugeRoot;

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

  async buildMostCommonDefectsChart() {
    //-----------Pie-Chart

    console.log('buildMostCommonDefectsChart');
    // await this.charts.MostCommonDefectsChart.Chart?.dispose();

    // Create root element
    let amPieRoot = this.rpt.newPieRoot("MostCommonDefectsChart");
    // this.charts.MostCommonDefectsChart.Chart = amPieRoot;


    // Create Chart
    let chart = amPieRoot.container.children.push(
      am5percent.PieChart.new(amPieRoot, this.rpt.AmChartGlobal.pieOpt.Chart)
    );

    // Define data
    let data = [
      {
        country: "France",
        sales: 100000
      }, {
        country: "Viet Nam",
        sales: 160000
      }, {
        country: "United Kingdom",
        sales: 80000
      }
    ];

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(amPieRoot, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
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

  async buildDefectDensityChart() {
    //-----------Highlighting-Chart

    console.log('buildDefectDensityChart');
    // await this.charts.DefectDensityChart.Chart?.dispose();

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
    let amHighlightingRoot = this.rpt.newHighlightingRoot("DefectDensityChart");


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
