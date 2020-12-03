import React from "react"
import Chart from "react-apexcharts"
import merge from "deepmerge"
import { globalOptions } from "../shared/ApexConfig"

import { BarSeries } from "./BarChart"
import { LineSeries } from "./LineChart"

type Series = BarSeries | LineSeries

export type RecordEntry = Record<string, string | number>

export type RecordSet = RecordEntry[]

interface BasicProps {
  /**
   * An array of colors to use for each field specified in y.
   */
  colors?: string[]
  /**
   * The title of the chart
   */
  title?: string
  /**
   * The subtitle of the chart.
   */
  subtitle?: string
  /**
   * The label for the x-axis
   */
  xLab?: string
  /**
   * The label for the y-axis
   */
  yLab?: string
  width?: string
  /**
   * The height of the chart object. Defaults to 600px.
   */
  height?: string
  /**
   * Additional options to pass directly to ApexCharts for more fine tuned adjustments.
   * See [ApexCharts doecumentation](https://apexcharts.com/docs/options/) for more details.
   */
  options?: Record<string, unknown>
}

export interface ChartProps extends BasicProps {
  /**
   * An array of Record type objects or a string that's the relative path to the CSV file.
   * The csv file should be in wide format.
   */
  data: RecordSet
  /**
   * The field to use for x-axis (or y-axis in the case of horizontal barcharts).
   */
  x: string
  /**
   * An array of field names for the columns to visualize. The order of the names
   * should also specify the display order for the fields.
   */
  y: string[]
}

interface ChartWrapperProps extends BasicProps {
  /**
   * The series array to pass to the ApexCharts react component
   */
  series: Series
  /**
   * The type of the chart to pass to the ApexCharts react component
   */
  type: "line" | "area" | "bar"
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({
  series,
  type,
  options,
  colors,
  title,
  subtitle,
  xLab,
  yLab,
  width,
  height,
}) => {
  const commonOptions = {
    title: { text: title },
    subtitle: { text: subtitle },
    xaxis: {
      title: {
        text: xLab,
      },
    },
    yaxis: {
      title: {
        text: yLab,
      },
    },
  }

  let chartOptions: Record<string, unknown> = merge(
    globalOptions,
    commonOptions
  )
  chartOptions = merge(chartOptions, options)
  if (colors) Object.assign(chartOptions, { colors })

  return (
    <>
      <Chart
        series={series}
        type={type}
        width={width}
        height={height}
        options={chartOptions}
      />
    </>
  )
}
