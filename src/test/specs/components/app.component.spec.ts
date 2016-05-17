import {
    beforeEach,
    describe,           // `ddescribe` is also available for isolating suites of tests to run
    expect,
    inject,        // `inject` is also available for synchronous injections
    it                 // `iit` is also available for running individual tests
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';

import { AppComponent } from '../../../app/scripts/components/app/app.component.ts';

function createComponent (callback: Function) {
    return inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
        return testComponentBuilder.createAsync(AppComponent)
            .then(fixture => callback(fixture.componentInstance));
    });
}

describe('Component: AppComponent', () => {
    describe('> init', () => {
        it('should have a message list', createComponent((component: any) => {
            expect(component.messages).toEqual([]);
        }));

        it('should have a new message string', createComponent((component: any) => {
            expect(component.newMessage).toEqual({ value: '' });
        }));
    });

    describe('#addMessage', () => {
        it('should add the value of `newMessage` to the message list', createComponent((component: any) => {
            component.addMessage({ value: 'A pizza party!' });
            expect(component.messages).toEqual(['A pizza party!']);

            component.addMessage({ value: 'The burrito bash!' });
            expect(component.messages).toEqual(['A pizza party!', 'The burrito bash!']);
        }));

        it('should set newMessage.value to blank when a message is added', createComponent((component: AppComponent) => {
            component.newMessage.value = 'Gyro Hero';
            component.addMessage({ value: 'Jam Jam' });

            expect(component.newMessage.value).toEqual('');
        }));

        it('should only add a message if there is one', createComponent((component: any) => {
            component.addMessage();
            expect(component.messages).toEqual([]);
        }));

    });
});