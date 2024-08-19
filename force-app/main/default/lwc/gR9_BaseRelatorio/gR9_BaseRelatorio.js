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
    { id: 0, name: "Name 0", website: 'www.salesforce.com 0', amount: 10, phone: '1234567890', closeAt: '2024-08-01', proprietario: 'miguel' },
    { id: 1, name: "Name 1", website: 'www.salesforce.com 1', amount: 20, phone: '1234567891', closeAt: '2024-08-02', proprietario: 'heitor' },
];

export default class GR9_BaseRelatorio extends LightningElement {
    @track columns = columns;
    @track data = data;
    @track isFilterActive = false;
    @track isModalOpen = false;

    clickedButtonLabel;
    value = 'Todos os registros';
    fieldChange;
    operatorChange;
    inputChange;
    
    toggleFilter() {
        this.isFilterActive = !this.isFilterActive;
        const filterDiv = this.template.querySelector('.filter-overlay');
        if (filterDiv) {
            filterDiv.classList.toggle('filter-active', this.isFilterActive);
        }
    }

    get options() {
        return [
            { label: 'Todos os registros', value: 'Todos os registros' },
            { label: 'Meus registros', value: 'Meus registros' }
        ];
    }

    get fieldOptions() {
        return this.columns.map(column => {
            return { label: column.label, value: column.label };
        });
    }

    get options() {
        return [
            { label: 'Todos os registros', value: 'Todos os registros' },
            { label: 'Meus registros', value: 'Meus registros' }
        ];
    }

    get operatorOptions() {
        return [
            { label: 'equals', value: '===' },
            { label: 'not equal to', value: '!==' },
            { label: 'less than', value: '<' },
            { label: 'greater than', value: '>' },
            { label: 'less or equal', value: '<=' },
            { label: 'greater or equal', value: '>=' },
            { label: 'contains', value: 'includes' }, // Para usar em string ou array
            { label: 'does not contain', value: '!includes' }, // Para usar em string ou array com negação
            { label: 'starts with', value: 'startsWith' } // Para usar em strings
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        if (this.value == 'Meus registros') {
            this.data = this.data.filter(element => element.proprietario == 'miguel');
        } else {
            this.data = data;
        }
    }

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
    
    handleFieldChange(event) {
        this.fieldChange = event.detail.value;
    }

    handleOperatorChange(event) {
        this.operatorChange = event.detail.value;
    }

    handleInputChange(event) {
        this.inputChange = event.detail.value;
    }

    handleConfirm() {
        const filter = {
            field: this.fieldChange,
            operator: this.operatorChange,
            value: this.inputChange
        }

        console.log(JSON.stringify(filter));
    }
}
