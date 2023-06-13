import { FormEventHandler, memo, ReactNode } from 'react'

type Props = {
  action?: string
  method?: string
  name?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
  className?: string
  children?: ReactNode
}

export default memo<Props>(({ action, method, onSubmit, name, className, children }) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit} name={name} className={className}>
      {children}
    </form>
  )
})
