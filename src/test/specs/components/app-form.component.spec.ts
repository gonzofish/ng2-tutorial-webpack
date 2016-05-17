import {
    beforeEach,
    describe,           // `ddescribe` is also available for isolating suites of tests to run
    expect,
    inject,        // `inject` is also available for synchronous injections
    it                 // `iit` is also available for running individual tests
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

import { AppFormComponent } from '../../../app/scripts/components/app-form/app-form.component.ts';

function createComponent (callback: Function) {
    return inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
        return testComponentBuilder.createAsync(AppFormComponent)
            .then(fixture => callback(fixture.componentInstance));
    });
}

describe('Component: AppFormComponent', () => {
    let component: AppFormComponent;

    beforeEach(createComponent((componentInstance: AppFormComponent) => {
        component = componentInstance;
        component.message = { value: '' };
    }));

    it('should have an message input', () => {
        expect(component.message).toEqual({ value: '' });
    });

    it('should have an add output', () => {
        expect(component.add).toBeDefined();
        expect(component.add.emit).toEqual(jasmine.any(Function));
    });

    describe('#addMessage', () => {
        beforeEach(() => {
            spyOn(component.add, 'emit');
        });

        it('should emit the message when clicking add', () => {
            component.message.value = 'Pizza Party!';
            component.addMessage();

            expect(component.add.emit).toHaveBeenCalledWith({ value: 'Pizza Party!' });
        });
    });
});