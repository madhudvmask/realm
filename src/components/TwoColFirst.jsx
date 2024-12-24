import React from 'react'
import './TwoCol.scss'

export default function Twocolumn() {
  return (
    <section className='twocolumn'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 data-col'>
                    <h2>
                    ABOUT US
                    </h2>
                    <h3>
                    It is dedicated to offering high-quality <span>artistic services and education.</span>
                    </h3>
                    <p>
                    With painting as its core discipline, Art Realm also explores the realms of sculpture, installation, and new media art, ensuring a multidisciplinary approach to creativity. Guided by the vision to achieve the best art practices across various possibilities, Art Realm continuously strives to innovate and elevate the standards of artistic expression.
                    </p>
                    <strong>
                    Mahesh Pattar
                    </strong>
                    <p>
                    As the principal artist of Art Realm, Mahesh Pattar brings over a decade of extensive experience in both the academic and professional art worlds. A contemporary abstract painter and educator based in Bengaluru, Mahesh has a Master’s Degree in Visual Arts and has worked as a teacher, facilitator, and practitioner in diverse artistic settings. His dedication to exploring and pushing the boundaries of art shapes the creative ethos of Art Realm, making it a hub for innovation and artistic excellence.
                    </p>

                </div>
                <div className='col-md-6 img-col'>
                        <img  src="/images/Aboutus.png" />
                </div>
            </div>
        </div>
    </section>
  )
}
