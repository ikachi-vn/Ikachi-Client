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
  selector: 'app-cost-management',
  templateUrl: './cost-management.page.html',
  styleUrls: ['./cost-management.page.scss'],
})
export class CostManagementPage extends PageBase {

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
    this.buildReturnOnAssetsChart();
  }

  async buildReturnOnAssetsChart() {
    //-----------Column-Lines-Mix-Chart

    console.log('buildReturnOnAssetsChart');
    // await this.charts.ReturnOnAssetsChart.Chart?.dispose();

    // Create root element
    let amColumnLineMixRoot = this.rpt.newColumnLineMixRoot("ReturnOnAssetsChart");

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

}
