import Link from 'next/link';
import React from 'react'

const Title = () => {
  return (
    <>
      <Link href="/">
        <span className="hidden lg:block text-xl xs:text-xl lg:text-4xl md:mt-70 s:backdrop-blur-md text-primary font-Spring dark:text-darkModePrimary">
          Remy&apos;z aux Verts
        </span>
      </Link>
    </>
  );
}

export default Title
