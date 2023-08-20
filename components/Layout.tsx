

import React from 'react'
import Navbar from './Navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth , db } from '@/firebase/firebase.config';

type Props = {
  children: React.ReactNode;
  // className: className
}

const Layout = ({ children }: Props) => {

  const [user,loading,error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initializing User...</p>
      </div>
    );
  }

  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar />
      {children}
    </div>

  )
}

export default Layout;