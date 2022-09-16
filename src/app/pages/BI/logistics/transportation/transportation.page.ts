import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { ReportService } from 'src/app/services/report.service';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.page.html',
  styleUrls: ['./transportation.page.scss'],
})
export class TransportationPage extends PageBase {

  constructor(
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public env: EnvService,
    public navCtrl: NavController,
    public rpt: ReportService
  ) {
    super();

  }

  // ionViewWillEnter(): void {
  //   this.disposeChart()
  // }

  // disposeChart() {
  // 	for (var key in this.charts) {
  // 		let c = this.charts[key].Chart;
  // 		c?.dispose();
  // 	}
  // }

  ionViewDidEnter() {
    this.buildFleetChart();
    this.buildDeliveryStatusChart();
    this.buildDeliveriesbyDestinationChart();
    this.buildLoadingTimeWeightChart();
  }

  ionViewWillLeave() {
      
  }


  async buildFleetChart() {
    //-----------Gauge-Chart

    console.log('buildFleetChart');
    await amGaugeRoot?.dispose();

    debugger
    var amGaugeRoot = this.rpt.newGaugeRoot("FleetChart");
    // this.charts.FleetChart.Chart = amGaugeRoot;

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

  async buildDeliveryStatusChart() {
    //-----------Two-Level-Pie-Chart

    console.log('buildDeliveryStatusChart');
    // await this.charts.DeliveryStatusChart.Chart?.dispose();

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let amTwoLevelPieRoot = this.rpt.newTwoLevelPieRoot("DeliveryStatusChart");

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

  async buildDeliveriesbyDestinationChart() {
    //-----------Pie-Chart

    console.log('buildDeliveriesbyDestinationChart');
    // await this.charts.DeliveriesbyDestinationChart.Chart?.dispose();

    // Create root element
    let amPieRoot = this.rpt.newPieRoot("DeliveriesbyDestinationChart");
    // this.charts.DeliveriesbyDestinationChart.Chart = amPieRoot;


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

  async buildLoadingTimeWeightChart() {
    //-----------Column-Line-Mix-Chart

    console.log('buildLoadingTimeWeightChart');
    // await this.charts.LoadingTimeWeightChart.Chart?.dispose();

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let amColumnLineMixRoot = this.rpt.newColumnLineMixRoot("LoadingTimeWeightChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amColumnLineMixRoot.setThemes([am5themes_Animated.new(amColumnLineMixRoot)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = amColumnLineMixRoot.container.children.push(
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

    let data = [
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
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(amColumnLineMixRoot, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(amColumnLineMixRoot, {}),
        tooltip: am5.Tooltip.new(amColumnLineMixRoot, {})
      })
    );

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(amColumnLineMixRoot, {
        min: 0,
        extraMax: 0.1,
        renderer: am5xy.AxisRendererY.new(amColumnLineMixRoot, {})
      })
    );


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    let series1 = chart.series.push(
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

    let series2 = chart.series.push(
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
    let legend = chart.children.push(
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


}