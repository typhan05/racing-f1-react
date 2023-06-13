import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useContext } from 'react'
import { RacingContext } from '../../context'

export const Chart = () => {
  const { dataChart, year } = useContext<any>(RacingContext)
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: `${year} Driver Standings`
    },
    subtitle: {
      text: 'Source: www.formula1.com'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'PTS'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: `Drivers in ${year}: <b>{point.y:.1f}</b>`
    },
    series: [
      {
        name: 'Drivers',
        colors: [
          '#9b20d9',
          '#9215ac',
          '#861ec9',
          '#7a17e6',
          '#7010f9',
          '#691af3',
          '#6225ed',
          '#5b30e7',
          '#533be1',
          '#4c46db',
          '#4551d5',
          '#3e5ccf',
          '#3667c9',
          '#2f72c3',
          '#277dbd',
          '#1f88b7',
          '#1693b1',
          '#0a9eaa',
          '#03c69b',
          '#00f194'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: dataChart,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
