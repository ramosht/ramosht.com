import React from 'react';
import * as S from './styled'

const ProfessionalExperience = ({ atuacao, instituicao, descricao, periodo }) => {
    return (
        <S.ExperienciaWrapper>
            <S.Atuacao>{ atuacao}</S.Atuacao>
            <S.Instituicao>{ instituicao}</S.Instituicao>
            <S.periodo>{ periodo}</S.periodo>
            <S.Descricao>{ descricao}</S.Descricao>
        </S.ExperienciaWrapper>
    )
}

export default ProfessionalExperience