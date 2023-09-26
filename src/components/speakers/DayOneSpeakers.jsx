import React from 'react'
// import SpeakersData from "./speakers"
import Image from 'next/image'


const DayOneSpeakers = () => {
    const SpeakersData = [
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Etuenu",
            company: "Brand Elite Studio",
            profession: "Brand Strategist"
        },
    ]
  return (
    <div className="grid gap-4 grid-cols-[repeat(2,_1fr)] md:grid-cols-[repeat(4,_1fr)] ">
        {SpeakersData.map((data, idx) => 
         <div key={idx} className="">
            <div className='overflow-hidden'>
            <Image src={data.imgSRC} width={250} height={250} alt={data.name} className="object-cover hover:-rotate-6 hover:scale-125 duration-500 ease-in-out"/>
            </div>
            <div className='py-2 px-1'>
                <p className='font-bold'>{data.name}</p>
                <p className="text-sm font-light">{data.profession} &#8226; {data.company}</p>
            </div>
         </div>
        )}
    </div>
  )
}

export default DayOneSpeakers