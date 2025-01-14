import React, { ReactNode } from 'react';
import SideBar from './sideBar'; // Importando com a convenção PascalCase (opcional)
import  '../Styles/background.css';

type Props = {children: ReactNode;};

export default function Layout({ children }: Props) {
  
  return (
    <div className='background'>
      
      <SideBar/>
      <div style={{ width:'100%',
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
        
      }}>{children}</div>
    </div>
  );
}
