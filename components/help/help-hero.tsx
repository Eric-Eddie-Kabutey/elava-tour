'use client';
import React from 'react'
import Typography from '../shared/typography'

// const contact_details = [
//   {
//     id: "1",
//     name: "John Doe",
//     role: "CEO & Founder",
//     image: "/assets/images/team/contact_2.jpg",
//     whatsAppUrl: "https://www.whatsapp.com/in/johndoe",
//     phoneCall: "+220 507 1723",
//     img: gambia_flag,
//   },
//   {
//     id: "2",
//     ghana_title: "Akwaaba",
//     southAfrica_title: "Welcome"
//   },
//   {
//     id: "3",
//     name: "Jane Smith",
//     role: "Chief Technology Officer",
//     image: "/assets/images/team/contact_1.jpg",
//     whatsAppUrl: "https://www.whatsapp.com/in/janesmith",
//     phoneCall: "+220 507 1723",
//     img: ghana_flag,
//   },
// ];

function HelpHero() {
  return (
    <div className='w-full py-20 pt-28 bg-gradient-to-br from-gray-50 to-gray-100'>
        <section className='max-container w-[85%] mx-auto flex flex-col gap-16'>
            <div className='flex flex-col text-center space-y-4'>
                <Typography
                    typo="header-2-semibold"
                    className='text-green-opaque'
                >
                    Need Help?
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-gray-600 max-w-2xl mx-auto'
                >
                    Get in touch with our leadership team for any inquiries or support
                </Typography>
            </div>
            
            {/* <div className="w-full py-16 px-24 flex flex-col gap-6 bg-white">
                <Typography
                    typo="header-4-semibold"
                    className='text-black'
                >Contact Details</Typography>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-">
                    {contact_details.map((member) => (
                        member.name ? (
                            <div key={member.id} className="w-full bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
                                <div className="relative h-80 w-full">
                                <Image
                                    src={member.image}
                                    alt={`Photo of ${member.name}`}
                                    fill
                                    className="object-cover object-top w-full"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-gray-200 font-medium">{member.role}</p>
                                </div>
                                </div>

                                <div className="p-6 bg-white w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="space-y-1">
                                    <p className="text-sm text-gray-500 font-medium">Contact via</p>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-8 h-fit'>
                                            <Image 
                                                src={member.img}
                                                alt={`Member flag ${member}`}
                                            />
                                        </div>
                                        <p className="text-gray-700 font-semibold">{member.phoneCall}</p>
                                    </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                    <a
                                        href={member.whatsAppUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Contact ${member.name} on WhatsApp`}
                                        className="flex items-center justify-center w-12 h-12 bg-green-50 hover:bg-green-100 rounded-full transition-colors duration-200 group"
                                    >
                                        <WhatsappLogo
                                        size={24}
                                        className="text-green-600 group-hover:text-green-700 transition-colors"
                                        />
                                    </a>

                                    <a
                                        href={`tel:${member.phoneCall}`}
                                        aria-label={`Call ${member.name}`}
                                        className="flex items-center justify-center w-12 h-12 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-200 group"
                                    >
                                        <PhoneCall
                                        size={20}
                                        className="text-blue-600 group-hover:text-blue-700 transition-colors"
                                        />
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ) : (
                            <div key={member.id}  className="max-w-[250px] w-full  mx-auto  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-700 ">
                                    <div className="w-full h-full flex justify-between items-center">
                                        <div className="flex-1 h-full flex items-center justify-center bg-red-500">
                                            <Typography
                                            typo="header-4-semibold"
                                            className="writing-vertical text-white"
                                            >
                                            Welcome
                                            </Typography>
                                        </div>

                                        <div className="w-fit h-full border-l-2 border-dashed border-gray-400"></div>

                                        <div className="flex-1 h-full flex justify-center items-center bg-gray-700 text-white">
                                            <Typography
                                            typo="header-4-semibold"
                                            className="writing-vertical text-white text-center"
                                            >
                                            Akwaaba
                                            </Typography>
                                        </div>
                                    </div>

                            
                            </div>
                        )
                    ))}
                </div>
            </div> */}
        </section>
    </div>
  )
}

export default HelpHero