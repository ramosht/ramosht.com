import styled from 'styled-components'

export const ExperienciaWrapper = styled.div`
    p.company, span.meta_info span {
        font-size: 0.875rem !important;
        margin-bottom: 0;
        line-height: 1.5;
        display: block;
        color: var(--text)
    }

    h3 {
        font-size: 1.05rem;
        font-weight: bold;
        margin-bottom: 0.15rem;
    }

    .meta_info {
        opacity: .8;
    }

    .company {
        margin-bottom: .25rem;
    }

    .description {
        margin-top: .25rem;
    }
`;