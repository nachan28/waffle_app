
import { useState, useEffect } from 'react';

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
import { useUserHaveSkillFieldContext } from 'components/context/state';

const Language = () => {
  
//表示させたいスキルとフィールド
const skills = ["HTML", "CSS", "Javascript", "Python", "Go"
,"PHP", "Ruby", "Java", "C","C#",
"C++"," Rust", "Flutter"," Swift", "Kotlin",
"Ruby on Rails" , "React","Next.js", "Angular","Vue.js",
"Fast API", "Django", "Flask", "Laravel", "Unity"
," Docker","MySQL" ,"PotgreSQL", "MongoDB "]

  const fields =["FrontEnd", "BackEnd", "Fullstack","Security","QA","Site", "Infra","Cloud", "Database", "Game", "System","Mobile", "AI", "DX", "DataAnalyst"]
 //チェックボックスの初期値を設定
  // const getInitialSkill = {user_s_skills:[]}
  // const getInitialField = {user_s_fields:[]}
  // const [checkedSkill, setCheckedSkill] = useState([...getInitialSkill.user_s_skills])
  // const [checkedField, setCheckedField] = useState([...getInitialField.user_s_fields])
const {checkedSkill,setCheckedSkill, checkedField,setCheckedField} = useUserHaveSkillFieldContext()
//スキルボタンを押したらindexを保存する
  const onChange = (e, i) => {
    console.log(e)
   
    const newChecked = [...checkedSkill];

    if (!checkedSkill.includes(i)) {
      newChecked.push(i);
      setCheckedSkill(newChecked);
    } else  {
      console.log(i);
      setCheckedSkill(
        newChecked.filter((item) => {
          return item !== i;
        })
      );
    }
  }
  //フィールドボタンを押したらindexを保存する
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

    // 複数のチェックボックスをつくる（スキルとフィールド）
    const skillcheckboxes = skills.map((x, i) => {
      return(
      <div>
        {/* //widthを設定して折り返すことが出来るようにする方法もあるよ */}
        <WrapItem>
        <Button colorScheme='blue'  variant={checkedSkill.includes(i) ? "solid" : "outline"} checkedSkill={checkedSkill[i]} onClick={e => onChange(e, i)}>
        { skills[i]} 
         </Button>
        </WrapItem>
      </div>
     )})
     
     const fieldcheckboxes = fields.map((x, i) => {

      return(
      <div> 
          <WrapItem>
          <Button colorScheme='blue'  variant={checkedField.includes(i) ? "solid" : "outline"} checkedSkill={checkedField[i]} onClick={e => onChangefield(e, i)}>
        { fields[i]} 
         </Button>

          </WrapItem>
      </div>
     )})
     const SkillAndField = useState({user_s_skills: checkedSkill, user_s_fields:checkedField})
     console.log(SkillAndField)


 
  return (
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
      </FormControl>
    
  );
};

export default Language;
