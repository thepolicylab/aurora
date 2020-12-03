import React from "react"
import merge from "deepmerge"
import { ApexOptions } from "apexcharts"

import {
  ChartWrapper,
  RecordSet,
  RecordEntry,
  ChartProps,
} from "./ChartWrapper"

export interface LineChartProps extends ChartProps {
  strokeWidths?: number | number[]
  /**
   * The type of dashed lines for each line. Higher numnbers means more space between dashes.
   */
  dashTypes?: number | number[]
  /**
   * Whether each line is curved.
   */
  curved?: boolean
  /**
   * Specify the size of markers. 0 means no markers.
   */
  markerSize?: number
  /**
   * The minimum value of the x axis.
   */
  xMin?: number
  /**
   * The maximum value of the x axis.
   */
  xMax?: number
  /**
   * The minimum value of the y axis.
   */
  yMin?: number
  /**
   * The maximum value of the y axis.
   */
  yMax?: number
}

interface DataPoint {
  x: string | number
  y: number
}

interface LineSeriesEntry {
  name: string
  data: DataPoint[]
}

export type LineSeries = LineSeriesEntry[]

export const makeSeries = (
  data: RecordSet,
  x: string,
  y: string[]
): LineSeries => {
  const series = y.map(
    (label: string): LineSeriesEntry => ({
      name: label,
      data: data.map(
        (entry: RecordEntry): DataPoint => ({
          x: entry[x],
          y: entry[label] as number,
        })
      ),
    })
  )

  return series
}

export const makeBaseOptions = (
  strokeWidths: number | number[],
  dashTypes: number | number[],
  curved: boolean,
  markerSize?: number,
  xMin?: number,
  xMax?: number,
  yMin?: number,
  yMax?: number
): ApexOptions => ({
  chart: {
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 30,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  stroke: {
    curve: curved ? "smooth" : "straight",
    width: strokeWidths,
    dashArray: dashTypes,
  },
  markers: {
    size: markerSize,
    hover: {
      size: markerSize ? markerSize + 1 : markerSize,
    },
  },
  xaxis: {
    min: xMin,
    max: xMax,
    axisBorder: {
      color: "#333333",
    },
    axisTicks: {
      color: "#333333",
    },
  },
  yaxis: {
    min: yMin,
    max: yMax,
  },
})

export const LineChart: React.FC<LineChartProps> = ({
  data,
  x,
  y,
  colors,
  strokeWidths = 3,
  dashTypes = 0,
  curved = false,
  markerSize = 4,
  title,
  subtitle,
  xLab,
  yLab,
  xMin,
  xMax,
  yMin,
  yMax,
  width = "100%",
  height = "600px",
  options = {},
}: LineChartProps) => {
  const series = makeSeries(data, x, y)

  const baseOptions = makeBaseOptions(
    strokeWidths,
    dashTypes,
    curved,
    markerSizes,
    xMin,
    xMax,
    yMin,
    yMax
  )

  const additionalOptions = merge(baseOptions, options)

  return (
    <>
      <ChartWrapper
        series={series}
        type="line"
        colors={colors}
        title={title}
        subtitle={subtitle}
        xLab={xLab}
        yLab={yLab}
        width={width}
        height={height}
        options={additionalOptions}
      />
    </>
  )
}
