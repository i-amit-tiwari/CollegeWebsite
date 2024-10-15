const countmain = document.querySelectorAll('.count-numbers');

countmain.forEach(element => {
   
    const updatenum = () =>
    {
        const targetNum = parseInt(element.data.number);
        console.log(targetNum);
    }

    updatenum();
});

