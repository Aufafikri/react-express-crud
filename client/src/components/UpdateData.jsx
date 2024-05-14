import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateData = () => {
  const [produk, setProduk] = useState('')
  const [harga, setHarga] = useState('')
  const [tanggal, setTanggal] = useState('')

  const navigate = useNavigate()
  const {id} = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.put("http://localhost:7000/update/" + id, {
        produk,
        harga,
        tanggal
      })
      navigate('/')
      response()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='min-h-screen bg-slate-500 flex justify-center items-center'>
      <div className='w-1/2 bg-slate-50 rounded p-2 max-sm:w-4/5'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-center text-3xl text-cyan-900 font-bold max-sm:mb-4 max-sm:text-2xl'>UPDATE PRODUK</h1>
          <label className='block mb-1'>Produk</label>
          <input 
          type="text" 
          placeholder='Masukan Produk'
          className='border rounded p-2 w-full mb-3'
          onChange={(e => setProduk(e.target.value))}
          />
          <label className='block mb-1'>Harga</label>
          <input 
          type="number" 
          placeholder='Masukan Harga'
          className='border rounded p-2 w-full mb-3'
          onChange={(e => setHarga(e.target.value))}
          />
          <label className='block mb-1'>Tanggal</label>
          <input 
          type="date" 
          placeholder='Masukan Tanggal'
          className='border rounded p-2 w-full mb-3'
          onChange={(e => setTanggal(e.target.value))}
          />
          <div className='flex justify-between'>
            <Link to='/' className='bg-cyan-600 p-2 rounded text-white hover:bg-cyan-900 hover:transition duration-300'>Back?</Link>
            <button type='submit' className='bg-lime-500 p-2 rounded text-white hover:bg-lime-800 hover:transition duration-300'>Kirim</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateData