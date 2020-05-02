import React from 'react';
import * as S from './styled';
import { Link } from 'gatsby';
import propTypes from 'prop-types';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => {
  return (
    <S.PaginationWrapper>
      {!isFirst ? <S.PaginationLink to={prevPage}>Página Anterior</S.PaginationLink> : ''}

      {currentPage} de {numPages}

      {!isLast ? <S.PaginationLink to={nextPage}>Próxima Página</S.PaginationLink> : ''}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  lastPage: propTypes.number.isRequired,
  nextPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired
}

export default Pagination;