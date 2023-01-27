import React from 'react';
import Image from 'next/image';

import logo from '../public/image/Logo.svg';
import name from '../public/image/Name.svg';
import slogan from '../public/image/Slogan.svg';
import landing from '../public/image/Landingpic.png';

const Hero = () => {
  return (
    <div className='bg-lblue h-max'>
      {/* Top */}
      <div className='h-max bg-blue'>
        <div className='flex flex-col pt-8 px-4 pb-10 w-screen'>
          {/* Logo and Name */}
          <div className='flex flex-row pb-12'>
            {/* logo */}
            <div className='pr-10'>
              <Image
                src={logo}
                alt="Logo"
              />
            </div>

            {/* Name */}
            <div className='pl-10 w-1/3'>
              <Image 
                src={name}
                alt="Name"
              />
            </div>
          </div>

          {/* Slogan */}
          <div className='pl-24 pb-10 w-2/5'>
            <Image 
              src={slogan}
              alt="Slogan"
            />
          </div>

          <div className='w-2/4'>
            <Image 
              src={landing}
              alt="Landing"
            />
          </div>
        </div>

        <div className='h-max bg-lblue w-2/5 absolute top-56 right-12'>
          <h1 className='text-center mt-11'>Need a Website?</h1>
          <h2 className='text-center mb-24'>Get in touch with us</h2>
          <form class="w-full px-28">
            <div class="flex flex-col items-center py-2">
              <input class="appearance-none bg-transparent border-b-2 border-darkpurple w-full text-darkpurple py-1 mb-9 leading-tight focus:outline-none" type="text" placeholder="First Name*" />
              <input class="appearance-none bg-transparent border-b-2 border-darkpurple w-full text-darkpurple py-1 mb-9 leading-tight focus:outline-none" type="text" placeholder="Last Name*" />
              <input class="appearance-none bg-transparent border-b-2 border-darkpurple w-full text-darkpurple py-1 mb-9 leading-tight focus:outline-none" type="text" placeholder="E-mail*" />
              <input class="appearance-none bg-transparent border-b-2 border-darkpurple w-full text-darkpurple py-1 mb-9 leading-tight focus:outline-none" type="text" placeholder="Phonenumber*" />
              <input class="appearance-none bg-transparent border-b-2 border-darkpurple w-full text-darkpurple py-1 leading-tight focus:outline-none" type="text" placeholder="Type of Business*" />
              <button class="flex-shrink-0 bg-greenblue hover:bg-teal-700 text-sm border-0 text-darkpurple mt-36 py-1 px-2 rounded" type="button">
                Sign Up
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className='w-screen h-max'>
        This is the bottom hero section
      </div>
    </div>
  )
}

export default Hero