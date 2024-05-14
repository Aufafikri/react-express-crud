import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TambahData = () => {
  const [produk, setProduk] = useState('')
  const [harga, setHarga] = useState('')
  const [tanggal, setTanggal] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
  event.preventDefault()
  
    try {
      const response = await axios.post("http://localhost:7000/tambah", {
        produk,
        harga,
        tanggal
      })
      navigate('/')
      response()
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div className='min-h-screen bg-slate-500 flex justify-center items-center'>
      <div className='w-1/2 bg-white rounded p-3 max-sm:w-4/5 max-sm:text-sm max-lg:w-3/4 max-lg:text-lg'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-3xl text-center text-cyan-900 font-bold max-sm:text-2xl max-sm:mb-4'>TAMBAH PRODUK</h1>
          <label className='block mb-1'>Produk</label>
          <input
          type='text'
          placeholder='Masukan produk' 
          className='border rounded p-2 w-full mb-3'
          required
          onChange={(e => setProduk(e.target.value))}
          />
          <label className='block mb-1'>Harga</label>
          <input
          type='number'
          placeholder='Masukan Harga' 
          className='border rounded p-2 w-full mb-3'
          required
          onChange={(e => setHarga(e.target.value))}
          />
          <label className='block mb-1'>Tanggal</label>
          <input
          type='date'
          placeholder='Masukan Tanggal' 
          className='border rounded p-2 w-full mb-5'
          required
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

export default TambahData