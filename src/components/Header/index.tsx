import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import Logo from "./Logo";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      { !isWideVersion && (
        <IconButton 
          icon={<Icon as={RiMenuLine} />} 
          aria-label="Open Navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >
        </IconButton>
      )}


      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav /> 
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}

export default Header;