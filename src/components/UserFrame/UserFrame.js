import React, { memo } from 'react'

const UserFrame = memo(({children}) => {
  return (
    <section className='bg-default h-[100vh] text-[grey] flex items-center justify-center py-5 flex-col'>

      {children}
    </section>
  )
})

export default UserFrame