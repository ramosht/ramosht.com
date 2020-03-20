import React from 'react';

import * as s from './styled'

const Curso = () => {
    return (
        <s.CursoWrapper>
            <s.CursoData>Mai/2019</s.CursoData>
            <s.CursoBody>
                <s.CursoInstituicao>Alura Cursos Online</s.CursoInstituicao>
                <s.CursoTitulo>Formação SEO</s.CursoTitulo>
                <s.CursoCredencial>Credencial: aosidjas-asjd-jas-dj</s.CursoCredencial>
            </s.CursoBody>
        </s.CursoWrapper>
    )
}

export default Curso