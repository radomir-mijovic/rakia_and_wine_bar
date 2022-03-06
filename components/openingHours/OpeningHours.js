import React from 'react';
import {OpeningHoursStyled} from "./OpeningHoursStyled";

const OpeningHours = () => {
    return (
        <OpeningHoursStyled>
            <h2 className='title'>
                Opening Hours
            </h2>
            <div className="days">
                <div className="day">
                    <h3>
                        monday
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h3>
                        tuesday
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h3>
                        wednesday
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h3>
                        thursday
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h3>
                        friday <span>*</span>
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h3>
                        saturday <span>*</span>
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h3>
                        sunday
                    </h3>
                    <div className="line"/>
                    <p>
                        16:00 - 01:00
                    </p>
                </div>
                <div className="day">
                    <h4>
                        happy hours
                    </h4>
                    <div className="line happy"/>
                    <h4>
                        22:00 - 24:00
                    </h4>
                </div>
            </div>
        </OpeningHoursStyled>
    );
};

export default OpeningHours;