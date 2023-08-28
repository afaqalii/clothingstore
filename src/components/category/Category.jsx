import React from "react";
import "./style.css";

const Category = () => {
  const categoryData = [
    {
      title: "work",
      img: "https://irt-cdn.multiscreensite.com/8b61af5011854ec2a6e21092fb6473df/dms3rep/multi/Part_of_white_jacket.jpg",
    },
    {
      title: "casual",
      img: "https://irt-cdn.multiscreensite.com/8b61af5011854ec2a6e21092fb6473df/dms3rep/multi/pexels-cottonbro-9836520+4.jpg",
    },
  ];
  return (
    <div className="container flex justify-center flex-wrap flex gap-10">
      {categoryData.map((item) => (
        <div
          style={{
            backgroundImage: `url('${item.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "690px",
            borderRadius:'3%',
            flex:'1',
            display:'grid',
            placeContent:'center',
          }}
          className={`card`}
        >
          <h1 className="text-center font-medium capitalize text-[#ffffff] text-[60px]">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Category;
