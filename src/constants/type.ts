import { getYears } from '../utils/helper'

export const YearOptions = getYears().map((value: string) => ({
  value,
  label: value
}))
