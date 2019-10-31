const images = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshhold:0,
    rootMargin: "0px 0PX 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imObserver)=>
{
    entries.forEach(entry =>{
        if(!entry.isIntersecting)
        {return;}
        
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image =>
    {
        imgObserver.observe(image);
    });

function preloadImage(img)
{
    const src= img.getAttribute("data-src");

    if(!src)
    {return;}

    img.src=src;
}