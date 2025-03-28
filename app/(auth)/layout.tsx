import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const layout = async({children}:{children:ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  
  if(!isUserAuthenticated)redirect('/sign-in');
  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
}

export default layout
