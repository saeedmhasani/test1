import { useEffect, useState } from "react";
import './style.css';
const Clock = ({ date, tick }) => {
    const [getDate, setDate] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {

               const getDate = date.toLocaleTimeString();
                const timer = setInterval(() => { tick() }, 1000);
                setDate(getDate);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();


    }, []);
   

    return (
        <>
            <h1>
                {date.toLocaleTimeString()}
            </h1>
        </>
    );
}
export default Clock;