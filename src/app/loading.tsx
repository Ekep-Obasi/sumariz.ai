import Loader from '@/components/loader'
import React from 'react'

const LoadingIcon = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Loader />
    </div>
  )
}

export default LoadingIcon
