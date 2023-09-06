import { useSelector, useDispatch } from "react-redux";
import { styled, ThemeProvider, useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { selectContrastMainTheme } from "app/store/fuse/settingsSlice";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { selectWidgets, getVariables } from "../store/widgetsSlice";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const Root = styled(Paper)(({ theme }) => ({
  //background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

function VisitorsOverviewWidget() {
  const dispatch = useDispatch();

  const theme = useTheme();
  const contrastTheme = useSelector(
    selectContrastMainTheme(theme.palette.primary.main)
  );
  const widgets = useSelector(selectWidgets);
  const { data, ranges } = widgets?.users ?? { data: [], ranges: {} };
  const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges)[tabValue];
  const [series, setSeries] = useState([]);
  const [chartReady, setChartReady] = useState(false);

  const [selectedGec, setSelectedGec] = useState("Mostrar Todos");
  const [selectedChannel, setSelectedChannel] = useState("Mostrar Todos");
  const [filter, setFilter] = useState("Mostrar Todos");
  const [channels, setChannels] = useState([]);

  const channelOptions = channels.map((channel) => {
    return { label: channel.canal, value: channel.canal.toLowerCase() };
  });
  // Add an option to show all channels
  channelOptions.unshift({ label: "Mostrar Todos", value: "Mostrar Todos" });

  // Crear un conjunto (Set) para almacenar los gec únicos
  const uniqueGecSet = new Set();

  // Recorrer el array y agregar cada gec al conjunto
  channels.forEach((item) => {
    item.gec.forEach((gecItem) => {
      if (gecItem !== "TODOS") {
        uniqueGecSet.add(gecItem);
      }
    });
  });

  // Convertir el conjunto en un array nuevamente
  const uniqueGecList = Array.from(uniqueGecSet);

  const gecOptions = uniqueGecList.map((gec) => {
    return { label: gec, value: gec.toLowerCase() };
  });
  // Add an option to show all channels
  gecOptions.unshift({ label: "Mostrar Todos", value: "Mostrar Todos" });

  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: "inherit",
      foreColor: "inherit",
      width: "100%",
      height: "100%",
      type: "area",
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [contrastTheme.palette.secondary.light],
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: [contrastTheme.palette.secondary.dark],
    },
    grid: {
      show: true,
      borderColor: contrastTheme.palette.divider,
      padding: {
        top: 10,
        bottom: -40,
        left: 0,
        right: 0,
      },
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      followCursor: true,
      theme: "dark",
      x: {
        format: "MMM dd, yyyy",
      },
      y: {
        formatter: (value) => `${value}`,
        title: {
          formatter: () => "Usuarios",
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        stroke: {
          color: contrastTheme.palette.divider,
          dashArray: 0,
          width: 2,
        },
      },
      labels: {
        show: false, // Eliminar las etiquetas de la coordenada x
      },
      tooltip: {
        enabled: false,
      },
      type: "datetime",
    },
    yaxis: {
      /*   axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      }, */
      /*  min: (min) => min - 10,
      max: (max) => max + 40, */
      tickAmount: 5,
      labels: {
        formatter: (value) => `${value}`,
      },
      // show: false,
    },
    title: {
      text:
        currentRange === "histórico"
          ? "Usuarios Históricos"
          : "Usuarios del Mes Actual",
      align: "left",
      style: {
        fontSize: "18px",
        color: "black",
        fontWeight: "normal",
      },
    },
    subtitle: {
      text: filter !== "Mostrar Todos" ? `Filtro: ${filter}` : "",
      align: "left",
      style: {
        fontSize: "14px",
        color: "gray",
        fontWeight: "normal",
      },
    },
  };

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
    let filteredData = data;

    if (selectedGec !== "Mostrar Todos") {
      filteredData = filteredData.filter((item) => item.gec === selectedGec);
    }

    if (selectedChannel !== "Mostrar Todos") {
      filteredData = filteredData.filter(
        (item) => item.canal === selectedChannel
      );
    }

    const uniqueMonths = [
      ...new Set(filteredData.map((item) => item.fecha.slice(0, 7))),
    ];
    const historicalSeriesData = uniqueMonths.map((month) => {
      const usuariosPorMes = filteredData
        .filter((item) => item.fecha.slice(0, 7) === month)
        .reduce((total, item) => total + item.usuarios, 0);
      return {
        x: new Date(month).getTime(),
        y: usuariosPorMes,
      };
    });

    const uniqueDates = [...new Set(filteredData.map((item) => item.fecha))];

    const currentDate = new Date().toISOString().slice(0, 10);
    const currentMonthData = filteredData.filter(
      (item) => item.fecha.slice(0, 7) === currentDate.slice(0, 7)
    );

    const currentMonthSeriesData = currentMonthData.map((item) => ({
      x: new Date(item.fecha).getTime(),
      y: item.usuarios,
    }));

    const groupedData = currentMonthSeriesData.reduce((acc, item) => {
      const date = item.x;
      if (acc[date]) {
        acc[date].y += item.y;
      } else {
        acc[date] = item;
      }
      return acc;
    }, {});

    const seriesData = Object.values(groupedData);

    if (currentRange === "histórico") {
      setSeries([{ data: historicalSeriesData }]);
    } else {
      setSeries([{ data: seriesData }]);
    }

    setChartReady(true);
  }, [data, currentRange, selectedGec, selectedChannel]);

  const handleFilterChannels = (value) => {
    setSelectedChannel(value);
    setSelectedGec("Mostrar Todos"); // Set selectedGec to "Mostrar Todos"
    setFilter(value);
  };

  const handleFilterGecs = (value) => {
    setSelectedGec(value);
    setSelectedChannel("Mostrar Todos"); // Set selectedGec to "Mostrar Todos"
    setFilter(value);
  };

  return (
    <Root className="sm:col-span-2 lg:col-span-3 dark flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div
        className="flex justify-end mt-10"
        style={{ backgroundColor: "white", height: 60, alignItems: "center" }}
      >
        <Tabs
          value={tabValue}
          onChange={(ev, value) => setTabValue(value)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          className="-mx-4 min-h-40"
          classes={{
            indicator: "flex justify-center bg-transparent w-full h-full",
          }}
          TabIndicatorProps={{
            children: (
              <Box
                sx={{ bgcolor: "text.disabled" }}
                className="w-full h-full rounded-full opacity-20"
              />
            ),
          }}
          sx={{
            color: "black",
          }}
        >
          {Object.entries(ranges).map(([key, label]) => (
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
              disableRipple
              key={key}
              label={label}
            />
          ))}
        </Tabs>
        <div className="flex items-center justify-center">
          <Box sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="select-label">Seleccionar Canal</InputLabel>
            <Select
              value={selectedChannel}
              onChange={(event) => handleFilterChannels(event.target.value)}
              color="secondary"
              size="small"
            >
              {channelOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="select-label">Seleccionar Gec</InputLabel>
            <Select
              value={selectedGec}
              onChange={(event) => handleFilterGecs(event.target.value)}
              color="secondary"
              size="small"
            >
              {gecOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </div>
      </div>

      <div className="flex flex-col flex-auto h-320" style={{ color: "black" }}>
        {chartReady && series.length > 0 ? (
          <ReactApexChart
            options={chartOptions}
            series={series}
            type={chartOptions.chart.type}
            height={chartOptions.chart.height}
          />
        ) : (
          <div>Loading chart...</div>
        )}
      </div>
    </Root>
  );
}

export default VisitorsOverviewWidget;
