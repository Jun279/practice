$("#question").hide();
$("#result").hide();

var num = 1;

var q = {
    1:{"title":"당신은 쉬는날 집에 있는 걸 선호합니까? 아니면 친구를 만나는걸 선호합니까?","type":"EI","A":"E","B":"I"},
    2:{"title":"두 번째 질문","type":"SN","A":"S","B":"N"},
    3:{"title":"세 번째 질문","type":"TF","A":"T","B":"F"},
    4:{"title":"네 번째 질문","type":"JP","A":"J","B":"P"},
}

var result = {
    "ESFJ":{"mbti":"ESFJ"},
    "ESFP":{"mbti":"ESFP"},
    "ESTJ":{"mbti":"ESTJ"},
    "ESTP":{"mbti":"ESTP"},
    "ENFJ":{"mbti":"ENFJ"},
    "ENFP":{"mbti":"ENFP"},
    "ENTJ":{"mbti":"ENTJ"},
    "ENTP":{"mbti":"ENTP"},
    "ISFJ":{"mbti":"ISFJ"},
    "ISFP":{"mbti":"ISFP"},
    "ISTJ":{"mbti":"ISTJ"},
    "ISTP":{"mbti":"ISTP"},
    "INFJ":{"mbti":"INFJ"},
    "INFP":{"mbti":"INFP"},
    "INTJ":{"mbti":"INTJ"},
    "INTP":{"mbti":"INTP"},
}

function start() {
    $("#start").hide();
    $("#question").show();
    next();
}

function next() {
    if(num==5){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1) ? str+="I" : str+="E";
        ($("#SN").val()<1) ? str+="N" : str+="S";
        ($("#TF").val()<1) ? str+="F" : str+="T";
        ($("#JP").val()<1) ? str+="P" : str+="J";

        $("#mbti").html(result[str]["mbti"]);
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