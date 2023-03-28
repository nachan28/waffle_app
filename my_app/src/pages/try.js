import { useState } from 'react';
import  Language  from "/src/component/select.js"
import styles from "components/styles/try.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


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
  const initialValues = {introduction: "", career:""};
  const [formValues, setFormValues] = useState(initialValues);
//ターゲットすることでインプットした場所を特定
  const handleChange = (e)=>{
    // console.log(e.target.value);
    const {name, value} = e.target;
    //ex) introduction:その内容（value)
    setFormValues({... formValues, name: value})

  }
 
  return (
    <div className="formTA">
      <h1 className={styles.h1}>Setting Form</h1>
     
     

      <TableContainer>
          <Table variant='simple'>
            <TableCaption>Home画面でも変更できます</TableCaption>
  
            <Tbody class = "Tbody">
            <Tr>
                <Td>使える言語</Td>
                <Td>

                <input
                    id="HTML"
                    type="checkbox"
                    value="HTML"
                    // onChange={onChange}
                  />
                <label htmlFor="HTML"> HTML</label>

                  <input
                    id="CSS"
                    type="checkbox"
                    value="CSS"
                    // onChange={onChange}
                  />
                <label htmlFor="HTML">CSS</label>

                <input
                    id="Javascript"
                    type="checkbox"
                    value="Javascript"
                    // onChange={onChange}
                  />
                <label htmlFor="HTML">Javascript</label>

                <input
                    id="Javascript"
                    type="checkbox"
                    value="Javascript"
                    // onChange={onChange}
                  />
                <label htmlFor="HTML">Javascript</label>
                

                </Td>      
            </Tr>


              <Tr>
                <Td>自己紹介</Td>
                <Td>
                <input type = "text" placeholder="ooでバックエンドをしています" name ="introduction" 
                  onChange = {(e) => handleChange(e)}/>
                </Td>
                
              </Tr>
              <Tr>
                <Td>経歴</Td>
                <Td>
                <input type = "text" placeholder="文系卒で" name ="Career" 
                  onChange = {(e) => handleChange(e)}/>
                </Td>
              
              </Tr>

            </Tbody>

          </Table>
      </TableContainer>
 
        <button className = "submitButton">登録</button>
      
      
      
    </div>
  );
}

export default App;