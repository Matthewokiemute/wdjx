import Image from 'next/image'
import React from 'react'

const DayTwoSpeakers = () => {
    const SpeakersData = [
        {
            imgSRC: "/images/Kenneth.png",
            name: "Kenneth ijama",
            company: "SalesUnit",
            profession: "Founder"
        },
        {
            imgSRC: "/images/Zitu.png",
            name: "Zitu .T. Blessing",
            company: "Zitu Clothing",
            profession: "CEO/Creative Director"
        },
        {
            imgSRC: "/images/Prov.png",
            name: "Confidence Iyomih",
            company: "TheBraveCreative",
            profession: "Architechural Designer"
        },
        {
            imgSRC: "/images/chidera.png",
            name: "Chidera Nwany...",
            company: "The Brand Elite Studio",
            profession: "Design Lead"
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
                <p className='font-bold text-ellipsis overflow-hidden ...'>{data.name}</p>
                <p className="text-sm font-light">{data.company} &#8226; {data.profession}</p>
            </div>
         </div>
        )}
    </div>
  )
}
export default DayTwoSpeakers