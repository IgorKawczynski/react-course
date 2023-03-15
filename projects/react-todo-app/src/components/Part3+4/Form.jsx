import React, {useState, useEffect} from "react";

const Form = () => {
    const [data ,setData] = useState({
        fname:"",
        lname:"",
        message:"",
        carBrand:"",
        isChecked:false,
        gender:'',
        price:"0",
    })

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setData((data) => ({
        ...data,
        [e.target.name]: value
    }))
    }


    const carBrands = ["Mercedes", "BMW", "Maserati", "Audi"]

    const carBrandOptions = carBrands.map((carBrand, key) => (
        <option value={carBrand} key={key}>
            {carBrand}
        </option>
    ))

    return(
        <>
        <form>
            <label>
                Imie: <input type="text" value={data.fname} name={'fname'} onChange={handleChange}/>
            </label>
            <label>
                Nazwisko: <input type={"text"} value={data.lname} name={"lname"} onChange={handleChange}/>
            </label>
            <label>
                Wiadomość: <textarea value={data.message} name={"message"} onChange={handleChange}/>
            </label>
            <label>
                Marka auta: <select value={data.carBrand} name={"carBrand"} onChange={handleChange}>
                Wybierz marke auta:
                <option value={""} disabled>
                    Wybierz markę
                </option>
                {carBrandOptions}
                </select>
            </label>
            <label>
                Czy Zaznaczono?
                <input
                type={"checkbox"}
                name={'isChecked'}
                checked={data.isChecked}
                onChange={handleChange}/>
            </label>
            <label>
                <input
                    type={'radio'}
                    name={'gender'}
                    value={'kobieta'}
                    checked={data.gender === "kobieta"}
                    onChange={handleChange}
                />{" "}
                kobieta
                <input
                    type={'radio'}
                    name={'gender'}
                    value={'mężczyzna'}
                    checked={data.gender === "mężczyzna"}
                    onChange={handleChange}
                />{" "}
                mężczyzna
            </label>
            <label>
                Cena (od 0 do 50):
                <input type={"range"}
                name={'price'}
                min={'0'}
                       max={'50'}
                       value={data.price}
                       onChange={handleChange}
                />
            </label>


        </form>


            <h5>{data.fname} {data.lname}</h5>
            <p>{data.message}</p>
            <h2>{data.carBrand}</h2>
            <h2>{data.isChecked ? "Tak" : "Nie"}</h2>
            <h2>płeć {data.gender}</h2>
            <h2>Cena: {data.price}</h2>

        </>
    )


}
export default Form