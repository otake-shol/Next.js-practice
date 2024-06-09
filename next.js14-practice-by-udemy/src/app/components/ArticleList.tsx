import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <a href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </a>
          <a
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの学習
          </a>
          <p className="text-sm pb-3 text-slate-900">本文の概要はここに</p>
          <a href="#" className=" text-slate-900 pb-6">
            本文の記載はここに
          </a>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <a href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </a>
          <a
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの学習
          </a>
          <p className="text-sm pb-3 text-slate-900">本文の概要はここに</p>
          <a href="#" className=" text-slate-900 pb-6">
            本文の記載はここに
          </a>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
