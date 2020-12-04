import React from "react"
import { LineChart, LineChartProps } from "./LineChart"
import { AreaChart, AreaChartProps } from "./AreaChart"
import { BarChart, BarChartProps } from "./BarChart"
import { RecordSet, ChartProps } from "./ChartWrapper"

interface SparklineProps extends Omit<ChartProps, "y"> {
  /**
   * The field to use for y-axis. Limited to 1 for Sparklines.
   */
  y: string
  /**
   * The type of Sparkline.
   */
  type?: "bar" | "line" | "area"
  /**
   * The minimum value for the yaxis.
   */
  yMin?: number
  /**
   * The maximum value for the yaxis.
   */
  yMax?: number
  /**
   * The color of the sparkline.
   */
  color?: string
  /**
   * If `type` is `line` or `area`, specify if the chart is curved or not. Has no effect if `type` is `bar`.
   */
  curved?: boolean
}

const makeBaseProps = (
  data: RecordSet,
  x: string,
  y: string,
  color: string,
  width: string,
  height: string
): Record<string, unknown> => ({
  data,
  x,
  y: [y],
  color: color ? [color] : undefined,
  width,
  height,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
  },
})

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  x,
  y,
  yMin,
  yMax,
  color,
  type = "area",
  width = "100%",
  height = "200px",
  curved = true,
}: SparklineProps) => {
  const baseProps = makeBaseProps(data, x, y, color, width, height)

  return (
    <>
      {type === "bar" && (
        // using the spread operator to pass props to child components and achieve DRY
        <BarChart
          {...({
            ...{
              min: yMin,
              max: yMax,
              horizontal: false,
              stacked: false,
            },
            ...baseProps,
          } as BarChartProps)}
        />
      )}
      {type === "line" && (
        <LineChart
          {...({
            ...{
              yMin,
              yMax,
              curved,
              markerSize: 0,
            },
            ...baseProps,
          } as LineChartProps)}
        />
      )}
      {type === "area" && (
        <AreaChart
          {...({
            ...{
              yMin,
              yMax,
              curved,
              markerSize: 0,
              stacked: false,
            },
            ...baseProps,
          } as AreaChartProps)}
        />
      )}
    </>
  )
}
