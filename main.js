document.addEventListener("DOMContentLoaded",function(){
    var arr = [
        {
            dp:"https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFieXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            story:"https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhYnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
        },
        {
            dp:"https://media.istockphoto.com/id/693175916/photo/adorable-happy-baby-crawling.webp?b=1&s=170667a&w=0&k=20&c=7H6KK1XBtfYc0zZq2naOaPiWzybmcyz2SuBBaV4F8cM=",
            story:"https://media.istockphoto.com/id/172847068/photo/little-ballerina.jpg?s=612x612&w=0&k=20&c=NWptZdocCguu5__GRjum-jabP-87X18YKhk70U3mO9Q="
        },
        {
            dp:"https://media.istockphoto.com/id/902654634/photo/studioshot-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=8IA_kpGFKEk3miWKFRRmWGBSm_f2qlJzeqijXVi3vJs=",
            story:"https://media.istockphoto.com/id/1189891152/photo/beautiful-woman-with-voluminous-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=ATCQncgroAtWvIUU0W3EX0OPa55yqzm6XX7P07qq9-Q="
        },
        {
            dp:"https://media.istockphoto.com/id/1080903606/photo/handsome-classy-man-walking-on-the-street.jpg?s=612x612&w=0&k=20&c=ktak7Xh2Nsp8T1wX2uYGjisT5pzjt8_dH4qiisGWPw8=",
            story:"https://media.istockphoto.com/id/1396020670/photo/loving-my-work-face.jpg?s=612x612&w=0&k=20&c=l2UqBpJKZ_gR9VJDlnxoJKM5n9QQDh6O6UuPS_p-wT8="
        },
        {
            dp:"https://plus.unsplash.com/premium_photo-1665296634191-b5f2bf3a7c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwbG92ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
            story:"https://images.unsplash.com/photo-1617555327519-4e9ebe3f68b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsJTIwbG92ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        },
    ]
    var storiyan = document.querySelector("#storiyan")
    var clutter = "";
    arr.forEach(function(elem,idx){
        clutter += ` <div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;
    })
    storiyan.innerHTML = clutter;

    storiyan.addEventListener("click",function(dets){
        document.querySelector("#full-screen").style.display = "block"
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

        setTimeout(function(){
            document.querySelector("#full-screen").style.display = "none"
        },5000)
    })
});
