import React, {useEffect, useRef, useState} from "react";

const Menu = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [count, setCount] = useState(0)
    const [dropdown, setDropdown] = useState(false)
    const ref = useRef()

    useEffect( () => {
        const handler = (event) =>{
            if( dropdown && ref.current && !ref.current.contains(event.target)){
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [dropdown])

    useEffect(() => {
        document.title = `Aktualny stan Dropdown: ${dropdown}`
    }, [dropdown])
    const handleName = () =>
    {
        setName("Imie")
        setLastName("Nazwisko")
    }
    const handleCount = () =>{
        setCount(count + 2)
    }

    const handleDropdown = () => {
     setDropdown((prevState) => !prevState)
    }


    return (
        <div>
            <div>
                <h2>{name} {lastName}</h2>
                <button onClick={handleName}>Pokaz Dane</button>
                <h2>{count}</h2>
                <button onClick={handleCount}>powiększ</button>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li ref={ref}>
                            <button onClick={handleDropdown}>
                                Services
                            </button>
                            {dropdown &&
                            <ul>
                                <li>Design</li>
                                <li>Development</li>
                            </ul>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
)
}
export default Menu
