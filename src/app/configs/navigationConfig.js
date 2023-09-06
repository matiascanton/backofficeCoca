import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import authRoles from '../auth/authRoles';

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  
  {
    id: 'appsf',
    title: 'PANEL ADMINISTRADOR',
    // subtitle: 'Custom made application designs',
    type: "collapse",
    icon: 'heroicons-outline:home',
    // translate: 'APPLICATIONS',
   // auth: authRoles.admin, 
    children: [
      {
        id: "dashboards",
        title: "Dashboard",
        //    translate: "notifications",
        type: "item",
        icon: "heroicons-outline:presentation-chart-bar",
        url: "dashboards",
        end: true,
      },
      {
        id: "uploads",
        title: "Carga de Datos",
        type: "item",
        icon: "heroicons-outline:upload",
        url: "uploads",
        end: true,
      },

      {
        id: 'appsclien',
        title: 'APP CLIENTES',
        // subtitle: 'Custom made application designs',
        type: "collapse",
        icon: 'heroicons-outline:home',
        // translate: 'APPLICATIONS',
        children: [
          {
            id: "clientsMetrics",
            title: "Clientes",
            type: "item",
            icon: "heroicons-outline:speakerphone",
            url: "clients",
            end: true,
          },
          {
            id: "competenciaReports",
            title: "Competencias",
            type: "item",
            icon: "heroicons-outline:shopping-cart",
            url: "competenciaReports",
            end: true,
          },
          {
            id: "prizes",
            title: "Catálogo de Premios",
            type: "item",
            icon: "heroicons-outline:shopping-cart",
            url: "prizes",
            end: true,
          },
          {
            id: "points",
            title: "Puntos Adicionales",
            type: "item",
            icon: "heroicons-outline:shopping-cart",
            url: "points",
            end: true,
          },
          {
            id: "stocks",
            title: "Stock",
            type: "item",
            icon: "heroicons-outline:shopping-cart",
            url: "stocks",
            end: true,
          },
          {
            id: "canjes",
            title: "Canjes",
            type: "item",
            icon: "heroicons-outline:switch-horizontal",
            url: "canjes",
            end: true,
          },
        ]
      },
      {
        id: "checkPhotos",
        title: "Validar Imagenes",
        type: "item",
        icon: "heroicons-outline:clipboard-check",
        url: "checkPhotos",
        end: true,
      },

    ]
  },

  {
    id: 'divider-1',
    type: 'divider',
  },
  {
    id: "clients",
    title: "CLIENTES",
    // translate: "Clients",
    //auth: authRoles.admin,
    type: "item",
    icon: "heroicons-outline:user-group",
    url: "clients",
    end: true,
  },
  {
    id: 'divider-2',
    type: 'divider',
  },
  {
    id: 'appsc',
    title: 'APP CLIENTES',
    // subtitle: 'Custom made application designs',
    type: "collapse",
    icon: 'heroicons-outline:home',
    // translate: 'APPLICATIONS',
    children: [
      {
        id: "sliders",
        title: "Banner Home",
        //    translate: "Sliders",
        type: "item",
        icon: "heroicons-outline:collection",
        url: "sliders",

      },
      {
        id: "notifications",
        title: "Notificaciones",
        //    translate: "notifications",
        type: "item",
        icon: "heroicons-outline:speakerphone",
        url: "notifications",
        end: true,
      },
      {
        id: "redentions",
        title: "Redenciones QR",
        //    translate: "notifications",
        type: "item",
        icon: "heroicons-outline:qrcode",
        url: "redentions",
        end: true,
      },
      {
        id: "News",
        title: "Novedades",
        //    translate: "News",
        type: "item",
        icon: "heroicons-outline:newspaper",
        url: "news",
        end: true,
      },
      {
        id: "misions",
        title: "Misiones",
        type: "item",
        icon: "heroicons-outline:tag",
        url: "misions",
        end: true,
      },
      {
        id: 'bonus',
        title: 'Bonus',
        type: "collapse",
        icon: 'heroicons-outline:home',
        children: [
          {
            id: "bonusesQuestion",
            title: "Bonus Preguntas",
            type: "item",
            icon: "heroicons-outline:lightning-bolt",
            url: "bonuses",
            end: true,
          },
          {
            id: "bonusExecutions",
            title: "Bonus Camara",
            type: "item",
            icon: "heroicons-outline:lightning-bolt",
            url: "bonusExecutions",
            end: true,
          },
        ]
      },
      {
        id: "imperdibles",
        title: "Imperdibles",
        // translate: "Clients",
        type: "item",
        icon: "heroicons-outline:eye",
        url: "imperdibles",
        end: true,
      },
      {
        id: "tricampeons",
        title: "Competencia",
        // translate: "Clients",
        type: "item",
        icon: "heroicons-outline:user-group",
        url: "tricampeons",
        end: true,
      },
      {
        id: "bingos-image",
        title: "Imágenes",
        type: "item",
        icon: "heroicons-outline:photograph",
        url: "bingos/uploadImage",
        end: true,
      },
    ]
  },


  /*{
    id: "bingos",
    title: "Bingos",
    translate: "Bingos",
    type: "collapse",
    icon: "heroicons-outline:puzzle",
    //end: true,
    children: [
      {
        id: "sliders",
        title: "Banner Home",
        //    translate: "Sliders",
        type: "item",
        icon: "heroicons-outline:collection",
        url: "sliders",
      },
 
      {
        id: "bingos",
        title: "Competencia",
        //  translate: "Bingos",
        type: "collapse",
        icon: "heroicons-outline:puzzle",
        //end: true,
        children: [
          {
            id: "bingos",
            title: "Bingos",
            type: "item",
            url: "bingos",
            end: true,
          },
        ],
      },
      {
        id: "opportunities",
        title: "Oportunidades",
        // translate: "Clients",
        type: "item",
        icon: "heroicons-outline:sparkles",
        //  url: "tricampeons",
        end: true,
      },
 
      {
        id: "returnable",
        title: "Mis Retornables",
        // translate: "Clients",
        type: "item",
        icon: "heroicons-outline:refresh",
        //  url: "tricampeons",
        end: true,
      },
    ]
  },*/
  {
    id: 'divider-3',
    type: 'divider',
  },
  {
    id: 'appsco',
    title: 'APP CONSUMIDORES',
    // subtitle: 'Custom made application designs',
    type: "collapse",
    icon: 'heroicons-outline:home',
    // translate: 'APPLICATIONS',
    children: [
      {
        id: "sliders",
        title: "Banner Home",
        //    translate: "Sliders",
        type: "item",
        icon: "heroicons-outline:collection",
        url: "sliders",

      },
      {
        id: "coupons",
        title: "Cupones",
        //   translate: "Coupons",
        type: "item",
        icon: "heroicons-outline:tag",
        url: "coupons",
        end: true,
      },
      {
        id: "promo",
        title: "Promociones",
        //    translate: "notifications",
        type: "item",
        icon: "heroicons-outline:gift",
        url: "promo",
        end: true,
      },
    ]
  },
  {
    id: 'divider-4',
    type: 'divider',
  },
  {
    id: "web",
    title: "WEB COMERCIALES",
    // translate: "Clients",
    type: "item",
    icon: "heroicons-outline:view-grid",
    // url: "clients",
    end: true,
  },
  {
    id: 'divider-5',
    type: 'divider',
  },
  {
    id: "metrics",
    title: "METRICAS",
    // translate: "Clients",
    type: "item",
    icon: "heroicons-outline:chart-pie",
    //url: "clients",
    end: true,
  },
  {
    id: 'divider-6',
    type: 'divider',
  },
  {
    id: "wallet",
    title: "BILLETERA VIRTUAL",
    // translate: "Clients",
    type: "item",
    icon: "heroicons-outline:currency-dollar",
    //url: "clients",
    end: true,
  },
  {
    id: 'divider-7',
    type: 'divider',
  },
  {
    id: "config",
    title: "CONFIGURACION",
    //translate: "Bingos",
    type: "collapse",
    icon: "heroicons-outline:cog",
    //end: true,
    children: [
      {
        id: "users",
        title: "Usuarios",
        //translate: "Users",
        type: "item",
        url: "users",
        end: true,
      },
      {
        id: "roles",
        title: "Perfiles",
        //translate: "Users",
        type: "item",
        url: "roles",
        end: true,
      },
    ],
  },
  {
    id: 'divider-8',
    type: 'divider',
  },
  {
    id: "logout",
    title: "SALIR",
    icon: "heroicons-outline:logout",
    url:"sign-out",
    type: "item",
    end: true,
   
  },
];

export default navigationConfig;
