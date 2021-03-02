import React from 'react'
import './../index.css'
import ServiceBlock from './ServiceBlock'
function Services() {
    return (
        <section className="bg-grey-50 pt-20 pb-28 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center font-bold">
                        <h2 className="text-6xl text-grey-800 font-bold"> Services </h2>
                        <p className="pt-2">
                            Here's what I offer 
                        </p>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                   
                    <ServiceBlock icon='phone-portrait-outline' title={`Responsive Websites`}  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}/>
                    <ServiceBlock icon='layers-outline' title={`Web Apps `}  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`} />
                    <ServiceBlock icon='chatbubbles-outline' title={`Consultation`}  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`} />
                       
                    
                </div>
        </section>
    )
}

export default Services
