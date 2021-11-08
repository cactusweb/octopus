

  let xDown;
  let yDown;
  let currentSection = 1;
  
  function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
  
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
  
  function handleTouchMove(evt) {
      let direction = '';
      if ( ! xDown || ! yDown ) {
          return;
      }
  
      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;
  
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
  
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            direction = 'left'
          } else {
            direction = 'right'
          }                       
      } else {
          if ( yDiff > 0 ) {
            direction = 'up'
          } else { 
            direction = 'down';
          }                                                                 
      }
      /* reset values */
      xDown = null;
      yDown = null;
      return direction;                                          
  };



  function getSectionCountOfBlock(){
      return document.querySelectorAll( ` #${blockId} > .transit-section ` ).length;
  }


  function moveToNextSection(){
    if ( currentScrollTop === (sectionCount-1) * -100 )
        return false;
    document.querySelector(`#${blockId}`).dispatchEvent(new Event( 'scroll', { bubbles: true } ));

    currentScrollTop -= 100;
    currentSection++;
    document.querySelector(`#${blockId} > .transit-section:nth-child(${currentSection})`).focus();

      let dispatchEl = document.querySelector("app-about .about__card:first-child")
      dispatchElW = dispatchEl.offsetWidth;
      dispatchEl.style.width = dispatchElW+5 + 'px'
      setTimeout(() => {
        dispatchEl.style.width = 'auto'
      }, 100);
    document.getElementById( `${blockId}` ).style.transform = `translate( 0px, ${currentScrollTop}vh )`;
    document.getElementById( `${blockId}` ).style['pointer-events'] = 'unset';
    return true;
  }



  

  function moveToPrevSection(){
    if ( currentScrollTop === 0 )
        return false;
    document.querySelector(`#${blockId}`).dispatchEvent(new Event( 'scroll', { bubbles: true } ));

    currentScrollTop += 100;
    currentSection--;
    document.querySelector('header').focus()
    document.getElementById( `${blockId}` ).style.transform = `translate( 0px, ${currentScrollTop}vh )`;
    document.getElementById( `${blockId}` ).style['pointer-events'] = 'none';
    return true;
  }

  

//   window.addEventListener( 'resize', () =>{
//     document.querySelector("#transit-block > section.section.main > main > app-home-features > div > div > div:nth-child(1)").removeAttribute('style')
//   })