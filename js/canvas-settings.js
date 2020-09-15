
var canvasSettings = {
    colorStroke: $("#stroke-color").val(),
    colorFill: $("#fill-color").val(),
    brushSize: $('#brush-size').val(),
}

$('#brush-size')[0].oninput = function() {
    canvasSettings.brushSize = this.value;
}

$('#stroke-color')[0].oninput = function() {
    canvasSettings.colorStroke = this.value;
}

$('#fill-color')[0].oninput = function() {
    canvasSettings.colorFill = this.value;
}



/*

To do:

- Input changes into Index, and position them relatively nicely for Martin to clean up later DONE
- Test to make sure that canvasSettings are working properly DONE

- Rectangle DONE
- Drawline DONE
- Circle DONE
- Curve DONE
- Erase DONE
- S-line DONE
- Triangle DONE


Extras:
- Removed functions on main index page because they're already in function.js, everything seems to be working fine.
- Fixed the clear button by adding 'clear' as the id for the trashcan, and adding my own code in function.js - you might want to review this and change it back to your original code.
- Square function doesn't work, I haven't modified any code for the changes in canvas-settings because of this, so when it is fixed I need to go back and modify its code.
- Triangle has no fill at the moment, because of the way that I made it. I'll look at it this afternoon and see if I can create a fill.






*/





