import {Component, Input, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import {Forfait} from '../forfait';
import {Formulaire} from '../formulaire';

@Component({
  selector: 'app-graphique-destination',
  templateUrl: './graphique-destination.component.html',
  styleUrls: ['./graphique-destination.component.css']
})
export class GraphiqueDestinationComponent implements OnInit {
  forfaits: Forfait[] ;
  // forfaits: Forfait[] = FORFAITS ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Costarica',
      backgroundColor: 'green',
      borderColor: 'purple',
      hoverBackgroundColor: 'green',
      hoverBorderColor: 'green',
    },
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Portugal',
      backgroundColor: 'red',
      borderColor: 'purple',
      hoverBackgroundColor: 'red',
      hoverBorderColor: 'red',
    },
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Angleterre',
      backgroundColor: 'blue',
      borderColor: 'purple',
      hoverBackgroundColor: 'blue',
      hoverBorderColor: 'blue',
    },
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Mexique',
      backgroundColor: 'purple',
      borderColor: 'purple',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'purple',
    },
    {
      data: [
        { x: 20, y: 5, r: 5 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Corse',
      backgroundColor: 'yellow',
      borderColor: 'purple',
      hoverBackgroundColor: 'yellow',
      hoverBorderColor: 'yellow',
    },
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'green',
        'red',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  private rand(max: number): number {
    return Math.trunc(Math.random() * max);
  }

  private randomPoint(maxCoordinate: number): { r: number; x: number; y: number } {
    const x = this.rand(maxCoordinate);
    const y = this.rand(maxCoordinate);
    const r = this.rand(30) + 5;
    return { x, y, r };
  }

  public randomize(): void {
    const numberOfPoints = this.rand(5) + 5;
    this.bubbleChartData[0].data = Array.apply(null, { length: numberOfPoints }).map(r => this.randomPoint(30));
  }
}
