import React from "react"
import merge from "deepmerge"
import { css } from "@emotion/react"
import { ApexOptions } from "apexcharts"
import { globalOptions } from "../shared/ApexConfig"

import { BarSeries } from "./BarChart"
import { LineSeries } from "./LineChart"

// Fix for Gatsby
import loadable from "@loadable/component" // No TypeScript support. Sigh...
const Chart = loadable(() => import("react-apexcharts"))

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
  options?: ApexOptions
}

export interface ChartProps extends BasicProps {
  /**
   * An array of Record type objects or a string that's the relative path to the CSV file.
   * The csv file should be in wide format.
   */
  data: RecordSet
  /**
   * The field to use for x-axis (or y-axis in the case of horizontal bar charts).
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

  let chartOptions: ApexOptions = merge(globalOptions, commonOptions)
  chartOptions = merge(chartOptions, options)
  if (colors) Object.assign(chartOptions, { colors })

  return (
    <div
      css={css`
        .apexcharts-menu {
          font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
        }

        .apexcharts-menu-item {
          font-size: 14px !important;
        }
      `}
    >
      {typeof window !== "undefined" && (
        <Chart
          series={series}
          type={type}
          width={width}
          height={height}
          options={chartOptions}
        />
      )}
    </div>
  )
}
