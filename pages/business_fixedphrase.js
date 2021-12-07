import Head from "next/head";
import { useState } from "react";

const Business_fixedphrase = () => {
  const [data, setData] = useState({ yourName: "", myName: "", content: "" });
  const firstGreeding = `お世話になっております。`;
  const finalGreeding = `何卒よろしくお願いいたします。`;
  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <section className="topPageSection">
        <div className="topPageSection__left">
          <Head>
            <title>biz-text-gen</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>ビジネス文章ジェネレーター</h1>
          <p>相手の名前:</p>
          <input
            value={data.yourName}
            type="text"
            onChange={handleChange}
            name="yourName"
          />
          <p>自分の名前:</p>
          <input
            value={data.myName}
            type="text"
            onChange={handleChange}
            name="myName"
          />
          <p>メール内容:</p>
          <textarea
            value={data.content}
            type="text"
            onChange={handleChange}
            name="content"
          ></textarea>
        </div>
        <div className="topPageSection__right">
          <p className="topPageSection__right__text">{data.yourName}様</p>
          <p className="topPageSection__right__text">{firstGreeding}</p>
          <p className="topPageSection__right__text">
            {data.myName}と申します。
          </p>
          <p className="topPageSection__right__text">{data.content}</p>
          <p className="topPageSection__right__text">{finalGreeding}</p>
          <p className="topPageSection__right__text">{data.myName}</p>
        </div>
      </section>
    </div>
  );
}

export default Business_fixedphrase;
