import { PropsWithChildren } from 'react'
import { Button, buttonVariants } from './ui/button'
import Loader from './loader'
import { VariantProps } from 'class-variance-authority'

interface ButtonWithLoaderProps
  extends PropsWithChildren,
    React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  loading: boolean
  loaderStyles?: React.CSSProperties
}

export const ButtonWithLoader = ({ children, loading, loaderStyles, ...props }: ButtonWithLoaderProps) => {
  return (
    <Button {...props}>
      {children}
      <div className="ml-2">{loading && <Loader style={loaderStyles} />}</div>
    </Button>
  )
}
