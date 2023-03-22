import { useState } from "react";
import styles from "components/styles/profileTA.module.css";

const Language = () => {
  const [skills, setSkills] = useState([
    { label: "HTML",  checked: false , id :1},
    { label: "CSS",  checked: false ,id :2},
    { label: "Javascript",  checked: false ,id :3},
    { label: "Python",  checked: false,id:4 },
    { label: "Java",  checked: false , id :5},
    { label: "C",  checked: false ,id :6},
    { label: "C#",  checked: false ,id :7},
    { label: "PHP",  checked: false,id:8 },
    { label: "Ruby",  checked: false,id:9},
    { label: "TypeScript",  checked: false,id:10},
  ]);

  const [fields, setFields] = useState([
    { label: "HealthTech",  checked: false , id :1},
    { label: "MedTech",  checked: false ,id :2},
    { label: "FinTech",  checked: false ,id :3},
    { label: "Game",  checked: false,id:4 },
    { label: "Google",  checked: false,id:4 }


  ]);

  const [sum, setSum] = useState(0);
  const onChange = (e) => {
    const newLanguage = skills.map((skills) => {
      const newAnimal = { ...skills };
      if (newAnimal.label === e.target.value) {
        newAnimal.checked = !newAnimal.checked;
      }
      return newAnimal;
    });
    setSkills(newLanguage);
    
    newLanguage
      .filter((skills) => skills.checked);
    
  };
  return (
    <div>
       
          <div key={skills.label} className = {styles.formField}>
          <span>アドバイス出来る言語</span>
            <input
              id={skills[0].label}
              type="checkbox"
              value={skills[0].label}
              onChange={onChange}
            />
            <label htmlFor={skills[0].label}>
              {skills[0].label}
            </label>

            <input
              id={skills[1].label}
              type="checkbox"
              value={skills[1].label}
              onChange={onChange}
            />
            <label htmlFor={skills[1].label}>
              {skills[1].label}
            </label>

            <input
              id={skills[2].label}
              type="checkbox"
              value={skills[2].label}
              onChange={onChange}
            />
            <label htmlFor={skills[2].label}>
              {skills[2].label}
            </label>
            
            <input
              id={skills[3].label}
              type="checkbox"
              value={skills[3].label}
              onChange={onChange}
            />
            <label htmlFor={skills[3].label}>
              {skills[3].label}
            </label>

            
            </div>

            <div key={skills.label}>
          <span>働いている分野</span>
            <input
              id={fields[0].label}
              type="checkbox"
              value={fields[0].label}
              onChange={onChange}
            />
            <label htmlFor={fields[0].label}>
              {fields[0].label}
            </label>

            <input
              id={fields[1].label}
              type="checkbox"
              value={fields[1].label}
              onChange={onChange}
            />
            <label htmlFor={fields[1].label}>
              {fields[1].label}
            </label>

            <input
              id={fields[2].label}
              type="checkbox"
              value={fields[2].label}
              onChange={onChange}
            />
            <label htmlFor={fields[2].label}>
              {fields[2].label}
            </label>

            

            
            </div>
            
    </div>
  );
};

export default Language;
