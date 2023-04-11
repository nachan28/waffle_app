import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "components/styles/Home.module.css";
import ResponsiveAppBar from "src/component/header.js";
import Card from "src/component/card.js";
import Select from "src/component/select.js";
import Navbar from "src/component/navbar.js";
import TAcard from "src/component/taCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthContext } from "components/context/state";
import { useUserHaveSkillFieldContext } from "components/context/state";
import { UserSFProvider } from "components/context/state";
import chakra from "@chakra-ui/system";

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
  Wrap,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import {
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { postData } from "components/lib/utils";

const Links = ["Connect with you", "Projects", "Team"];
const inter = Inter({ subsets: ["latin"] });



export default function Home({ SkillAndField }) {
  //ルーターとAPI叩く
  const router = useRouter();



  const { isAuth, setIsAuth } = useAuthContext();
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
    if (!isAuth) {
      router.push("/signin");
    }
  }, [isAuth]);

  //キーワードの取得
  const initialKeyword = "";
  const [keyword, setKeywords] = useState(initialKeyword);
  const setKeyword = (e) => {
    const { value } = e.target;
    setKeywords(value);
  };

  const [cardInfo, setCardInfo] = useState([]);
  //キーワードのAPI
  const clickkey = async () => {
    console.log(keyword);
    const res = await postData("api/searchKeyword", keyword);
    console.log(res);

    setCardInfo(res);
  };

  useEffect(() => {
    console.log(cardInfo);
  }, [cardInfo]);

  const { checkedSkill, checkedField } = useUserHaveSkillFieldContext();
  const SkillField = {
    user_s_skills: checkedSkill,
    user_s_fields: checkedField,
  };

  //   //skillとfieldを検索
  const searchSkillField = async () => {
    console.log({ SkillField });
    const res = await postData("api/searchSkillField", SkillField);
  };


  return (
    <>

  
      <Navbar/>
    
        {/* <Card/> */}
        <Box p={2}>
          <FormControl>
            <InputGroup width={600}>
              <Input
                type="text"
                onChange={(e) => {
                  setKeyword(e);
                }}
                placeholder="キーワードで検索"
              />
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch color="gray.300" />}
              />
              <Button onClick={clickkey}></Button>
            </InputGroup>
          </FormControl>
        </Box>

        <Select />

        <Box p={4}>
          <Button onClick={searchSkillField}>Search</Button>
        </Box>

        <Wrap>
          {cardInfo.map((data) => {
            return <TAcard name={data.username}></TAcard>;
          })}
        </Wrap>
        
     
      
    </>
  );
}
