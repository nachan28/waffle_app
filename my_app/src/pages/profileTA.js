import { useState, useEffect } from 'react';
import { postData } from 'components/lib/utils';
import RadioCard from 'components/component/radiobutton';
import Select from "src/component/select.js";
import { useUserHaveSkillFieldContext } from "components/context/state";

import {
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
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
  Spacer ,
  Wrap, WrapItem,
  HStack,
  useRadioGroup,
  RadioGroup,
  Radio,

 
} from '@chakra-ui/react'
import { useRouter } from "next/router";

function App() {
  //文字列を複数渡すためにオブジェクト形式にする.初期値の設定。冗長にしないため
  const initialValues = {username: "", introduction: "", background:"" };
  const [formValues, setFormValues] = useState(initialValues);
//ターゲットすることでインプットした場所を特定
  const handleChange = (e)=>{
    // console.log(e.target.value);
    const {name, value} = e.target;
    //ex) introduction:その内容（value)
    setFormValues({... formValues, [name]: value})

  }
  const router = useRouter();
  useEffect(() => {
    const userInfo = localStorage.getItem("isAuth")
    console.log(userInfo)
    setFormValues({...formValues, username: userInfo.toString()})
  }, [])
//役割のradiobutton

  // const options = ['react', 'vue', 'svelte']

  // const { getRootProps, getRadioProps } = useRadioGroup({
  //   name: 'framework',
  //   defaultValue: 'react',
  //   onChange: console.log,
  // })

  // const group = getRootProps()
  //役割の
  const [role, setRole] = useState('1')
  const finalrole = {role: role}


     const { checkedSkill, checkedField } = useUserHaveSkillFieldContext();
     const SkillAndField = {user_s_skills: checkedSkill, user_s_fields:checkedField}
    
    const postProfile = () =>{
       postData("api/sendProfile", {...formValues, ...SkillAndField, ...finalrole });
       router.push("/home");
    }

 
  return (
    <Box className="formTA" bg = "#E6FFFA" h='1500px' >

      
      <Box position='relative' h='1200px' >
      
      <Box display='flex' alignItems='center'> 
         <Spacer />  
         <Text align = "center" fontSize= "40px"  as='b'>Setting Form</Text>
          <Spacer />  
      </Box>
      

      <AbsoluteCenter axis='both'  p='4'>
      <FormControl m={2}>
          <Box p = {4}>
                <FormLabel fontSize = "25px" >Role</FormLabel>
                  <Stack spacing={5} direction='row' >
                  <RadioGroup onChange={setRole} value={role}>
                    <Stack direction='row'>
                      <Radio value='1'>運営</Radio>
                      <Radio value='2'>TA</Radio>
                      <Radio value='3'>Waffle College生1期</Radio>
                    </Stack>
                  </RadioGroup>
                  {/* <HStack {...group}>
                    {options.map((value) => {
                      const radio = getRadioProps({ value })
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      )
                    })}
                  </HStack> */}


                  </Stack>
          </Box>
          <Select></Select>   
   
         <Box p = {4}>
            
                <FormLabel fontSize = "25px">Introduction</FormLabel>
                
                <Input fontSize = "20px" size = "lg" type = "text" placeholder="ooでバックエンドをしています" name ="introduction" 
                  onChange = {(e) => handleChange(e)}/>
                
                
          </Box>     

          <Box p = {4}>  
              <FormLabel fontSize = "25px">Background</FormLabel>
                
                <Textarea fontSize = "20px" placeholder="文系卒でエンジニアしています。サイバーセキュリティに関連するお仕事をしています" name ="background" size = "lg"
                  onChange = {(e) => handleChange(e)}/>
           </Box>     
              
              
            </FormControl>

            </AbsoluteCenter>
    
            </Box>
            <Box display='flex' alignItems='center'> 
            <Spacer />
            <Button  bg = "#76E4F7" variant='solid' fontSize = "25px" className = "submitButton" onClick = {postProfile}>Register</Button>
            <Spacer />
            </Box>

        
 
       
      
      
      
    </Box>
  );
}

export default App;