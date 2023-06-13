import { useForm } from 'react-hook-form'
import { IFormInputs } from './type'
import { createContext, useEffect, useState } from 'react'
import { YEAR_DEFAULT } from './const'
import drivers from '../data/drivers.json'
import races from '../data/races.json'

export const RacingContext = createContext({})

const RacingApp = ({ children }: any) => {
  const form = useForm<IFormInputs>()
  const [dataChart, setDataChart] = useState<[]>([])
  const [dataRace, setDataRace] = useState(races)
  const [year, setYear] = useState<any>(YEAR_DEFAULT)

  /**
   * This function filters a list of races by a given year and sets the data for the first race in that
   * year.
   * @param {any} year - The `year` parameter is a variable that represents the year for which the
   * current race data is to be fetched. It is used to filter the `races` array and retrieve the data
   * for the specified year.
   */
  const fetchRaceCurrent = (year: any) => {
    const dataList: any = races.filter((item: any) => item[year])
    setDataRace(dataList[0][year])
  }

  /**
   * The function filters an array of drivers based on a given year and sets the data chart to the
   * result.
   * @param {any} year - The "year" parameter is a variable of type "any" that is passed as an argument
   * to the "fillterYear" function. It is used to filter the "drivers" array based on the value of the
   * property with the same name as the "year" parameter in each object of the
   */
  const fillterYear = (year: any) => {
    const result: any = drivers.filter((item: any) => item[year])
    setDataChart(result[0][year])
  }

  /**
   * This function filters a list of races based on a given year and a search value.
   * @param {any} year - The year parameter is a variable that represents the year of the race data
   * that we want to filter. It is expected to be of any data type.
   * @param {any} value - The `value` parameter is a string that represents the search query to filter
   * the `races` data. It is converted to lowercase and trimmed before being used in the filtering
   * process.
   */
  const filterRace = (year: any, value: any) => {
    const lowerCaseValue = value.toLowerCase().trim()
    if (!lowerCaseValue) {
      setDataRace(dataRace)
    } else {
      const dataList: any = races.filter((item: any) => item[year])
      const filterData = dataList[0][year].filter((item: any) => {
        return Object.keys(item).some((key: any) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue)
        })
      })
      setDataRace(filterData)
    }
  }

  /**
   * The onSubmit function sets the year value, filters by year and race, and gets the search value
   * from a form.
   */
  const onSubmit = () => {
    const yearValue = form.getValues('year') || year
    setYear(yearValue)
    fillterYear(yearValue)
    filterRace(yearValue, form.getValues('search'))
  }

  useEffect(() => {
    fillterYear(form.getValues('year') || year)
  }, [])

  useEffect(() => {
    fetchRaceCurrent(form.getValues('year') || year)
  }, [])

  return (
    <RacingContext.Provider value={{ year, dataChart, dataRace, form, onSubmit }}>{children}</RacingContext.Provider>
  )
}

export default RacingApp
