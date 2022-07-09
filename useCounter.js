import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    //Creamos la funcionalidad de nuestro custom hook y luego la exportamos en el return para que pueda ser utilizada por otros componentes

    const increment = () => {
        setCounter(counter +1);
    }

    const decrement = () => {
        if (counter === 0) return;
        setCounter(counter -1);
    }

    const reset = () => {
        setCounter(initialValue);
    }


    return {
        counter,
        increment,
        decrement,
        reset,
    }
    //Desestructuramos de acuerdo a lo que nuestro custom hook nos devuelva, si nos devuelve un objeto, desestructuramos un objeto, si es un array, un array
}
