import {
    Component,
    ViewEncapsulation
} from 'angular2/core';

const mainStyles = require('../../../styles/main.scss');
const template = require('./app.component.html');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    styles: [mainStyles],
    template: template
})
export class AppComponent {
    public messages: Array<String> = [];
    public newMessage: String = '';

    public addMessage() {
        if (this.newMessage) {
            this.messages.push(this.newMessage);
            this.newMessage = '';
        }
    }
}