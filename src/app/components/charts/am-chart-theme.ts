import * as am5 from "@amcharts/amcharts5/index";

// Set Color: https://www.amcharts.com/docs/v5/reference/color/

export class AmChartTheme extends am5.Theme {
  appTheme = 'thelog-theme';

  setupDefaultRules() {

    if (window.location.host == 'thelog.inholdings.vn') {
      this.appTheme = 'thelog-theme'
    } else if (window.location.host.indexOf('inholdings') > -1) {
      this.appTheme = 'inholdings-theme'
    }

    if (this.appTheme == 'inholdings-theme') {
      let baseColor = "#b9e702"; //green

      // -- Set fontsize + màu cho label 2 trục tung, hoành
      this.rule("AxisLabel").setAll({
        fontSize: 12,
        fill: am5.Color.fromString(baseColor)
      });

      // -- Set màu cho cột ( XYChart )
      this.rule('ColumnSeries').setAll({
        fill: am5.Color.fromString(baseColor),
        stroke: am5.Color.fromString(baseColor),
      });

      // -- Set màu cho slice (PieChart)
      this.rule("ColorSet").setAll({
        colors: [
          am5.Color.fromString("#81A101"),
          am5.Color.fromString("#94B801"),
          am5.Color.fromString("#A6CF01"),
          am5.Color.fromString("#b9e702"),
          am5.Color.fromString("#C0E91B"),
          am5.Color.fromString("#C7EB34"),
          am5.Color.fromString("#CEEE4D"),
          am5.Color.fromString("#D5F067"),
        ],
      });

      // -- Set màu cho line ( SmoothedXLineSeries Background )
      this.rule('SmoothedXLineSeries').setAll({
        fill: am5.Color.fromString(baseColor),
      });
      
      // -- Set màu Circle cho line ( SmoothedXLineSeries Circle )
      this.rule("Circle").setAll({
        radius: 4,
        strokeWidth: 2,
        fill: am5.Color.fromString(baseColor),
        fillOpacity: 0.8,
      });


    }
    else if (this.appTheme == 'thelog-theme') {
      let baseColor = "#a02822"; //red

      // -- Set fontsize + màu cho label 2 trục tung, hoành
      this.rule("AxisLabel").setAll({
        fontSize: 12,
        fill: am5.Color.fromString(baseColor),
      });

      // -- Set màu cho cột ( XYChart )
      this.rule('ColumnSeries').setAll({
        fill: am5.Color.fromString(baseColor),
        stroke: am5.Color.fromString(baseColor),
      });

      // -- Set màu cho slice (PieChart)
      this.rule("ColorSet").setAll({
        colors: [
          am5.Color.fromString("#701c17"),
          am5.Color.fromString("#80201b"),
          am5.Color.fromString("#90241e"),
          am5.Color.fromString("#a02822"),
          am5.Color.fromString("#a93d38"),
          am5.Color.fromString("#b3524e"),
          am5.Color.fromString("#bc6864"),
          am5.Color.fromString("#c67e7a"),
        ],
      })

      // -- Set màu cho line ( SmoothedXLineSeries Background )
      this.rule('SmoothedXLineSeries').setAll({
        fill: am5.Color.fromString(baseColor),
      });

      // -- Set màu Circle cho line ( SmoothedXLineSeries Circle )
      this.rule("Circle").setAll({
        radius: 4,
        strokeWidth: 2,
        fill: am5.Color.fromString(baseColor),
        fillOpacity: 0.8,
    });

    }


  }
}
