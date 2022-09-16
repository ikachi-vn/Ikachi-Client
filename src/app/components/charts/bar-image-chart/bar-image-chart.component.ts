import { Component, Input, OnInit } from '@angular/core';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from '@amcharts/amcharts5/xy';
import { AmChartTheme } from '../am-chart-theme';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-bar-image-chart',
  templateUrl: './bar-image-chart.component.html',
  styleUrls: ['./bar-image-chart.component.scss'],
})
export class BarImageChartComponent implements OnInit {
  @Input() ChartName;

  private root: am5.Root;

  constructor() { }

  ngOnInit() { }

  startingChart(div, chartData) {
    this.maybeDisposeChart(div, chartData);
  }

  maybeDisposeChart(div, chartdata) {
    //If re-renderChart >> If existed >> dispose chart >> build new.
    //Work with multiple same-type charts in onepage.
    for (let i = 0; i < am5.registry.rootElements.length; i++) {
      if (am5.registry.rootElements[i].dom.id == div) {
        am5.registry.rootElements[i].dispose();
      }
    }
    this.buildChart(div, chartdata);
  }

  buildChart(div, chartdata) {
    // Create root and chart
    this.root = am5.Root.new(div);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    this.root.setThemes([am5themes_Animated.new(this.root),
      AmChartTheme.new(this.root)]);

    // Resize 
    this.root.autoResize = true;
    this.root.fps = 60;

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 50,
        paddingRight: 40
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

    let yRenderer = am5xy.AxisRendererY.new(this.root, {});
    yRenderer.grid.template.set("visible", false);

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        categoryField: "name",
        renderer: yRenderer,
        paddingRight: 40
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(this.root, {});
    xRenderer.grid.template.set("strokeDasharray", [3]);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(this.root, {
        min: 0,
        renderer: xRenderer,
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      oversizedBehavior: "truncate",
      maxWidth: 150
    });

    // Create series
    let serieNum;
    let serieName;
    let keyNames;

    // Update data
    for (var i = 0; i < chartdata.length; i++) {
      keyNames = [];
    }
    
    keyNames = Object.keys(chartdata[0]);
    serieNum = keyNames[1].slice(-1);
    serieName = keyNames[1].slice(0,-1);

    chartdata.reverse();

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        name: serieName,
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: keyNames[1],
        categoryYField: keyNames[0],
        sequencedInterpolation: true,
        calculateAggregates: true,
        maskBullets: false,
        tooltip: am5.Tooltip.new(this.root, {
          // dy: 0,
          // dx: -30,
          pointerOrientation: "horizontal",
          labelText: "{valueX}"
        })
      })
    );
    
    series.columns.template.setAll({
      strokeOpacity: 0,
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusTL: 10,
      maxHeight: 20,
      fillOpacity: 0.8
    });

    let currentlyHovered;

    series.columns.template.events.on("pointerover", function (e) {
      handleHover(e.target.dataItem);
    });

    series.columns.template.events.on("pointerout", function (e) {
      handleOut();
    });

    function handleHover(dataItem) {
      if (dataItem && currentlyHovered != dataItem) {
        handleOut();
        currentlyHovered = dataItem;
        let bullet = dataItem.bullets[0];
        bullet.animate({
          key: "locationX",
          to: 1,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }

    function handleOut() {
      if (currentlyHovered) {
        let bullet = currentlyHovered.bullets[0];
        bullet.animate({
          key: "locationX",
          to: 0,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }


    let circleTemplate = am5.Template.new({});

    series.bullets.push(function (root, series, dataItem) {
      let bulletContainer = am5.Container.new(root, {});
      let circle = bulletContainer.children.push(
        am5.Circle.new(root, { radius: 20 })
      );

      let maskCircle = bulletContainer.children.push(
        am5.Circle.new(root, { radius: 20 })
      );

      // only containers can be masked, so we add image to another container
      let imageContainer = bulletContainer.children.push(
        am5.Container.new(root, {
          mask: maskCircle
        })
      );

      // Setting Image
      let image = imageContainer.children.push(
        am5.Picture.new(root, {
          templateField: "pictureSettings",
          centerX: am5.p50,
          centerY: am5.p50,
          width: 30,
          height: 30
        })
      );

      return am5.Bullet.new(root, {
        locationX: 0,
        sprite: bulletContainer
      });
    });

    // heatrule
    series.set("heatRules", [
      {
        dataField: "valueX",
        min: am5.color(0xe5dc36),
        max: am5.color(0x5faa46),
        target: series.columns.template,
        key: "fill"
      },
      {
        dataField: "valueX",
        min: am5.color(0xe5dc36),
        max: am5.color(0x5faa46),
        target: circleTemplate,
        key: "fill"
      }
    ]);

    let data = chartdata;

    series.data.setAll(data);
    yAxis.data.setAll(data);

    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {}));
    cursor.lineX.set("visible", false);
    cursor.lineY.set("visible", false);

    cursor.events.on("cursormoved", function () {
      let dataItem = series.get("tooltip").dataItem;
      if (dataItem) {
        handleHover(dataItem)
      }
      else {
        handleOut();
      }
    })

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);
  }
}
