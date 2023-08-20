


import React from 'react'
import { Toaster } from 'react-hot-toast';

type Props = {
  children: React.ReactNode;
}

export default function ToasterProvider({children}: Props) {
  return (<>
  <Toaster   position="bottom-center"
  reverseOrder={false} />
  {children}
  </>

  )
}