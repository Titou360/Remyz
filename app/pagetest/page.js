import HamburgerMenu, {Links} from '../../components/Hamburger';

const Page = () => {
    return (
      <main>
        <div className="max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md ">
          <div className="flex md:hidden">
            <HamburgerMenu />
          </div>
          <div className="hidden md:flex">
            <Links />
          </div>
        </div>
      </main>
    );
}

export default Page
