    function createRow(){
        const userSelection = 16;
        const container = document.querySelector('.grid');
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'conter';
        row.style.margin = '0px';
        row.style.padding = '0px';
        for(let i = 0; i < userSelection; i++){
            container.appendChild(row);
        }
    };
    
    
    
    
    
    const grid = document.querySelector('.grid');
    const content = document.createElement('div');
    content.classList.add('square');
    content.style.height = '30px';
    content.style.width = 'auto';
    content.style.margin = '0px';
    content.style.padding = '0px';
    container.appendChild(content);
