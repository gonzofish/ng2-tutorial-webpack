import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-form',
    template: require('./app-form.component.html')
})
export class AppFormComponent implements OnInit {
    @Input() message: { value: string };
    @Output() add = new EventEmitter();

    constructor() { }

    addMessage() {
        this.add.emit(this.message);
    }

    ngOnInit() { }

}