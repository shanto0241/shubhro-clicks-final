import NavItems from "@/assets/NavItems";
import Link from "next/link";

//have to implement darkmode toggler here


const Navbar = () => {

  
  return (
    <div className=" w-full bg-slate-100 text-black uppercase py-2 shadow-xl">
      <div className="container mx-auto flex h-10 justify-between items-center ">
        <Link href="/" className="text-xl font-bold">
          porollei
        </Link>
        <div className="flex items-center gap-4 text-md font-semibold ">
          {NavItems.map((link) => (
            <Link key={link.id} href={link.url} className="shadow-md">
              {link.title}
            </Link>
          ))}
        </div>

        {/* try dropdown */}
        
      </div>
    </div>
  );
}

export default Navbar