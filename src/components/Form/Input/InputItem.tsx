import React from 'react'
import { ControllerFieldState } from 'react-hook-form'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  fieldState?: ControllerFieldState
  type?: React.HTMLInputTypeAttribute
}

export default React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { fieldState = null, type, className = 'c-form-parts__input--box', ...inputProps } = props
  return (
    <>
      <input
        ref={ref}
        type={type}
        {...inputProps}
        className={`${className} ${fieldState?.error ? 'border-2 border-red-600' : ''} ${type === 'search' && 'pl-10'}`}
      />
      {type === 'search' && (
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
      )}
    </>
  )
})
