import { trigger, state, animate, style, transition } from '@angular/core';

export function appModuleAnimation() {
    return slideFromBottom();
}

export function appModuleSlowAnimation() {
    return slideSlowFromBottom();
}

export function accountModuleAnimation() {
    return slideFromUp();
}

export function slideSlowFromBottom() {
    return trigger('routerTransition', [
        state('void', style({ 'padding-top': '20px', opacity: '0' })),
        state('*', style({ 'padding-top': '0', opacity: '1' })),
        transition(':enter', [
            animate('0.45s ease-out', style({ 'padding-top': '0', opacity: '1' }))
        ])
    ]);
}
export function slideFromBottom() {
    return trigger('routerTransition', [
        state('void', style({ transform: 'translateY(20px)', opacity: '0' })),
        state('*', style({ transform: 'translateY(0px)', opacity: '1' })),
        transition(':enter', [
            animate('0.45s ease-out', style({ opacity: '1', transform: 'translateY(0px)' }))
        ])
    ]);
}

export function slideFromUp() {
    return trigger('routerTransition', [
        state('void', style({ 'margin-top': '-20px', opacity: '0' })),
        state('*', style({ 'margin-top': '0', opacity: '1' })),
        transition(':enter', [
            animate('0.45s ease-out', style({ opacity: '1', 'margin-top': '0px' }))
        ])
    ]);
}
