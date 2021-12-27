import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    // console.log(category);
    const { data: images, loading } = useFetchGifs(category);

    // const [images, setImages] = useState([]);


    return (
        <>
            <h3>{category}</h3>
            { loading && 'Cargando...' }
            <div className="content_grid">
                {
                    images.map( (img) =>{
                        return (
                            <GifGridItem
                                key={img.id}
                                { ...img }
                            />
                        )
                    })
                }
            </div>
        </>
    )
}