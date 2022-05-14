        // [Object] toggle value 값에 따른 하이퍼링크(saw 클래스 제외) 색상 변경
        var Links = {
            linksSetColor: function(color){
                // var href= document.querySelectorAll('a:not(.saw)');
                // for(var i=0; i<href.length; i++){
                //     href[i].style.color= color;
                // }
                $('a:not(.saw)').css('color', color);
            }
        }
        // [Object] Toggle value 값에 따른 <body> 글자, 배경 색 
        var Body = {
            bodySetColor: function (textColor){
            // document.querySelector('body').style.color= textColor;
                $('body').css('color', textColor);
            },
            bodySetBackColor: function (backColor){
            // document.querySelector('body').style.backgroundColor= backColor;
                $('body').css('backgroundColor', backColor);
           }
        }
        // [Func] toggle 클래스 element들의 value 값 변경
        function togValueSet(nowMod){
            var tog= document.querySelectorAll('.toggle');
            for(var i=0; i<tog.length; i++){
                    tog[i].value= nowMod;
            }
        }
        // [Func] 현재 toggle의 value가 day라면 night세팅, night라면 day세팅
        function vis_mod(self){
            if(self.value === 'day'){
                Body.bodySetColor('white');
                Body.bodySetBackColor('black');
                togValueSet('night');
                Links.linksSetColor('yellow');
            } else{
                Body.bodySetColor('black');
                Body.bodySetBackColor('white');
                togValueSet('day');
                Links.linksSetColor('purple');
            }
        }
