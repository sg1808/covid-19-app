import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @Input() timeline: Array<any>;
  public chartOptions: Partial<ChartOptions>;
  
  
  ngOnChanges(): void {
    this.initChart(this.timeline);
  }
  constructor() {
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  initChart(chartData){
    this.chartOptions = {
      
      series: [chartData[0],chartData[1],chartData[2]],
      chart: {
        type: "donut"
      },
      labels: ["Total Cases", "Total Recovered", "Total Deaths"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
