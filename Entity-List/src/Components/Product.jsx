import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  const getData = () => {
    setLoading(true);
    axios({
      url: `http://localhost:8080/women?_page=${page}&&_limit=${limit}`,
      method: "GET",
      params: {
        page,
        limit,
      },
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [page, limit]);

  const goSort = (e) => {
    console.log(e);

    let srtdata = data.sort((a, b) => {
      if (e === "l") {
        return a.price - b.price;
      } else if (e === "h") {
        return b.price - a.price;
      }
    });
    setData([...srtdata]);
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <button
          class="bg-red-500 
       hover:bg-red-700 
       text-white font-bold py-2 px-4 
       rounded"
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          class="bg-red-500
  hover:bg-red-700 
  text-white font-bold
   py-2 px-4 rounded ml-5"
          disabled={page == limit + 1}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <button
          class="bg-red-500 
       hover:bg-red-700 
       text-white font-bold py-2 px-4 
       rounded"
          onClick={() => goSort("l")}
        >
          High to Low
        </button>
        <button
          class="bg-red-500
  hover:bg-red-700 
  text-white font-bold
   py-2 px-4 rounded ml-5"
          onClick={() => goSort("h")}
        >
          Low to High
        </button>
      </div>
      <div className="flex justify-center  mt-10">
        <button
          class="bg-transparent 
        
        hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border 
        border-red-500 hover:border-transparent rounded"
          onClick={() => setLimit(limit - 1)}
        >
          -
        </button>
        <h5 className="mt-3  ml-5">{limit}</h5>
        <button
          class="bg-transparent hover:bg-red-500 text-red-700 font-semibold
 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ml-5"
          onClick={() => setLimit(limit + 1)}
        >
          +
        </button>
      </div>
      {loading && (
        <button type="button" class="bg-red-500 ... " disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      )}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image_url}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-mm font-medium text-gray-900">
                      ${product.price}
                    </h4>
                    <strike className="text-sm font-medium text-gray-900">
                      ${product.strikedoffprice}
                    </strike>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
