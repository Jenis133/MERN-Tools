import React from "react";

const JsPractice = () => {
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

  let task1 = () => {
    let output = products.map((item, i) => {
      return <div key={i}>{item.title}</div>;
    });
    return output;
  };
  let task2 = () => {
    let output = products.map((item, i) => {
      return <div key={i}>{item.price}</div>;
    });
    return output;
  };
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
  let task4 = () => {
    let Output = products
      .filter((item, i) => {
        if (item.price > 2000) {
          return true;
        }
      })
      .map((item, i) => {
        return (
          <div key={i}>
            {item.title} costs Nrs.{item.price} and it's category is{" "}
            {item.category}
          </div>
        );
      });
    return Output;
  };
  let task5 = () => {
    let Output = products
      .filter((item, i) => {
        if (item.category === "Books") {
          return true;
        }
      })
      .map((item, i) => {
        return (
          <div key={i}>
            {item.title} costs Nrs.{item.price} and it's category is{" "}
            {item.category}
          </div>
        );
      });
    return Output;
  };
  let task6 = () => {
    // pre is initial value which is 0 and current is first element in an array
    let totalPrice = products.reduce((pre, curr) => {
      return pre + curr.price;
    }, 0);
    return totalPrice;
  };
  let task7 = () => {
    let Output = products.map((item, i) => {
      return item.category;
    });
    let Unique = [...new Set(Output)];
    let NewOutput = Output.map((item, i) => {
      return <div key={i}>{item}</div>;
    });
    return NewOutput;
  };
  return (
    <>
      <div className="test">
        <p>
          <strong>
            <i>Using function inside {}</i>
          </strong>
        </p>
        <h1>The Products in our shop are</h1>
        {/* Using map to display the titles of the products */}
        {/* Keys should always be unique */}
        {products.map((item, i) => {
          //use array loop instead than calling array items individually
          return <div key={i}>{item.title}</div>;
        })}
        <br />
        <p>
          <strong>
            <i>Calling function inside return</i>
          </strong>
        </p>
        <h2>The Products in our shop are</h2>
        {task1()}
        <br />
        <h2>The Price of the products are</h2>
        {task2()}
        <br />
        <h2>The Price of the products are</h2>
        {task3()}
        <br />
        <h2>The Price of the products are</h2>
        {task4()}
        <br />
        <h2>The Price of the books are</h2>
        {task5()}
        <br />
        <h2>The total price of all products is Nrs.{task6()}</h2>
        <br />
        {task7()};
      </div>
    </>
  );
};

export default JsPractice;
