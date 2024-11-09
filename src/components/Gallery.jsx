import HornedBeast from "./HornedBeast";
import data from "../data.json/"
function Gallery() {
    return (
        <>
            <HornedBeast
                title={"Unicornio"}
                imageUrl="https://plus.unsplash.com/premium_photo-1664457241825-600243040ef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pY29ybmlvfGVufDB8fDB8fHww"
                description={"Unicornio de colores"}
            />
              <HornedBeast
                title={"Rinoceronte"}
                imageUrl="https://content.nationalgeographic.com.es/medio/2020/03/26/diceros-bicornis_b53061a7_800x800.jpg"
                description={"Rinoceronteeee"}
            />
            {
                data.map(beast => (
                    <HornedBeast 
                    key={beast._id}
                    title={beast.title}
                    imageUrl={beast.imageUrl}
                    description={beast.description}
                    />
                ))
            }
        </>

    )
}
export default Gallery;