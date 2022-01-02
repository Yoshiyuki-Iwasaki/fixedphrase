import Head from "next/head";
import { useState } from "react";
import Link from 'next/link'

const Home = () => {

  return (
    <div className="container">
      <Link
        href={`./business_fixedphrase`}
        as={`./business_fixedphrase`}
        passHref
      >
        <a>ビジネス文章ジェネレーター</a>
      </Link>
      <Link href={`./htmltag_generator`} as={`./htmltag_generator`} passHref>
        <a>HTMLタグジェネレーター</a>
      </Link>
    </div>
  );
}

export default Home;
