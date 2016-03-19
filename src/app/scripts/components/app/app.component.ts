import {
    Component,
    ViewEncapsulation
} from 'angular2/core';

const mainStyles = require('../../../styles/main.scss');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    styles: [mainStyles],
    template: '<h1>My First Angular2 App</h1>'
})
export class AppComponent{}