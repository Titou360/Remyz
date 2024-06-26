import Link from 'next/link';
import React from 'react'

const button = ({href, title}) => {
  return (
    <Link
      type="button"
      href={href}
      className="transition duration-300 ease-in-out focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-transparent hover:border-light xs:m-auto"
    >
      {title}
    </Link>
  );
}

export default button
