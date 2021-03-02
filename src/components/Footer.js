import React from 'react'

function Footer({data}) {

  let date = new Date();
  const currentYear = date.getFullYear();	

  if (data) {
    var url = data.website;
    var handle = data.copyrights;
  }
    return (
        <footer className="text-gray-600 body-font">
        <div className="bg-gray-100 text-center">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Jagruti Metaliya</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">&copy; {currentYear} Copyrights reserved by —
              <a href={url} rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">{handle}</a>
            </p>
            
          </div>
        </div>
      </footer>
    )
}

export default Footer
