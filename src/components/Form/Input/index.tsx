import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { textInputRules } from '../../../utils/helper'
import InputItem from './InputItem'

export default <V extends FieldValues>(props: {
  form: UseFormReturn<V>
  name: Path<V>

  id?: string
  className?: string
  placeholder?: string
  required?: boolean
  maxLength?: number
  minLength?: number
  type?: React.HTMLInputTypeAttribute
  pattern?: {
    label: string
    regax: RegExp
  }
  validate?: (value: string) => string | undefined

  testId?: string
}) => {
  const { id, className, placeholder, type } = props
  const { form, name } = props
  const { required, maxLength, minLength, pattern, validate } = props
  return (
    <Controller
      control={form.control}
      name={name}
      rules={{
        ...textInputRules({
          required,
          minLength,
          maxLength,
          pattern
        }),
        validate
      }}
      render={({ field, fieldState }) => (
        <div className='relative w-full lg:w-auto lg:grow'>
          <InputItem
            id={id}
            className={`p-2.5 h-11 rounded-lg outline-none w-full ${className}`}
            placeholder={placeholder}
            type={type}
            {...field}
            fieldState={fieldState}
            value={field.value ?? ''}
          />
        </div>
      )}
    />
  )
}
