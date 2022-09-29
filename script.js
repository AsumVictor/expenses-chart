window.addEventListener('load',()=>{
    graphBars=[
        {
          day: "mon",
          amount: 17.45
        },
        {
          day: "tue",
          amount: 34.91
        },
        {
          day: "wed",
          amount: 52.36
        },
        {
          day: "thu",
          amount: 31.07
        },
        {
          day: "fri",
          amount: 23.39
        },
        {
          day: "sat",
          amount: 43.28
        },
        {
          day: "sun",
          amount: 25.48
        }
      ]

   const graphArea = document.querySelector('.graph')  
      graphBars.forEach(graphBar=> {
        let calHeight = ((graphBar.amount*3)/52.36)
        let height = calHeight.toFixed(2) + "cm"
        const graphContent = `
        <div class="tooltip p-1 rounded-md font-bold">$${graphBar.amount}</div>
        <div class="bar rounded-md mt-1" style="--height:${height};"></div>
        <p class="x-axis-days capitalize font-bold text-gray-500">${graphBar.day}</p>
        `
        let bar = document.createElement('div') 
        bar.setAttribute('class','barsContainer cursor-pointer flex flex-col items-center')
        bar.innerHTML = graphContent;
        graphArea.appendChild(bar)

       
      }); 
      let heighest = document.querySelector('.barsContainer:nth-child(3) .bar')
      heighest.style.backgroundColor= '#76b5bc'
      function hover() {
        heighest.style.backgroundColor= '#72cbd6'
        
      }
      function unhover() {
        heighest.style.backgroundColor= '#76b5bc'
      }
      heighest.addEventListener('mouseover',hover)
      heighest.addEventListener('mouseleave',unhover)

})