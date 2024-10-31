import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
        })
    },[])

    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            {
                menu.map(item => )
            }
        </section>
    );
};

export default PopularMenu;