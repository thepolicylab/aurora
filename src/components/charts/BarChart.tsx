import React from "react"
import merge from "deepmerge"
import { ApexOptions } from "apexcharts"

import {
  ChartWrapper,
  RecordSet,
  RecordEntry,
  ChartProps,
} from "./ChartWrapper"

export interface BarChartProps extends ChartProps {
  /**
   * The order in which the x or y axis labels should be displayed.
   */
  xOrder?: string[]
  /**
   * WHether the bar chart should be horizontal.
   */
  horizontal?: boolean
  /**
   * Whether the bar chart should be stacked.
   */
  stacked?: boolean
  /**
   * The minimum value of the x (horizontal) or y axis.
   */
  min?: number
  /**
   * The maximum value of the x (horizontal) or y axis. Useful when data labels overflow.
   */
  max?: number
  /**
   * The width of the chart object. Defaults to 100% so it is responsive.
   */
  showLabels?: boolean
}

interface BarSeriesEntry {
  name: string
  data: (string | number)[]
}

export type BarSeries = BarSeriesEntry[]

const makeDataLabelOptions = (
  stacked: boolean,
  horizontal: boolean,
  min: number,
  max: number
) => {
  const labelOptions: ApexOptions = {}
  if (stacked) {
    labelOptions["dataLabels"] = {
      textAnchor: "middle",
      style: {
        colors: ["#FFF"],
      },
    }
  } else {
    if (horizontal) {
      labelOptions["dataLabels"] = {
        textAnchor: "start",
        offsetX: 20,
        style: {
          colors: ["#222"],
        },
      }
    } else {
      labelOptions["dataLabels"] = {
        offsetY: -20,
        style: {
          colors: ["#222"],
        },
      }
    }
  }

  if (horizontal) {
    labelOptions["xaxis"] = {
      min,
      max,
      axisTicks: {
        show: false,
      },
      tickAmount: 5,
    }
    labelOptions["yaxis"] = {
      labels: {
        show: true,
        align: "left"
      }
    }
  } else {
    labelOptions["yaxis"] = {
      min,
      max,
    }
  }
  return labelOptions
}

const sortFieldByArrayIndex = (
  arr: RecordSet,
  order: unknown[],
  field: string
): RecordSet => {
  const newArr = [...arr]
  newArr.sort(
    (a: RecordEntry, b: RecordEntry) =>
      order.indexOf(a[field]) - order.indexOf(b[field])
  )
  return newArr
}

const makeSeries = (data: RecordSet, y: string[]): BarSeries => {
  const series = y.map(label => ({
    name: label,
    data: data.map(entry => entry[label]),
  }))

  return series
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  x,
  y,
  colors,
  xOrder,
  horizontal = false,
  stacked = false,
  title,
  subtitle,
  options = {},
  min = 0,
  max = undefined,
  width = "100%",
  height = "600px",
  showLabels = false,
}: BarChartProps) => {
  const sortedData = xOrder ? sortFieldByArrayIndex([...data], xOrder, x) : data

  const series = makeSeries(sortedData, y)

  const labels = data.map(entry => entry[x])

  const baseOptions = {
    chart: {
      stacked,
      animations: {
        easing: "easeout",
        speed: 600,
        animateGradually: {
          delay: 200,
        },
      },
    },
    labels,
    legend: {
      markers: {
        width: 28,
        height: 14,
      },
    },
    plotOptions: {
      bar: {
        horizontal,
        dataLabels: {
          enabled: showLabels,
          position: stacked ? "center" : "top",
        },
      },
    },
  }

  Object.assign(
    baseOptions,
    makeDataLabelOptions(stacked, horizontal, min, max)
  )

  const additionalOptions = merge(baseOptions, options)

  return (
    <>
      <ChartWrapper
        series={series}
        colors={colors}
        type="bar"
        title={title}
        subtitle={subtitle}
        width={width}
        height={height}
        options={additionalOptions}
      />
    </>
  )
}
