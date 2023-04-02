import { useState, useEffect } from 'react';
import { postData } from 'components/lib/utils';

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
  Wrap, WrapItem
 
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

//チェックボックスの初期値を設定
  const skills = ["HTML", "CSS", "JavaScript", "Python", "Go"
,"PHP", "Ruby", "Java", "C","C#",
"C++"," Rust", "Flutter"," Swift", "Kotlin",
"Ruby on Rails" , "React","Next.js", "Angular","Vue.js",
"Fast API", "Django", "Flask", "Laravel", "Unity"
," Docker","MySQL" ,"PotgreSQL", "MongoDB "]

  const fields =["Frontend", "Backend", "Fullstack","Security","QA","Site Reliability", "Infra","Cloud", "Database", "Game", "System","Mobile", "AI", "DX", "Data Analyst"]
  const getInitialSkill = {user_s_skills:[]}
  const getInitialField = {user_s_fields:[]}
  const [checked, setChecked] = useState([...getInitialSkill.user_s_skills])
  const [checkedField, setCheckedField] = useState([...getInitialField.user_s_fields])


  const onChange = (e, i) => {
    console.log(e)
   
    const newChecked = [...checked];

    if (!checked.includes(i)) {
      newChecked.push(i);
      setChecked(newChecked);
    } else  {
      console.log(i);
      setChecked(
        newChecked.filter((item) => {
          return item !== i;
        })
      );
    }
  }
  const onChangefield = (e, i) => {
    console.log(e)
   
    const newChecked = [...checkedField];

    if (!checkedField.includes(i)) {
      newChecked.push(i);
      setCheckedField(newChecked);
    } else  {
      console.log(i);
      setCheckedField(
        newChecked.filter((item) => {
          return item !== i;
        })
      );
    }
  }

    // 複数のチェックボックス
    const skillcheckboxes = skills.map((x, i) => {
      return(
      <div>
        {/* //widthを設定して折り返すことが出来るようにする！ */}
        <WrapItem>
        <Button colorScheme='blue'  variant={checked.includes(i) ? "solid" : "outline"} checked={checked[i]} onClick={e => onChange(e, i)}>
        { skills[i]} 
         </Button>
        </WrapItem>
      </div>
     )})
     
     const fieldcheckboxes = fields.map((x, i) => {

      return(
      <div> 
          <WrapItem>
          <Button colorScheme='blue'  variant={checkedField.includes(i) ? "solid" : "outline"} checked={checkedField[i]} onClick={e => onChangefield(e, i)}>
        { fields[i]} 
         </Button>

          </WrapItem>
      </div>
     )})
     const SkillAndField = useState({user_s_skills: checked, user_s_fields:checkedField})
    
    const postProfile = () =>{
       postData("api/sendProfile", {...formValues, ...SkillAndField});
       router.push("/home");
    }

 
  return (
    <Box className="formTA" bg = "#E6FFFA" h='1000px' >

      
      <Box position='relative' h='800px' >
      
      <Box display='flex' alignItems='center'> 
         <Spacer />  
         <Text align = "center" fontSize= "40px"  as='b'>Setting Form</Text>
          <Spacer />  
      </Box>
      

      <AbsoluteCenter axis='both'  p='4'>
      <FormControl m={2}>
     
         <Box p = {4}>
                <FormLabel fontSize = "25px" >Fluent Programming Languages & Tools</FormLabel>
                  <Stack spacing={5} direction='row' >
                    <Wrap>
                  {skillcheckboxes}
                  </Wrap>
                 

                  </Stack>
            </Box>


            <Box p = {4}>      
                <FormLabel fontSize = "25px">Work or interest Fields</FormLabel>
                <Stack spacing={5} direction='row' >
                  <Wrap>{fieldcheckboxes}</Wrap>
                
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