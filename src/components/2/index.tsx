import {BiTransferAlt} from "react-icons/bi";
import {
  SiApachekafka,
  SiApollographql,
  SiDocker,
  SiExpress,
  SiGrafana,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import {VscJson} from "react-icons/vsc";
export const SecondSection = () => {
  return (
    <section id='s2' className='flex flex-col px-20 xl:px-80 py-60 bg-dark'>
      <h1 className='text-white mx-auto 2xl:mx-0 font-raj font-medium text-3xl mb-10'>
        <b className='text-4xl text-primary'>#</b> Front-end Technologies
      </h1>
      <div className='w-full flex justify-center 2xl:justify-start flex-wrap gap-10'>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiNextdotjs className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>NextJS</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiReact className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>ReactJS</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiTailwindcss className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            TailwindCSS
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiStyledcomponents className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            Styled Components
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <BiTransferAlt className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>URQL</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <BiTransferAlt className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            React Query
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiGraphql className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>GraphQL</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiApollographql className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>Apollo</h1>
        </div>
      </div>

      <h1 className='text-white mx-auto 2xl:mx-0 font-raj font-medium text-3xl mt-20 mb-10'>
        <b className='text-4xl text-primary'>#</b> Back-end Technologies
      </h1>
      <div className='w-full flex justify-center 2xl:justify-start flex-wrap gap-10'>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiExpress className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>Express</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiNestjs className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>NestJS</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiApachekafka className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            Apache KAFKA
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <VscJson className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>JWT</h1>
        </div>

        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiGraphql className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>GraphQL</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiApollographql className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            Apollo Federation
          </h1>
        </div>
      </div>

      <h1 className='text-white mx-auto 2xl:mx-0 font-raj font-medium text-3xl mt-20 mb-10'>
        <b className='text-4xl text-primary'>#</b> Scaling Technologies
      </h1>
      <div className='w-full flex justify-center 2xl:justify-start flex-wrap gap-10'>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiApachekafka className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            Apache KAFKA
          </h1>
        </div>

        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiApollographql className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            Apollo Federation
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiRabbitmq className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>RabbitMQ</h1>
        </div>
      </div>

      <h1 className='text-white mx-auto 2xl:mx-0 font-raj font-medium text-3xl mt-20 mb-10'>
        <b className='text-4xl text-primary'>#</b> Others Technologies
      </h1>
      <div className='w-full flex justify-center 2xl:justify-start flex-wrap gap-10'>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiDocker className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>Docker</h1>
        </div>

        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiKubernetes className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            Kubernetes
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiMongodb className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>MongoDB</h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiPostgresql className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>
            PostgreSQL
          </h1>
        </div>
        <div className='w-52 h-52 flex flex-col gap-4 justify-center items-center bg-green-500 hover:brightness-110 hover:-translate-y-4 transition-all duration-300 rounded-lg shadow-lg shadow-black cursor-pointer'>
          <SiGrafana className='text-7xl drop-shadow-xl text-dark' />
          <h1 className='text-white font-raj font-medium text-2xl'>Grafana</h1>
        </div>
      </div>
    </section>
  );
};
