import {  useDispatch } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ReactApexChart from "react-apexcharts";
import {  getVariables } from "../store/widgetsSlice";


function ColumnChartUsers(props) {
  const { data, title_y } = props;
  const [awaitRender, setAwaitRender] = useState(true);
  const theme = useTheme();
  const [selectedChannel, setSelectedChannel] = useState("Mostrar Todos");
  const dispatch = useDispatch();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentMonthStr = `${currentYear}-${currentMonth.toString().padStart(2, "0")}-01`;

  const handleFilter = (value) => {
    setSelectedChannel(value);
  };

  const uniqueCategories = [...new Set(data.map((entry) => entry.canal))];
  const uniqueGecs = [...new Set(data.map((entry) => entry.gec))];

  const filteredData = selectedChannel !== "Mostrar Todos" ? data.filter((entry) => entry.canal === selectedChannel) : data;

  const activeUsers = uniqueCategories.map((category) => {
    const historicalCount = filteredData.reduce((count, entry) => {
      if (entry.fecha < currentMonthStr && entry.canal === category) {
        return count + 1;
      }
      return count;
    }, 0);
    return historicalCount;
  });

  const newUsers = uniqueCategories.map((category) => {
    const currentMonthCount = filteredData.reduce((count, entry) => {
      if (entry.fecha >= currentMonthStr && entry.canal === category) {
        return count + 1;
      }
      return count;
    }, 0);
    return currentMonthCount;
  });

  const chartData = {
    series: [
      {
        name: "Usuarios Activos",
        data: activeUsers,
      },
      {
        name: "Usuarios Nuevos",
        data: newUsers,
      },
    ],
  };

  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: selectedChannel === "Mostrar Todos" ? uniqueCategories : uniqueGecs.map((gec) => `${gec}`),
    },
    yaxis: {
      title: {
        text: title_y,
      },
    },
    fill: {
      opacity: 1,
    },
    title: {
      text: "Usuarios activos vs nuevos",
      align: "left",
      margin: 30,
      offsetY: -10,
      style: {
        fontSize: "18px",
        color: "black",
        fontWeight: "normal",
      },
    },
    subtitle: {
      text: selectedChannel !== "Mostrar Todos" ? `Filtro: ${selectedChannel}` : "",
      align: "left",
      style: {
        fontSize: "14px",
        color: "gray",
        fontWeight: "normal",
      },
    },
  };


  const [channels, setChannels] = useState([]);

  const channelOptions = channels.map((channel) => {
    return { label: channel.canal, value: channel.canal.toLowerCase() };
  });
  // Add an option to show all channels
  channelOptions.unshift({ label: "Mostrar Todos", value: "Mostrar Todos" });

  
  useEffect(() => {
    //para select y obtener gec unicos
    dispatch(getVariables()).then((res) => {
      // Filtrar el objeto con el canal "TODOS" antes de guardar los canales únicos en el estado
      const filteredChannels = res.payload.channels.filter(
        (channel) => channel.canal !== "TODOS"
      );
      setChannels(filteredChannels);
    });
  }, [dispatch]);


  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }


  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
      <div>
        <Box sx={{ m: 1, minWidth: 150 }} size="small" className=" flex flex-row justify-end items-center">
          <InputLabel id="select-label" className="mr-10">
            Seleccionar Canal
          </InputLabel>
          <Select value={selectedChannel} onChange={(event) => handleFilter(event.target.value)} color="secondary" size="small">
            {channelOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </div>
      <div className="flex flex-col flex-auto h-360">
        {selectedChannel === "Mostrar Todos" ? (
          <ReactApexChart
            className="flex flex-auto items-center justify-center w-full h-full"
            options={chartOptions}
            series={chartData.series}
            type={chartOptions.chart.type}
            height={chartOptions.chart.height}
          />
        ) : (
          <ReactApexChart
            className="flex flex-auto items-center justify-center w-full h-full"
            options={chartOptions}
            series={[
              {
                name: "Usuarios Activos",
                data: uniqueGecs.map((gec) => {
                  const count = filteredData.reduce((count, entry) => {
                    if (entry.fecha < currentMonthStr && entry.canal === selectedChannel && entry.gec === gec) {
                      return count + 1;
                    }
                    return count;
                  }, 0);
                  return count;
                }),
              },
              {
                name: "Usuarios Nuevos",
                data: uniqueGecs.map((gec) => {
                  const count = filteredData.reduce((count, entry) => {
                    if (entry.fecha >= currentMonthStr && entry.canal === selectedChannel && entry.gec === gec) {
                      return count + 1;
                    }
                    return count;
                  }, 0);
                  return count;
                }),
              },
            ]}
            type={chartOptions.chart.type}
            height={chartOptions.chart.height}
          />
        )}
      </div>
    </Paper>
  );
}

export default memo(ColumnChartUsers);
