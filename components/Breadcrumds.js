// src/app/Breadcrumbs.js

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Fonction utilitaire pour capitaliser la première lettre
const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const BreadcrumbsArray = pathname.split('/');
  BreadcrumbsArray.shift();

  return (
    <div className="flex flex-row items-center justify-center pb-10">
      <Link href="/">Accueil&nbsp;{'>'}&nbsp;</Link>
      <ul className="flex flex-row items-center justify-center ">
        {BreadcrumbsArray.map((item, index) => {
          const capitalizedItem = capitalize(item); // Capitaliser chaque segment
          const href = '/' + BreadcrumbsArray.slice(0, index + 1).join('/');
          return (
            <React.Fragment key={index}>
              <li>
                <Link href={href}>{capitalizedItem}&nbsp;</Link>
              </li>
              {index < BreadcrumbsArray.length - 1 && (
                <li>
                  <h4> {'>'}&nbsp; </h4>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
      <hr />
    </div>
  );
}
