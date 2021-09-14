import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div>
         <h2>{greeting}</h2>
            <div>
                <div className="card mt-5 ms-5" style= {{width: "300px"}}>
                    <img src="https://i0.wp.com/mecanica-express.com.ar/wp-content/uploads/2020/11/Mecanica_Express_varta_bateria-auto_vfb60hd_0.jpg?fit=1280%2C1280&ssl=1s" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bateria</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <ItemCount />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemListContainer