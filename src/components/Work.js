import React from 'react'

function Work() {
    return (
        <section className="bg-white pt-20 pb-28 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center font-bold">
                        <h2 className="text-6xl text-grey-800 font-bold"> Work </h2>
                        <p className="pt-2">
                          Some of my best work
                        </p>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                    <div className="rounded-md shadow-md lg:col-span-2">
                            <img src="../images/work1.jfif" alt="" className="h-80 w-full object-cover"></img>
                            <div className="p-8">
                                <h4 className="font-bold text-2xl">
                                        Work Title
                                </h4>
                                <p className="pt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                </p>
                                <a href="#" className="inline-block mt-4 font-bold text-white text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-sm shadow-md">View More</a>
                            </div>
                    </div>

                    <div className="rounded-md shadow-md">
                            <img src="../images/work2.jpg" alt="" className="h-80 w-full object-cover"></img>
                            <div className="p-8">
                                <h4 className="font-bold text-2xl">
                                        Work Title
                                </h4>
                                <p className="pt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                </p>
                                <a href="#" className="inline-block mt-4 font-bold text-white text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-sm shadow-md">View More</a>
                            </div>
                    </div>

                    <div className="rounded-md shadow-md ">
                            <img src="../images/work3.jfif" alt="" className="h-80 w-full object-cover"></img>
                            <div className="p-8">
                                <h4 className="font-bold text-2xl">
                                        Work Title
                                </h4>
                                <p className="pt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                </p>
                                <a href="#" className="inline-block mt-4 font-bold text-white text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-sm shadow-md">View More</a>
                            </div>
                    </div>
                    <div className="rounded-md shadow-md lg:col-span-2">
                            <img src="../images/work4.jfif" alt="" className="h-80 w-full object-cover"></img>
                            <div className="p-8">
                                <h4 className="font-bold text-2xl">
                                        Work Title
                                </h4>
                                <p className="pt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                </p>
                                <a href="#" className="inline-block mt-4 font-bold text-white text-sm bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-sm shadow-md">View More</a>
                            </div>
                    </div>

                </div>
        </section>
    )
}

export default Work
