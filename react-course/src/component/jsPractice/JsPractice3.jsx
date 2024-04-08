import React from "react";

const JsPractice3 = () => {
  let products = [
    {
      id: 1,
      title: "MacBook Pro",
      category: "Laptops",
      price: 100000.0,
      quantity: 2,
      description: "A high-performance laptop.",
      manufactureDate: "2023-05-15T08:30:00",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Nike",
      category: "Running Shoes",
      price: 5000,
      quantity: 3,
      description: "Running shoes designed for speed and comfort.",
      manufactureDate: "2023-02-20T14:45:00",
      isAvailable: true,
    },
    {
      id: 3,
      title: "Python",
      category: "Books",
      price: 500,
      quantity: 1,
      description: "A language for AI",
      manufactureDate: "1925-04-10T10:10:00",
      isAvailable: false,
    },
    {
      id: 4,
      title: "Javascript",
      category: "Books",
      price: 700,
      quantity: 5,
      description: "A language for Browser",
      manufactureDate: "1995-12-04T12:00:00",
      isAvailable: false,
    },
    {
      id: 5,
      title: "Dell XPS",
      category: "Laptops",
      price: 120000.0,
      quantity: 2,
      description: "An ultra-slim laptop with powerful performance.",
      manufactureDate: "2023-04-25T09:15:00",
      isAvailable: true,
    },
  ];

  // Defining a function here
  let task3 = () => {
    let output = products.map((item, i) => {
      return (
        <div key={i}>
          {item.title} costs {item.price} and it belongs to {item.category}
        </div>
      );
    });
    return output;
  };

  return (
    <>
      <div className="test">
        <p>
          <strong>
            <i>JsPractice 3 - Using js map method outside return</i>
          </strong>
        </p>
        <h2>The products, price and category are -</h2>
        {task3()} {/*Calling function inside return*/}
      </div>
    </>
  );
};

export default JsPractice3;
