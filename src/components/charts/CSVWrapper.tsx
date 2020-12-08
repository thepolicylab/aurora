import React, { useState, useEffect } from "react"
import { LineChart, LineChartProps } from "./LineChart"
import { AreaChart, AreaChartProps } from "./AreaChart"
import { BarChart, BarChartProps } from "./BarChart"
import { csv as d3_csv } from "d3"

interface LineChartCSVProps extends Omit<LineChartProps, "data"> {
  /**
   * Specifies the path to the CSV file.
   */
  data: string
}

interface BarChartCSVProps extends Omit<BarChartProps, "data"> {
  /**
   * Specifies the path to the CSV file.
   */
  data: string
}

interface AreaChartCSVProps extends Omit<AreaChartProps, "data"> {
  /**
   * Specifies the path to the CSV file.
   */
  data: string
}

type CSVWrapperProps = LineChartCSVProps | BarChartCSVProps | AreaChartCSVProps

// A Wrapper for CSV-capable charts with currying
const CSVWrapper = (
  chart: typeof LineChart | typeof BarChart | typeof AreaChart
) => {
  return ({ data, ...otherProps }: CSVWrapperProps) => {
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
      const fetchCSVData = async (dataPath: string) => {
        const fetchedData = await d3_csv(dataPath)
        setChartData(fetchedData)
      }
      fetchCSVData(data)
    }, [])

    return (
      <>
        {chartData && chart({ data: chartData, ...otherProps })}
      </>
    )
  }
}

export const BarChartCSV = CSVWrapper(BarChart) as React.FC<BarChartCSVProps>
export const LineChartCSV = CSVWrapper(LineChart) as React.FC<LineChartCSVProps>
export const AreaChartCSV = CSVWrapper(AreaChart) as React.FC<AreaChartCSVProps>
