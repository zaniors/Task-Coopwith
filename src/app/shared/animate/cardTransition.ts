import { trigger, state, style, transition, animate } from '@angular/animations';

export const cardTransition = () => {
    return trigger('cardAni', [
        state('out', style({ transform: 'scale(1)', 'box-shadow': 'none' })),
        state('in', style({ transform: 'scale(1.1)', 'box-shadow': '-2px 6px 6px 6px #ccc' })),
        transition('out => in', animate('100ms ease-in')),
        transition('in => out', animate('100ms ease-out'))
    ])
}
