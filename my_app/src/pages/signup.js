import { useAuthContext } from "components/context/state";
import { auth } from "components/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from 'react';
import {
  chakra,
  Flex,
  Avatar,
  Heading,
  InputGroup,
  InputLeftElement,
  CFaUserAlt,
  CFaLock,
  showPassword,
  InputRightElement,
  handleShowClick,
  Link,
  Text,
  Checkbox, CheckboxGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Box,
  AbsoluteCenter,
  Textarea,
  Input,
  Spacer 
 
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from "react-icons/fa";

function Signup() {
  const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

//パスワードを見せる
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  
  const router = useRouter();
  const { setIsAuth, user, setUser, email, setEmail, password, setPassword } = useAuthContext();
  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  const postUserInfo = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        router.push("/profileTA");
      }
    );
    const data = {username: user, email: email};
    postData("/api/signup", data);
  };

  return (
    <>
        <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
             <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" onChange={(e) => {
                setUser(e.target.value);
              }}
              placeholder="ニックネーム"
               />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" onChange={(e) => {
                setEmail(e.target.value);
              }}
               />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
              onClick={postUserInfo}
                borderRadius={0}
          
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
   
    </Flex>

    
    </>
  );
}

export default Signup;
