import {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const productosDetalle = [
    {
      "id": 1,
      "categoria": "Radiador",
      "marca": "Energy",
      "tamanio": "XL",
      "precio": 13908,
      "imagen": "http://dummyimage.com/140x210.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius"
    },
    {
      "id": 2,
      "categoria": "Bobina",
      "marca": "Moura",
      "tamanio": "XS",
      "precio": 7252,
      "imagen": "http://dummyimage.com/112x118.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit"
    },
    {
      "id": 3,
      "categoria": "Aceite",
      "marca": "Energy",
      "tamanio": "M",
      "precio": 16919,
      "imagen": "http://dummyimage.com/105x164.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla"
    },
    {
      "id": 4,
      "categoria": "Bateria",
      "marca": "Willard",
      "tamanio": "XS",
      "precio": 18327,
      "imagen": "http://dummyimage.com/167x238.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "felis sed interdum venenatis turpis enim blandit mi in porttitor pede"
    },
    {
      "id": 5,
      "categoria": "Radiador",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 14128,
      "imagen": "http://dummyimage.com/242x158.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "eu est congue elementum in hac habitasse platea dictumst morbi vestibulum"
    },
    {
      "id": 6,
      "categoria": "Bobina",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 9135,
      "imagen": "http://dummyimage.com/126x106.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis"
    },
    {
      "id": 7,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "XS",
      "precio": 17815,
      "imagen": "http://dummyimage.com/165x124.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "suspendisse ornare consequat lectus in est risus auctor sed tristique in"
    },
    {
      "id": 8,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "L",
      "precio": 11937,
      "imagen": "http://dummyimage.com/221x177.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "in purus eu magna vulputate luctus cum sociis natoque penatibus et"
    },
    {
      "id": 9,
      "categoria": "Bateria",
      "marca": "Willard",
      "tamanio": "S",
      "precio": 15608,
      "imagen": "http://dummyimage.com/122x202.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin"
    },
    {
      "id": 10,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "L",
      "precio": 8029,
      "imagen": "http://dummyimage.com/157x190.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut"
    },
    {
      "id": 11,
      "categoria": "Bateria",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 19037,
      "imagen": "http://dummyimage.com/101x109.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum"
    },
    {
      "id": 12,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "S",
      "precio": 5670,
      "imagen": "http://dummyimage.com/145x222.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis"
    },
    {
      "id": 13,
      "categoria": "Bateria",
      "marca": "Moura",
      "tamanio": "L",
      "precio": 10414,
      "imagen": "http://dummyimage.com/106x148.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc"
    },
    {
      "id": 14,
      "categoria": "Bobina",
      "marca": "Moura",
      "tamanio": "XL",
      "precio": 11006,
      "imagen": "http://dummyimage.com/100x205.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis"
    },
    {
      "id": 15,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "XS",
      "precio": 6236,
      "imagen": "http://dummyimage.com/233x182.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit"
    },
    {
      "id": 16,
      "categoria": "Bobina",
      "marca": "Energy",
      "tamanio": "2XL",
      "precio": 16566,
      "imagen": "http://dummyimage.com/103x132.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed"
    },
    {
      "id": 17,
      "categoria": "Radiador",
      "marca": "Willard",
      "tamanio": "XS",
      "precio": 10185,
      "imagen": "http://dummyimage.com/175x181.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante"
    },
    {
      "id": 18,
      "categoria": "Radiador",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 7631,
      "imagen": "http://dummyimage.com/110x164.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien"
    },
    {
      "id": 19,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "3XL",
      "precio": 11700,
      "imagen": "http://dummyimage.com/155x177.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel"
    },
    {
      "id": 20,
      "categoria": "Radiador",
      "marca": "Moura",
      "tamanio": "L",
      "precio": 6984,
      "imagen": "http://dummyimage.com/182x182.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit"
    },
    {
      "id": 21,
      "categoria": "Bobina",
      "marca": "Energy",
      "tamanio": "S",
      "precio": 16178,
      "imagen": "http://dummyimage.com/180x205.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie"
    },
    {
      "id": 22,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "S",
      "precio": 18249,
      "imagen": "http://dummyimage.com/107x175.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas"
    },
    {
      "id": 23,
      "categoria": "Bateria",
      "marca": "Willard",
      "tamanio": "XS",
      "precio": 16746,
      "imagen": "http://dummyimage.com/221x241.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "integer ac neque duis bibendum morbi non quam nec dui luctus"
    },
    {
      "id": 24,
      "categoria": "Bateria",
      "marca": "Moura",
      "tamanio": "3XL",
      "precio": 7548,
      "imagen": "http://dummyimage.com/192x140.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "in faucibus orci luctus et ultrices posuere cubilia curae mauris"
    },
    {
      "id": 25,
      "categoria": "Radiador",
      "marca": "Energy",
      "tamanio": "XL",
      "precio": 6516,
      "imagen": "http://dummyimage.com/160x141.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "cum sociis natoque penatibus et magnis dis parturient montes nascetur"
    },
    {
      "id": 26,
      "categoria": "Bateria",
      "marca": "Moura",
      "tamanio": "XL",
      "precio": 8127,
      "imagen": "http://dummyimage.com/240x186.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere"
    },
    {
      "id": 27,
      "categoria": "Bobina",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 9427,
      "imagen": "http://dummyimage.com/156x227.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis"
    },
    {
      "id": 28,
      "categoria": "Bobina",
      "marca": "Willard",
      "tamanio": "L",
      "precio": 7311,
      "imagen": "http://dummyimage.com/217x170.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem"
    },
    {
      "id": 29,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "S",
      "precio": 14570,
      "imagen": "http://dummyimage.com/169x163.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"
    },
    {
      "id": 30,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "2XL",
      "precio": 6449,
      "imagen": "http://dummyimage.com/130x142.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at"
    },
    {
      "id": 31,
      "categoria": "Bateria",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 8370,
      "imagen": "http://dummyimage.com/149x161.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit"
    },
    {
      "id": 32,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "M",
      "precio": 8981,
      "imagen": "http://dummyimage.com/182x150.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien"
    },
    {
      "id": 33,
      "categoria": "Bateria",
      "marca": "Energy",
      "tamanio": "XL",
      "precio": 18862,
      "imagen": "http://dummyimage.com/124x229.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida"
    },
    {
      "id": 34,
      "categoria": "Bobina",
      "marca": "Willard",
      "tamanio": "XL",
      "precio": 10893,
      "imagen": "http://dummyimage.com/202x216.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar"
    },
    {
      "id": 35,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "L",
      "precio": 14369,
      "imagen": "http://dummyimage.com/250x212.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh"
    },
    {
      "id": 36,
      "categoria": "Aceite",
      "marca": "Energy",
      "tamanio": "3XL",
      "precio": 16293,
      "imagen": "http://dummyimage.com/172x152.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat"
    },
    {
      "id": 37,
      "categoria": "Bateria",
      "marca": "Willard",
      "tamanio": "M",
      "precio": 18168,
      "imagen": "http://dummyimage.com/244x100.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit"
    },
    {
      "id": 38,
      "categoria": "Bobina",
      "marca": "Willard",
      "tamanio": "L",
      "precio": 10929,
      "imagen": "http://dummyimage.com/193x104.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu"
    },
    {
      "id": 39,
      "categoria": "Bateria",
      "marca": "Energy",
      "tamanio": "L",
      "precio": 17706,
      "imagen": "http://dummyimage.com/151x216.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "sapien non mi integer ac neque duis bibendum morbi non quam"
    },
    {
      "id": 40,
      "categoria": "Bateria",
      "marca": "Energy",
      "tamanio": "M",
      "precio": 19681,
      "imagen": "http://dummyimage.com/197x198.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis"
    },
    {
      "id": 41,
      "categoria": "Aceite",
      "marca": "Moura",
      "tamanio": "S",
      "precio": 15688,
      "imagen": "http://dummyimage.com/112x250.png/5fa2dd/ffffff",
      "cantidad": 10,
      "detalle": "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula"
    },
    {
      "id": 42,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "M",
      "precio": 9424,
      "imagen": "http://dummyimage.com/179x115.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "vestibulum proin eu mi nulla ac enim in tempor turpis"
    },
    {
      "id": 43,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "L",
      "precio": 18293,
      "imagen": "http://dummyimage.com/201x244.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna"
    },
    {
      "id": 44,
      "categoria": "Aceite",
      "marca": "Energy",
      "tamanio": "XS",
      "precio": 13818,
      "imagen": "http://dummyimage.com/153x112.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "massa donec dapibus duis at velit eu est congue elementum"
    },
    {
      "id": 45,
      "categoria": "Aceite",
      "marca": "Energy",
      "tamanio": "M",
      "precio": 9362,
      "imagen": "http://dummyimage.com/207x184.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "eget massa tempor convallis nulla neque libero convallis eget eleifend"
    },
    {
      "id": 46,
      "categoria": "Aceite",
      "marca": "Energy",
      "tamanio": "S",
      "precio": 18979,
      "imagen": "http://dummyimage.com/106x236.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus"
    },
    {
      "id": 47,
      "categoria": "Radiador",
      "marca": "Willard",
      "tamanio": "XL",
      "precio": 14528,
      "imagen": "http://dummyimage.com/106x197.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna"
    },
    {
      "id": 48,
      "categoria": "Bateria",
      "marca": "Willard",
      "tamanio": "3XL",
      "precio": 10227,
      "imagen": "http://dummyimage.com/206x226.png/cc0000/ffffff",
      "cantidad": 10,
      "detalle": "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis"
    },
    {
      "id": 49,
      "categoria": "Bateria",
      "marca": "Moura",
      "tamanio": "XL",
      "precio": 7752,
      "imagen": "http://dummyimage.com/195x145.png/dddddd/000000",
      "cantidad": 10,
      "detalle": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor"
    },
    {
      "id": 50,
      "categoria": "Aceite",
      "marca": "Willard",
      "tamanio": "L",
      "precio": 9796,
      "imagen": "http://dummyimage.com/128x130.png/ff4444/ffffff",
      "cantidad": 10,
      "detalle": "nulla elit ac nulla sed vel enim sit amet nunc viverra"
    }
  ];

const ItemDetailContainer = ({greeting}) => {
    
    const [producto,setProducto] = useState ([])
    const {id} = useParams()

    console.log(id);
    
    useEffect(()=>{
        const simulacion_de_pedido_detalle = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(productosDetalle)
            },2000)
        })
        
        simulacion_de_pedido_detalle.then(productos=>{
            const producto = productos.find(producto => producto.id = id);
            setProducto(producto);
        })
    },[id])

    console.log(producto)


    return (
        <>
            <div>
                <h2>{greeting}</h2>
                <div>
                    <ItemDetail producto={producto} />
                </div>
            </div>
        </>
    )
    
}

export default ItemDetailContainer