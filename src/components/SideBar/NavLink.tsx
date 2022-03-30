import { Icon, Link, Text, LinkProps } from '@chakra-ui/react';
import React, { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}

export default NavLink;