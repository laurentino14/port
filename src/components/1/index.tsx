import Image from "next/image";
import {BsArrowDownCircle} from "react-icons/bs";
import {
  FaGithubSquare,
  FaGraduationCap,
  FaInstagramSquare,
} from "react-icons/fa";
import {GiBrazil, GiSandsOfTime} from "react-icons/gi";
import {SiApachekafka, SiLinkedin} from "react-icons/si";
export const FirstSection = () => {
  return (
    <section className='w-full h-auto bg-primary flex flex-col xl:flex-row justify-center gap-40 xl:gap-96 items-center py-44'>
      <div>
        <h1 className='font-raj font-bold text-6xl xl:text-8xl -ml-1'>
          LAURENTINO
        </h1>
        <h2 className='font-raj font-medium text-4xl'>Full Cycle Developer</h2>
        <p className='w-96 text-justify font-roboto'>
          <strong className='font-raj font-bold text-xl text-'>
            Full Cycle
          </strong>{" "}
          corresponds to developers who have skills and understand tools to
          architect, develop, test, deploy and eventually monitor the
          application.
        </p>
        {/* <div className='bg-dark h-40 flex items-center justify-around mb-20 mt-20 drop-shadow-2xl rounded-md'>
          <div className='bg-green-500 rounded-lg flex flex-col items-center justify-center w-40 h-40 -translate-y-12 shadow-xl shadow-dark hover:-translate-y-16 delay-200 transition-transform'>
            <SiSpeedtest className='text-dark text-6xl' />
            <h1 className='text-dark font-roboto font-bold uppercase'>
              Agility
            </h1>
          </div>

          <div className='bg-green-500 rounded-lg flex flex-col items-center justify-center w-40 h-40 -translate-y-12 shadow-xl hover:-translate-y-16 shadow-dark delay-200 transition-transform'>
            <FaHandsHelping className='text-dark text-6xl' />
            <h1 className='text-dark font-roboto font-bold uppercase'>
              Responsability
            </h1>
          </div>
        </div> */}

        <a href='#s2'>
          <BsArrowDownCircle className='text-6xl hidden xl:block animate-bounce ml-2 xl:mt-28' />
        </a>
      </div>
      <div className='w-96 h-auto bg-dark py-4 rounded-xl drop-shadow-2xl shadow-black shadow-2xl'>
        <div className='w-40 rounded-full py-1 flex items-center mx-auto px-1 my-4 border-4 border-green-500'>
          <Image
            src='/83848032.jpg'
            className='rounded-full '
            width={150}
            height={150}
          />
        </div>
        <div className=' text-green-500 font-raj font-medium pb-4 text-lg brightness-125 text-center uppercase '>
          <h1>
            Lucas <strong>LAURENTINO</strong> Cazemiro
          </h1>
          <p className='text-sm'>21 Years Old</p>
        </div>
        <div className='bg-dark text-white font-raj font-medium py-4 pl-6 text-lg hover:brightness-125  flex gap-3 items-center hover:text-green-500 transition-all duration-300 cursor-pointer'>
          <GiBrazil className='text-3xl transition-colors duration-300' />
          <h1 className='text-white'>Niterói, Rio de Janeiro - Brazil</h1>
        </div>
        <div className='bg-dark text-white font-raj font-medium py-4 pl-6 text-lg hover:brightness-125  flex gap-3 items-center hover:text-green-500 transition-all duration-300 cursor-pointer'>
          <GiSandsOfTime className='text-3xl transition-colors duration-300' />
          <h1 className='text-white'>5 Years Coding</h1>
        </div>
        <div className='bg-dark text-white font-raj font-medium py-4 pl-6 text-lg hover:brightness-125  flex gap-3 items-center hover:text-green-500 transition-all duration-300 cursor-pointer'>
          <SiApachekafka className='text-3xl transition-colors duration-300' />
          <h1 className='text-white'>
            I love working with <b className='text-green-500'>Apache KAFKA</b>
          </h1>
        </div>
        <div className='bg-dark text-white font-raj font-medium py-4 px-6 text-lg hover:brightness-125 flex gap-3 items-center hover:text-green-500 transition-all duration-300 cursor-pointer'>
          <FaGraduationCap className='text-4xl ml-2 transition-colors duration-300' />
          <h1 className='text-white'>
            Pursuing higher education in systems analysis and development
          </h1>
        </div>
        <div className='bg-dark text-white font-raj font-medium py-4 px-6 text-lg hover:brightness-125 flex gap-3 items-center justify-around  transition-all duration-300 cursor-pointer'>
          <a
            href='https://www.linkedin.com/in/laurentinodev/'
            target='_blank'
            rel='noopener'>
            <SiLinkedin className='text-4xl ml-2 hover:text-green-500 transition-colors duration-300' />
          </a>
          <a
            href='https://www.instagram.com/laurentinobx/'
            target='_blank'
            rel='noopener'>
            <FaInstagramSquare className='text-[2.5rem] ml-2  hover:text-green-500 transition-colors duration-300' />
          </a>
          <a
            href='https://github.com/laurentino14'
            target='_blank'
            rel='noopener'>
            <FaGithubSquare className='text-[2.5rem] ml-2 hover:text-green-500 transition-colors duration-300' />
          </a>
        </div>
      </div>
    </section>
  );
};
