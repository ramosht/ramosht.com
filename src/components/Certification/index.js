import React from 'react';
import * as S from './styled'

const Certification = ({ title, organization, issue_date, credential_id, credential_url, description }) => {
    return (
        <S.ExperienciaWrapper>
            <h3>{title}</h3>
            <p className="company">{organization}</p>
            <span className="meta_info">
                <span>Emitido {issue_date}</span>
                <span>Credencial: <a style={{display: 'inline'}} href={credential_url} target="blank" title="Credencial">{credential_id}</a></span>
            </span>
        </S.ExperienciaWrapper>
    )
}

export default Certification