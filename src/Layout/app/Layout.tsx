import React from 'react';
import Header from './Header';
import Footer from '../Footer';
import { useFetchData } from '../../Hooks/useFetchData';

const Layout = (({ children, className = "" }: { children: React.ReactNode, className?: string }) => {

  const { data, isLoading } = useFetchData('api/home');
  
  return (
    <div className='Layout'>
      <Header data={data} isLoading={isLoading} />
      <main className={`${className} Layout_Body`}>
        {children}
      </main>
      <Footer data={data}  isLoading={isLoading}/>
    </div>
  );
});

export default Layout;
