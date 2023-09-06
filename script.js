// =============== for screenlock ======================

var fingerprint = document.querySelector("#fingerprint");
var screenlock = document.querySelector(".lock");
fingerprint.addEventListener("click", function () {
  fingerprint.style.backgroundColor = "#00ff0040";
  setTimeout(function () {
    fingerprint.style.backgroundColor = "transparent";
    screenlock.style.display = "none";
  }, 2000);
});


// ================== lockscreen current time, day and date========================

const currentTimeElement = document.getElementById("time")
const currentDateElement = document.getElementById("date_and_day");


        // Function to format time as "HH : MM AM/PM"
        function formatTime(date) {
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = (hours % 12) || 12;
          const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
          return `${formattedHours}:${formattedMinutes} ${ampm}`;
      }

      // Function to format date as "Day MM/DD/YYYY"
      function formatDate(date) {
          const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const day = days[date.getDay()];
          const month = date.getMonth() + 1; // Months are zero-based
          const dayOfMonth = date.getDate();
          const year = date.getFullYear();
          return `${day} ${month}/${dayOfMonth}/${year}`;
      }

      // Update the current date and time in the HTML elements
      function updateDateTime() {
          const now = new Date();
          const formattedTime = formatTime(now);
          const formattedDate = formatDate(now);
          currentTimeElement.textContent = formattedTime;
          currentDateElement.textContent = formattedDate;
      }

      // Update the date and time initially and then every second
      updateDateTime();
      setInterval(updateDateTime, 1000);

// ================== lockscreen current time END ========================
// =============== for stories ==================

var name_array = ["@divya_07","@XXakarshXX","@kettyperi78","@amisha_v_0","@peace563","@veer.pxt_4","@xevir.b.o.l.d","@seems_gold","@viii.take.sa43","@its_me_peter"];

var array = [
  {
    profile:
      "https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1604681527661-41ab3a47b2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1408&q=80",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1649433658557-54cf58577c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1693164662211-5d5e11fa6164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1621786032758-112a390cb7ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1692663664383-452f88cbe5a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    content:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1611804169105-1cd73d682be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9keWJ1aWxkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1615212116387-d66aba3d76f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1615212123996-f21711429486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1487816729599-f6f8d61b08c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "https://images.unsplash.com/photo-1692970126004-862efac4da0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

var clutter = "";
array.forEach(function (elem, i) {
  clutter += `
  <div class="story-container">
    <div class="stories profile-${i}">
      <img id="${i}" src="${elem.profile}" alt="" />
    </div>
    <span class="username">${name_array[i]}</span>
  </div>
`;
});

var story = document.querySelector(".story-section");
story.innerHTML = clutter;
var screen = document.querySelector(".full-screen");

story.addEventListener("click",function(dets){
    screen.style.display = "block";
    screen.style.backgroundImage = `url(${array[dets.target.id].content})`

    let username = document.querySelector(".full-screen>.username");
    // username.innerHTML = name_array[dets.target.id];

        setTimeout(function() {
            username.style.opacity = 0;
        }, 2950);

        setTimeout(function() {
          username.style.opacity = 1;
          username.innerHTML = name_array[dets.target.id];
        }, 50);

    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    
    setTimeout(function(){
        screen.style.display = "none";
    },3000)                                
})  


// ============== for post like and Dislike ========================


var heart = document.querySelector(".post-middle #like-heart");
var mheart = document.querySelector("#mobile-heart");
var like = document.querySelector(".post-bottom #like");
var post = document.querySelector("#post");

post.addEventListener("dblclick",function(){
    heart.style.transform = "translate(-180px, 100%) scale(1)";
    mheart.style.transform = "translate(120px, -150px) scale(1)";
    like.style.color = "red";
    setTimeout(function(){
        heart.style.transform = "translate(-180px, 100%) scale(0)";
        mheart.style.transform = "translate(120px, -150px) scale(0)";
    },2000);
});


// ============== Heart Zoom in zoom out ==================

var click = 0;
like.addEventListener("click",function(){
    if(click === 0 && like.style.color!="red")
    {
        heart.style.transform = "translate(-180px, 100%) scale(1)";
        mheart.style.transform = "translate(120px, -150px) scale(1)";
        setTimeout(function(){
            heart.style.transform = "translate(-180px, 100%) scale(0)"
            mheart.style.transform = "translate(120px, -150px) scale(0)";
        },2000);

        like.style.color = "red";
        click = 1;
    }
    else
    {
        like.style.color = "#fff";
        click = 0;
    }
    
})

// =============== Post saving =================

// var clicked = 0;
var save = document.querySelector("#save");
save.addEventListener("click",function(){
    if(click === 0){
        save.style.color = "lime"
        click = 1;
    }
    else{
        save.style.color = "#fff"
        click = 0; 
    }
})


// ================ Profile Section ====================

var profile_section = document.querySelector("#bio")
var bio = document.querySelector(".bio-section")
var home_button = document.querySelector(".home");

profile_section.addEventListener("click",function(){
    bio.style.display = "block";
})

home_button.addEventListener("click",function(){
  bio.style.display = "none";
})
