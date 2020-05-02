import React from 'react';
import * as S from './styled'

const Curso = ({ titulo, instituicao, data }) => {
    return (
        <S.CursoWrapper>
            <S.CursoTitulo>{ titulo }</S.CursoTitulo>
            <S.CursoInstituicao>{ instituicao }</S.CursoInstituicao>
            <S.CursoData>Emissão em: { data }</S.CursoData>
        </S.CursoWrapper>
    )
}

export default Curso