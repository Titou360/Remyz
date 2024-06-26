import Link from "next/link";

const page = () => {
  return (
    <section id="sitemap" className="w-full pt-14 flex flex-col items-center bg-light dark:bg-darky">
      <div className=" w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Sitemap</h1>
      </div>

      <div className="w-5/6 h-auto mb-4 mx-auto bg-primary dark:bg-darkModePrimary rounded-t-lg border border-1 border-white">
        <div className="w-5/6 h-auto pb-4 mx-auto bg-white rounded-t-lg border border-1 border-white mt-12">
          <ul className="mx-8 my-8">
            <li>
              <Link href="/" className="">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/saintmagne" className="">
                Jardinier à Saint-Magne
              </Link>
            </li>
            <li>
              <Link href="/salles" className="">
                Jardinier à Salles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
