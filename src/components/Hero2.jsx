import React from 'react'
import imgInteractive from '../../images/desktop/image-interactive.jpg'

const Hero2 = () => {
  return (

    <section className="w-50% mt-10">
      <div className="relative max-w-[1440px] mx-auto flex px-6">
        <div className="w-1/2">
          <img
            src={imgInteractive}
            alt="Hero"
            className="w-full object-cover"
          />
        </div>

        <div className="absolute right-120 top-70 bg-white p-6 shadow-md w-80">
          <h2 className="text-xl font-josefin mb-2">THE LEADER IN INTERACTIVE VR</h2>
          <p className="text-[15px] font-alata text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quibusdam ipsa blanditiis? Repellendus labore, nisi, asperiores animi perferendis, aspernatur quia est dolorum ipsam veritatis ipsum eligendi ex? Minus, est fugit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero2