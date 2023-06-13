import { ValidationRule } from 'react-hook-form'

/**
 * This TypeScript function returns an array of strings representing years from 1900 to the current
 * year.
 * @returns The function `getYears` returns an array of strings representing the years from 1900 to the
 * current year. The array is generated using the `Array.from()` method and the `map()` method to
 * create an array of strings representing the years.
 */
export const getYears = (): string[] => {
  const startYear = 2013
  const now = new Date()
  const currentYear = now.getFullYear()
  const yearLen = currentYear - startYear + 1
  return Array.from({ length: yearLen }).map((_, idx) => (currentYear - idx).toString())
}

/**
 * This TypeScript function returns a validation rule for a text input based on the provided props.
 * @param props - The `props` parameter is an object that contains optional properties for defining
 * validation rules for a text input field. These properties include:
 * @returns The function `textInputRules` returns an object with a `required` property that is either a
 * `ValidationRule` object or `undefined`. The `ValidationRule` object has a `value` property set to
 * `true` and a `message` property set to `'Please enter a value'`. The `required` property is
 * determined based on the `props` argument passed to the function. The
 */
export function textInputRules(props: {
  required?: boolean
  maxLength?: number
  minLength?: number
  pattern?: {
    label: string
    regax: RegExp
  }
}): {
  required: ValidationRule<boolean> | undefined
} {
  const required = props.required
    ? {
        value: true,
        message: 'Please enter a value'
      }
    : undefined
  return {
    required
  }
}

export const noImage = '/no-image.png'
