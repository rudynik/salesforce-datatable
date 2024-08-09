import { LightningElement, track } from 'lwc';

// Definindo as colunas e os dados de simulação
const columns = [
    { label: 'Label', fieldName: 'name', sortable: true },
    { label: 'Website', fieldName: 'website', type: 'url', sortable: true },
    { label: 'Phone', fieldName: 'phone', type: 'phone', sortable: true },
    { label: 'Balance', fieldName: 'amount', type: 'currency', sortable: true },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date', sortable: true },
];

const data = [
    { id: 0, name: "Name 0", website: 'www.salesforce.com 0', amount: 10, phone: '1234567890', closeAt: '2024-08-01' },
    { id: 1, name: "Name 1", website: 'www.salesforce.com 1', amount: 20, phone: '1234567891', closeAt: '2024-08-02' },
    // Adicione mais registros conforme necessário
];

export default class GR9_BaseRelatorio extends LightningElement {
    @track columns = columns;
    @track data = data;
    @track sortBy;
    @track sortDirection;
    @track isFilterActive = false; // Track filter visibility

    handleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.data];
        cloneData.sort(this.sortByField(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.data = cloneData;
        this.sortBy = sortedBy;
        this.sortDirection = sortDirection;
    }

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

    toggleFilter() {
        this.isFilterActive = !this.isFilterActive;
        const filterDiv = this.template.querySelector('.filter-overlay');
        if (filterDiv) {
            filterDiv.classList.toggle('filter-active', this.isFilterActive);
        }
    }
}
