import RootLayout from '@/layout/RootLayout';


const Contact = () => {
  return (
    <div className='w-9/12 pt-10 mx-auto h-screen flex gap-2 mt-20'>
      <div className='w-full text-center'>
        <h1 className="text-4xl text-slate-50 text-start font-semibold">Say hello</h1><br/>
        <form className='grid gap-2'>
          <input type="text" className="border border-1 border-black p-2 text-slate-200 " placeholder='Enter name' name='name' required/>
          <input type="text" className="border border-1 border-black p-2 text-slate-200 " placeholder='Enter email' name='email' required/>
          <input type="textarea" className="border border-1 border-black p-2 text-slate-200 w-full h-24" placeholder='Enter message' name='message' />
          <input type="submit" className="border p-2"/>
        </form>

      
      </div>
      <div className='w-full '>
        <h1 className="text-4xl text-slate-50 text-end font-semibold">Contact me!</h1><br/>
        <h1 className="text-sm text-slate-50 pl-4 text-end font-semibold mt-2">Available for assignment reportage, news & portraiture; digital & analogue. </h1><br/>
        <h1 className="text-2xl text-slate-50 text-end font-mono">“This site is owned and operated by Shubhro Sinha”.</h1><br/><br/>

        <h1 className="text-sm text-slate-50 text-end font-mono mt-2">Contact number: +88 01921186080</h1>
        <h1 className="text-sm text-slate-50 text-end font-mono">Email: AKASHPHOTO@GMAIL.COM</h1>
        <h1 className="text-sm text-slate-50 text-end font-mono">Tanbazar, Narayanganj-1400, Bangladesh</h1>
        <h1 className="text-sm text-slate-50 text-end font-mono">Tanbazar, Narayanganj-1400, Bangladesh</h1>

      </div>

    </div>
  )
}

export default Contact;

Contact.getLayout = function getLayout(page){
  return(
    <RootLayout>
      {page}
    </RootLayout>
  )
}