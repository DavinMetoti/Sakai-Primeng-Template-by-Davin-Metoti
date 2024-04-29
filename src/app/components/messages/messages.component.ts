import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
    templateUrl: './messages.component.html',
    styles: [``],
    providers: [MessageService]
})
export class MessagesComponent {

    msgs: Message[] = [];

    constructor(private service: MessageService) {}

    showInfoViaToast() {
        this.service.clear();
        this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks, life: 3000'});
    }

    showWarnViaToast() {
        this.service.clear();
        this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes, life: 3000'});
    }

    showErrorViaToast() {
        this.service.clear();
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed', life: 3000 });
    }

    showSuccessViaToast() {
        this.service.clear();
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent', life: 3000 });
    }

    showInfoViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
}
