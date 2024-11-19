window.onload=()=>{

    document.getElementById("bio_content").classList.add("appear")
    document.getElementById("bio_content").style.visibility="visible"
    document.getElementById("profile_picture_wrapper").classList.add("appear")
    document.getElementById("profile_picture_wrapper").style.visibility="visible";
    document.getElementById("go_to_projects").classList.add("fade-in");

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
    let light_theme=false
    document.getElementById("toggle_button").addEventListener("click",(event)=>{
        if(light_theme)
        {
            document.getElementById("toggle").classList.remove("slideLeft")
            document.getElementById("toggle").classList.add("slideRight")
            document.querySelector(":root").style.setProperty("--bgcolor","black")
            document.querySelector(":root").style.setProperty("--fgcolor","white")
            document.querySelector(":root").style.setProperty("--shadow","rgba(255, 255, 255, 0.4)")
            document.querySelector(":root").style.setProperty("--hovershadow","rgba(255, 255, 255, 1)")
            document.getElementById("socials").style.filter="brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2151%) hue-rotate(153deg) brightness(115%) contrast(101%)"
            document.getElementById("divider_image").style.filter="brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2151%) hue-rotate(153deg) brightness(115%) contrast(101%)"
            light_theme=false
        }
        else{
            document.getElementById("toggle").classList.remove("slideRight")
            document.getElementById("toggle").classList.add("slideLeft")
            document.querySelector(":root").style.setProperty("--bgcolor","white")
            document.querySelector(":root").style.setProperty("--fgcolor","black")
            document.querySelector(":root").style.setProperty("--hovershadow","rgba(0, 0, 0, 0.8)")
            document.getElementById("socials").style.filter="brightness(0) saturate(100%) invert(0%) sepia(1%) saturate(7499%) hue-rotate(330deg) brightness(100%) contrast(97%)"
            document.getElementById("divider_image").style.filter="brightness(0) saturate(100%) invert(0%) sepia(1%) saturate(7499%) hue-rotate(330deg) brightness(100%) contrast(97%)"
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

    document.getElementById("project_introduction").addEventListener("mousemove",(event)=>
    {
        let x=event.offsetX;
        let y=event.offsetY;
        const mouse_follower=document.getElementById("mouse_follower");
        mouse_follower.style.top=y+"px";
        mouse_follower.style.left=x+"px";
        mouse_follower.style.visibility="visible"
        
    })

    document.getElementById("project_introduction").addEventListener("mouseleave",(event)=>
    {
        document.getElementById("mouse_follower").style.visibility="hidden";

    })

    document.getElementById("project_medigo").addEventListener("mouseenter",(event)=>
    {
        console.log("mouse enterd")
        // const intro=document.getElementById("intro")
        const project_name=document.getElementById("medigo")
        const picture11=document.getElementById("picture11")
        const picture2=document.getElementById("picture2")
        const picture3=document.getElementById("picture3")
        const picture4=document.getElementById("picture4")
        const visit=document.getElementById("visit")
        visit.style.visibility="visible";
        project_name.style.top="-40%";
        // intro.style.top="110%"
        // intro.style.visibility="visible"
        picture11.style.left="50%"
        picture11.style.top="-5%"
        picture11.style.rotate="10deg"
        picture2.style.left="35%"
        picture2.style.top="5%"
        picture2.style.rotate="-10deg"
        picture3.style.left="-20%"
        picture3.style.top="0px"
        picture3.style.rotate="5deg"
        picture4.style.left="-40%"
        picture4.style.top="0px"
        picture4.style.rotate="-5deg"
    })

    document.getElementById("project_medigo").addEventListener("mouseleave",(event)=>
    {
        console.log("mouse left")
        // const intro=document.getElementById("intro")
        const project_name=document.getElementById("medigo")
        const picture11=document.getElementById("picture11")
        const picture2=document.getElementById("picture2")
        const picture3=document.getElementById("picture3")
        const picture4=document.getElementById("picture4")
        const visit=document.getElementById("visit")
        visit.style.visibility="hidden";
        project_name.style.top="20%";
        // intro.style.top="0%"
        // intro.style.visibility="hidden"
        picture11.style.left="0"
        picture11.style.top="-5%"
        picture11.style.rotate="-10deg"
        picture2.style.left="5%"
        picture2.style.top="5%"
        picture2.style.rotate="10deg"
        picture3.style.left="0px"
        picture3.style.top="0px"
        picture3.style.rotate="5deg"
        picture4.style.left="0px"
        picture4.style.top="0px"
        picture4.style.rotate="-5deg"
    })


    document.getElementById("project_slack_clone").addEventListener("mouseenter",(event)=>
    {
        console.log("mouse enterd")
        // const intro=document.getElementById("slack_intro")
        const project_name=document.getElementById("slack_clone")
        const picture11=document.getElementById("slack_picture11")
        const picture2=document.getElementById("slack_picture2")
        const picture3=document.getElementById("slack_picture3")
        const picture4=document.getElementById("slack_picture4")
        const visit=document.getElementById("slack_visit")
        visit.style.visibility="visible";
        project_name.style.top="-40%";
        // intro.style.top="110%"
        // intro.style.visibility="visible"
        picture11.style.left="50%"
        picture11.style.top="-5%"
        picture11.style.rotate="10deg"
        picture2.style.left="35%"
        picture2.style.top="5%"
        picture2.style.rotate="-10deg"
        picture3.style.left="-10%"
        picture3.style.top="-10%"
        picture3.style.rotate="5deg"
        picture4.style.left="-40%"
        picture4.style.top="10%"
        picture4.style.rotate="5deg"
    })

    document.getElementById("project_slack_clone").addEventListener("mouseleave",(event)=>
    {
        console.log("mouse left")
        // const intro=document.getElementById("slack_intro")
        const project_name=document.getElementById("slack_clone")
        const picture11=document.getElementById("slack_picture11")
        const picture2=document.getElementById("slack_picture2")
        const picture3=document.getElementById("slack_picture3")
        const picture4=document.getElementById("slack_picture4")
        const visit=document.getElementById("slack_visit")
        visit.style.visibility="hidden";
        project_name.style.top="20%";
        // intro.style.top="0%"
        // intro.style.visibility="hidden"
        picture11.style.left="0"
        picture11.style.top="-5%"
        picture11.style.rotate="-10deg"
        picture2.style.left="5%"
        picture2.style.top="5%"
        picture2.style.rotate="10deg"
        picture3.style.left="0px"
        picture3.style.top="0px"
        picture3.style.rotate="5deg"
        picture4.style.left="0px"
        picture4.style.top="0px"
        picture4.style.rotate="-5deg"
    })


}