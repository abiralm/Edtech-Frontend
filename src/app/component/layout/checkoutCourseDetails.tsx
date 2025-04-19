
const CheckoutCourseDetails = () => {
  return (
    <>
      {/* <div className="border-2 flex gap-6 items-center p-4 rounded-2xl">
          <img src="design_1.jpg" className="w-1/10 aspect-square rounded-2xl"></img>
          <div>
              <h1 className="text-xl font-semibold">Advanced Web Development Masterclass</h1>
              <h4>Jhon Smith</h4>
          </div>
      </div> */}

      <div className="border-2 flex gap-4 sm:gap-6 items-center p-4 rounded-2xl">
        <img 
          src="design_1.jpg" 
          className="w-16 sm:w-20 md:w-24 aspect-square object-cover rounded-2xl" 
          alt="Course" 
        />
        <div className="min-w-0">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold leading-snug sm:leading-normal">
            Advanced Web Development Masterclass
          </h1>
          <h4 className="text-sm text-gray-600">Jhon Smith</h4>
        </div>
      </div>

    </>
    
  )
}

export default CheckoutCourseDetails