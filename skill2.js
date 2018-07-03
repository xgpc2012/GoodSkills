//表驱动法
let iDays;

//可以看出本来应该很简单的一件事情，代码却是这么冗余，解决这个的办法就可以用表驱动方法。
//bad
function getiDays(iMonth) {
    if (iMonth == 1) {
        iDays = 31;
    } else if (iMonth == 2) {
        iDays = 28;
    } else if (iMonth == 3) {
        iDays = 31;
    } else if (iMonth == 4) {
        iDays = 31;
    } else if (iMonth == 5) {
        iDays = 31;
    } else if (iMonth == 6) {
        iDays = 31;
    } else if (iMonth == 7) {
        iDays = 31;
    } else if (iMonth == 8) {
        iDays = 31;
    } else if (iMonth == 9) {
        iDays = 31;
    } else if (iMonth == 10) {
        iDays = 31;
    } else if (iMonth == 11) {
        iDays = 31;
    } else if (iMonth == 12) {
        iDays = 31;
    }
    return iDays;
}

//good
function getiDays(iMonth) {
    //定义静态数组保存12月天数
    let dArr=[31,28,31,30,31,30,31,31,30,31,30,31];
    return iDays[iMonth-1];
}