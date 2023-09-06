const data = {
  cardData: [
    {
      usuariosRegistrados: {
        cantidad: 4500,
        trending: false,
        mes: "",
      },
    },
    {
      usuariosActivos: {
        cantidad: 1500,
        trending: false,
        mes: "",
      },
    },
    {
      usuariosNuevos: {
        cantidad: 250,
        mes: "agosto",
        trending: true,
      },
    },
  ],

  users: {
    ranges: { histórico: "Histórico", mes: "Este mes" },
    data: [
      { fecha: "2023-01-01", canal: "emergentes", gec: "plata", usuarios: 50 },
      {
        fecha: "2023-01-01",
        canal: "self service",
        gec: "plata",
        usuarios: 40,
      },
      { fecha: "2023-01-01", canal: "kioscos", gec: "plata", usuarios: 75 },
      { fecha: "2023-01-01", canal: "almacenes", gec: "plata", usuarios: 50 },
      {
        fecha: "2023-01-01",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 40,
      },
      {
        fecha: "2023-01-01",
        canal: "self service",
        gec: "diamante",
        usuarios: 35,
      },
      { fecha: "2023-01-01", canal: "kioscos", gec: "diamante", usuarios: 60 },
      { fecha: "2023-01-01", canal: "emergentes", gec: "platon", usuarios: 25 },
      {
        fecha: "2023-01-01",
        canal: "self service",
        gec: "platon",
        usuarios: 30,
      },
      { fecha: "2023-01-01", canal: "kioscos", gec: "platon", usuarios: 40 },
      /////
      { fecha: "2023-01-15", canal: "emergentes", gec: "plata", usuarios: 50 },
      {
        fecha: "2023-01-15",
        canal: "self service",
        gec: "plata",
        usuarios: 40,
      },
      { fecha: "2023-01-15", canal: "kioscos", gec: "plata", usuarios: 75 },
      { fecha: "2023-01-15", canal: "almacenes", gec: "plata", usuarios: 50 },
      {
        fecha: "2023-01-15",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 40,
      },
      {
        fecha: "2023-01-15",
        canal: "self service",
        gec: "diamante",
        usuarios: 35,
      },
      { fecha: "2023-01-15", canal: "kioscos", gec: "diamante", usuarios: 60 },
      { fecha: "2023-01-15", canal: "emergentes", gec: "platon", usuarios: 25 },
      {
        fecha: "2023-01-15",
        canal: "self service",
        gec: "platon",
        usuarios: 30,
      },
      { fecha: "2023-01-15", canal: "kioscos", gec: "platon", usuarios: 40 },
      ///
      { fecha: "2023-02-01", canal: "emergentes", gec: "plata", usuarios: 120 },
      {
        fecha: "2023-02-01",
        canal: "self service",
        gec: "plata",
        usuarios: 90,
      },
      { fecha: "2023-02-01", canal: "kioscos", gec: "plata", usuarios: 170 },
      { fecha: "2023-02-01", canal: "almacenes", gec: "plata", usuarios: 120 },
      {
        fecha: "2023-02-01",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 70,
      },
      {
        fecha: "2023-02-01",
        canal: "self service",
        gec: "diamante",
        usuarios: 60,
      },
      { fecha: "2023-02-01", canal: "kioscos", gec: "diamante", usuarios: 110 },
      { fecha: "2023-02-01", canal: "emergentes", gec: "platon", usuarios: 40 },
      {
        fecha: "2023-02-01",
        canal: "self service",
        gec: "platon",
        usuarios: 50,
      },
      { fecha: "2023-02-01", canal: "kioscos", gec: "platon", usuarios: 70 },
      { fecha: "2023-03-01", canal: "emergentes", gec: "plata", usuarios: 90 },
      {
        fecha: "2023-03-01",
        canal: "self service",
        gec: "plata",
        usuarios: 100,
      },
      { fecha: "2023-03-01", canal: "kioscos", gec: "plata", usuarios: 130 },
      { fecha: "2023-04-01", canal: "emergentes", gec: "plata", usuarios: 120 },
      {
        fecha: "2023-04-01",
        canal: "self service",
        gec: "plata",
        usuarios: 110,
      },
      { fecha: "2023-04-01", canal: "kioscos", gec: "plata", usuarios: 140 },
      { fecha: "2023-04-01", canal: "almacenes", gec: "plata", usuarios: 130 },
      {
        fecha: "2023-04-01",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 100,
      },
      {
        fecha: "2023-04-01",
        canal: "self service",
        gec: "diamante",
        usuarios: 90,
      },
      { fecha: "2023-04-01", canal: "kioscos", gec: "diamante", usuarios: 120 },
      { fecha: "2023-04-01", canal: "emergentes", gec: "platon", usuarios: 70 },
      {
        fecha: "2023-04-01",
        canal: "self service",
        gec: "platon",
        usuarios: 80,
      },
      { fecha: "2023-04-01", canal: "kioscos", gec: "platon", usuarios: 100 },
      { fecha: "2023-05-01", canal: "emergentes", gec: "plata", usuarios: 80 },
      {
        fecha: "2023-05-01",
        canal: "self service",
        gec: "plata",
        usuarios: 70,
      },
      { fecha: "2023-05-01", canal: "kioscos", gec: "plata", usuarios: 160 },
      { fecha: "2023-05-01", canal: "almacenes", gec: "plata", usuarios: 120 },
      {
        fecha: "2023-05-01",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 90,
      },
      {
        fecha: "2023-05-01",
        canal: "self service",
        gec: "diamante",
        usuarios: 80,
      },
      { fecha: "2023-05-01", canal: "kioscos", gec: "diamante", usuarios: 130 },
      { fecha: "2023-05-01", canal: "emergentes", gec: "platon", usuarios: 60 },
      {
        fecha: "2023-05-01",
        canal: "self service",
        gec: "platon",
        usuarios: 70,
      },
      { fecha: "2023-05-01", canal: "kioscos", gec: "platon", usuarios: 90 },
      ////
      { fecha: "2023-08-01", canal: "emergentes", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-01", canal: "self service", gec: "plata", usuarios: 2 },
      { fecha: "2023-08-01", canal: "kioscos", gec: "plata", usuarios: 1 },
      { fecha: "2023-08-01", canal: "almacenes", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-01", canal: "emergentes", gec: "diamante", usuarios: 1 },
      {
        fecha: "2023-08-01",
        canal: "self service",
        gec: "diamante",
        usuarios: 3,
      },
      { fecha: "2023-08-01", canal: "kioscos", gec: "diamante", usuarios: 3 },
      { fecha: "2023-08-01", canal: "emergentes", gec: "platon", usuarios: 1 },
      {
        fecha: "2023-08-01",
        canal: "self service",
        gec: "platon",
        usuarios: 2,
      },
      { fecha: "2023-08-01", canal: "kioscos", gec: "platon", usuarios: 2 },
      /////
      { fecha: "2023-08-02", canal: "emergentes", gec: "plata", usuarios: 10 },
      { fecha: "2023-08-03", canal: "self service", gec: "plata", usuarios: 7 },
      { fecha: "2023-08-04", canal: "kioscos", gec: "plata", usuarios: 4 },
      { fecha: "2023-08-05", canal: "almacenes", gec: "plata", usuarios: 5 },
      { fecha: "2023-08-05", canal: "emergentes", gec: "diamante", usuarios: 1 },
      {
        fecha: "2023-08-06",
        canal: "self service",
        gec: "diamante",
        usuarios: 2,
      },
      { fecha: "2023-08-06", canal: "kioscos", gec: "diamante", usuarios: 3 },
      { fecha: "2023-08-06", canal: "emergentes", gec: "platon", usuarios: 2 },
      {
        fecha: "2023-08-07",
        canal: "self service",
        gec: "platon",
        usuarios: 3,
      },
      { fecha: "2023-08-07", canal: "kioscos", gec: "platon", usuarios: 2 },
      ////
      { fecha: "2023-08-08", canal: "emergentes", gec: "plata", usuarios: 2 },
      { fecha: "2023-08-08", canal: "self service", gec: "plata", usuarios: 1 },
      { fecha: "2023-08-08", canal: "kioscos", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-09", canal: "almacenes", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-09", canal: "emergentes", gec: "diamante", usuarios: 1 },
      {
        fecha: "2023-08-09",
        canal: "self service",
        gec: "diamante",
        usuarios: 2,
      },
      { fecha: "2023-08-09", canal: "kioscos", gec: "diamante", usuarios: 3 },
      { fecha: "2023-08-09", canal: "emergentes", gec: "platon", usuarios: 1 },
      {
        fecha: "2023-08-10",
        canal: "self service",
        gec: "platon",
        usuarios: 3,
      },
      { fecha: "2023-08-10", canal: "kioscos", gec: "platon", usuarios: 2 },
      /////
      ////
      { fecha: "2023-08-11", canal: "emergentes", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-11", canal: "self service", gec: "plata", usuarios: 2 },
      { fecha: "2023-08-11", canal: "kioscos", gec: "plata", usuarios: 1 },
      { fecha: "2023-08-11", canal: "almacenes", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-11", canal: "emergentes", gec: "diamante", usuarios: 3 },
      {
        fecha: "2023-08-12",
        canal: "self service",
        gec: "diamante",
        usuarios: 2,
      },
      { fecha: "2023-08-12", canal: "kioscos", gec: "diamante", usuarios: 1 },
      { fecha: "2023-08-12", canal: "emergentes", gec: "platon", usuarios: 1 },
      {
        fecha: "2023-08-12",
        canal: "self service",
        gec: "platon",
        usuarios: 3,
      },
      { fecha: "2023-08-12", canal: "kioscos", gec: "platon", usuarios: 2 },
      //
      ////
      { fecha: "2023-08-13", canal: "emergentes", gec: "plata", usuarios: 1 },
      { fecha: "2023-08-13", canal: "self service", gec: "plata", usuarios: 2 },
      { fecha: "2023-08-13", canal: "kioscos", gec: "plata", usuarios: 4 },
      { fecha: "2023-08-14", canal: "almacenes", gec: "plata", usuarios: 3 },
      { fecha: "2023-08-14", canal: "emergentes", gec: "diamante", usuarios: 2 },
      {
        fecha: "2023-08-14",
        canal: "self service",
        gec: "diamante",
        usuarios: 2,
      },
      { fecha: "2023-08-15", canal: "kioscos", gec: "diamante", usuarios: 6 },
      { fecha: "2023-08-16", canal: "emergentes", gec: "platon", usuarios: 10 },
      {
        fecha: "2023-08-17",
        canal: "self service",
        gec: "platon",
        usuarios: 8,
      },
      { fecha: "2023-08-18", canal: "kioscos", gec: "platon", usuarios: 6 },
      //
      ///
      { fecha: "2023-08-19", canal: "emergentes", gec: "plata", usuarios: 7 },
      {
        fecha: "2023-08-19",
        canal: "self service",
        gec: "plata",
        usuarios: 14,
      },
      { fecha: "2023-08-20", canal: "kioscos", gec: "plata", usuarios: 10 },
      { fecha: "2023-08-21", canal: "almacenes", gec: "plata", usuarios: 12 },
      {
        fecha: "2023-08-22",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 11,
      },
      {
        fecha: "2023-08-23",
        canal: "self service",
        gec: "diamante",
        usuarios: 25,
      },
      { fecha: "2023-08-24", canal: "kioscos", gec: "diamante", usuarios: 20 },
      { fecha: "2023-08-25", canal: "emergentes", gec: "platon", usuarios: 10 },
      {
        fecha: "2023-08-26",
        canal: "self service",
        gec: "platon",
        usuarios: 10,
      },
      { fecha: "2023-08-26", canal: "kioscos", gec: "platon", usuarios: 10 },

      ////
      { fecha: "2023-08-27", canal: "emergentes", gec: "plata", usuarios: 15 },
      {
        fecha: "2023-08-28",
        canal: "self service",
        gec: "plata",
        usuarios: 25,
      },
      { fecha: "2023-08-29", canal: "kioscos", gec: "plata", usuarios: 30 },
      { fecha: "2023-08-30", canal: "almacenes", gec: "plata", usuarios: 40 },
      {
        fecha: "2023-08-31",
        canal: "emergentes",
        gec: "diamante",
        usuarios: 30,
      },
      {
        fecha: "2023-08-31",
        canal: "self service",
        gec: "diamante",
        usuarios: 20,
      },

      ////
    ],
  },

  activeUsers: {
    data: [
      {
        fecha: "2023-01-01",
        canal: "emergentes",
        gec: "plata",
        usuario: "Jose Fernandez",
      },
      {
        fecha: "2023-01-01",
        canal: "kioscos",
        gec: "oro",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-02-01",
        canal: "almacenes",
        gec: "diamante",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-02-01",
        canal: "almacenes",
        gec: "oro",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-03-01",
        canal: "emergentes",
        gec: "platon",
        usuario: "Jose Fernandez",
      },
      {
        fecha: "2023-03-01",
        canal: "kioscos",
        gec: "oro",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-04-01",
        canal: "almacenes",
        gec: "platon",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-04-01",
        canal: "almacenes",
        gec: "oro",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-05-01",
        canal: "emergentes",
        gec: "plata",
        usuario: "Jose Fernandez",
      },
      {
        fecha: "2023-08-01",
        canal: "kioscos",
        gec: "oro",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-08-01",
        canal: "almacenes",
        gec: "diamante",
        usuario: "Maria Gonzalez",
      },
      {
        fecha: "2023-08-01",
        canal: "almacenes",
        gec: "oro",
        usuario: "Maria Gonzalez",
      },
    ],
  },

  top10Buyers: {
    list: [
      {
        id: "1195330",
        gec: "diamante",
        cliente: "Yu Peiyu",
        compra: "3380",
        "cliente ": "Yu",
      },
      {
        id: "112585801",
        gec: "bronce",
        cliente: "Tribuna Tres S.A",
        compra: "3125",
        "cliente ": "Tribuna",
      },
      {
        id: "1194325",
        gec: "plata ",
        cliente: "Pereira Rios Ana Graciela",
        compra: "2972",
        "cliente ": "Pereira",
      },
      {
        id: "1195274",
        gec: "diamante",
        cliente: "Zheng Bin",
        compra: "2965",
        "cliente ": "Zheng",
      },

      {
        id: "1195278",
        gec: "diamante",
        cliente: "Aleman Maria Fernanda",
        compra: "2494",
        "cliente ": "Aleman",
      },
      {
        id: "1195233",
        gec: "diamante",
        cliente: "Santos Claudia Daniela",
        compra: "2377",
        "cliente ": "Santos",
      },
      {
        id: "1195309",
        gec: "plata ",
        cliente: "Sosa Mirta Rosana",
        compra: "2192",
        "cliente ": "Sosa",
      },
      {
        id: "1194102",
        gec: "laton",
        cliente: "Capozzoli Sandra",
        compra: "2156",
        "cliente ": "Capozzoli",
      },
      {
        id: "1195154",
        gec: "oro",
        cliente: "Mezzei Mariana A.",
        compra: "2049",
        "cliente ": "Mezzei",
      },
      {
        id: "1195396",
        gec: "plata ",
        cliente: "Fang Zequan",
        compra: "2033",
        "cliente ": "Fang",
      },
    ],
  },
  top10Points: {
    list: [
      {
        id: 1195396,
        gec: "plata",
        puntos: 444,
        cliente: "Fang Zequan",
      },
      {
        id: 1195278,
        gec: "diamante",
        puntos: 416,
        cliente: "Aleman Maria Fernanda",
      },
      {
        id: 1195309,
        gec: "plata",
        puntos: 399,
        cliente: "Sosa Mirta Rosana",
      },
      {
        id: 1196135,
        gec: "oro",
        puntos: 387,
        cliente: "Vazquez Fernando",
      },
      {
        id: 1195274,
        gec: "diamante",
        puntos: 374,
        cliente: "Zheng Bin",
      },
      {
        id: 1196036,
        gec: "bronce",
        puntos: 332,
        cliente: "Rodriguez Zarate Johanna",
      },
      {
        id: 1195330,
        gec: "diamante",
        puntos: 326,
        cliente: "Yu Peiyu",
      },
      {
        id: 1194102,
        gec: "laton",
        cliente: "CAPOZZOLI SANDRA",
        puntos: 321,
        cliente: "Capozzoli Sandra",
      },
      {
        id: 1194325,
        gec: "plata",
        puntos: 318,
        cliente: "Pereira Rios Ana Graciela",
      },

      {
        id: 1195617,
        gec: "plata",
        puntos: 298,
        cliente: "Leites Romina",
      },
    ],
  },
  top10Canjes: {
    list: [
      {
        id: 112585801,
        gec: "bronce",
        cliente: "TRIBUNA TRES S.A",
        canjes: 10,
        "cliente - id": "Tribuna",
      },
      {
        id: 1195278,
        gec: "diamante",
        cliente: "ALEMAN MARIA FERNANDA",
        canjes: 10,
        "cliente - id": "Aleman",
      },
      {
        id: 1195309,
        gec: "plata",
        cliente: "SOSA MIRTA ROSANA",
        canjes: 10,
        "cliente - id": "Sosa",
      },
      {
        id: 1195797,
        gec: "laton",
        cliente: "TALAVERA JUANA",
        canjes: 10,
        "cliente - id": "Talavera",
      },
      {
        id: 1196036,
        gec: "bronce",
        cliente: "RODRIGUEZ ZARATE JOHANNA",
        canjes: 10,
        "cliente - id": "Rodriguez",
      },
      {
        id: 1195461,
        gec: "diamante",
        cliente: "HELADOS BABY POP ARTESANO SRL",
        canjes: 9,
        "cliente - id": "Helados",
      },
      {
        id: 1195274,
        gec: "diamante",
        cliente: "ZHENG BIN",
        canjes: 9,
        "cliente - id": "Zheng",
      },
      {
        id: 1195924,
        gec: "bronce",
        cliente: "ARANDA ANDRES ANGEL",
        canjes: 9,
        "cliente - id": "Aranda",
      },
      {
        id: 1196071,
        gec: "bronce",
        cliente: "TORRES NOEMI",
        canjes: 9,
        "cliente - id": "Torres",
      },
      {
        id: 1196145,
        gec: "laton",
        cliente: "CORTES MILAGROS",
        canjes: 9,
        "cliente - id": "Cortes",
      },
    ],
  },
  top10SKU: {
    list: [
      { sku: 32, producto: "Fanta pet 500 x 6", pedidos: 45 },
      { sku: 2809, producto: "Coca-cola 500ml x6", pedidos: 45 },
      { sku: 44, producto: "Coca-cola light PET 600ml x6", pedidos: 44 },
      { sku: 292, producto: "Sprite  Retornable PET 2L x8", pedidos: 36 },
      {
        sku: 2743,
        producto: "Coca-cola sin azucares 1.5L x8",
        pedidos: 34,
      },
      {
        sku: 3083,
        producto: "Coca-cola sin azúcar 473ml x6 Byte",
        pedidos: 33,
      },
      { sku: 13, producto: "Coca-cola PET 1.5L x8", pedidos: 30 },
      { sku: 2099, producto: "Schweppes pomelo 2.25L x8", pedidos: 30 },
      { sku: 39, producto: "Fanta naranja 2.25L x8", pedidos: 22 },
      { sku: 2649, producto: "Coca-cola PET 1.75L x8", pedidos: 21 },
    ],
  },

  imperdibles_participantes: {
    ranges: { histórico: "Anual", mes: "Este mes" },
    data: [
      { fecha: "2023-01-01", canal: "kioscoss", gec: "diamante", active: false, femsa_id: 300116185 },
      { fecha: "2023-01-01", canal: "kioscoss", gec: "laton", active: true, femsa_id: 300116186 },
      { fecha: "2023-02-01", canal: "emergentes", gec: "laton", active: false, femsa_id: 300116187 },
      { fecha: "2023-02-02", canal: "self service", gec: "plata", active: true, femsa_id: 300116188 },
      { fecha: "2023-02-03", canal: "kioscoss", gec: "diamante", active: true, femsa_id: 300116189 },
      { fecha: "2023-03-01", canal: "kioscoss", gec: "diamante", active: false, femsa_id: 300116190 },
      { fecha: "2023-08-01", canal: "almaceneses", gec: "oro", active: true, femsa_id: 300116191 },
      { fecha: "2023-08-02", canal: "self service", gec: "plata", active: true, femsa_id: 300116192 },
      { fecha: "2023-08-03", canal: "almaceneses", gec: "diamante", active: false, femsa_id: 300116193 },
    ],
  },

  imperdibles_participantesCompletaron: {
    ranges: { histórico: "Anual", mes: "Este mes" },
    data: [
      { fecha: "2023-01-01", canal: "self service", gec: "plata", cantidad: 10 },
      { fecha: "2023-01-15", canal: "emergentes", gec: "laton", cantidad: 5 },
      { fecha: "2023-01-28", canal: "almaceneses", gec: "oro", cantidad: 2 },
      { fecha: "2023-08-01", canal: "almaceneses", gec: "laton", cantidad: 10 },
      { fecha: "2023-08-09", canal: "kioscoss", gec: "oro", cantidad: 5 },
    ],
  },
  //cantidad es la totalidad de paticipantes del canal(icluido los gecs)
  imperdibles_volumenTotalvsAlcanzado: {
    ranges: { histórico: "Anual", mes: "Este mes" },

    data: [
      {
        month: 1,
        year: 2023,
        name: "enero 2023",
        canal: "kioscos",
        gec: {
          diamante: { cantidad: 3 },
          plata: { cantidad: 0 },
          laton: { cantidad: 0 },
          oro: { cantidad: 2 },
        },
        objetivo: 5,
        puntos: 100,
        productos: [84461, 84462],
      },
      {
        month: 3,
        year: 2023,
        name: "marzo 2023",
        canal: "self service",
        gec: {
          diamante: { cantidad: 0 },
          plata: { cantidad: 0 },
          laton: { cantidad: 0 },
          oro: { cantidad: 4 },
        },
        objetivo: 6,
        puntos: 120,
        productos: [99956, 84462],
      },
      {
        month: 4,
        year: 2023,
        name: "abril 2023",
        canal: "emergentes",
        gec: {
          diamante: { cantidad: 0 },
          plata: { cantidad: 0 },
          laton: { cantidad: 10 },
          oro: { cantidad: 0 },
        },
        objetivo: 7,
        puntos: 140,
        productos: [84462, 84461],
      },
      {
        month: 7,
        year: 2023,
        name: "julio 2023",
        canal: "kioscos",
        gec: {
          diamante: { cantidad: 3 },
          plata: { cantidad: 2 },
          laton: { cantidad: 3 },
          oro: { cantidad: 2 },
        },
        objetivo: 5,
        puntos: 100,
        productos: [84461, 84462],
      },
    ],
  },
  //////
  misiones_participantes: {
    ranges: { histórico: "Anual", mes: "Este mes" },
    data: [
      { fecha: "2023-01-01", canal: "almaceneses", gec: "diamante", active: false, femsa_id: 300116185 },
      { fecha: "2023-01-01", canal: "kioscoss", gec: "laton", active: true, femsa_id: 300116186 },
      { fecha: "2023-02-01", canal: "emergentes", gec: "laton", active: false, femsa_id: 300116187 },
      { fecha: "2023-02-02", canal: "self service", gec: "plata", active: true, femsa_id: 300116188 },
      { fecha: "2023-02-03", canal: "almaceneses", gec: "diamante", active: true, femsa_id: 300116189 },
      { fecha: "2023-03-01", canal: "almaceneses", gec: "diamante", active: false, femsa_id: 300116190 },
      { fecha: "2023-04-01", canal: "self service", gec: "oro", active: true, femsa_id: 300116191 },
      { fecha: "2023-04-02", canal: "self service", gec: "plata", active: true, femsa_id: 300116192 },
      { fecha: "2023-05-03", canal: "almaceneses", gec: "diamante", active: false, femsa_id: 300116193 },
      { fecha: "2023-06-01", canal: "self service", gec: "oro", active: true, femsa_id: 300116191 },
      { fecha: "2023-08-02", canal: "self service", gec: "plata", active: true, femsa_id: 300116192 },
      { fecha: "2023-08-03", canal: "almaceneses", gec: "diamante", active: false, femsa_id: 300116193 },
    ],
  },

  misiones_participantesCompletaron: {
    ranges: { histórico: "Anual", mes: "Este mes" },
    data: [
      { fecha: "2023-01-01", canal: "self service", gec: "plata", cantidad: 10 },
      { fecha: "2023-01-15", canal: "emergentes", gec: "laton", cantidad: 5 },
      { fecha: "2023-01-28", canal: "kioscoss", gec: "oro", cantidad: 2 },
      { fecha: "2023-02-01", canal: "self service", gec: "plata", cantidad: 10 },
      { fecha: "2023-03-15", canal: "emergentes", gec: "laton", cantidad: 5 },
      { fecha: "2023-04-28", canal: "kioscoss", gec: "oro", cantidad: 2 },
      { fecha: "2023-06-08", canal: "emergentes", gec: "plata", cantidad: 15 },
      { fecha: "2023-08-01", canal: "self service", gec: "laton", cantidad: 10 },
      { fecha: "2023-08-09", canal: "almaceneses", gec: "oro", cantidad: 5 },
    ],
  },
  //cantidad es la totalidad de paticipantes del canal(icluido los gecs)
  misiones_volumenTotalvsAlcanzado: {
    ranges: { histórico: "Anual", mes: "Este mes" },
    data: [
      {
        month: 1,
        year: 2023,
        name: "enero 2023",
        canal: "almaceneses",
        gec: {
          diamante: { cantidad: 3 },
          plata: { cantidad: 0 },
          laton: { cantidad: 0 },
          oro: { cantidad: 2 },
        },
        objetivo: 5,
        puntos: 100,
        productos: [84461, 84462],
      },
      {
        month: 3,
        year: 2023,
        name: "marzo 2023",
        canal: "self service",
        gec: {
          diamante: { cantidad: 0 },
          plata: { cantidad: 0 },
          laton: { cantidad: 0 },
          oro: { cantidad: 4 },
        },
        objetivo: 6,
        puntos: 120,
        productos: [99956, 84462],
      },
      {
        month: 4,
        year: 2023,
        name: "abril 2023",
        canal: "emergentes",
        gec: {
          diamante: { cantidad: 0 },
          plata: { cantidad: 0 },
          laton: { cantidad: 10 },
          oro: { cantidad: 0 },
        },
        objetivo: 7,
        puntos: 140,
        productos: [84462, 84461],
      },
      {
        month: 5,
        year: 2023,
        name: "mayo 2023",
        canal: "self service",
        gec: {
          diamante: { cantidad: 0 },
          plata: { cantidad: 0 },
          laton: { cantidad: 0 },
          oro: { cantidad: 4 },
        },
        objetivo: 6,
        puntos: 120,
        productos: [99956, 84462],
      },
      {
        month: 6,
        year: 2023,
        name: "junio 2023",
        canal: "emergentes",
        gec: {
          diamante: { cantidad: 0 },
          plata: { cantidad: 0 },
          laton: { cantidad: 10 },
          oro: { cantidad: 0 },
        },
        objetivo: 7,
        puntos: 140,
        productos: [84462, 84461],
      },
      {
        month: 7,
        year: 2023,
        name: "julio 2023",
        canal: "self service",
        gec: {
          diamante: { cantidad: 3 },
          plata: { cantidad: 2 },
          laton: { cantidad: 3 },
          oro: { cantidad: 2 },
        },
        objetivo: 5,
        puntos: 100,
        productos: [84461, 84462],
      },
    ],
  },

  competencias: {
    datos: [
      {
        nombre: "Octavos | Agosto",
        puntos: [1500],
      },
      {
        nombre: "Cuartos | Septiebre",
        puntos: [1500],
      },
      {
        nombre: "Semi | Octubre",
        puntos: [2500],
      },

      {
        nombre: "Octavos | Noviembre",
        puntos: [1500],
      },
      {
        nombre: "Cuartos | Diciembre",
        puntos: [1500],
      },
      {
        nombre: "Semi | Enero",
        puntos: [2500],
      },

      {
        nombre: "Octavos | Marzo",
        puntos: [1000],
      },
      {
        nombre: "Cuartos | Abril",
        puntos: [1500],
      },
      {
        nombre: "Semi | Mayo",
        puntos: [2500],
      },
      {
        nombre: "Octavos | Junio",
        puntos: [4000],
      },
      {
        nombre: "Cuartos | Julio",
        puntos: [2000],
      },
    ],
  },

  competencias_ranking: {
    data: [
      {
        month: "noviembre",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "enero",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "noviembre",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "ranking final",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "noviembre",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "enero",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "noviembre",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
      {
        month: "ranking final",
        list: [
          {
            id: "1195330",
            client: "Yu Peiyu",
            points: 2370,
          },
          {
            id: "112585801",
            client: "Tribuna Tres S.A",
            points: 2340,
          },
          {
            id: "1194325",
            client: "Pereira Rios Ana Graciela",
            points: 2310,
          },
          {
            id: "1195274",
            client: "Zheng Bin",
            points: 2280,
          },
          {
            id: "1195278",
            client: "Aleman Maria Fernanda",
            points: 2250,
          },
          {
            id: "1195233",
            client: "Santos Claudia Daniela",
            points: 2220,
          },
          {
            id: "1195309",
            client: "Sosa Mirta Rosana",
            points: 2190,
          },
          {
            id: "1194102",
            client: "Capozzoli Sandra",
            points: 2160,
          },
          {
            id: "1195154",
            client: "Mezzei Mariana A.",
            points: 2130,
          },
          {
            id: "1195396",
            client: "Fang Zequan",
            points: 2100,
          },
          {
            id: "1196001",
            client: "Nuevo Cliente 1",
            points: 2070,
          },
          {
            id: "1196002",
            client: "Nuevo Cliente 2",
            points: 2040,
          },
          {
            id: "1196003",
            client: "Nuevo Cliente 3",
            points: 2010,
          },
          {
            id: "1196004",
            client: "Nuevo Cliente 4",
            points: 1980,
          },
          {
            id: "1196005",
            client: "Nuevo Cliente 5",
            points: 1950,
          },
          {
            id: "1196006",
            client: "Nuevo Cliente 6",
            points: 1920,
          },
          {
            id: "1196007",
            client: "Nuevo Cliente 7",
            points: 1890,
          },
          {
            id: "1196008",
            client: "Nuevo Cliente 8",
            points: 1860,
          },
          {
            id: "1196009",
            client: "Nuevo Cliente 9",
            points: 1830,
          },
          {
            id: "1196010",
            client: "Nuevo Cliente 10",
            points: 1800,
          },
        ],
      },
    ],
  },

  ///////

  canjes_clientes: {
    ranges: { histórico: "Anual", mes: "Este mes" },
    data: [
      { fecha: "2023-01-01", canjes: 1, usuario: "Maria Gonzalez" },
      { fecha: "2023-01-15", canjes: 3, usuario: "Juan Perez" },
      { fecha: "2023-02-10", canjes: 2, usuario: "Ana Martinez" },
      { fecha: "2023-02-22", canjes: 1, usuario: "Carlos Rodriguez" },
      { fecha: "2023-03-05", canjes: 2, usuario: "Luisa Ramirez" },
      { fecha: "2023-03-20", canjes: 4, usuario: "Pedro Sanchez" },
      { fecha: "2023-04-02", canjes: 2, usuario: "Laura Torres" },
      { fecha: "2023-04-15", canjes: 3, usuario: "Roberto Lopez" },
      { fecha: "2023-05-01", canjes: 1, usuario: "Isabel Jimenez" },
      { fecha: "2023-05-18", canjes: 2, usuario: "Miguel Garcia" },
      { fecha: "2023-06-07", canjes: 3, usuario: "Elena Fernandez" },
      { fecha: "2023-06-20", canjes: 2, usuario: "David Torres" },
      { fecha: "2023-08-04", canjes: 1, usuario: "Sofia Ramirez" },
      { fecha: "2023-08-12", canjes: 2, usuario: "Carlos Sanchez" },
    ],
  },

  productos_canjeados: {
    list: [
      {
        nombre: "Fanta",
        presentacion: "pet 1.5",
        cantidad: 4,
      },
      {
        nombre: "ades",
        presentacion: "1 litro",
        cantidad: 3,
      },
      {
        nombre: "Monster",
        presentacion: "lata 473",
        cantidad: 2,
      },
      {
        nombre: "coca sin azúcar",
        presentacion: "pet 500",
        cantidad: 1,
      },
      {
        nombre: "powerade",
        presentacion: "pet 500",
        cantidad: 1,
      },
      {
        nombre: "cepita",
        presentacion: "tetra 1 litro",
        cantidad: 1,
      },
      {
        nombre: "sprite",
        presentacion: "1.75",
        cantidad: 1,
      },
      {
        nombre: "smart water",
        presentacion: "500cc",
        cantidad: 1,
      },
      {
        nombre: "aquarius manzana x",
        presentacion: "500cc",
        cantidad: 1,
      },
      {
        nombre: "schweppes",
        presentacion: "1.5",
        cantidad: 1,
      },
    ],
  },
};

export default data;
