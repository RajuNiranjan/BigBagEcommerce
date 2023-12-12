import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductContext } from "../context/ProductContext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

export default function CartTable() {
  const {
    ProductData,
    cartItem,
    removeFromCart,
    IncreseQuantity,
    DecreseQuantity,
    quantity,
  } = React.useContext(ProductContext);

  // const [quantity, setQuantity] = React.useState(1);

  // const IncreseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };
  // const DecreseQuantity = () => {
  //   if (quantity <= 1) {
  //     return quantity;
  //   } else {
  //     setQuantity(quantity - 1);
  //   }
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Products</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductData.map((e) => {
            if (cartItem[e.id] > 0) {
              return (
                <TableRow
                  key={e.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th">
                    <Link to={`/product/${e.id}`}>
                      <img className="w-24" src={e.img} alt="" />
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <p>{e.brand}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>{e.title}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>₹{e.new_price}</p>
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex gap-5">
                      <button
                        onClick={DecreseQuantity}
                        className="h-5 w-5 hover:text-white font-extrabold rounded-full flex items-center justify-center text-xl hover:bg-black border">
                        -
                      </button>
                      <p className="flex justify-center items-center w-5 h-5 border px-5">
                        {quantity + 1}
                      </p>

                      <button
                        className="h-5 w-5 hover:text-white font-extrabold rounded-full flex items-center justify-center text-xl hover:bg-black border"
                        onClick={IncreseQuantity}>
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <p className="flex justify-center items-center">
                      ₹{e.new_price * quantity}
                      {/* {cost} */}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <div
                      onClick={() => removeFromCart(e.id)}
                      className="flex justify-center items-center hover:text-red-500 cursor-pointer ">
                      <DeleteOutlineOutlinedIcon />
                    </div>
                  </TableCell>
                </TableRow>
              );
            } else {
              return null;
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
