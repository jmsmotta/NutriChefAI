import React, { ReactNode } from 'react';
import SideBar from './sideBar'; // Importando com a convenção PascalCase (opcional)
import  '../Styles/layout.css';

type Props = {children: ReactNode;};

export default function Layout({ children }: Props) {
  
  return (
    <div className='background'>
      <SideBar/>
      <div className='children'>{children}</div>
    </div>
  );
}
