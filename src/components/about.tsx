import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div>
       <section className="section-container">
      <div className="content-wrapper">
        <div className="title-container">
          <h2 className="title">
           About Me
          </h2>
        </div>

        <div className="grid-container">
          <div className="image-container">
            <Image
              alt="Nature"
              src="/about.jpg"
              className="image"
              width={1000}
              height={1000}
            />
          </div>

          <div className="text-container">
            <article className="text-content">
              <p className="text-paragraph">
              Hello! I am a passionate learner transitioning from a medical background to the dynamic world of IT. After completing my intermediate in medical studies, I discovered my true passion for technology and decided to take a bold step into the field of Information Technology. I am currently enrolled in the prestigious Governor Initiative program, where I have successfully completed my first quarter. With the guidance and support of my mentor, Mehak Alamgir, I am now diving deeper into the second quarter, focusing on mastering Next.js.
              </p>

              <p className="text-paragraph">
              Through hard work and perseverance, I haveve overcome challenges and embraced the journey of continuous learning in web development. I am excited about the future and committed to making a meaningful impact in the IT industry.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
