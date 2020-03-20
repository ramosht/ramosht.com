import styled from 'styled-components'

export const CursoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

export const CursoData = styled.span`
    color: #999;
    font-size: 0.85rem;  
    display: block;
    width: 35%;
    text-align: right;
    padding-right: .5rem;
`;

export const CursoBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    padding-left: .5rem;
`;

export const CursoInstituicao = styled.p`
    font-weight: 600;
    margin-bottom: .75rem;
    font-size: 1.15rem;
`;

export const CursoTitulo = styled.h3`
    font-size: 0.85rem;
    margin-bottom: .25rem;
`;

export const CursoCredencial = styled.span`
    font-size: 0.75rem;
    color: #666;
    display: bloc;
`;