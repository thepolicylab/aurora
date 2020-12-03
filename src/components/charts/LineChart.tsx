import React from "react"
import merge from "deepmerge"

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
   * Specify the size of markers for each line. 0 means no markers.
   */
  markerSizes?: number | number[]
  /**
   * The title of the chart
   */
  xMin?: number
  /**
   * The maximum value of the x (horizontal) or y axis. Useful when data labels overflow.
   */
  xMax?: number
  /**
   * The minimum value of the x (horizontal) or y axis.
   */
  yMin?: number
  /**
   * The maximum value of the x (horizontal) or y axis. Useful when data labels overflow.
   */
  yMax?: number
  /**
   * The width of the chart object. Defaults to 100% so it is responsive.
   */
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

export const makeDefaultOptions = (
  strokeWidths: number | number[],
  dashTypes: number | number[],
  curved: boolean,
  markerSizes: number | number[],
  xMin: number | undefined,
  xMax: number | undefined,
  yMin: number | undefined,
  yMax: number | undefined
): Record<string, unknown> => ({
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
    size: markerSizes,
    hover: {
      size:
        typeof markerSizes === "number"
          ? markerSizes + 1
          : markerSizes.map(size => size + 1),
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
  markerSizes = 4,
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

  const defaultOptions = makeDefaultOptions(
    strokeWidths,
    dashTypes,
    curved,
    markerSizes,
    xMin,
    xMax,
    yMin,
    yMax
  )

  const additionalOptions = merge(defaultOptions, options)

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
