import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}

export default NavLink;