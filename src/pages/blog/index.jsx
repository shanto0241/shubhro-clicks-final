import BlogLayout from '@/layout/BlogLayout';
import RootLayout from '@/layout/RootLayout';
import React from 'react'

const Blog = () => {
  return (
    <div className='mt-5 w-full bg-teal-100 rounded-md p-2'>Blog</div>
  )
}

export default Blog;


Blog.getLayout = function getLayout(page){
  return(
    <RootLayout>
      <BlogLayout>
        {page}
      </BlogLayout>
    </RootLayout>
  )
}