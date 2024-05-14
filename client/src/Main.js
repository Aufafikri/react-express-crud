import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import rupiah from "rupiah-format";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
        await axios.delete("http://localhost:7000/produk/"+id)
        window.location.reload()

    } catch(err) {
        console.log(err)
    }   
  };

  return (
    <div className="flex justify-center items-center mt-2">
      <div className="min-h-screen">
        <h1 className="text-3xl text-gray-700 text-center font-bold">TABLE DATA</h1>
        <div className="overflow-x-auto">
        <table className="table mt-4 max-sm:text-sm max-md:text-lg max-lg:text-lg">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Produk</th>
              <th className="border-b px-4 py-2">Harga</th>
              <th className="border-b px-4 py-2">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td className="border-b px-4 py-2 text-center"> {item.id} </td>
                <td className="border-b px-4 py-2 text-center">
                  {item.produk}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {rupiah.convert(item.harga)}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {format(new Date(item.tanggal), "dd/MM/yyyy")}
                </td>
                <td className="pr-2" id="edit-custom">
                  <Link to={`update/${item.id}`}>
                    <FaEdit />
                  </Link>
                </td>
                <td id="delete-custom" onClick={(e => handleDelete(item.id))}>
                  <Link>
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            className="p-2 bg-slate-800 text-white rounded mt-2 hover:bg-slate-900"
            id="tambah-custom"
          >
            <Link to="/tambah">Tambah Produk?</Link>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
