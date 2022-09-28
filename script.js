window.addEventListener('load',()=>{
    graph=[
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

    const graphContent = `
    <div class="tooltip p-1 rounded-md font-bold">$17.45</div>
    <div class="bar bg-SoftRed rounded-md mt-1" style="height:3cm;width:1cm;"></div>
    <p class="x-axis-days font-bold text-gray-500">Mon</p>
    `
   const graphArea = document.querySelector('.graph')  
   const bar = document.createElement('div') 
    bar.setAttribute('class','barsContainer cursor-pointer flex flex-col items-center')
    bar.innerHTML = graphContent;
    graphArea.appendChild(bar)
})