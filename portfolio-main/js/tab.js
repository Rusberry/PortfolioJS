const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images')

const changeContent = (array, value)=>{
    array.forEach((elem)=>{
            if (elem.dataset.tabsField === value){
                elem.classList.toggle('hidden')
            } else {
                elem.classList.toggle('hidden')
            }
        })
}

tabButtons.forEach((tabButton)=>{
    tabButton.addEventListener('click', (event)=>{
        const dataValue = tabButton.dataset.tabsHandler
        changeContent(tabDescriptions, dataValue)
        changeContent(tabImages, dataValue)

        tabButtons.forEach((btn)=>{
            if(btn === event.target){
                document.title = btn.textContent;
                btn.classList.toggle('design-list__item_active')
            } else {
                btn.classList.toggle('design-list__item_active')
            }
        })
    })
});