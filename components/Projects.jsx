import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aslImg from '../public/assets/projects/ASL Project Image.jpg';
import bookitImg from '../public/assets/projects/BookiT Image.jpg'
import peruzImg from '../public/assets/projects/Peruz Revuz Image.png'
import ProjectItem from './ProjectItem';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <ProjectItem
            title='ASL'
            backgroundImg={aslImg}
            projectUrl='https://asl-front-git-dev-donkeykong718.vercel.app/'
            tech='Next.js, React, Django, Python, PostgreSQL'
          />
          <ProjectItem
            title='Book It'
            backgroundImg={bookitImg}
            projectUrl='https://booked-it.vercel.app/'
            tech='JavaScript, JSON API, Express, Mongoose'

          />
          <ProjectItem
            title='Peruz Revuz'
            backgroundImg={peruzImg}
            projectUrl='https://peruz-revuz.vercel.app/'
            tech='JavaScript, CSS, JSON API'

          />
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/#contact'>
              <div className='  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleDown
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;