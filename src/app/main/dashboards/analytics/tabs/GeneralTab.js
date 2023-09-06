import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "@lodash";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { getWidgets, selectWidgets } from "../store/widgetsSlice";
import ListCard from "../../components/ListCard";
import VisitorsOverviewWidget from "../widgets/VisitorsOverviewWidget";
import Top10 from "../widgets/Top10";
import ColumnChartUsers from "../widgets/ColumnChartUsers";
import Card from "../../components/Card";

function GeneralTab() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);
 
  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  const data = useMemo(() => {
    if (_.isEmpty(widgets)) {
      return [];
    }
  
    return [
      {
        type: "compra",
        top10List: widgets.top10Buyers,
        title: "TOP 10 de los que más compraron",
      },
      {
        type: "puntos",
        top10List: widgets.top10Points,
        title: "TOP 10 de los que poseen más puntos",
      },
      {
        type: "canjes",
        top10List: widgets.top10Canjes,
        title: "TOP 10 de los que poseen más canjes",
      },
      {
        top10List: widgets.top10SKU,
        title: "TOP 10 de los SKU más pedidos",
      },
    ];
  }, [widgets]);

  return (
    <FusePageSimple
      //   header={<AnalyticsDashboardAppHeader />}
      content={
        <>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            };

            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };

            return (
              !_.isEmpty(widgets) && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 w-full p-24 md:p-32"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >

{widgets.cardData.map((item, index) => {
                    let mensaje = "";
                    const key = Object.keys(item)[0];
                    if (key === "usuariosRegistrados") {
                      mensaje = "Usuarios registrados";
                    } else if (key === "usuariosActivos") {
                      mensaje = "Usuarios activos";
                    } else if (key === "usuariosNuevos") {
                      mensaje = "Usuarios nuevos";
                    }
                    return (
                      <motion.div
                      key={index}
                        variants={item}
                        className="sm:col-span-2 lg:col-span-1 "
                      >
                        <Card
                          title={mensaje}
                          cantidad={item[key].cantidad}
                          trending={item[key].trending}
                          mes={item[key].mes}
                        />
                      </motion.div>
                    );
                  })}

                  <motion.div
                    variants={item}
                    className="sm:col-span-2 lg:col-span-4"
                  >
                    <VisitorsOverviewWidget />
                  </motion.div>

                  <motion.div
                    variants={item}
                    className="sm:col-span-2 lg:col-span-4 "
                  >
                    <ColumnChartUsers
                      title_y="usuarios"
                      stacked={false}
                      data={widgets.activeUsers.data}
                      categories={[
                        "kioscos", "almacenes","self service", "emergentes"
                      ]}
                      title={"Usuarios activos vs nuevos "}
                    />
                  </motion.div>

                  {data.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="sm:col-span-2 lg:col-span-2 "
                    >
                      <ListCard
                        type={item.type}
                        top10List={item.top10List}
                        title={item.title}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )
            );
          }, [widgets])}
        </>
      }
    />
  );
}

export default GeneralTab;
