import React from 'react'
import imgInteractive from '../../images/desktop/image-interactive.jpg'

const Hero2 = () => {
  return (

    <section className="w-full mt-10">
      <div className="relative w-full max-w-[1140px] mx-auto flex px-6">
        <div className="w-1/2">
          <img
            src={imgInteractive}
            alt="Hero"
            className="w-full object-cover"
          />
        </div>

        <div className="absolute right-100 top-45 bg-white p-6 w-80">
          <h2 className="text-3xl font-extralight font-josefin mb-2 pl-8 pt-8">THE LEADER IN INTERACTIVE VR</h2>
          <p className="text-[8px] font-alata text-gray-400 pl-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quibusdam ipsa blanditiis? Repellendus labore, nisi, asperiores animi perferendis, aspernatur quia est dolorum ipsam veritatis ipsum eligendi ex? Minus, est fugit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero2