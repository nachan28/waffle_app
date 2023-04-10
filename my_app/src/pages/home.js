import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "components/styles/Home.module.css";
import ResponsiveAppBar from "src/component/header.js";
import Card from "src/component/card.js";
import Select from "src/component/select.js";
import Navbar from "src/component/navbar.js"
import TAcard from "src/component/taCard"
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useAuthContext } from "components/context/state";
import { useUserHaveSkillFieldContext } from "components/context/state";
import chakra from "@chakra-ui/system"

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
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  Wrap
} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { AiOutlineCloseCircle, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";


const Links = ['Connect with you', 'Projects', 'Team'];
const inter = Inter({ subsets: ["latin"] });


const NavLink =( { children } )=> (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Home({SkillAndField}) {
  //ルーターとAPI叩く
  const router = useRouter();
  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const keyUser = await response.json()
    console.log(keyUser)
    return response.body;
   
  }

  //Logoutのコード 
  const Logout = (e) =>{
    if(e.target.textContent === "Logout"){
      router.push("/signout")
    }
  }
 
  const { isAuth, setIsAuth } = useAuthContext();
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
    if (!isAuth) {
      router.push("/signin");
    }
  }, [isAuth]);

  //キーワードの取得
const initialKeyword =("")
const [keyword, setKeywords] = useState(initialKeyword)
const setKeyword = (e) =>{
  const {value} = e.target
    setKeywords(value)
}
//キーワードのAPI
const clickkey = (req, res)=>
{
  console.log(keyword)
  postData("api/searchKeyword", keyword)
 
    console.log(res)
  }

//SkillAndField[keyword] =keyword


  //skillとfieldを検索
  const searchSkillField  = () =>{
    console.log({SkillAndField})
    postData("api/searchSkillField" )
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThanMd, setIsSmallerThanMd] = useState(false);
  return (
    <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <AiOutlineCloseCircle /> : < AiOutlineMenu/>}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={8}
          alignItems={'center'}
          as="nav"
          display={{ base: 'none', md: 'flex' }}
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Setting Form</MenuItem>
              <MenuDivider />
              <MenuItem onClick = {Logout}>Logout</MenuItem >
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen || isSmallerThanMd ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>

    <Box
      p={4}
      minH="calc(100vh - 4rem)"
      onResize={() => setIsSmallerThanMd(window.innerWidth < 768)}
    >
    {/* <Card/> */}
    <Box p = {4}>
    <FormControl>
        <InputGroup width={600}>
        
          <Input type="text" onChange={(e) => {
            setKeyword(e);}}
            placeholder="キーワードで検索"
            />
        <InputRightElement
        
            pointerEvents="none"
          children ={< AiOutlineSearch color = "gray.300"/>}
          />
          <Button onClick = {clickkey}></Button>
        </InputGroup>
    </FormControl>
    </Box>


     <Select/>
     <Box p = {4}><Button onClick = {searchSkillField}>Search</Button></Box>
     
     <Wrap>
    <TAcard></TAcard>
    <TAcard></TAcard>
    <TAcard></TAcard>
    </Wrap>

    </Box>
  </>
  );
}
