import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);

const body = document.querySelector('body');

// BEFORE EACH PAGE LOAD (WHEN YOU CLICK ON A LINK) - SET THE BACKGROUND COLOR
barba.hooks.before((data) => {

})


barba.init({
    transitions: [
        {
            name: 'home',
            to: {
                namespace: ['home']
            },
            sync: true,
            once(){},
            leave(){},
            enter(){},
        }, {
            name: 'fade',
            // GO TO AN ARRAY, CAN BE MULTIPLE PAGES IF YOU WANT THE SAME TRANSITION
            to: {
                namespace: ['fade']
            },
            leave(){},
            enter(){},
        }, {
            name: 'slide-about',
            // GO TO AN ARRAY, CAN BE MULTIPLE PAGES IF YOU WANT THE SAME TRANSITION
            to: {
                namespace: ['about']
            },
            leave(){},
            enter(){},
            beforeEnter(){},
        }, {
            name: 'slide-work',
            // GO TO AN ARRAY, CAN BE MULTIPLE PAGES IF YOU WANT THE SAME TRANSITION
            to: {
                namespace: ['work']
            },
            leave(){},
            enter(){},
            beforeEnter(){},
        }
    ]
})
