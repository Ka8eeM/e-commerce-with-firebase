import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export let bonusOutLiftAnimation = animation(
    [
        animate('1s ease-out', keyframes(
            [
                style(
                    {
                        offset: 0.2,
                        opacity: 1,
                        backgroundColor: 'red',
                        transform: 'translateX(50px)'
                    }
                ),
                style(
                    {
                        offset: 1,
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    })
            ]))
    ]
);

export let slide = trigger('slide', [
    //void => *, * => void ----- *<=> void
    transition(':enter', [
        style({
            backgroundColor: 'green',
            transform: 'translatex(-20px)'
        }),
        animate('0.5s 0.5s ease-out')
    ]),
    transition(':leave',
        [
            useAnimation(bonusOutLiftAnimation)
        ]
    )
])


export let fade = trigger('fade', [
    //void => *, * => void ----- *<=> void
    transition(':enter, :leave', [
        // style({backgroundColor:'blue', opacity:0}),
        animate(1000, style({ opacity: 0 }))
    ])
])