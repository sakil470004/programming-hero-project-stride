import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { UserContext } from "../main";

export default function UseEffect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const contextData = useContext(UserContext);
  useEffect(() => {
    console.log("useEffect");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // console.log(json)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [type]);
  return (
    <div className="mt-4 pt-2 border-t-2 border-t-green-200">
      <div>
        <h1 className="text-3xl font-bold my-6">User Details & Context Data</h1>
        <div className="border-2 border-green-200 p-4 my-2">
          <h2 className="text-xl font-bold">{contextData?.name}</h2>
          <p className="text-md">{contextData?.email}</p>
          <p className="text-md">{contextData?.age}</p>
          <p className="text-md">{contextData?.address}</p>
          <p className="text-md">{contextData?.phone}</p>
        </div>
      </div>
      <button
        onClick={() => setType("users")}
        className={`btn px-8 py-4 border-2 border-green-300 hover:bg-green-200 ${
          type === "users" && "bg-green-200"
        }`}
      >
        Users
      </button>
      <button
        onClick={() => setType("todos")}
        className={`btn px-8 py-4 border-2 border-green-300 hover:bg-green-200 ${
          type === "todos" && "bg-green-200"
        }`}
      >
        Todos
      </button>
      <button
        onClick={() => setType("posts")}
        className={`btn px-8 py-4 border-2 border-green-300 hover:bg-green-200 ${
          type === "posts" && "bg-green-200"
        }`}
      >
        Posts
      </button>
      <h1 className="text-3xl font-bold my-6">Type: {type.toUpperCase()}</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id} className="border-2 border-green-200 p-4 my-2">
              <h2 className="text-xl font-bold">{item?.title || item?.name}</h2>
              {/*eslint-disable-next-line no-prototype-builtins */}
              <p
                className={`text-md ${
                  item.hasOwnProperty("completed") && item.completed
                    ? "bg-green-500 text-bold text-white"
                    : item.hasOwnProperty("completed") && !item.completed
                    ? "bg-red-500 text-bold text-white"
                    : ""
                }`}
              >
                {item?.body ||
                  item?.email ||
                  (item.hasOwnProperty("completed") &&
                    `Completed : ${item?.completed}`)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
