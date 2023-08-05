import DashboardLayout from '@/layout/DashboardLayout';
import RootLayout from '@/layout/RootLayout';
import React from 'react'

const Dashboard = () => {
  return (
    <div className='mt-5 w-full bg-teal-100 rounded-md p-2'>Dashboard</div>
  )
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page){
  return(
    <RootLayout>
      <DashboardLayout>
        {page}
      </DashboardLayout>
    </RootLayout>
  )
}