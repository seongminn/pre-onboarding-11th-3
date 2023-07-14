import { PropsWithChildren } from 'react';

import Header from '../Header';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
