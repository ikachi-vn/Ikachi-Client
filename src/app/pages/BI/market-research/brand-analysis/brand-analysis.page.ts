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
  selector: 'app-brand-analysis',
  templateUrl: './brand-analysis.page.html',
  styleUrls: ['./brand-analysis.page.scss'],
})
export class BrandAnalysisPage extends PageBase {

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
    this.buildSampleInformationChart();
    this.buildBrandAwarenessChart();
    this.buildTopBrandingThemesChart();
    this.buildCelebrityAnalysisChart();
  }

  async buildSampleInformationChart() {
    //-----------Pie-Chart

    console.log('buildSampleInformationChart');
    // await this.charts.SampleInformationChart.Chart?.dispose();

    // Create root element
    let amPieRoot = this.rpt.newPieRoot("SampleInformationChart");
    // this.charts.SampleInformationChart.Chart = amPieRoot;


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

  async buildBrandAwarenessChart() {
    //-----------Sorted-Bar-Chart

    console.log('buildBrandAwarenessChart');
    // await this.charts.BrandAwarenessChart.Chart?.dispose();

    // Create root element
    let amSortedBarRoot = this.rpt.newSortedBarRoot("BrandAwarenessChart");

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

  async buildTopBrandingThemesChart() {
    //-----------Sorted-Bar-Chart

    console.log('buildTopBrandingThemesChart');
    // await this.charts.TopBrandingThemesChart.Chart?.dispose();

    // Create root element
    let amSortedBarRoot = this.rpt.newSortedBarRoot("TopBrandingThemesChart");

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

  async buildCelebrityAnalysisChart() {
    //-----------Pie-Chart

    console.log('buildCelebrityAnalysisChart');
    // await this.charts.CelebrityAnalysisChart.Chart?.dispose();

    // Create root element
    let amPieRoot = this.rpt.newPieRoot("CelebrityAnalysisChart");
    // this.charts.CelebrityAnalysisChart.Chart = amPieRoot;


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

}
