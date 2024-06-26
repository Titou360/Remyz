const page = () => {
  return (
    <section id="sitemap" className="w-full pt-14 flex flex-col items-center bg-light dark:bg-darky">
      <div className=" w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl text-primary dark:text-darkModePrimary capitalize text-center my-4 font-Spring">Sitemap</h1>
      </div>

      <div className="w-5/6 h-screen mx-auto bg-primary dark:bg-darkModePrimary rounded-t-lg border border-1 border-white">
        <div className="w-5/6 h-screen mx-auto bg-white rounded-t-lg border border-1 border-white mt-12">
          <ul className="mx-8 my-8">
            <li>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
