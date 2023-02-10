    function createRow(){
        let userSelection = 16;
        let h = 600/userSelection;
        for(let i = 0; i < userSelection; i++){
            let container = document.querySelector('.grid');
            let row = document.createElement('div');
            row.classList.add('row');
            row.style.display = 'flex';
            row.style.justifyContent = 'space-between';
            row.style.alignItems = 'conter';
            row.style.margin = '0px';
            row.style.padding = '0px';
            row.style.height = `${h}px`;
            container.appendChild(row);
        }
    }

    function createGrid(){
        const row = document.getElementsByClassName('row');
        let color = 'black';

        for(let i = 0; i < row.length; i++){
          for(let a = 0; a < row.length; a++){
            let content = document.createElement('div');
            content.classList.add('square');
            content.style.margin = '0px';
            content.style.padding = '0px';
            content.style.backgroundColor = 'white';
            content.style.height = 'auto';
            content.style.width = `${600/row.length}px`;
            content.addEventListener('click', function(){
                content.style.backgroundColor = colorChoice;
            });
            row[i].appendChild(content);
          }  
        }
    }
    const colorChoice = ' ';
    function getColor(){
        let listOfColours = document.getElementsByClassName('color');
        for(let i = 0;i < listOfColours.length; i++){
            listOfColours[i].addEventListener('click', function(){
                if(i == 0){
                    return 'red';
                }else if(i == 1){
                    return 'black';
                }else if(i == 2){
                    return 'yellow';
                }else if(listOfColours[i] == listOfColours[3]){
                    return 'blue';
                }else if(listOfColours[i] == listOfColours[4]){
                    return 'green';
                }else if(listOfColours[i] == listOfColours[5]){
                    return 'purple';
                }else if(listOfColours[i] == listOfColours[6]){
                    return 'grey';
                }else if(listOfColours[i] == listOfColours[7]){
                    return 'white';
                }else if(listOfColours[i] == listOfColours[8]){
                    return 'orange';
                }else if(listOfColours[i] == listOfColours[9]){
                    return 'brown';
                }
            });
        }
    }
    getColor();
    createRow();
    createGrid();
    
    
    
    
    

