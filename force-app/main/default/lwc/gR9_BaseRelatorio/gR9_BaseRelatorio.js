import { LightningElement, track } from 'lwc';

const columns = [
    { label: 'Label', fieldName: 'name', sortable: true },
    { label: 'Website', fieldName: 'website', type: 'url', sortable: true },
    { label: 'Phone', fieldName: 'phone', type: 'phone', sortable: true },
    { label: 'Balance', fieldName: 'amount', type: 'currency', sortable: true },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date', sortable: true },
];

const data = [
    
{
    id: 0,
    name: "Name 0",
    website: 'www.salesforce.com 0',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 1,
    name: "Name 1",
    website: 'www.salesforce.com 1',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 2,
    name: "Name 2",
    website: 'www.salesforce.com 2',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 3,
    name: "Name 3",
    website: 'www.salesforce.com 3',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 4,
    name: "Name 4",
    website: 'www.salesforce.com 4',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 5,
    name: "Name 5",
    website: 'www.salesforce.com 5',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 6,
    name: "Name 6",
    website: 'www.salesforce.com 6',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 7,
    name: "Name 7",
    website: 'www.salesforce.com 7',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 8,
    name: "Name 8",
    website: 'www.salesforce.com 8',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 9,
    name: "Name 9",
    website: 'www.salesforce.com 9',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 10,
    name: "Name 10",
    website: 'www.salesforce.com 10',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 11,
    name: "Name 11",
    website: 'www.salesforce.com 11',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 12,
    name: "Name 12",
    website: 'www.salesforce.com 12',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 13,
    name: "Name 13",
    website: 'www.salesforce.com 13',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 14,
    name: "Name 14",
    website: 'www.salesforce.com 14',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 15,
    name: "Name 15",
    website: 'www.salesforce.com 15',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 16,
    name: "Name 16",
    website: 'www.salesforce.com 16',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 17,
    name: "Name 17",
    website: 'www.salesforce.com 17',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 18,
    name: "Name 18",
    website: 'www.salesforce.com 18',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
},

{
    id: 19,
    name: "Name 19",
    website: 'www.salesforce.com 19',
    amount: Math.floor(Math.random() * 100),
    phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    closeAt: new Date(
        Date.now() + 86400000 * Math.ceil(Math.random() * 20)
    ),
}
];

export default class GR9_BaseRelatorio extends LightningElement {
    @track columns = columns;
    @track data = data;
    @track sortBy;
    @track sortDirection;

    // Função que lida com o evento de ordenação
    handleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.data];

        // Ordena os dados com base na coluna e na direção
        cloneData.sort(this.sortByField(sortedBy, sortDirection === 'asc' ? 1 : -1));
        
        // Atualiza os dados com a ordenação aplicada
        this.data = cloneData;
        this.sortBy = sortedBy;
        this.sortDirection = sortDirection;
    }

    // Função para ordenar os registros
    sortByField(field, reverse, primer) {
        const key = primer 
            ? function(x) { return primer(x[field]); }
            : function(x) { return x[field]; };

        return function(a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }

    preenche() {
        return [
            {
              "id": 0,
              "name": "Name0",
              "website": "www.salesforce.com0",
              "amount": 1,
              "phone": "6388072974",
              "closeAt": "2024-08-28T10:40:47.832Z"
            },
            {
              "id": 1,
              "name": "Name1",
              "website": "www.salesforce.com1",
              "amount": 44,
              "phone": "7348680557",
              "closeAt": "2024-08-19T10:40:47.832Z"
            },
            {
              "id": 2,
              "name": "Name2",
              "website": "www.salesforce.com2",
              "amount": 86,
              "phone": "2708573141",
              "closeAt": "2024-08-15T10:40:47.832Z"
            },
            {
              "id": 3,
              "name": "Name3",
              "website": "www.salesforce.com3",
              "amount": 29,
              "phone": "7577071230",
              "closeAt": "2024-08-22T10:40:47.832Z"
            },
            {
              "id": 4,
              "name": "Name4",
              "website": "www.salesforce.com4",
              "amount": 32,
              "phone": "9416211993",
              "closeAt": "2024-08-14T10:40:47.832Z"
            },
            {
              "id": 5,
              "name": "Name5",
              "website": "www.salesforce.com5",
              "amount": 3,
              "phone": "7604574426",
              "closeAt": "2024-08-11T10:40:47.832Z"
            },
            {
              "id": 6,
              "name": "Name6",
              "website": "www.salesforce.com6",
              "amount": 81,
              "phone": "4990153558",
              "closeAt": "2024-08-20T10:40:47.832Z"
            },
            {
              "id": 7,
              "name": "Name7",
              "website": "www.salesforce.com7",
              "amount": 84,
              "phone": "1810734439",
              "closeAt": "2024-08-24T10:40:47.832Z"
            },
            {
              "id": 8,
              "name": "Name8",
              "website": "www.salesforce.com8",
              "amount": 86,
              "phone": "3506802401",
              "closeAt": "2024-08-19T10:40:47.832Z"
            },
            {
              "id": 9,
              "name": "Name9",
              "website": "www.salesforce.com9",
              "amount": 66,
              "phone": "2445417754",
              "closeAt": "2024-08-12T10:40:47.832Z"
            },
            {
              "id": 10,
              "name": "Name10",
              "website": "www.salesforce.com10",
              "amount": 85,
              "phone": "5433891626",
              "closeAt": "2024-08-11T10:40:47.832Z"
            },
            {
              "id": 11,
              "name": "Name11",
              "website": "www.salesforce.com11",
              "amount": 10,
              "phone": "9583009815",
              "closeAt": "2024-08-28T10:40:47.832Z"
            },
            {
              "id": 12,
              "name": "Name12",
              "website": "www.salesforce.com12",
              "amount": 88,
              "phone": "5729163199",
              "closeAt": "2024-08-24T10:40:47.832Z"
            },
            {
              "id": 13,
              "name": "Name13",
              "website": "www.salesforce.com13",
              "amount": 10,
              "phone": "7982091065",
              "closeAt": "2024-08-25T10:40:47.832Z"
            },
            {
              "id": 14,
              "name": "Name14",
              "website": "www.salesforce.com14",
              "amount": 2,
              "phone": "3802162245",
              "closeAt": "2024-08-24T10:40:47.832Z"
            },
            {
              "id": 15,
              "name": "Name15",
              "website": "www.salesforce.com15",
              "amount": 63,
              "phone": "9253830848",
              "closeAt": "2024-08-24T10:40:47.832Z"
            },
            {
              "id": 16,
              "name": "Name16",
              "website": "www.salesforce.com16",
              "amount": 19,
              "phone": "1345780201",
              "closeAt": "2024-08-18T10:40:47.832Z"
            },
            {
              "id": 17,
              "name": "Name17",
              "website": "www.salesforce.com17",
              "amount": 48,
              "phone": "1171880287",
              "closeAt": "2024-08-22T10:40:47.832Z"
            },
            {
              "id": 18,
              "name": "Name18",
              "website": "www.salesforce.com18",
              "amount": 49,
              "phone": "2997080413",
              "closeAt": "2024-08-24T10:40:47.832Z"
            },
            {
              "id": 19,
              "name": "Name19",
              "website": "www.salesforce.com19",
              "amount": 97,
              "phone": "8835512055",
              "closeAt": "2024-08-25T10:40:47.832Z"
            }
          ]
    }
}
