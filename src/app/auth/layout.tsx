import NavAuth from '@/components/partials/NavAuth'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavAuth/>
      {children}
    </div>
  )
}

export default layout
