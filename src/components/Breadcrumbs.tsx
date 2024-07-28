// import { Breadcrumb } from 'antd';
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
//
// export default function Breadcrumbs() {
//   const location = useLocation();
//   const breadCrumbView = () => {
//     const { pathname } = location;
//     const pathnames = pathname.split('/').filter((item) => item);
//     const capatilize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
//     return (
//       <div>
//         <Breadcrumb>
//           {pathnames.length == 0 ? <Breadcrumb.Item>Home</Breadcrumb.Item> : <div></div>}
//           {pathnames.map((name, index) => {
//             const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//             const isLast = index === pathnames.length - 1;
//             return isLast ? (
//               <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
//             ) : (
//               <Breadcrumb.Item>
//                 <Link to={`${routeTo}`}>{capatilize(name)}</Link>
//               </Breadcrumb.Item>
//             );
//           })}
//         </Breadcrumb>
//       </div>
//     );
//   };
//
//   return <>{breadCrumbView()}</>;
// }



import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type BreadcrumbItem = {
  title: string;
  href?: string;
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split('/').filter((item) => item);

    const formatTitle = (s: string) => {
      return s
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    let breadcrumbItems: BreadcrumbItem[] = [];

    if (pathname === '/') {
      breadcrumbItems = [{ title: 'Home' }];
    } else {
      breadcrumbItems = pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast
          ? { title: formatTitle(name) }
          : { title: formatTitle(name), href: routeTo };
      });
    }

    return (
      <div>
        <Breadcrumb separator=">">
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index}>
              {item.href ? (
                <Link to={item.href}>{item.title}</Link>
              ) : (
                item.title
              )}
            </Breadcrumb.Item>
          ))}
          <Breadcrumb.Item />
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
}

export default Breadcrumbs;
