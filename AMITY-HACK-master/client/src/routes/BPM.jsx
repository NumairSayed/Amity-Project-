import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cta from  '../components/Cta'

function BPM() {

  return (
    <div>
        <Navbar />

        <div class="mx-32 my-24">
            <div class="my-10 py-10 px-5 bg-white/30 rounded-xl">
                <Cta/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BPM