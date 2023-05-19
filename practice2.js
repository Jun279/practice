$("#question").hide();
$("#result").hide();

var num = 0;

var q = {
    0:{"title":"여행 갈 기회가 생긴 당신, 당신이 떠나고 싶은 휴양지는?","type":"EI","A":"삐까뻔쩍한 건물들 속에서 휘황찬란하게 쇼핑할 수 있는 휴양지","B":"자연을 보면서 여유롭게 휴식을 취할 수 있는 휴양지"},
    1:{"title":"여행을 하다 동전을 던져서 접시에 들어가면 소원이 이뤄진다는 호수에 간 당신, 당신의 행동은?","type":"SN","A":"장난삼아 던져볼까?","B":"내 소원을 가득 담아 던져야지!"},
    2:{"title":"여행을 마치고 피곤에 쩔어 숙소 침대에 뻗어있는 당신, 근데 여행 동반자가 계속 말을 걸 떄 당신의 반응은?","type":"TF","A":"나 너무 힘들어, 좀만 쉬자","B":"힘들지만 같이 조금만 떠들까?"},
    3:{"title":"다음날 우천으로 완전히 변경된 일정, 당신의 심리 상태는?","type":"JP","A":"멘붕..","B":"오 이것도 재밌겠다"},
}

var result = {
    "ESFJ":{"choice":"안정적이고 정이 많은 도전적인 사업가"},
    "ESFP":{"choice":"안정적이고 정이 많은 도전적인 탐험가"},
    "ESTJ":{"choice":"안정적이게 일 잘하는 도전적인 사업가"},
    "ESTP":{"choice":"안정적이게 일 잘하는 도전적인 탐험가"},
    "ENFJ":{"choice":"모험적이고 정이 많은 도전적인 사업가"},
    "ENFP":{"choice":"모험적이고 정이 많은 도전적인 탐험가"},
    "ENTJ":{"choice":"모험적이고 일 잘하는 도전적인 사업가"},
    "ENTP":{"choice":"모험적이고 일 잘하는 도전적인 탐험가"},
    "ISFJ":{"choice":"안정적이고 정이 많은 조용한 사업가"},
    "ISFP":{"choice":"안정적이고 정이 많은 조용한 사업가"},
    "ISTJ":{"choice":"안정적이고 일 잘하는 조용한 사업가"},
    "ISTP":{"choice":"안정적이고 일 잘하는 조용한 탐험가"},
    "INFJ":{"choice":"모험적이고 정이 많은 조용한 사업가"},
    "INFP":{"choice":"모험적이고 정이 많은 조용한 탐험가"},
    "INTJ":{"choice":"모험적이고 일 잘하는 조용한 사업가"},
    "INTP":{"choice":"모험적이고 일 잘하는 조용한 탐험가"},
}

function start() {
    $("#start").hide();
    $("#question").show();
    next();
}

function next() {
    if(num==4){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1) ? str+="I" : str+="E";
        ($("#SN").val()<1) ? str+="N" : str+="S";
        ($("#TF").val()<1) ? str+="F" : str+="T";
        ($("#JP").val()<1) ? str+="P" : str+="J";
        $("#choice").html(result[str]["choice"]);
    }
    else{
        $(".progress-bar").attr("style","width:calc(100/4*"+num+"%)");
        $("#pgrNum").html(num+"/4");
        $('#title').html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++
    }
}

$("#A").click(function(){
    var type=$("#type").val();
    var preValue=$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function(){
    next();
});

// 링크 복사 태그
function copy(){
    var url='';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다.");
}