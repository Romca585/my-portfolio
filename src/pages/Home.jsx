import React from 'react';
import CgolWidget from '../components/CgolWidget';

function Home() {
  return (
    
    <div className="relative">
      <div className="relative w-full h-[300px]">
        <CgolWidget />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            <span className="text-white-200">Hello I'm</span>{' '}
            <span className="text-green-200">Roman</span>
          </h1>
        </div>
        <div className="absolute inset-0 flex items-end justify-center z-10">
            <p className="text-sm font-bold text-green-300 opacity-5 text-center drop-shadow-lg">This is not a video or gif by the way :-)</p>
        </div>
      </div>

      <div className="bg-[#171717] p-10">
         <div className= "flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-start gap-2">
                
                <p className="text-[15px] max-w-[40vw] text-green-200">
                  <span className="text-3xl font-bold text-green-400">About Me </span>
                    <br /><br />
                    Hello, I'm a Software Developer from Ontario, Canada with
                    a recent bachelor's degree in Computer Science from the University of Guelph.
                    <br /><br />
                    I have hands-on experience in web development, reverse engineering, and research/development.
                    
                    I have developed full-stack web applications using modern frameworks and technologies,
                    focusing on functionality, performance, and user experience.
                    I've also contributed to research projects involving high-performance computing and parallelization,
                    applying problem-solving skills to optimize complex systems and processes.
                    <br /><br />
                    I’m passionate about solving complex problems and learning new technologies quickly. Skills I have proven through both academic research and real world development work.
                    Whether it’s rewriting libraries for better performance or designing UI components, I love diving deep and delivering results.
                </p>
                <div className="flex flex-row items-start gap-6 bg-green-300 bg-opacity-30 p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center">
                        <img
                        src="/my_image.png"
                        alt="Me in Japan"
                        className="max-w-[20vw] max-h-[40vw] object-cover rounded-md"
                        />
                    </div>

                    <div className="text-m max-w-3xl text-green-100">
                        <span className="text-3xl font-bold text-green-300 mb-4">Personal Information</span>
                         <br /><br />
                        <div className="grid grid-cols-2 gap-y-2 text-sm text-green-100">
                            <div className="font-medium border-b border-green-600 py-2">Name :</div>
                            <div className="border-b border-green-600 py-2">Roman Savelyev</div>

                            <div className="font-medium border-b border-green-600 py-2">Age :</div>
                            <div className="border-b border-green-600 py-2">24 Years</div>

                            <div className="font-medium border-b border-green-600 py-2">Phone :</div>
                            <div className="border-b border-green-600 py-2">+1 226-868-0756</div>

                            <div className="font-medium border-b border-green-600 py-2">Email :</div>
                            <div className="border-b border-green-600 py-2">roman.r.savelyev@gmail.com</div>

                            <div className="font-medium border-b border-green-600 py-2">Origin :</div>
                            <div className="border-b border-green-600 py-2">Ontario, Canada</div>
                        </div>

                        <div className="flex justify-center gap-10 mt-6 text-green-300 text-3xl">
                            <a href="https://linkedin.com/in/roman-savelyev" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in cursor-pointer hover:text-green-100 transition "></i>
                            </a>
                            <a href="https://github.com/romca585" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github cursor-pointer hover:text-green-100 transition"></i>
                            </a>
                            <a
                              href="/Resume_Roman_Savelyev.pdf"
                              download
                              className=" text-xl inline-block px-6 text-black bg-green-300 rounded-lg hover:bg-green-100 transition"
                            >
                              Download Resume
                            </a>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>

  );
}

export default Home;