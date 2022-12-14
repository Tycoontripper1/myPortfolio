import React from "react";
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'


export const Experience = () =>{
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>
                        Frontend Developmrnt
                    </h3>
                    <div className="experience_content">
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>HTML</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                            
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>

                             <h4>CSS</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Javascrit</h4>
                             <small className="text-light">Experienced</small>

                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Bootstrap</h4>
                             <small className="text-light">Experienced</small>

                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>

                             <h4>Tailwind</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>React</h4>
                             <small className="text-light">Experienced</small>
                                
                             </div>
                        </article>
                        
                    </div>
                   
                </div>
                <div className="experience_Backend">
                    <h3>
                        Backend Developmrnt
                    </h3>
                    <div className="experience_content"> 
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                                
                             <h4>PHP</h4>
                             <small className="text-light">basics</small>
                            </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>MySQL</h4>
                             <small className="text-light">basics</small>
                                
                            </div>
                        </article>
                        <article className="experience_details">
                             < BsPatchCheckFill className="experience_details-icon" />
                             <div>
                             <h4>Python</h4>
                             <small className="text-light">basics</small>
                                
                                </div>
                        </article>
                       
                    </div>
                   
                </div>
            </div>
        </section>

    


    )
   
}