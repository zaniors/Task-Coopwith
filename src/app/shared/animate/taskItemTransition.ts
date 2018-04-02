import { trigger, state, style, transition, animate } from '@angular/animations';

export const taskItemTransition = () => {
    return trigger('taskItemAni', [
        state('out', style({ 'border-left-width': '3px' })),
        state('in', style({ 'border-left-width': '6px' })),
        transition('out => in', animate('100ms ease-in')),
        transition('in => out', animate('100ms ease-out'))
    ])
}
