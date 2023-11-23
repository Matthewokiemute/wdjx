import React from 'react'
// import SpeakersData from "./speakers"
import Image from 'next/image'


const DayOneSpeakers = () => {
    const SpeakersData = [
        {
            imgSRC: "/images/Tola.png",
            name: "Tola Alabi",
            company: "TA Consulting",
            profession: "Founder"
        },
        {
            imgSRC: "/images/fungi.png",
            name: "Fungi Dube",
            company: "Freelancer",
            profession: " Brand/Webflow Designer"
        },
        {
            imgSRC: "/images/Isaac.png",
            name: "Isaac Sixtus Zara",
            company: "FlipSide",
            profession: "Brand Designer"
        },
        {
            imgSRC: "/images/Victoria.png",
            name: "Chukwu .A. Victoria",
            company: "CAV Digital",
            profession: "Creative African Designer"
        },
        {
            imgSRC: "/images/Bolue.png",
            name: "Bolutife Akawan",
            company: "Traction",
            profession: "Head of Brand & Design"
        },
        {
            imgSRC: "/images/Eze.png",
            name: "Dr. Kachi Eze",
            company: "POE International",
            profession: "Co-Founder"
        },
        {
            imgSRC: "/images/Ajaja.png",
            name: "Ajala Victor",
            company: "AV Studio NG",
            profession: "Brand Designer"
        },
        {
            imgSRC: "/images/Zeenos.png",
            name: "Zino Eduru",
            company: "Zeenos Concept",
            profession: "Visual Designer"
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
