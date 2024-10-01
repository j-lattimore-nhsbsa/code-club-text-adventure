//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

// Our stuff

const pages = [
    '/the-edge-of-gloomglade',
    '/vegetation',
    '/the-endless-green',
    '/the-stone-cairn',
    '/a-forest-stream',
    '/amidst-the-banana-trees',
    '/signs-of-a-scuffle',
    '/the-altar',
    '/a-forest-clearing',
    '/the-old-apple-tree',
    '/the-dilapidated-hut',
    '/the-worn-path',
    '/the-curious-squirrel',
    '/three-stone-ogres',
    '/along-the-cliff-base',
    '/zarlakks-lair'
];

const portalLocations = [3,6,8,11,12,13,14];

/*

0,  E1, S4
1,  E2, S5, W0
2,  E3, S6, W1
3,  S7, W2
4,  N0, E5, S8
5,  N1, S6, W4
6,  N2, S10
7,  N3
8,  N4, E9, S12
9,  N5, S13, W8
10, N6, E11, S10
11, S15, W10
12, N8, E13
13, N9, E14, W12
14, N10, W13
15, S11

*/

// Add your routes here

router.use((req,res,next)=>{

    const portal = Math.round(Math.random()*(portalLocations.length-1));
    res.locals.kelRathaLocation = portalLocations[portal];

    console.log( '=======================================================' );
    console.log( req.originalUrl );
    console.log( 'Kel-Ratha is at location ' + res.locals.kelRathaLocation );

    next();

});


// Start page
router.post(/index/,(req, res)=>{
    res.redirect('the-edge-of-gloomglade');
});


// Games pages
router.post( pages, (req, res)=>{

    let location = parseInt( req.session.data.location );
    res.redirect( pages[location] );

});


// Reset game
router.post(/reset-game/,(req, res)=>{

    console.log('Resetting game');

    req.session.data.location = -1;
    req.session.data.previousLocation = -1;
    
    req.session.data.hasBanana = 'false';
    req.session.data.hasApple = 'false';
    req.session.data.hasAxe = 'false';

    req.session.data.portalsActive = 'true';

    res.redirect('index');

});

module.exports = router;
