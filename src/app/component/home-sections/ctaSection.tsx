
export const CtaSection = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 gap-y-6 md:gap-y-10 bg-[#2563EB]">
        <div className="text-2xl text-center sm:text-4xl text-white font-bold ">Start your learning Journey Today</div>
        <div className="text-base sm:text-xl text-center font-light text-white">Join thousands of successful learners and transform your career</div>
        <div className="flex space-x-4 justify-start">
            <button className='border-0 rounded-4xl p-2.5 md:p-4 text-[#2563EB] bg-white'>Get Started Free</button>
            <button className='border-2 rounded-4xl p-2.5 md:p-4 bg-none text-white'>Talk to Sales</button>
        </div>
    </div>
  )
}
