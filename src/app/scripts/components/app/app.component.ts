import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from '@angular/core';

import { AppFormComponent } from '../app-form/app-form.component';

const mainStyles = require('../../../styles/main.scss');
const template = require('./app.component.html');

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [AppFormComponent],
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    styles: [mainStyles],
    template: template
})
export class AppComponent {
    public messages: Array<String> = [];
    public newMessage: { value: string } = { value: '' };

    public addMessage(message: { value: string }) {
        if (message && message.value) {
            this.messages.push(message.value);
            this.newMessage.value = '';
        }
    }
}