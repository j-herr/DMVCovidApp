import React, { useState } from 'react'
import './AboutCovid19.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faCoffee } from '@fortawesome/free-solid-svg-icons'

function AboutCovid19() {
    const [part1, setPart1] = useState(false);
    const [part2, setPart2] = useState(false);
    const [part3, setPart3] = useState(false);

    const toggle1 = () => {
        setPart1(!part1);
    }
    const toggle2 = () => {
        setPart2(!part2);
    }
    const toggle3 = () => {
        setPart3(!part3);
    }

    const down = faArrowDown;

    return (
        <div class="main">
            <h1>COVID-19 (from CDC)</h1>
            <h3>About the Name <button onClick={toggle1}><FontAwesomeIcon icon={down} /></button></h3>
            {part1 ? 
                <div>
                    <p>On February 11, 2020, the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan, China. <b>The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19.</b> In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV.”</p>
                </div>
                :
                ""
            }
                           
            <h3>Source of the Virus <button onClick={toggle2}><FontAwesomeIcon icon={down} /></button></h3>
            {part2 ? 
                <div>
                    <p>COVID-19 is caused by a coronavirus called <b>SARS-CoV-2</b>. Coronaviruses are a large family of viruses that are common in people and many different species of animals, including camels, cattle, cats, and bats.  Rarely, animal coronaviruses can infect people and then spread between people. This occurred with MERS-CoV and SARS-CoV, and now with the virus that causes COVID-19. The SARS-CoV-2 virus is a betacoronavirus, like MERS-CoV and SARS-CoV. All three of these viruses have their origins in bats. The sequences from U.S. patients are similar to the one that China initially posted, suggesting a likely single, recent emergence of this virus from an animal reservoir. However, the exact source of this virus is unknown.</p>
                </div>
                :
                ""
            }
                
            <h3>Symptoms of Coronavirus <button onClick={toggle3}><FontAwesomeIcon icon={down} /></button></h3>
            {part3 ?
                <div className="part3">
                    <div class="move-right">
                        <p>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:</p>
                        <li>Fever or chills</li>
                        <li>Cough</li>
                        <li>Shortness of breath or difficulty breathing</li>
                        <li>Fatigue</li>
                        <li>Muscle or body aches</li>
                        <li>Headache</li>
                        <li>New loss of taste or smell</li>
                        <li>Sore throat</li>
                        <li>Congestion or runny nose</li>
                        <li>Nausea or vomiting</li>
                        <li>Diarrhea</li>
                    </div>
                        
                    <h3>Important</h3>
                    <li>
                        Anyone can have mild to severe symptoms              
                    </li>
                    <li>
                        <b>Older adults and people who have severe underlying medical conditions</b> like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.
                    </li>
                </div>
                :
                ""
            }
                
            <div class="animation">
                <h1 class="text">Social Distancing </h1>
                <p style={{textAlign: "center"}}>
                    Help prevent the spread of Coronavirus <img
                    class="img-v"
                    src="http://www.pngall.com/wp-content/uploads/4/Coronavirus-Germs-PNG-File.png"
                    alt=""
                    /> 
                    by maintaining at least <span style={{color: "red", fontWeight: "400", fontSize: "30px"}}> 6 feet </span> between you and others.
                </p>
            
                <div class="icons">
                    <span class="advice">
                        <h3>Avoid physical contact</h3>
                    </span>
                    <span class="advice">
                        <h3>Wash your hands</h3>
                    </span>
                    <span class="advice">
                        <h3>Use mask</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutCovid19
