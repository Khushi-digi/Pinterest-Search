var arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Aesthetic Umbrella", image: "https://images.unsplash.com/photo-1679679195912-29d0190805ad?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Landscape Images", image: "https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Art Wallpapers", image: "https://images.unsplash.com/photo-1707823585193-850a928684e7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bald Eagle", image: "https://images.unsplash.com/photo-1612723652697-51a8983d547c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Food Images", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bicycle", image: "https://images.unsplash.com/photo-1679679007793-25fa830507c1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },


]

let showdata = () => {
    let clutter = ""
    arr.forEach((obj) => {
        clutter += `<div class="box m-5">
<img class="cursor-pointer" src="${obj.image}" alt="image">
<div class="caption">Lorem ipsum </div>
</div>`
    })
    document.querySelector(".container").innerHTML = clutter
}

let searchFunctionality = () => {
    let input = document.querySelector("#searchinput")

    input.addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block"

    })
    input.addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none"

    })

    input.addEventListener("input", () => {
        let filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value))
        let clutter = ""
        if (filteredArray.length > 0) {
            filteredArray.forEach((obj) => {
                clutter += `
                <div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
                </div>
                `
            })
            document.querySelector(".searchdata").style.display = "block"
            document.querySelector(".searchdata").innerHTML =
            clutter
        }
        else{
            clutter += `
            <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">No Result Found</h3>
            </div>
            `
        }
        if(input.value<=0){
            document.querySelector(".searchdata").style.display = "none"

        }
       
    })
}

showdata()

searchFunctionality()