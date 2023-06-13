import { Controller, FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form'
import SelectItem, { SelectItemOption } from './SelectItem'

export default <V extends FieldValues>(props: {
  form: UseFormReturn<V>
  name: Path<V>

  onChange?: () => void

  options: SelectItemOption[]
  emptyLabel?: string

  id?: string
  className?: string

  required?: boolean
  validate?: (value: number) => string | undefined
  isStringVal?: boolean
}) => {
  const { id, className } = props
  const { onChange } = props
  const { form, name } = props
  const { options, emptyLabel } = props
  const { required, isStringVal, validate } = props
  return (
    <Controller
      control={form.control}
      name={name}
      rules={{
        required: required
          ? {
              value: true,
              message: 'Please choose'
            }
          : undefined,
        validate
      }}
      render={({ field: { ref, value, onBlur }, fieldState }) => (
        <>
          <SelectItem
            id={id}
            className={`p-2.5 h-11 rounded-lg uppercase font-semibold border-r-8 border-transparent w-full lg:w-max ${className}`}
            options={options}
            empty={emptyLabel}
            ref={ref}
            value={value}
            isStringVal={isStringVal}
            onBlur={onBlur}
            onChange={(e) => {
              let val: string | number = e.target.value
              if (!isStringVal) {
                val = e.target.value ? Number(e.target.value) : 0
              }
              form.setValue(name, val as PathValue<V, Path<V>>)
              onChange?.()
            }}
          />
          {fieldState?.error?.message && <p className='c-form-error-text'>{fieldState?.error?.message}</p>}
        </>
      )}
    />
  )
}
