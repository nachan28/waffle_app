import { useState } from "react";

const Language = () => {
  const [animals, setAnimals] = useState([
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
    setSum(val);
  };
  return (
    <div>
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
