import { useState,useEffect } from 'react';
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import {
    AiOutlineCloseCircle,
    AiOutlineMenu,
    AiOutlineSearch,
  } from "react-icons/ai";


  const Links = ["Connect with you", "Projects", "Team"];
  const inter = Inter({ subsets: ["latin"] });
  
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThanMd, setIsSmallerThanMd] = useState(false);
  const router = useRouter();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("isAuth")
  //   console.log(userInfo)
  //   setFormValues({...formValues, username: userInfo.toString()})
  // }, [])

    //Logoutのコード
    const Logout = (e) => {
        if (e.target.textContent === "Logout") {
          router.push("/signout");
        }
      };

      const Settingform = (e) => {
        if (e.target.textContent === "Setting Form") {
          router.push("/settingForm");
        }
      };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={3}
            alignItems={"center"}
            as="nav"
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem  onClick={Settingform}>Setting Form</MenuItem>
                <MenuDivider />
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen || isSmallerThanMd ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    

      <Box
        p={4}
        // minH="calc(100vh - 4rem)"
        onResize={() => setIsSmallerThanMd(window.innerWidth < 768)}
      >
  

        </Box>
        </Box>
    </>
  );
}
