fetch('https://raw.githubusercontent.com/eCaptcha/EmojiApi/main/EmojiApi.json')
.then(res=> res.json())
.then(data => {


    

    var j = Math.floor(Math.random() * 4) + 1;

    document.getElementById(j).innerHTML = data.Emoji.icon[i];

    /*-------------- Audio Files --------------- */
    const success = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/success.mp3?raw=true');
    const error = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/error.mp3?raw=true');
    
    /*------- Logical Part---------------------------*/
    
    var i = Math.floor(Math.random() * data.Emoji.icon.length);

    document.getElementById("eq").innerHTML = "Find ("+data.Emoji.name[i]+") Out of These"; 
    
    var j = Math.floor(Math.random() * 4) + 1;

    document.getElementById(j).innerHTML = data.Emoji.icon[i];
    
    /*--------------Checking That Good Button Should Not Reapeat---------------*/
    
    var x;
    
    for(k=1;k<=4;k++){
        if(k!=j){
            var x1=1;
            while(x1){
                x = Math.floor(Math.random() * data.Emoji.icon.length);
                if(x!=i){
                    document.getElementById(k).innerHTML = data.Emoji.icon[x];
                    x1=0;
                }
            }
        }
    }
    
    /*--------------Non Reapting Error Button---------------*/
    
    for(i1=1;i1<=4;i1++){
        for(j1=i1+1;j1<=4;j1++){
            if(document.getElementById(i1).innerHTML == document.getElementById(j1).innerHTML){
    
                var x1=1;
                while(x1){
                    x = Math.floor(Math.random() * data.Emoji.icon.length);
                    if(x!=i && data.Emoji.icon[i1]!=data.Emoji.icon[j1]){
                        document.getElementById(j1).innerHTML = data.Emoji.icon[x];
                        x1=0;
                    }
                }
            }
        }
    }
    
    /*--------------Checking---------------*/
    
    var li = document.getElementById('elink');
    var ls = document.getElementById('eMiliSec');
    var count = 0;
    const onClick = (event) => {
        if (event.target.nodeName === 'BUTTON') {
          if(event.target.id == j){
              //console.log("Correct");
              success.play();
              document.write("<div id ='eCaptcha' style='text-align: center;justify-content: center;display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;font-family: 'Poppins', sans-serif;'><div><img src ='https://image.flaticon.com/icons/png/128/190/190411.png' width='20%'><h1>You Have Been Verified</h1><p>You Will Be Redirected in a While.</p></div></div>");
              setTimeout(function(){ window.open(li.className,"_self"); }, ls.className);
          }
          if(event.target.id != j){
              //console.log("Error");
              error.play();
              count++;
          }
          if(count >1){
            error.play();
            document.write("<div id ='eCaptcha' style='text-align: center;justify-content: center;display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;font-family: 'Poppins', sans-serif;'><div><img src ='https://image.flaticon.com/icons/png/128/594/594864.png' width='10%'><h1>Sorry We Cannot Verify You!</h1><p>You Have Choosed Worng Anwser More Than One Time</p></div></div>");
          }
        }
      }
      window.addEventListener('click', onClick);
    
      /*-----------CopyRight--------------*/
      document.getElementById("elink").style.display = "block";
      document.getElementById("elink").innerHTML = "©️Coyrights 2021 eCaptha";
      console.image("https://avatars.githubusercontent.com/u/89968348?s=200&v=4");
      console.log("Thanks For Using eCaptcha");
});


