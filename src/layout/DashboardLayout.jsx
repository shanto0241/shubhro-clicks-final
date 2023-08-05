import DashNav from "@/components/DashNav"

const DashboardLayout = ({children}) => {
  return (
    <div className="container mx-auto flex">
        <div>
            <DashNav/>
        </div>
        <div className='w-full  mt-5'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout