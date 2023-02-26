import { useState } from "react";

const Language = () => {
  const [animals, setAnimals] = useState([
    { label: "HTML",  checked: false },
    { label: "CSS",  checked: false },
    { label: "Javascript",  checked: false },
    { label: "Python",  checked: false }
  ]);

  const [fields, setFields] = useState([
    { label: "HTML",  checked: false },
    { label: "CSS",  checked: false },
    { label: "Javascript",  checked: false },
    { label: "Python",  checked: false }
  ]);

  const [sum, setSum] = useState(0);
  const onChange = (e) => {
    const newAnimals = animals.map((animal) => {
      const newAnimal = { ...animal };
      if (newAnimal.label === e.target.value) {
        newAnimal.checked = !newAnimal.checked;
      }
      return newAnimal;
    });
    setAnimals(newAnimals);
    
    newAnimals
      .filter((animal) => animal.checked);
    
  };
  return (
    <div>
       
          <div key={animals.label}>
          <span>アドバイス出来る言語</span>
            <input
              id={animals[0].label}
              type="checkbox"
              value={animals[0].label}
              onChange={onChange}
            />
            <label htmlFor={animals[0].label}>
              {animals[0].label}
            </label>

            <input
              id={animals[1].label}
              type="checkbox"
              value={animals[1].label}
              onChange={onChange}
            />
            <label htmlFor={animals[1].label}>
              {animals[1].label}
            </label>

            <input
              id={animals[2].label}
              type="checkbox"
              value={animals[2].label}
              onChange={onChange}
            />
            <label htmlFor={animals[2].label}>
              {animals[2].label}
            </label>
            
            <input
              id={animals[3].label}
              type="checkbox"
              value={animals[3].label}
              onChange={onChange}
            />
            <label htmlFor={animals[3].label}>
              {animals[3].label}
            </label>

            
            </div>

            <div key={animals.label}>
          <span>働いている分野</span>
            <input
              id={animals[0].label}
              type="checkbox"
              value={animals[0].label}
              onChange={onChange}
            />
            <label htmlFor={animals[0].label}>
              {animals[0].label}
            </label>

            <input
              id={animals[1].label}
              type="checkbox"
              value={animals[1].label}
              onChange={onChange}
            />
            <label htmlFor={animals[1].label}>
              {animals[1].label}
            </label>

            <input
              id={animals[2].label}
              type="checkbox"
              value={animals[2].label}
              onChange={onChange}
            />
            <label htmlFor={animals[2].label}>
              {animals[2].label}
            </label>
            
            <input
              id={animals[3].label}
              type="checkbox"
              value={animals[3].label}
              onChange={onChange}
            />
            <label htmlFor={animals[3].label}>
              {animals[3].label}
            </label>

            
            </div>
      

        {animals.map((animal) => {
                return (
                <div key={animal.label}>
                    <input
                    id={animal.label}
                    type="checkbox"
                    value={animal.label}
                    onChange={onChange}
                    />
                    <label htmlFor={animal.label}>
                    {animal.label}
                    </label>
                </div>
                );
            })}
            
    </div>
  );
};

export default Language;
