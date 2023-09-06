const btn = document.querySelector('#btn');

const singleHexColorGenerator = () =>{
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    
    for(let i = 0; i < 6; i++){
        const random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    // console.log(hexColor);
    return hexColor;
}

const colorPaletteGenerator = () =>{
    const colorPalette = [];
    for(let i=0; i<4; i++) {
        colorPalette.push(singleHexColorGenerator());
    }
    return colorPalette;
}

const renderColorPalette = () => {
    const colorContainer = document.querySelector('.color_container');
    colorContainer.innerHTML = "";
    const colorPalette = colorPaletteGenerator();
    colorPalette.forEach((color, i)=>{
        const colorDiv = document.createElement('div');
        colorDiv.id = `color${i+1}`;
        colorDiv.style.backgroundColor = color;
        colorContainer.append(colorDiv);
        colorDiv.className = 'colorBox';

        const colorTag = document.createElement('p');
        colorTag.id = `color${i+1}Tag`;
        colorTag.className = 'colorTag';
        colorTag.innerHTML = color;
        colorContainer.appendChild(colorDiv);
        colorDiv.appendChild(colorTag);
    });

    const copyToClipboard = (id) => {
        const el = document.getElementById(id);

        navigator.clipboard.writeText(el.innerText).then(()=> {
            alert('Copied to clipboard');
        }).catch((err)=>{
            alert('Could not copy');
        });
    };

    const colorTags = document.querySelectorAll('.colorTag');
    colorTags.forEach((colorTag, i) => {
        colorTag.addEventListener('click', () => copyToClipboard(`color${i+1}Tag`) )
    })
    
    console.log("button pressed");
    const hex = colorPaletteGenerator();
    console.log(hex);
}
renderColorPalette()
btn.addEventListener('click', renderColorPalette);