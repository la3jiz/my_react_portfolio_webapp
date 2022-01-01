import React from 'react';


class App extends React.Component{

render(){
  return(
    <>
    
    <div className='absolute w-full min-h-screen'>
      <div className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-button bg-[url('https://cdn.arabhardware.net/wp-content/uploads/2020/11/GfinEMFXnT42BFxAcDc2rA.jpg')]">
    
      </div>
      <div className='absolute z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide -text-gray-600'>
      <a href='services' className='text-gray-600 ease-in duration-200 hover:text-cyan-600'>services</a>
      <a href='work' className='text-gray-600 ease-in duration-200 hover:text-cyan-600'>work</a>
      <a href='contact' className='text-gray-600 ease-in duration-200 hover:text-cyan-600'>contact</a>
      </div>
    </div>



    <div className='relative z-10 flex min-h-screen h-auto justify-center items-center'>
      <div className='relative max-w-4xl'>
        <div id='bgprofile' className="absolute z-10 inset-0 p-12 w-full max-w-4xl shadow-lg transform -skew-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg rounded-lg">
        </div>
      <div id="profile" className='relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl '>
        <div className='sm:flex flex-col justify-between space-y-6 py-6 md:pr-10'>
          <div className=''>
            <h2 className='text-lg'>Hello I Am</h2>
            <h1 className='pt-1 text-4xl font-bold text-gray-800 mb-8'>Mohamed Amine Laziz</h1>
            <p className='text-xl leading-relaxed'>A very talented developper.</p>
          </div>
       
        </div> 
        <img id="urpic" src='./me.jpg' className='w-60 rounded-full flex-shrink-0 border-6 border-white shadow-md'></img>
      </div>
      
            </div>

    </div>



    <section id='services' className='pt-20 px-12'>
      <div className='max-w-4xl mx-auto'>
        <div className="text-center">
          <h1 className='text-6xl text-gray-800'>Services</h1>
          <p className='pt-2 text-xl mb-16'>Heres What I Offer</p>
        </div>
        <div className="grid gap-20 md:grid-cols-3 sm:grid-cols-2 ease-in duration-200">
          <div id="service1" className='relative cursor-pointer ease-in duration-200'>
            <div id="bgserv1" className='absolute z-10 inset-0 bg-gradient-to-r from-indigo-300 to-pink-300 rounded-lg shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg transition ease-in duration-200'>
            </div>
            <div className='relative z-20 bg-white h-full rounded-md shadow-md'>
              <img src=' https://www.rouge-media.com/wp-content/uploads/2019/05/web-app-illustration-1.png' className='rounded-t-md'></img>
              <div className='px-10 py-6'>
                <h2 className='font-bold text-2xl text-gray-800'>
                  responsive websites
                </h2>
                <p className='pt-3'>
                  Build a responsive websites for resolution of all devices.
                </p>
              </div>
            </div>
          </div>
          <div id="service2" className='relative cursor-pointer'>
            <div id="bgserv2" className='absolute z-10 inset-0 bg-gradient-to-r from-yellow-200 to-sky-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg rounded-lg cursor-pointer'>
            </div>
            <div className='relative z-20 bg-white h-full rounded-md shadow-md'>
              <img src='https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png' className='bg-blue-200 py-3 rounded-t-md'></img>
              <div className='px-10 py-6'>
                <h2 className='font-bold text-2xl text-gray-800'>
                  Web application
                </h2>
                <p className='pt-3'>
                  Build and design a professional web applications.
                </p>
              </div>
            </div>
          </div>
          <div id="service3" className='relative cursor-pointer'>
            <div id="bgserv3" className='absolute z-10 inset-0 bg-gradient-to-r from-gray-300 to-pink-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg rounded-lg'>
            </div>
            <div className='relative z-20 bg-white h-full rounded-md shadow-md'>
              <div className='flex'><img id="uiux" src='uiux.jpg' className='w-full h-40 h-auto rounded-t-md'></img></div>
              <div className='px-10 py-6'>
                <h2 className='relative font-bold text-2xl text-gray-800'>
                UI/UX<br/> Design
                </h2>
                <p className='pt-3'>
                  Design a user friendly interfaces for best user experinece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tech" className="pt-40 px-5">
    
        <div className="text-center">
          <h1 className='text-6xl text-gray-800 pb-24'>Tech I Use</h1>
        </div>
     <div className="grid">
      <div id='tech' className="justify-self-center w-max grid gap-20 md:grid-cols-3 sm:grid-rows-1">
     <div className='w-40 h-48 cursor-pointer shadow-lg ease-in duration-200 hover:shadow-2xl rounded-xl'>
      <div className='justify-self-center ml-10 mt-8 mt w-20 h-16 flex justify-center items-center'> 
      <img src="logo192.png" className='relative inset-0 rounded-full'/></div>
      <h2 className='font-bold text-center mt-6 text-2xl text-gray-800'>
                  React
                </h2>
     </div>
     <div className='w-40 h-48 cursor-pointer shadow-lg ease-in duration-200 hover:shadow-2xl rounded-xl'>
      <div className='justify-self-center ml-10 mt-8 mt w-20 h-16 flex justify-center items-center'> 
      <img src="tailwindcss.jpg" className='relative inset-0 rounded-full'/></div>
      <h2 className='font-bold text-center mt-6 text-2xl text-gray-800'>
                 TailwindCss
                </h2>
     </div>      
     <div className='w-40 h-48 cursor-pointer shadow-lg ease-in duration-200 hover:shadow-2xl rounded-xl'>
      <div className='justify-self-center ml-10 mt-8 mt w-20 h-16 flex justify-center items-center'> 
      <img src="js.jpg" className='relative inset-0'/></div>
      <h2 className='font-bold text-center mt-6 text-2xl text-gray-800'>
                  JavaScript
                </h2>
     </div>
     <div className='w-40 h-48 cursor-pointer shadow-lg ease-in duration-200 hover:shadow-2xl rounded-xl'>
      <div className='justify-self-center ml-10 mt-8 mt w-20 h-16 flex justify-center items-center'> 
      <img src="github.png" className='relative inset-0 rounded-full'/></div>
      <h2 className='font-bold text-center mt-6 text-2xl text-gray-800'>
                  GitHub
                </h2>
     </div>
     <div className='w-40 h-48 cursor-pointer shadow-lg ease-in duration-200 hover:shadow-2xl rounded-xl'>
      <div className='justify-self-center ml-10 mt-8 mt w-20 h-16 flex justify-center items-center'> 
      <img src="nodejs.png" className='relative inset-0'/></div>
      <h2 className='font-bold text-center mt-6 text-2xl text-gray-800'>
                  NodeJS
                </h2>
     </div>
     <div className='w-40 h-48 cursor-pointer shadow-lg ease-in duration-200 hover:shadow-2xl rounded-xl'>
      <div className='justify-self-center ml-10 mt-8 mt w-20 h-16 flex justify-center items-center'> 
      <img src="firebase.jpg" className='relative inset-0'/></div>
      <h2 className='font-bold text-center mt-6 text-2xl text-gray-800'>
                  Firebase
                </h2>
     </div>
     </div>
     </div>
    </section>

    <section id="contact" className='pt-20 mt-24 pb-36 px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <h1 className="text-6xl font-bold text-gray-700">Contact</h1>
          <p className='pt-2 text-xl'>Get In Touch With Me.</p>
        </div>
      </div>
      <div className='mt-16 relative max-w-4xl mx-auto'>
        <div id="bgprofile" className='absolute z-10 inset-0 shadow-lg transform -skew-6 sm:skew-0 sm:-rotate-6 rounded-lg'></div>
        <div className='relative z-20 bg-white rounded-md shadow-md p-12'>
          <form action=''>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6'>
              <input type="text" placeholder='Name' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" />
              <input type="email" placeholder='E-mail' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" />
              <input type="text" placeholder='Subject' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" />
              <textarea cols="30" rows="5" placeholder='Message' className='border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600'></textarea>
            </div>
          <button id='send_mes' className='inline-block w-auto mt-6 px-6 py-2 rounded-md shadow-md text-white font-bold'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
}
//in index.html <<body>> 
//<body class="antialised relative text-gray-600">

export default App;