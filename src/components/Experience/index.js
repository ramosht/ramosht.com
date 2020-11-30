import React from 'react';
import * as S from './styled'

const Experience = ({ startDate, endDate, isCurrent, company, occupation, location, timeOfService, description }) => {
    return (
        <S.ExperienciaWrapper>
            <h3>{occupation}</h3>
            <p className="company">{company}</p>
            <span className="meta_info">
                <span className="time">{startDate} - {isCurrent ? 'Presente' : endDate} &#183; {timeOfService}</span>
                <span className="location">{location}</span>
            </span>
            <p className="description">"{description}"</p>
        </S.ExperienciaWrapper>
    )
}

export default Experience