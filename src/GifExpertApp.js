import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Demás'];

    const [categories, setCategories] = useState(['Dragón Ball']);



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                { 
                    categories.map( category =>  (
                            <GifGrid
                                category={category}
                                key={category}
                            />
                        )
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
