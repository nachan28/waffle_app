import { useState } from 'react';
import  Language  from "/src/component/select.js"

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
  Spacer 
 
} from '@chakra-ui/react'
import { useRouter } from "next/router";


  // const [skills, setSkills] = useState([
  //   { label: "HTML",  checked: false , id :1},
  //   { label: "CSS",  checked: false ,id :2},
  //   { label: "Javascript",  checked: false ,id :3},
  //   { label: "Python",  checked: false,id:4 },
  //   { label: "Java",  checked: false , id :5},
  //   { label: "C",  checked: false ,id :6},
  //   { label: "C#",  checked: false ,id :7},
  //   { label: "PHP",  checked: false,id:8 },
  //   { label: "Ruby",  checked: false,id:9},
  //   { label: "TypeScript",  checked: false,id:10},
  // ]);


function App() {
  //文字列を複数渡すためにオブジェクト形式にする.初期値の設定。冗長にしないため
  const initialValues = {introduction: "", background:""};
  const [formValues, setFormValues] = useState(initialValues);
//ターゲットすることでインプットした場所を特定
  const handleChange = (e)=>{
    // console.log(e.target.value);
    const {name, value} = e.target;
    //ex) introduction:その内容（value)
    setFormValues({... formValues, [name]: value})

  }
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
  const postProfile = () =>{
    console.log(formValues);
     postData("api/sendProfile", formValues);

  }
 
  return (
    <Box className="formTA" bg = "#E6FFFA" h='1000px' >

      
      <Box position='relative' h='700px' >
      
      <Box display='flex' alignItems='center'> 
         <Spacer />  
         <Text align = "center" fontSize= "40px"  as='b'>Setting Form</Text>
          <Spacer />  
      </Box>
      

      <AbsoluteCenter axis='both'  p='4'>

      <FormControl m={2}>
     

         <Box p = {4}>
                <FormLabel fontSize = "25px">Fluent Programming Languages & Tools</FormLabel>
                  <Stack spacing={5} direction='row' >
                    <Checkbox colorScheme='blue' >
                      HTML
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                    <Text fontSize='2xl'>
                      CSS
                      </Text>
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      Javascript
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      Python
                    </Checkbox>

                  </Stack>

                  <Stack spacing={5} direction='row'>
                    <Checkbox colorScheme='blue' >
                      C
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      C#
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      Go
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      flutter
                    </Checkbox>

                  </Stack>
            </Box>


            <Box p = {4}>      
                <FormLabel fontSize = "25px">Work or interest Fields</FormLabel>
                  <Stack spacing={5} direction='row' >
                    <Checkbox colorScheme='blue' >
                      FrontEnd
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                    <Text fontSize='2xl'>
                      BackEnd
                      </Text>
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      Fullstack
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      Security
                    </Checkbox>

                  </Stack>

                  <Stack spacing={5} direction='row'>
                    <Checkbox colorScheme='blue' >
                      Fintech
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      FemTech
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      Cloud
                    </Checkbox>

                    <Checkbox colorScheme='blue' >
                      QA
                    </Checkbox>

                  </Stack>

         </Box>      
                

               
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