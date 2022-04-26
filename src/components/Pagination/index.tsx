import { Box, Text, Stack } from '@chakra-ui/react';
import React from 'react'
import PaginationItem from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
    : [];

  const nextPage = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
    : [];

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >

      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > (1 + siblingCount) && (
           <>
           <PaginationItem number={1} />
           { currentPage > (2 + siblingCount) && 
            <Text color="gray.300" width="8" textAlign="center">...</Text> 
          }
         </>
        )}

        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        <PaginationItem isCurrent number={currentPage} />

        {nextPage.length > 0 && nextPage.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        {(currentPage + siblingCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingCount) < lastPage && 
              <Text color="gray.300" width="8" textAlign="center">...</Text> 
            }
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default Pagination;