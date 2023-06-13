import React from 'react'

export type SelectItemOption = {
  label: string
  value: string | number
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
  options: SelectItemOption[]
  empty?: string
  isStringVal?: boolean
}

export default React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { options, empty = null, className, isStringVal, ...selectProps } = props
  return (
    <select className={className} ref={ref} {...selectProps}>
      {empty && <option value={isStringVal ? '' : 0}>{empty}</option>}
      {options?.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
})
