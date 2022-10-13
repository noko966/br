
export const winningBetRace = [
  {
    A: 5000,
    CN: "AMD",
    D: "2021-10-25T13:19:36Z",
    FT: 1,
    GI: null,
    GN: "",
    GV: 0,
    P: 1,
    PT: 1,
    TED: "2021-10-26T13:00:00Z",
    TSD: "2021-10-25T13:00:00Z"
  },
  {
    A: 8000,
    CN: "AMD",
    D: "2021-10-25T13:19:36Z",
    FT: 1,
    GI: null,
    GN: "",
    GV: 0,
    P: 1,
    PT: 1,
    TED: "2021-10-26T13:00:00Z",
    TSD: "2021-10-25T13:00:00Z"
  },
];
export const winningBetRaceData = [{"TSD":"2022-06-02T11:00:00Z","TED":"2022-06-13T11:57:00Z","D":"2022-06-14T11:00:00Z","FT":2,"P":1,"A":45000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":319828},{"TSD":"2022-06-02T11:00:00Z","TED":"2022-06-13T11:57:00Z","D":"2022-06-07T11:00:00Z","FT":1,"P":2,"A":4500,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":112428},{"TSD":"2022-06-02T11:00:00Z","TED":"2022-06-13T11:57:00Z","D":"2022-06-11T11:00:00Z","FT":1,"P":3,"A":4500,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":103000},{"TSD":"2022-06-02T11:00:00Z","TED":"2022-06-13T11:57:00Z","D":"2022-06-04T11:00:00Z","FT":1,"P":4,"A":5000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":68000},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160},{"TSD":"2021-07-14T08:30:00Z","TED":"2021-07-22T08:16:00Z","D":"2021-07-15T08:30:00Z","FT":1,"P":5,"A":1400000,"FBA":0,"CN":"AMD","PT":1,"GN":"","GV":0,"GI":null,"PNT":1160}];

export const betRaceTypes = {
  current: [
    {
      name: 'Top matches',
      type: 1,  // daily, monthly, daily and monthly
      startDate: '2021-03-25T13:00:00Z',
      endDate: '2021-10-25T13:00:00Z',
      id: 1
    }, {
      name: 'League',
      type: 2,  // daily, monthly, daily and monthly
      startDate: '2020-03-25T13:00:00Z',
      endDate: '2020-10-25T13:00:00Z',
      id: 2
    }
  ],
  upcoming: [
    {
      name: 'League 2',
      type: 1,  // daily, monthly, daily and monthly
      startDate: '2021-03-25T13:00:00Z',
      endDate: 'Tue Aug 05 2022 16:21:55 GMT+0400 (Armenia Standard Time)',
      id: 1
    }, {
      name: 'League 3',
      type: 3,  // daily, monthly, daily and monthly
      startDate: '2020-03-25T13:00:00Z',
      endDate: 'Tue Aug 25 2022 16:21:55 GMT+0400 (Armenia Standard Time)',
      id: 2
    }
  ],
  last: [
    {
      name: 'League 4',
      type: 1,  // daily, monthly, daily and monthly
      startDate: '2021-03-25T13:00:00Z',
      endDate: '2021-10-25T13:00:00Z',
      id: 1
    }
  ],
}

export const betRaceDetailsData = {
  prizeDetails:  {
    daily: {
      winnersCount: 6,
      // lottery: 200000,
      // giftIcons: [
      //
      // ],
      startDate: '2021-03-25T13:00:00Z',
      endDate: '2022-08-02T11:00:00Z',
      prizes: [
        {
          type: 1, // real money
          amount: 5000,
          giftName: '',
          giftIcon: ''
        },
        {
          type: 2, // gift
          amount: null,
          giftName: 'fridge',
          giftIcon: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
        },
        {
          type: 3, // bonus - free bet
          amount: 3000,
          giftName: '',
          giftIcon: ''
        },
      ]
    },
    final: {
      winnersCount: 3,
      startDate: '2021-03-25T13:00:00Z',
      endDate: '2022-09-25T13:00:00Z',
      prizes: [
        {
          type: 1, // real money
          amount: 5000,
          giftName: '',
          giftIcon: '',
          id: 1
        },
        {
          type: 2, // gift
          amount: null,
          giftName: 'fridge',
          giftIcon: 'base64 icon',
          id: 2
        },
        {
          type: 3, // bonus - free bet
          amount: 3000,
          giftName: '',
          giftIcon: '',
          id: 3
        },
      ]
    },
    upcoming: [
      {
        winnersCount: 3,
        startDate: '2021-03-25T13:00:00Z',
        endDate: '2021-03-25T13:00:00Z',
        prizes: [
          {
            type: 1, // real money
            amount: 5000,
            giftName: '',
            giftIcon: '',
            id: 1
          },
          {
            type: 2, // gift
            amount: null,
            giftName: 'fridge',
            giftIcon: 'base64 icon',
            id: 2
          },
          {
            type: 3, // bonus - free bet
            amount: 3000,
            giftName: '',
            giftIcon: '',
            id: 3
          },
          {
            winnersCount: 2,
            startDate: '2021-03-25T13:00:00Z',
            endDate: '2021-03-25T13:00:00Z',
            prizes: [
              {
                type: 1, // real money
                amount: 5000,
                giftName: '',
                giftIcon: '',
                id: 1
              },
              {
                type: 2, // gift
                amount: null,
                giftName: 'fridge',
                giftIcon: 'base64 icon',
                id: 2
              }
            ]
          }
        ]
      }
    ]
  },
  conditions: {
    PFT: 1, // pointsFromType pure win
    eventTypes: [1, 2], // live, prematch
    BT: [1, 3], // betTypes single, express
    expressMinCount: 4, // if there is express bet type
    MT: 1.87, // minOddTotal
    MA: 1000, // minBetAmount
    MAEB: 4000 // minBetAmountForEachPoint
  },
  betRaceType: 2, // 6 sports, 12 champs, all champs
  sports: [
    {
      id: 1,
      name: 'football',
      src: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
      champsList: [ // if need to include all champs this should be empty
        {
          id: 4483,
          name: 'Champions league'
        },
        {
          id: 4490,
          name: 'England premier league'
        },
      ]
    },
    {
      id: 4,
      name: 'basketball',
      src: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
      champsList: [
        {
          id: 4583,
          name: 'NBA'
        }
      ]
    },
  ]
}

export const leaderboardDataForUpcoming = {
  "TID": 148,
  "D": [
    {
      "P": 1,
      "PT": 1,
      "GN": "",
      "A": 1000000,
      "GI": null,
      "W": [

      ]
    },
    {
      "P": 2,
      "PT": 1,
      "GN": "",
      "A": 600000,
      "GI": null,
      "W": [

      ]
    }
  ],
  "F": [
    {
      "P": 1,
      "PT": 1,
      "GN": "",
      "A": 2000000,
      "GI": null,
      "W": [

      ]
    },
    {
      "P": 2,
      "PT": 1,
      "GN": "",
      "A": 1500000,
      "GI": null,
      "W": [

      ]
    }
  ]
}

export const leaderboardData = {
  "TID": 148,
  "D": [
    {
      "P": 1,
      "PT": 1,
      "GN": "",
      "A": 1000000,
      "GI": null,
      "W": [
        {
          "UId": "10****10",
          "IsC": false,
          "A": 500000
        },
        {
          "UId": "10****66",
          "IsC": false,
          "A": 500000
        }
      ]
    },
    {
      "P": 2,
      "PT": 1,
      "GN": "",
      "A": 600000,
      "GI": null,
      "W": [
        {
          "UId": "28****",
          "IsC": true,
          "A": 600000
        }
      ]
    }
  ],
  "F": [
    {
      "P": 1,
      "PT": 1,
      "GN": "",
      "A": 2000000,
      "GI": null,
      "W": [
        {
          "UId": "10****10",
          "IsC": false,
          "A": 1000000
        },
        {
          "UId": "10****66",
          "IsC": false,
          "A": 1000000
        }
      ]
    },
    {
      "P": 2,
      "PT": 1,
      "GN": "",
      "A": 1500000,
      "GI": null,
      "W": [
        {
          "UId": "28****",
          "IsC": false,
          "A": 1500000
        }
      ]
    }
  ]
}

export const leaderboard = {
  daily: [
    {
      place: 1,
      winningAmount: 50000,
      prizeType: 1, // real money
      giftName: '',
      giftIcon: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ]
    },
    {
      place: 2,
      winningAmount: 30000,
      prizeType: 2, // gift
      giftName: 'fridge',
      giftIcon: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ]
    },
    {
      place: 3,
      winningAmount: 30000,
      prizeType: 2, // gift
      giftName: 'fridge',
      giftIcon: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ]
    },
    {
      place: 4,
      winningAmount: 30000,
      prizeType: 2, // gift
      giftName: 'fridge',
      giftIcon: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ]
    },
    {
      place: "-",
      winningAmount: 30000,
      prizeType: 1, // real money
      giftName: '',
      giftIcon: '',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        }
      ],

    }
  ],

  final: [
    {
      place: 1,
      winningAmount: 50000,
      prizeType: 1, // real money
      giftName: '',
      giftIcon: '',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ]
    },
    {
      place: 2,
      winningAmount: 30000,
      prizeType: 1, // real money
      giftName: '',
      giftIcon: '',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ]
    },
    {
      place: "-",
      winningAmount: 30000,
      prizeType: 1, // real money
      giftName: '',
      giftIcon: '',
      winners: [
        {
          userId: '36*****48',
          isCurrentUser: false
        },
        {
          userId: '37*****88',
          isCurrentUser: true
        },
      ],

    }
  ]
};