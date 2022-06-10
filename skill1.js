//多层循环优化
//使用卫语句代替嵌套表达式

let username,
    age,
    password;

//bad
function check1() {
    if(username){
        //
        if(age){
            //
            if(password){
                //
            }
        }
    }
}

//good
function check2() {
    if(!username){
        return;
    }
    if(!age){
        return;
    }
    if(!password){
        return;
    }
}

// 主分支上提交了一个commit A

// 主分支上提交了一个commit B

// 主分支上提交了一个commit C