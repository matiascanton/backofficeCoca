import FuseScrollbars from "@fuse/core/FuseScrollbars";
import _ from "@lodash";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withRouter from "@fuse/core/withRouter";
import FuseLoading from "@fuse/core/FuseLoading";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
  getCanjes,
  selectCanjes,
  selectCanjesSearchText,
} from "./store/canjesSlice";
import CanjesTableHead from "./CanjesTableHead";
import moment from "moment";
import { Button, Tooltip } from "@mui/material";

function CanjesTable(props) {
  const dispatch = useDispatch();
  const canjes = useSelector(selectCanjes);
  const searchText = useSelector(selectCanjesSearchText);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(canjes);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: "asc",
    id: null,
  });

  useEffect(() => {
    dispatch(getCanjes()).then((resp) => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    if (searchText.length !== 0) {
      setData(
        _.filter(canjes, (item) => (
          (item.business_name !== null && item.business_name.toLowerCase().includes(searchText.toLowerCase())) ||
          (item.client_id !== null && item.client_id.includes(searchText))
        )

        )
      );
      setPage(0);
    } else {
      setData(canjes);
    }
  }, [canjes, searchText]);

  function handleRequestSort(event, property) {
    const id = property;
    let direction = "desc";

    if (order.id === property && order.direction === "desc") {
      direction = "asc";
    }

    setOrder({
      direction,
      id,
    });
  }

  async function handleClickUpdate(item) {
    await props.navigate(`update`, {
      state: {
        ...item,
      },
    });
  }

  async function handleClickView(item) {
    await props.navigate(`view`, {
      state: {
        ...item,
      },
    });
  }



  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          No se encontraron Competencias
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl " aria-labelledby="tableTitle">
          <CanjesTableHead
            order={order}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />

          <TableBody>
            {_.orderBy(data, [(o) => o[order.id]], [order.direction])
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n) => {
                return (
                  <TableRow
                    className="h-72 cursor-pointer"
                    hover
                    key={n.id}

                  >
                    <TableCell
                      className="p-4 md:p-16"
                      component="th"
                      scope="row"
                    >
                      {moment(n.created_at).format('DD-MM-YYYY')}
                    </TableCell>
                    <TableCell
                      className="p-4 md:p-16 "
                      component="th"
                      scope="row"
                    >
                      {n.client_id}

                    </TableCell>

                    <TableCell
                      className="p-4 md:p-16 "
                      component="th"
                      scope="row"
                    >
                      {n.business_name}

                    </TableCell>
                    <TableCell
                      className="p-4 md:p-16 "
                      component="th"
                      scope="row"
                    >
                      {n.sku}
                    </TableCell>
                    <TableCell
                      className="p-4 md:p-16 "
                      component="th"
                      scope="row"
                    >
                      {n.description}
                    </TableCell>


                    <TableCell
                      className="p-4 md:p-16"
                      component="th"
                      scope="row"
                    >
                      {n.qty}
                    </TableCell>


                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </FuseScrollbars>

      <TablePagination
        className="shrink-0 border-t-1"
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default withRouter(CanjesTable);
