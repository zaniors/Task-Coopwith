import { trigger, state, animate, style, transition } from '@angular/core';

export const slideSlowToTop = () => {
    return trigger('routerTransition', [
        state('void', style({ 'padding-top': '20px', opacity: '0' })),
        state('*', style({ 'padding-top': '0', opacity: '1' })),
        transition(':enter', [
            animate('0.45s ease-out', style({ 'padding-top': '0', opacity: '1' }))
        ])
    ]);
}
export const slideToTop = () => {
    return trigger('routerTransition', [
        state('void', style({ transform: 'translateY(20px)', opacity: '0' })),
        state('*', style({ transform: 'translateY(0px)', opacity: '1' })),
        transition(':enter', [
            animate('0.45s ease-out', style({ opacity: '1', transform: 'translateY(0px)' }))
        ])
    ]);
}

export const slideToRight = () => {
    return trigger('routerTransition', [
        state('void', style({
            position: 'fixed',
            width: '100%',
            height: '100%'
        })),
        state('*', style({
            position: 'fixed',
            width: '100%',
            height: '100%'
        })),
        transition('void => *', [
            style({ transform: 'translateX(-100%)' }),
            animate('.5s ease-in-out', style({ transform: 'translateX(0)' }))
        ]),
        transition('* => void', [
            style({ transform: 'translateX(0)' }),
            animate('.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ])
}
