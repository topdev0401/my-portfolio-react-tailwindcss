import React from 'react'

function Profile({data}) {
    if(data){
        var name = data.name;
        var occupation = data.occupation;
        var image = data.image;
       
        var socialNetworks = data.social.map(function(socialNetwork){
            return  (
                <a href={socialNetwork.url} key={socialNetwork.name}>
                    <ion-icon  name={socialNetwork.className}></ion-icon>
                </a>
            );
        });
    }
    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="relative ">
                <div className="bg-card"></div>
                <div className="relative md:flex space-x-12 z-10 max-w-4xl bg-white p-12 flex rounded-md shadow-md">
                    <div className="flex flex-col space-y-6 justify-between py-4">
                        <div>
                                <p className="text-lg font-mono italic">Hello, I'm </p>
                                <h1 className="text-5xl font-bold text-gray-800 font-mono"> {name}</h1>
                        </div>
                        <p>{occupation}</p>
                        <div className="inline-flex space-x-4 text-xl">
                            {socialNetworks}
                        </div>
                    </div>
                    <img src={image} alt="" className="w-80 rounded-full border-6 border-white shadow-md flex-shrinks-0"></img>
                </div>
            </div>
        </section>
    )
}

export default Profile
