import { useState } from 'react';
import  Language  from "/src/component/select.js"
import styles from "components/styles/profileTA.module.css";


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
      <div className = {styles.formContainer}>
      <form >
       <div className={styles.uiForm}>

        <Language/>

        <table class="contact-table">
          <th class="contact-item"></th>
        <div className = {styles.formField}>
          <label>自己紹介</label>
          {/* useStateに打ち込んだら格納される */}
          <input type = "text" placeholder="自己紹介" name ="introduction" 
          onChange = {(e) => handleChange(e)}/>
        </div>

        <div className = {styles.formField}>
          <label>経歴</label>
          <input type = "text" placeholder="経歴" name ="Career" 
          onChange = {(e) => handleChange(e)}/>
        </div>

        <tr>
          <th class="contact-item">お問い合わせ内容</th>
          <td class="contact-body">
            <textarea name="問い合わせ" class="form-textarea"></textarea>
          </td>
        </tr>


        </table>
        <button className = "submitButton">登録</button>
       
       </div>
      </form>
      </div>
    </div>
  );
}

export default App;