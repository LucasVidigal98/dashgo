import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react';
import React, { ElementType } from 'react'
import ActivleLink from '../ActivleLink';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActivleLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActivleLink>
  )
}

export default NavLink;