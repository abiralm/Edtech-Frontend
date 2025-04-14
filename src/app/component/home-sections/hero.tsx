
export const Hero = () => {
  return (
        <div className=" p-4 md:p-8 lg:p-14 lg:flex lg:flex-row justify-around items-center bg-[#EEF5FF]">
          <div className="flex flex-col m-6 lg:m-8 gap-y-6 lg:gap-y-10">
            <div className="text-3xl sm:text-5xl font-bold ">Transform Your Learning Journey with AI-Powered Education</div>
            <div className="text-[#4B5563]">Unlock your potential with personalized learning experiences, interactive courses, and expert mentorship.</div>
            <div className="flex space-x-4 justify-start">
                <button className='border-0 rounded-4xl py-3 px-4 bg-[#2563EB] text-white'>Start Learning</button>
                <button className='border-2 rounded-4xl py-3 px-4 bg-none text-[#2563EB]'>Watch Demo</button>
            </div>
        </div>


        <div className="px-4 md:px-0">
            <img className="w-4.5/5 rounded-xl" src="/design_1.jpg"/>
        </div>
    </div>
  )
}
