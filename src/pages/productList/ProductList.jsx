import { DataGrid } from '@material-ui/data-grid';
import './productList.css'
import { Fragment, useState } from 'react';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {productRows} from  '../../dummyData'

export default function ProductList() {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !==id ))
    }

     const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
       return (
         <div className='productListItem'>
           <img className='productListImg' src={params.row.img} alt='' />
           {params.row.name}
         </div>
       )
  } },
  { field: 'stock', headerName: 'Stock', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <Fragment>
          <Link to={'/product/' + params.row.id}>
          <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlined className="productListDelete"
          onClick={() => handleDelete(params.row.id)}
          />
        </Fragment>
      )
    }
  }

];

  return <div className='productList'>
     <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
         //rowsPerPageOptions={[8]}
        checkboxSelection
      />
  </div>;
}
