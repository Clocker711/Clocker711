function bianliang() {
    txt = document.getElementById("input").value;
    mimazi =document.getElementById("mimazi").value;
    str = document.getElementById("mima").value;

}

function jiami() {
    bianliang()
    var list = [];
    for (i in txt)
    {
       list.push((txt[i].charCodeAt(0)*mimazi).toString(2));//z字符转un编码*密码子，再转二进制
    };
    var jmstr = '';
    //console.log(str);
    for (i in list){
        for (x in list[i]){
            if (list[i][x]=='0'){
                jmstr=jmstr+ str[0];

            }
            else {
                jmstr=jmstr+str
            }
        };
        jmstr=jmstr+'+'
};
    //console.log(jmstr);
    document.getElementById("output").value = jmstr;
};
function jiema() {
    bianliang()
    var list= txt.split('+');
    var jmst = '';list2=[];
    console.log('获取',list);
    for (i in list){
        if (list[i]) {var s = '';
            console.log(list[i]);
            for (x in list[i]) {
                    if (list[i][x] == str[0]) {
                        if (list[i][Number(x)+ 1]&&list[i][Number(x) + 1] == str[1]) {
                            //console.log('获取x+1',list[i][Number(x)+ 1]);

                                s = s + '1';

                        }
                        else {
                            s = s + '0'
                        }
                        ;


                    }

                };
            //console.log('单个转码',s);
            list2.push((parseInt(s,2)/mimazi).toString());}
        };
    var strlist =list2.map((item,index)=>{
        return String.fromCharCode(item)
    });


    document.getElementById("output").value = strlist.join('')
    //console.log(strlist.join(''));

}