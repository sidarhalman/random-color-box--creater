
const container = document.getElementById( "container" );
const input = document.getElementById( "input" );
const boxes = document.getElementById( "boxes" );
container.addEventListener( "click", ( event ) =>
{   
    if(event.target.id  == "button")
    {                        // at start its = 0,    
            let breakpoint = boxes.children.length + parseFloat( input.value ); // if there are already child in boxes, we can style new children. 
            for( let i = boxes.children.length; i < breakpoint; i++) // if there are 3 box already and we will fill more 2 box,  "i" turn for us 3 ,4 .  
            { 
                const box = document.createElement( "div" );
                const del = document.createElement( "span" );
                const colorName = document.createElement( "p" );
                boxes.append( box ); //        \
                box.append( del );//            |--->>> send all in new box to end/ to last
                box.append( colorName );//     /
                del.className = "delete";
                box.className = "box";
                del.textContent = "X";
                colorName.textContent = `#${ Math.random().toString(16).substr(-6) }`; // random color name
                boxes.children[i].style.backgroundColor = `#${ Math.random().toString(16).substr(-6) }`; //random color 
            }
        input.value = "";
    }
    else if( event.target.className == "delete" )
    {
        event.target.parentElement.remove();
    }
});