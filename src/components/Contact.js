import React,{useState} from 'react'

function Contact({data}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    let contactEmail = '';
    if(data){
        var contactInfo = data.contact.map(function(contact){
            let contactValue = contact.value; 
            if(contact.key==='email'){
                contactValue = <a href={`mailto:${contact.value}`}>{contact.value}</a>;
                contactEmail = contact.value;
            }else if(contact.key==='phone'){
                contactValue = <a href={`tel:${contact.value}`}>{contact.value}</a>;
            }
            return  (
            <div className="inline-flex space-x-2 items-center" key={contact.key}>
                <ion-icon name={contact.icon} class="text-white text-2xl font-semibold"> </ion-icon>  
                <span className="text-white font-semibold">{contactValue}</span>
            </div>
            );
        });

        var socialNetworks = data.social.map(function(socialNetwork){
            return  (
                <a href={socialNetwork.url} key={socialNetwork.name}>
                    <ion-icon  name={socialNetwork.className} class="text-emerald-100 text-xl"></ion-icon>
              </a>
            );
        });
    }
    
   
    const submitContact = (e) => {
        window.open(
            `mailto:${contactEmail}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
              email
            )}): ${encodeURIComponent(message)}`
          );
    };
   

    return (
        <section className="bg-grey-50 pt-20 pb-28 px-8">
        <div className="relative">
        <div className="bg-card"></div>
        <div className="relative z-12 flex w-full min-h-screen justify-center items-center  bg-white p-12 rounded-md shadow-md mx-auto pl-4 pr-7">
            <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0  bg-gradient-to-r from-cyan-400 to-emerald-400 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-whtie overflow-hidden" >
                <div className="flex flex-col space-y-8 justify-between">
                        <div className="">
                            <h1 className="font-bold text-4xl tracking-wide">Get In Touch </h1>
                            <p className="pt-2 text-gray-600 text-sm">I'm always available in email feel free to contact me. </p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            {contactInfo}
                        </div>
                        <div className="flex space-x-4 text-lg">
                            {socialNetworks}
                        </div>
                </div>
                <div className="relative">
                    <div className="absolute z-0 w-40 h-40 bg-cyan-500 rounded-full -right-28 -top-28"></div>
                    <div className="absolute z-0 w-40 h-40 bg-cyan-500 rounded-full -left-28 -bottom-16"></div>

                    <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                        <form onSubmit={submitContact} className="flex flex-col space-y-5">
                                <div>
                                    <label htmlFor="contactName" className="text-sm"><span className="required">*</span>Your name</label>
                                    <input name="contactName" id="contactName"  value={name} size="35" type="text"  placeholder="Your name" className="form-control" onChange={(e) => setName(e.target.value)}></input>
                                 </div>
                                <div>
                                    <label htmlFor="contactSubject" className="text-sm"><span className="required">*</span>Subject</label>
                                    <input name="contactSubject" id="contactSubject"  value={subject} size="35" type="text" placeholder="Your Subject" className="form-control" onChange={(e) => setSubject(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail" className="text-sm"><span className="required">*</span>Email Adress</label>
                                    <input name="contactEmail" id="contactEmail"  value={email} size="35" type="email" placeholder="Your email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div>
                                    <label htmlFor="contactMessage" className="text-sm"><span className="required">*</span>Message</label>
                                    <textarea name="contactMessage"  id="contactMessage" placeholder="Your email" value={message}  rows="4" className="form-control"  onChange={(e) => setMessage(e.target.value)}></textarea>
                                  

                                </div>
                                <button className="inline-block self-end bg-cyan-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm" type="submit" onClick={submitContact}>Send Message</button>
                        </form>
                        <div id="message-warning" className="error-massage"> Error boy</div>
                        <div id="message-success" className="error-massage">
                            <i className="fa fa-check"></i>Your message was sent, thank you!
                            <br />
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
      
       
    </section>
    )
}

export default Contact
