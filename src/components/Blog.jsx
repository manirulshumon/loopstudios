import React from 'react'


const blogPosts = [
  { title: 'Curiosity', image: '../../images/desktop/image-curiosity.jpg' },
  { title: 'Deep Earth', image: '../../images/desktop/image-deep-earth.jpg' },
  { title: 'Fisheye', image: '../../images/desktop/image-fisheye.jpg' },
  { title: 'Earth Above', image: '../../images/desktop/image-from-above.jpg' },
  { title: 'Curiosity', image: '../../images/desktop/image-curiosity.jpg' },
  { title: 'Deep Earth', image: '../../images/desktop/image-deep-earth.jpg' },
  { title: 'Fisheye', image: '../../images/desktop/image-fisheye.jpg' },
  { title: 'Earth Above', image: '../../images/desktop/image-from-above.jpg' },
];

const Blog = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto px-6 py-10'>
      <div className="flex items-center justify-between mt-20">
        <h2 className="text-3xl font-josefin">OUR CREATION</h2>


        <button className="px-5 py-2 border-1 cursor-pointer">
          See All
        </button>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative w-70 h-100 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <h3 className="absolute bottom-4 left-4 text-white text-lg font-josefin">
              {post.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog