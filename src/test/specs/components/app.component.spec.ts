import {
    beforeEach,
    describe,           // `ddescribe` is also available for isolating suites of tests to run
    expect,
    inject,
    AsyncTestCompleter,
    it,                 // `iit` is also available for running individual tests
    TestComponentBuilder
} from 'angular2/testing_internal';

import { AppComponent } from '../../../app/scripts/components/app/app.component.ts';

function createComponent (callback: Function) {
    return inject([TestComponentBuilder, AsyncTestCompleter], (testComponentBuilder: TestComponentBuilder, async: AsyncTestCompleter) => {
        return testComponentBuilder.createAsync(AppComponent)
            .then(fixture => {
                callback(fixture.componentInstance);
                async.done();
            });
    });
}

describe('Component: AppComponent', () => {
    describe('> init', () => {
        it('should have a message list', createComponent((component: any) => {
            expect(component.messages).toEqual([]);
        }));

        it('should have a new message string', createComponent((component: any) => {
            expect(component.newMessage).toEqual('');
        }));
    });

    describe('#addMessage', () => {
        it('should add the value of `newMessage` to the message list', createComponent((component: any) => {
            component.newMessage = 'A pizza party!';
            component.addMessage();

            expect(component.messages).toEqual(['A pizza party!']);

            component.newMessage = 'The burrito bash!';
            component.addMessage();

            expect(component.messages).toEqual(['A pizza party!', 'The burrito bash!']);
        }));

        it('should clear the new message to an empty string', createComponent((component: any) => {
            component.newMessage = 'Do the taco tango...';
            component.addMessage();

            expect(component.newMessage).toBe('');
        }));

        it('should only add a message if there is one', createComponent((component: any) => {
            component.addMessage();

            expect(component.messages).toEqual([]);
        }));
    });
});
