import React from 'react'

function Experience() {
    return (
        <div className="relative container mx-auto px-6 bg-grey-100 flex flex-col space-y-8">
            <div className="absolute z-0 w-2 h-full bg-cyan-500  shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
            <div className="relative z-10">
                <img className="timeline-image" src="../images/company1.jpg"></img>
                <div className="timeline-container">
                    <div className="timeline-pointer" area-hidden="true" ></div>
                    <div className="timeline-text">
                    <span className="font-bold text-indigo-600 text-sm tracking-wide"> March-2015 To December-2015 </span>
                        <h1 className="text-2xl font-bold pt-1"> City Business Pages, Ahmedabad</h1>
                        <p className="pt-1">
                            I have 8 month of experience as a PHP Developer and Desinger, my designation here is Junior Web Developer and Designer I'm working on technolgies like core PHP, HTML/CSS/BOOSTRAP and designing tool photoshop. 
                       </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <img className="timeline-image" src="../images/company2.jfif"></img>
                <div className="timeline-container timeline-container-left">
                    <div className="timeline-pointer timeline-pointer-left" area-hidden="true" ></div>
                    <div className="timeline-text">
                    <span className="font-bold text-indigo-600 text-sm tracking-wide"> January-2016 To June-2017 </span>
                        <h1 className="text-2xl font-bold pt-1">Business Info India, Ahmedabad </h1>
                        <p className="pt-1">
                             I have 1.5 months of experience as a PHP Developer and Desinger, my designation here is Junior Web Developer and Designer I'm working on technolgies like core PHP, HTML/CSS/BOOSTRAP and designing tool photoshop. Here I'm working on product managements websites.
                       </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <img className="timeline-image" src="../images/company3.jpg"></img>
                <div className="timeline-container">
                    <div className="timeline-pointer" area-hidden="true" ></div>
                    <div className="timeline-text">
                        <span className="font-bold text-indigo-600 text-sm tracking-wide">June-2017 To Currently working here </span>
                        <h1 className="text-2xl font-bold pt-1"> Codoffer Pvt. Ltd, Gandhinagar </h1>
                        <p className="pt-1">
                            I have 3+ years of experience as a PHP Developer, My designation here is a senior develoepr. I'm working on technolgies like PHP Frameworks (Laravel, Codeignitor), OpenCart. I have developed E-commerce sites, Schools Managements, File Management Systems, CRM, Real Estate Websites, REST API's and lot more. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
 