let blockId = 'transit-block';

let currentScrollTop = 0;

let sectionCount = getSectionCountOfBlock();







function onTouchMove( e, blockName ){
    console.log(e)
    let action = handleTouchMove(e);
    if ( action == 'up' && blockName == 'header' )
        moveToNextSection(); else
    if (
        action == 'down' && blockName == 'main' && document.querySelector(`#${blockId} main.transit-section`).scrollTop <= 0
     )
        moveToPrevSection()
}


function onWheelMove( e, blockName ){
    console.log(e)
    if ( e.deltaY > 0 && blockName == 'header' && currentScrollTop == 0 )
        moveToNextSection();

    else
    if ( e.deltaY < 0 && blockName == 'main' && currentScrollTop == -100 && document.querySelector(`#${blockId} main.transit-section`).scrollTop <= 0 )
        moveToPrevSection()

    else
    if (e.deltaY < 0 && blockName == 'main' && currentScrollTop == -100 && document.querySelector(`#${blockId} main.transit-section`).scrollTop <= 0 )
        onWheelHorisont(e);

}


document.querySelector( '#to-next-block' ).addEventListener( 'click', () => {
    
    if ( moveToNextSection() )
        document.querySelector(`#${blockId} main.transit-section`).scrollTop = 0;
})



document.querySelector('header').addEventListener( 'touchstart', e => handleTouchStart(e), { passive: true });
document.querySelector('header').addEventListener( 'touchmove', e => onTouchMove(e, 'header') );


document.querySelector(`#${blockId}`).addEventListener( 'touchstart', e => handleTouchStart(e), { passive: true });
document.querySelector(`#${blockId}`).addEventListener( 'touchmove', e => onTouchMove(e, 'main'), { passive: true } );

document.querySelector( `#${blockId}` ).addEventListener( 'wheel', e => onWheelMove( e, 'main' ) )
document.querySelector( `header` ).addEventListener( 'wheel', e => onWheelMove( e, 'header' ) )

document.addEventListener( 'keydown', e => {
    console.log(e)
    if ( e.key == 'ArrowUp'  && document.querySelector(`#${blockId} main.transit-section`).scrollTop <= 0 )
        moveToPrevSection();else 
    if ( e.key == 'ArrowDown' && moveToNextSection() )
        document.querySelector(`#${blockId} main.transit-section`).scrollTop = 0;

})

document.querySelector(`#${blockId}`).style.transform = 'translate(0px, 0px)'
