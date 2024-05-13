window.onload=()=>{
    document.getElementById("picture").addEventListener("mouseenter",(event)=>{
        document.getElementById("popup_container").style.visibility="visible"
    })

    document.getElementById("picture").addEventListener("mouseleave",(event)=>{
        document.getElementById("popup_container").style.visibility="hidden"
    })

    document.getElementById("popup_container").addEventListener("mouseenter",(event)=>{
        document.getElementById("popup_container").style.visibility="visible"
    })

    document.getElementById("popup_container").addEventListener("mouseleave",(event)=>{
        document.getElementById("popup_container").style.visibility="hidden"
    })  

    let profession_designer=true
    document.getElementById("bio_content").addEventListener("click",(event)=>{
        if(profession_designer===true)
        {
            document.getElementById("overlay").classList.remove("uncover")
            document.getElementById("overlay").classList.add("cover")
            setTimeout(()=>{
                document.getElementById("dynamic_part").innerHTML="Developer"
                profession_designer=false
                document.getElementById("overlay").classList.remove("cover")
                document.getElementById("overlay").classList.add("uncover")
            },1000)
        }
        else{
            document.getElementById("overlay").classList.remove("uncover")
            document.getElementById("overlay").classList.add("cover")
            setTimeout(()=>{
                document.getElementById("dynamic_part").innerHTML="Designer"
                profession_designer=true
                document.getElementById("overlay").classList.remove("cover")
                document.getElementById("overlay").classList.add("uncover")
            },1000)
        }
    })

    setInterval(()=>{
        if(profession_designer===true)
    {
        document.getElementById("overlay").classList.remove("uncover")
        document.getElementById("overlay").classList.add("cover")
        setTimeout(()=>{
            document.getElementById("dynamic_part").innerHTML="Developer"
            profession_designer=false
            document.getElementById("overlay").classList.remove("cover")
            document.getElementById("overlay").classList.add("uncover")
        },1000)
    }
    else{
        document.getElementById("overlay").classList.remove("uncover")
        document.getElementById("overlay").classList.add("cover")
        setTimeout(()=>{
            document.getElementById("dynamic_part").innerHTML="Designer"
            profession_designer=true
            document.getElementById("overlay").classList.remove("cover")
            document.getElementById("overlay").classList.add("uncover")
        },1000)
    }
    },5000)

    let expand=false
    document.getElementById("drop_down_btn").addEventListener("click",(event)=>{
        if(expand==false)
        {
            if(document.getElementById("drop_down_btn").classList.contains("rotateanti"))
            {
                document.getElementById("drop_down_btn").classList.remove("rotateanti")
            }
            if(document.getElementById("drawer_content").classList.contains("hide"))
            {
                document.getElementById("drawer_content").classList.remove("hide")
            }
            document.getElementById("drop_down_btn").classList.add("rotateclock")
            document.getElementById("drawer_content").classList.add("show")
            expand=true

        }
        else{
            if(document.getElementById("drop_down_btn").classList.contains("rotateclock"))
            {
                document.getElementById("drop_down_btn").classList.remove("rotateclock")
            }
            if(document.getElementById("drawer_content").classList.contains("show"))
            {
                document.getElementById("drawer_content").classList.remove("show")
            }
            document.getElementById("drop_down_btn").classList.add("rotateanti")
            document.getElementById("drawer_content").classList.add("hide")
            expand=false
        }
    })
    let light_theme=true
    document.getElementById("toggle_button").addEventListener("click",(event)=>{
        if(light_theme)
        {
            document.getElementById("toggle").classList.remove("slideLeft")
            document.getElementById("toggle").classList.add("slideRight")
            document.querySelector(":root").style.setProperty("--bgcolor","black")
            document.querySelector(":root").style.setProperty("--fgcolor","white")
            document.querySelector(":root").style.setProperty("--shadow","rgba(255, 255, 255, 0.4)")
            document.querySelector(":root").style.setProperty("--hovershadow","rgba(255, 255, 255, 1)")
            light_theme=false
        }
        else{
            document.getElementById("toggle").classList.remove("slideRight")
            document.getElementById("toggle").classList.add("slideLeft")
            document.querySelector(":root").style.setProperty("--bgcolor","white")
            document.querySelector(":root").style.setProperty("--fgcolor","black")
            document.querySelector(":root").style.setProperty("--hovershadow","rgba(0, 0, 0, 0.8)")
            light_theme=true
        }

    })

    document.getElementById("picture1").addEventListener("mouseenter",(event)=>
    {
        document.getElementById("about_img1").style.opacity=1
    })
    document.getElementById("picture1").addEventListener("mouseleave",(event)=>
    {
        document.getElementById("about_img1").style.opacity=0
    })
}