import Link from "next/link"

const DashNav = () => {
  return (
    <div className="p-2 flex flex-col gap-4 bg-slate-100 text-base-100 text-center rounded-md shadow-xl mt-5 mr-10">
        <Link href='' className="px-2 w-full border border-base-100 rounded-md">Glimpse</Link>
        <Link href='' className="px-2 w-full border border-base-100 rounded-md">Photos</Link>
        <Link href='/dashboard/storyupload' className="px-2 w-full border border-base-100 rounded-md">Stories</Link>
        <Link href='/dashboard/blogupload' className="px-2 w-full border border-base-100 rounded-md">Blog</Link>
    </div>
  )
}

export default DashNav