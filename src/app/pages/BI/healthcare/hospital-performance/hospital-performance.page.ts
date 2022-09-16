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
  selector: 'app-hospital-performance',
  templateUrl: './hospital-performance.page.html',
  styleUrls: ['./hospital-performance.page.scss'],
})
export class HospitalPerformancePage extends PageBase {

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
    this.buildLengthOfStayChart();
    this.buildAdmissionsReadmissionRateChart();
    this.buildAvgTreatmentCostsChart();
    this.buildStaysByPayerChart();
    this.buildCostsAndTypesChart();
    this.buildAcquiredInfectionsChart();
  }

  async buildLengthOfStayChart() {
    //-----------Line-Chart
    console.log('buildLengthOfStayChart');
    // await amLineRoot?.dispose();

    var amLineRoot = this.rpt.newLineRoot("LengthOfStayChart");
    // this.charts.LengthOfStayChart.Chart = amLineRoot;


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amLineRoot.setThemes([am5themes_Animated.new(amLineRoot)]);

    amLineRoot.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });

    let data = [{
      "date": "2012-07-27",
      "value": 13
    }, {
      "date": "2012-07-28",
      "value": 11
    }, {
      "date": "2012-07-29",
      "value": 15
    }, {
      "date": "2012-07-30",
      "value": 16
    }, {
      "date": "2012-07-31",
      "value": 18
    }, {
      "date": "2012-08-01",
      "value": 13
    }, {
      "date": "2012-08-02",
      "value": 22
    }, {
      "date": "2012-08-03",
      "value": 23
    }, {
      "date": "2012-08-04",
      "value": 20
    }, {
      "date": "2012-08-05",
      "value": 17
    }, {
      "date": "2012-08-06",
      "value": 16
    }, {
      "date": "2012-08-07",
      "value": 18
    }, {
      "date": "2012-08-08",
      "value": 21
    }, {
      "date": "2012-08-09",
      "value": 26
    }, {
      "date": "2012-08-10",
      "value": 24
    }, {
      "date": "2012-08-11",
      "value": 29
    }, {
      "date": "2012-08-12",
      "value": 32
    }, {
      "date": "2012-08-13",
      "value": 18
    }, {
      "date": "2012-08-14",
      "value": 24
    }, {
      "date": "2012-08-15",
      "value": 22
    }, {
      "date": "2012-08-16",
      "value": 18
    }, {
      "date": "2012-08-17",
      "value": 19
    }, {
      "date": "2012-08-18",
      "value": 14
    }, {
      "date": "2012-08-19",
      "value": 15
    }, {
      "date": "2012-08-20",
      "value": 12
    }, {
      "date": "2012-08-21",
      "value": 8
    }, {
      "date": "2012-08-22",
      "value": 9
    }, {
      "date": "2012-08-23",
      "value": 8
    }, {
      "date": "2012-08-24",
      "value": 7
    }, {
      "date": "2012-08-25",
      "value": 5
    }, {
      "date": "2012-08-26",
      "value": 11
    }, {
      "date": "2012-08-27",
      "value": 13
    }, {
      "date": "2012-08-28",
      "value": 18
    }, {
      "date": "2012-08-29",
      "value": 20
    }, {
      "date": "2012-08-30",
      "value": 29
    }, {
      "date": "2012-08-31",
      "value": 33
    }, {
      "date": "2012-09-01",
      "value": 42
    }, {
      "date": "2012-09-02",
      "value": 35
    }, {
      "date": "2012-09-03",
      "value": 31
    }, {
      "date": "2012-09-04",
      "value": 47
    }, {
      "date": "2012-09-05",
      "value": 52
    }, {
      "date": "2012-09-06",
      "value": 46
    }, {
      "date": "2012-09-07",
      "value": 41
    }, {
      "date": "2012-09-08",
      "value": 43
    }, {
      "date": "2012-09-09",
      "value": 40
    }, {
      "date": "2012-09-10",
      "value": 39
    }, {
      "date": "2012-09-11",
      "value": 34
    }, {
      "date": "2012-09-12",
      "value": 29
    }, {
      "date": "2012-09-13",
      "value": 34
    }, {
      "date": "2012-09-14",
      "value": 37
    }, {
      "date": "2012-09-15",
      "value": 42
    }, {
      "date": "2012-09-16",
      "value": 49
    }, {
      "date": "2012-09-17",
      "value": 46
    }, {
      "date": "2012-09-18",
      "value": 47
    }, {
      "date": "2012-09-19",
      "value": 55
    }, {
      "date": "2012-09-20",
      "value": 59
    }, {
      "date": "2012-09-21",
      "value": 58
    }, {
      "date": "2012-09-22",
      "value": 57
    }, {
      "date": "2012-09-23",
      "value": 61
    }, {
      "date": "2012-09-24",
      "value": 59
    }, {
      "date": "2012-09-25",
      "value": 67
    }, {
      "date": "2012-09-26",
      "value": 65
    }, {
      "date": "2012-09-27",
      "value": 61
    }, {
      "date": "2012-09-28",
      "value": 66
    }, {
      "date": "2012-09-29",
      "value": 69
    }, {
      "date": "2012-09-30",
      "value": 71
    }, {
      "date": "2012-10-01",
      "value": 67
    }, {
      "date": "2012-10-02",
      "value": 63
    }, {
      "date": "2012-10-03",
      "value": 46
    }, {
      "date": "2012-10-04",
      "value": 32
    }, {
      "date": "2012-10-05",
      "value": 21
    }, {
      "date": "2012-10-06",
      "value": 18
    }, {
      "date": "2012-10-07",
      "value": 21
    }, {
      "date": "2012-10-08",
      "value": 28
    }, {
      "date": "2012-10-09",
      "value": 27
    }, {
      "date": "2012-10-10",
      "value": 36
    }, {
      "date": "2012-10-11",
      "value": 33
    }, {
      "date": "2012-10-12",
      "value": 31
    }, {
      "date": "2012-10-13",
      "value": 30
    }, {
      "date": "2012-10-14",
      "value": 34
    }, {
      "date": "2012-10-15",
      "value": 38
    }, {
      "date": "2012-10-16",
      "value": 37
    }, {
      "date": "2012-10-17",
      "value": 44
    }, {
      "date": "2012-10-18",
      "value": 49
    }, {
      "date": "2012-10-19",
      "value": 53
    }, {
      "date": "2012-10-20",
      "value": 57
    }, {
      "date": "2012-10-21",
      "value": 60
    }, {
      "date": "2012-10-22",
      "value": 61
    }, {
      "date": "2012-10-23",
      "value": 69
    }, {
      "date": "2012-10-24",
      "value": 67
    }, {
      "date": "2012-10-25",
      "value": 72
    }, {
      "date": "2012-10-26",
      "value": 77
    }, {
      "date": "2012-10-27",
      "value": 75
    }, {
      "date": "2012-10-28",
      "value": 70
    }, {
      "date": "2012-10-29",
      "value": 72
    }, {
      "date": "2012-10-30",
      "value": 70
    }, {
      "date": "2012-10-31",
      "value": 72
    }, {
      "date": "2012-11-01",
      "value": 73
    }, {
      "date": "2012-11-02",
      "value": 67
    }, {
      "date": "2012-11-03",
      "value": 68
    }, {
      "date": "2012-11-04",
      "value": 65
    }, {
      "date": "2012-11-05",
      "value": 71
    }, {
      "date": "2012-11-06",
      "value": 75
    }, {
      "date": "2012-11-07",
      "value": 74
    }, {
      "date": "2012-11-08",
      "value": 71
    }, {
      "date": "2012-11-09",
      "value": 76
    }, {
      "date": "2012-11-10",
      "value": 77
    }, {
      "date": "2012-11-11",
      "value": 81
    }, {
      "date": "2012-11-12",
      "value": 83
    }, {
      "date": "2012-11-13",
      "value": 80
    }, {
      "date": "2012-11-14",
      "value": 81
    }, {
      "date": "2012-11-15",
      "value": 87
    }, {
      "date": "2012-11-16",
      "value": 82
    }, {
      "date": "2012-11-17",
      "value": 86
    }, {
      "date": "2012-11-18",
      "value": 80
    }, {
      "date": "2012-11-19",
      "value": 87
    }, {
      "date": "2012-11-20",
      "value": 83
    }, {
      "date": "2012-11-21",
      "value": 85
    }, {
      "date": "2012-11-22",
      "value": 84
    }, {
      "date": "2012-11-23",
      "value": 82
    }, {
      "date": "2012-11-24",
      "value": 73
    }, {
      "date": "2012-11-25",
      "value": 71
    }, {
      "date": "2012-11-26",
      "value": 75
    }, {
      "date": "2012-11-27",
      "value": 79
    }, {
      "date": "2012-11-28",
      "value": 70
    }, {
      "date": "2012-11-29",
      "value": 73
    }, {
      "date": "2012-11-30",
      "value": 61
    }, {
      "date": "2012-12-01",
      "value": 62
    }, {
      "date": "2012-12-02",
      "value": 66
    }, {
      "date": "2012-12-03",
      "value": 65
    }, {
      "date": "2012-12-04",
      "value": 73
    }, {
      "date": "2012-12-05",
      "value": 79
    }, {
      "date": "2012-12-06",
      "value": 78
    }, {
      "date": "2012-12-07",
      "value": 78
    }, {
      "date": "2012-12-08",
      "value": 78
    }, {
      "date": "2012-12-09",
      "value": 74
    }, {
      "date": "2012-12-10",
      "value": 73
    }, {
      "date": "2012-12-11",
      "value": 75
    }, {
      "date": "2012-12-12",
      "value": 70
    }, {
      "date": "2012-12-13",
      "value": 77
    }, {
      "date": "2012-12-14",
      "value": 67
    }, {
      "date": "2012-12-15",
      "value": 62
    }, {
      "date": "2012-12-16",
      "value": 64
    }, {
      "date": "2012-12-17",
      "value": 61
    }, {
      "date": "2012-12-18",
      "value": 59
    }, {
      "date": "2012-12-19",
      "value": 53
    }, {
      "date": "2012-12-20",
      "value": 54
    }, {
      "date": "2012-12-21",
      "value": 56
    }, {
      "date": "2012-12-22",
      "value": 59
    }, {
      "date": "2012-12-23",
      "value": 58
    }, {
      "date": "2012-12-24",
      "value": 55
    }, {
      "date": "2012-12-25",
      "value": 52
    }, {
      "date": "2012-12-26",
      "value": 54
    }, {
      "date": "2012-12-27",
      "value": 50
    }, {
      "date": "2012-12-28",
      "value": 50
    }, {
      "date": "2012-12-29",
      "value": 51
    }, {
      "date": "2012-12-30",
      "value": 52
    }, {
      "date": "2012-12-31",
      "value": 58
    }, {
      "date": "2013-01-01",
      "value": 60
    }, {
      "date": "2013-01-02",
      "value": 67
    }, {
      "date": "2013-01-03",
      "value": 64
    }, {
      "date": "2013-01-04",
      "value": 66
    }, {
      "date": "2013-01-05",
      "value": 60
    }, {
      "date": "2013-01-06",
      "value": 63
    }, {
      "date": "2013-01-07",
      "value": 61
    }, {
      "date": "2013-01-08",
      "value": 60
    }, {
      "date": "2013-01-09",
      "value": 65
    }, {
      "date": "2013-01-10",
      "value": 75
    }, {
      "date": "2013-01-11",
      "value": 77
    }, {
      "date": "2013-01-12",
      "value": 78
    }, {
      "date": "2013-01-13",
      "value": 70
    }, {
      "date": "2013-01-14",
      "value": 70
    }, {
      "date": "2013-01-15",
      "value": 73
    }, {
      "date": "2013-01-16",
      "value": 71
    }, {
      "date": "2013-01-17",
      "value": 74
    }, {
      "date": "2013-01-18",
      "value": 78
    }, {
      "date": "2013-01-19",
      "value": 85
    }, {
      "date": "2013-01-20",
      "value": 82
    }, {
      "date": "2013-01-21",
      "value": 83
    }, {
      "date": "2013-01-22",
      "value": 88
    }, {
      "date": "2013-01-23",
      "value": 85
    }, {
      "date": "2013-01-24",
      "value": 85
    }, {
      "date": "2013-01-25",
      "value": 80
    }, {
      "date": "2013-01-26",
      "value": 87
    }, {
      "date": "2013-01-27",
      "value": 84
    }, {
      "date": "2013-01-28",
      "value": 83
    }, {
      "date": "2013-01-29",
      "value": 84
    }, {
      "date": "2013-01-30",
      "value": 81
    }];


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = amLineRoot.container.children.push(am5xy.XYChart.new(amLineRoot, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX"
    }));

    let easing = am5.ease.linear;


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(amLineRoot, {
      maxDeviation: 0.1,
      groupData: false,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(amLineRoot, {

      }),
      tooltip: am5.Tooltip.new(amLineRoot, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(amLineRoot, {
      maxDeviation: 0.2,
      renderer: am5xy.AxisRendererY.new(amLineRoot, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.LineSeries.new(amLineRoot, {
      minBulletDistance: 10,
      connect: false,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(amLineRoot, {
        pointerOrientation: "horizontal",
        labelText: "{valueY}"
      })
    }));

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });

    series.strokes.template.setAll({
      strokeWidth: 2
    });


    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(amLineRoot, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });

    series.data.setAll(data);

    series.bullets.push(function () {
      let circle = am5.Circle.new(amLineRoot, {
        radius: 4,
        fill: amLineRoot.interfaceColors.get("background"),
        stroke: series.get("fill"),
        strokeWidth: 2
      })

      return am5.Bullet.new(amLineRoot, {
        sprite: circle
      })
    });


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(amLineRoot, {
      xAxis: xAxis,
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    // add scrollbar
    chart.set("scrollbarX", am5.Scrollbar.new(amLineRoot, {
      orientation: "horizontal"
    }));


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

  async buildAdmissionsReadmissionRateChart() {
    //-----------Column-Lines-Mix-Chart

    console.log('buildAdmissionsReadmissionRateChart');
    // await this.charts.AdmissionsReadmissionRateChart.Chart?.dispose();

    // Create root element
    let amColumnLineMixRoot = this.rpt.newColumnLineMixRoot("AdmissionsReadmissionRateChart");

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

  async buildAvgTreatmentCostsChart() {
    //-----------Column-Chart

    console.log('buildAvgTreatmentCostsChart');
    // await this.charts.AvgTreatmentCostsChart.Chart?.dispose();

    // Create root element
    let amColumnRoot = this.rpt.newColumnRoot("AvgTreatmentCostsChart");

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

  async buildStaysByPayerChart() {
    //-----------Pie-Chart

    console.log('buildStaysByPayerChart');
    // await this.charts.StaysByPayerChart.Chart?.dispose();

    // Create root element
    let amPieRoot = this.rpt.newPieRoot("StaysByPayerChart");
    // this.charts.StaysByPayerChart.Chart = amPieRoot;


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

  async buildCostsAndTypesChart() {
    //----------------Stacked-Bar-chart

    console.log('buildCostsAndTypesChart');
    // await this.charts.CostsAndTypesChart.Chart?.dispose();

    // Create root element
    let amStackedBarRoot = this.rpt.newStackedBarRoot("CostsAndTypesChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amStackedBarRoot.setThemes([am5themes_Animated.new(amStackedBarRoot)]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = amStackedBarRoot.container.children.push(am5xy.XYChart.new(amStackedBarRoot, {
      panX: false,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomY",
      layout: amStackedBarRoot.verticalLayout
    }));

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarY", am5.Scrollbar.new(amStackedBarRoot, {
      orientation: "vertical"
    }));

    var data = [{
      "year": "2021",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1,
      "meast": 0.8,
      "africa": 0.4
    }, {
      "year": "2022",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 0.5,
      "meast": 0.4,
      "africa": 0.3
    }, {
      "year": "2023",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 0.3,
      "meast": 0.9,
      "africa": 0.5
    }]


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(amStackedBarRoot, {
      categoryField: "year",
      renderer: am5xy.AxisRendererY.new(amStackedBarRoot, {}),
      tooltip: am5.Tooltip.new(amStackedBarRoot, {})
    }));

    yAxis.data.setAll(data);

    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(amStackedBarRoot, {
      min: 0,
      renderer: am5xy.AxisRendererX.new(amStackedBarRoot, {})
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(amStackedBarRoot, {
      centerX: am5.p50,
      x: am5.p50
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(amStackedBarRoot, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        baseAxis: yAxis,
        valueXField: fieldName,
        categoryYField: "year"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryY}: {valueX}",
        tooltipY: am5.percent(90)
      });
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(amStackedBarRoot, {
          sprite: am5.Label.new(amStackedBarRoot, {
            text: "{valueX}",
            fill: amStackedBarRoot.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("Europe", "europe");
    makeSeries("North America", "namerica");
    makeSeries("Asia", "asia");
    makeSeries("Latin America", "lamerica");
    makeSeries("Middle East", "meast");
    makeSeries("Africa", "africa");


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }

  async buildAcquiredInfectionsChart() {
    //-----------Grouped-Sorted-Columns-Chart
    console.log('buildAcquiredInfectionsChart');
    // await amGaugeRoot?.dispose();

    var amGroupedSortedColumnChart = this.rpt.newGroupedSortedColumnRoot("AcquiredInfectionsChart");
    // this.charts.AcquiredInfectionsChart.Chart = amGroupedSortedColumnChart;

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amGroupedSortedColumnChart.setThemes([
      am5themes_Animated.new(amGroupedSortedColumnChart)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = amGroupedSortedColumnChart.container.children.push(
      am5xy.XYChart.new(amGroupedSortedColumnChart, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none"
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(amGroupedSortedColumnChart, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(amGroupedSortedColumnChart, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({ text: "{realName}" });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(amGroupedSortedColumnChart, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(amGroupedSortedColumnChart, {
          labelText: "{realName}"
        })
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(amGroupedSortedColumnChart, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(amGroupedSortedColumnChart, {})
      })
    );

    var yAxis2 = chart.yAxes.push(
      am5xy.ValueAxis.new(amGroupedSortedColumnChart, {
        maxDeviation: 0.3,
        syncWithAxis: yAxis,
        renderer: am5xy.AxisRendererY.new(amGroupedSortedColumnChart, { opposite: true })
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(amGroupedSortedColumnChart, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis2,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "category",
        tooltip: am5.Tooltip.new(amGroupedSortedColumnChart, {
          labelText: "{provider} {realName}: {valueY}"
        })
      })
    );

    series.columns.template.setAll({
      fillOpacity: 0.9,
      strokeOpacity: 0
    });
    series.columns.template.adapters.add("fill", (fill, target: any) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", (stroke, target: any) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    var lineSeries = chart.series.push(
      am5xy.LineSeries.new(amGroupedSortedColumnChart, {
        name: "Series 2",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "quantity",
        sequencedInterpolation: true,
        stroke: chart.get("colors").getIndex(13),
        fill: chart.get("colors").getIndex(13),
        categoryXField: "category",
        tooltip: am5.Tooltip.new(amGroupedSortedColumnChart, {
          labelText: "{valueY}"
        })
      })
    );

    lineSeries.strokes.template.set("strokeWidth", 2);

    lineSeries.bullets.push(function () {
      return am5.Bullet.new(amGroupedSortedColumnChart, {
        locationY: 1,
        locationX: undefined,
        sprite: am5.Circle.new(amGroupedSortedColumnChart, {
          radius: 5,
          fill: lineSeries.get("fill")
        })
      });
    });

    // when data validated, adjust location of data item based on count
    lineSeries.events.on("datavalidated", function () {
      am5.array.each(lineSeries.dataItems, function (dataItem: any) {
        // if count divides by two, location is 0 (on the grid)
        if (
          dataItem.dataContext.amGroupedSortedColumnChart / 2 ==
          Math.round(dataItem.dataContext.amGroupedSortedColumnChart / 2)
        ) {
          dataItem.set("locationX", 0);
        }
        // otherwise location is 0.5 (middle)
        else {
          dataItem.set("locationX", 0.5);
        }
      });
    });

    var chartData = [];

    // Set data
    var data = {
      "Provider 1": {
        "item 1": 10,
        "item 2": 35,
        "item 3": 5,
        "item 4": 20,
        quantity: 430
      },
      "Provider 2": {
        "item 1": 15,
        "item 3": 21,
        quantity: 210
      },
      "Provider 3": {
        "item 2": 25,
        "item 3": 11,
        "item 4": 17,
        quantity: 265
      },
      "Provider 4": {
        "item 3": 12,
        "item 4": 15,
        quantity: 98
      }
    };

    // process data ant prepare it for the chart
    for (var providerName in data) {
      var providerData = data[providerName];

      // add data of one provider to temp array
      var tempArray = [];
      var count = 0;
      // add items
      for (var itemName in providerData) {
        if (itemName != "quantity") {
          count++;
          // we generate unique category for each column (providerName + "_" + itemName) and store realName
          tempArray.push({
            category: providerName + "_" + itemName,
            realName: itemName,
            value: providerData[itemName],
            provider: providerName
          });
        }
      }
      // sort temp array
      tempArray.sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        } else if (a.value < b.value) {
          return -1;
        } else {
          return 0;
        }
      });

      // add quantity and count to middle data item (line series uses it)
      var lineSeriesDataIndex = Math.floor(count / 2);
      tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
      tempArray[lineSeriesDataIndex].count = count;
      // push to the final data
      am5.array.each(tempArray, function (item) {
        chartData.push(item);
      });

      // create range (the additional label at the bottom)

      var range = xAxis.makeDataItem({});
      xAxis.createAxisRange(range);

      range.set("category", tempArray[0].category);
      range.set("endCategory", tempArray[tempArray.length - 1].category);

      var label = range.get("label");

      label.setAll({
        text: tempArray[0].provider,
        dy: 30,
        fontWeight: "bold",
        tooltipText: tempArray[0].provider
      });

      var tick = range.get("tick");
      tick.setAll({ visible: true, strokeOpacity: 1, length: 50, location: 0 });

      var grid = range.get("grid");
      grid.setAll({ strokeOpacity: 1 });
    }

    // add range for the last grid
    var range = xAxis.makeDataItem({});
    xAxis.createAxisRange(range);
    range.set("category", chartData[chartData.length - 1].category);
    var tick = range.get("tick");
    tick.setAll({ visible: true, strokeOpacity: 1, length: 50, location: 1 });

    var grid = range.get("grid");
    grid.setAll({ strokeOpacity: 1, location: 1 });

    xAxis.data.setAll(chartData);
    series.data.setAll(chartData);
    lineSeries.data.setAll(chartData);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }


}
