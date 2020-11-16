
function showNumberWithAnimation(i,j,randNumber){
    var numberCell=$("#number-cell-"+i+"-"+j);

    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber)); 
    numberCell.text(randNumber);

    numberCell.animate({//jQuery内置函数
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)//希望什么属性产生效果

    },50); //动画坚持50毫秒
}


function showMoveAnimation(fromx ,fromy , tox, toy){
    
    var numberCell=$('#number-cell-'+fromx+'-'+fromy);//-号漏打，找了半天
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);


}

function updateScore(score){
    $('#score').text(score);
}