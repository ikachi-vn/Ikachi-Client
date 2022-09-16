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
  selector: 'app-hospital-kpi',
  templateUrl: './hospital-kpi.page.html',
  styleUrls: ['./hospital-kpi.page.scss'],
})
export class HospitalKpiPage extends PageBase {

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
    this.buildOutInPatientsTrendChart();
    this.buildWatingTimeChart();
  }


  async buildOutInPatientsTrendChart() {
    //-----------Grouped-Sorted-Columns-Chart
    console.log('buildOutInPatientsTrendChart');
    // await amGaugeRoot?.dispose();

    var amGroupedSortedColumnChart = this.rpt.newGroupedSortedColumnRoot("OutInPatientsTrendChart");
    // this.charts.OutInPatientsTrendChart.Chart = amGroupedSortedColumnChart;

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

  async buildWatingTimeChart() {
    //-----------Sorted-Bar-Chart

    console.log('buildWatingTimeChart');
    // await this.charts.WatingTimeChart.Chart?.dispose();

    // Create root element
    let amSortedBarRoot = this.rpt.newSortedBarRoot("WatingTimeChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    amSortedBarRoot.setThemes([am5themes_Animated.new(amSortedBarRoot)]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = amSortedBarRoot.container.children.push(am5xy.XYChart.new(amSortedBarRoot, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    }));

    // We don't want zoom-out button to appear while animating, so we hide it
    chart.zoomOutButton.set("forceHidden", true);


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yRenderer = am5xy.AxisRendererY.new(amSortedBarRoot, {
      minGridDistance: 30
    });

    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(amSortedBarRoot, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer,
      tooltip: am5.Tooltip.new(amSortedBarRoot, { themeTags: ["axis"] })
    }));

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(amSortedBarRoot, {
      maxDeviation: 0,
      min: 0,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(amSortedBarRoot, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.ColumnSeries.new(amSortedBarRoot, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network",
      tooltip: am5.Tooltip.new(amSortedBarRoot, {
        pointerOrientation: "left",
        labelText: "{valueX}"
      })
    }));


    // Rounded corners for columns
    series.columns.template.setAll({
      cornerRadiusTR: 5,
      cornerRadiusBR: 5
    });

    // Make each column to be of a different color
    // series.columns.template.adapters.add("fill", function (fill, target) {
    //   return chart.get("colors").getIndex(series.columns.indexOf(target));
    // });

    // series.columns.template.adapters.add("stroke", function (stroke, target) {
    //   return chart.get("colors").getIndex(series.columns.indexOf(target));
    // });


    // Set data
    var data = [
      {
        "network": "Facebook",
        "value": 2255250000
      },
      {
        "network": "Google+",
        "value": 430000000
      },
      {
        "network": "Instagram",
        "value": 1000000000
      },
      {
        "network": "Pinterest",
        "value": 246500000
      },
      {
        "network": "Reddit",
        "value": 355000000
      },
      {
        "network": "TikTok",
        "value": 500000000
      },
      {
        "network": "Tumblr",
        "value": 624000000
      },
      {
        "network": "Twitter",
        "value": 329500000
      },
      {
        "network": "WeChat",
        "value": 1000000000
      },
      {
        "network": "Weibo",
        "value": 431000000
      },
      {
        "network": "Whatsapp",
        "value": 1433333333
      },
      {
        "network": "YouTube",
        "value": 1900000000
      }
    ];

    yAxis.data.setAll(data);
    series.data.setAll(data);
    sortCategoryAxis();

    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        var dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }

    chart.set("cursor", am5xy.XYCursor.new(amSortedBarRoot, {
      behavior: "none",
      xAxis: xAxis,
      yAxis: yAxis
    }));


    // Axis sorting
    function sortCategoryAxis() {

      // Sort by value
      series.dataItems.sort(function (x, y) {
        return x.get("valueX") - y.get("valueX"); // descending
        //return y.get("valueY") - x.get("valueX"); // ascending
      })

      // Go through each axis item
      am5.array.each(yAxis.dataItems, function (dataItem) {
        // get corresponding series item
        var seriesDataItem = getSeriesItem(dataItem.get("category"));

        if (seriesDataItem) {
          // get index of series data item
          var index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          var deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          dataItem.set("index", index);
          // set deltaPosition instanlty
          dataItem.set("deltaPosition", -deltaPosition);
          // animate delta position to 0
          dataItem.animate({
            key: "deltaPosition",
            to: 0,
            duration: 1000,
            easing: am5.ease.out(am5.ease.cubic)
          })
        }
      });

      // Sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set,
      // they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }


    // update data with random values each 1.5 sec
    setInterval(function () {
      updateData();
    }, 1500)

    function updateData() {
      am5.array.each(series.dataItems, function (dataItem) {
        var value = dataItem.get("valueX") + Math.round(Math.random() * 1000000000 - 500000000);
        if (value < 0) {
          value = 500000000;
        }
        // both valueY and workingValueY should be changed, we only animate workingValueY
        dataItem.set("valueX", value);
        dataItem.animate({
          key: "valueXWorking",
          to: value,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      })

      sortCategoryAxis();
    }


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }
}
