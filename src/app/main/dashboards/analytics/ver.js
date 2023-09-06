const data = {
    activeUsers: {
      series: [
        {
          name: "Usuarios Activos",
          data: [40, 20, 20, 30, 15],
        },
        {
          name: "Usuarios Nuevos",
          data: [5, 6, 8, 3, 5],
        },
      ],
    },

    users: {
      ranges: { histórico: "Histórico", mes: "Este mes" },
      series: {
        histórico: [
          {
            name: "Histórico",
            data: [40, 26, 20, 30, 15],
          },
        ],
        mes: [
          {
            name: "Mes",
            data: [5, 6, 8, 3, 7],
          },
        ],
      },
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
        { sku: 18, pedidos: 45 },
        { sku: 22, pedidos: 45 },
        { sku: 34, pedidos: 44 },
        { sku: 35, pedidos: 36 },
        { sku: 23, pedidos: 34 },
        { sku: 15, pedidos: 33 },
        { sku: 13, pedidos: 30 },
        { sku: 16, pedidos: 30 },
        { sku: 39, pedidos: 22 },
        { sku: 25, pedidos: 21 },
      ],
    },

    participantesImperdibles: {
      series: [3000, 1500],
    },

    imperdibles_participantesCompletaron: {
      series: [450, 1050],
    },
    imperdibles_volumenTotalvsAlcanzado: {
      series: [
        {
          name: "Volumen Total",
          data: [1000],
        },
        {
          name: "Media alcanzada",
          data: [422.71],
        },
      ],
    },
    //////
    participantesMisiones: {
      series: [3000, 2040],
    },
    misiones_participantesCompletaron: {
      series: [
        {
          name: "compeltado",
          data: [1, 2, 3, 4, 1],
        },
        { name: "compeltado", data: [9, 8, 9, 6, 9] },
      ],
    },
    misiones_volumenTotalvsAlcanzado: {
      series: [
        {
          name: "Volumen Total",
          data: [1300],
        },
        {
          name: "Media alcanzada",
          data: [144],
        },
      ],
    },
    ///////
    canjes_clientes: {
      series: [
        {
          name: "Clientes que cajeraron",
          data: [16],
        },
        {
          name: "Canjes realizados",
          data: [20],
        },
      ],
    },
    productos_canjeados: {
      list: [
        {
          "nombre": "Fanta",
          "presentacion": "pet 1.5",
          "cantidad": 4
        },
        {
          "nombre": "ades",
          "presentacion": "1 litro",
          "cantidad": 3
        },
        {
          "nombre": "Monster",
          "presentacion": "lata 473",
          "cantidad": 2
        },
        {
          "nombre": "coca sin azúcar",
          "presentacion": "pet 500",
          "cantidad": 1
        },
        {
          "nombre": "powerade",
          "presentacion": "pet 500",
          "cantidad": 1
        },
        {
          "nombre": "cepita",
          "presentacion": "tetra 1 litro",
          "cantidad": 1
        },
        {
          "nombre": "sprite",
          "presentacion": "1.75",
          "cantidad": 1
        },
        {
          "nombre": "smart water",
          "presentacion": "500cc",
          "cantidad": 1
        },
        {
          "nombre": "aquarius manzana x",
          "presentacion": "500cc",
          "cantidad": 1
        },
        {
          "nombre": "schweppes",
          "presentacion": "1.5",
          "cantidad": 1
        }
      ]
    }
    

  };