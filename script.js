const toggleRow = (element) => {
            element.getElementsByClassName("expanded-row-content").item(0).classList.toggle("hide-row");
            element.getElementsByClassName("plus-icon").item(0).classList.toggle("x-icon");
         }