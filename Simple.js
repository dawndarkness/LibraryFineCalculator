//Library overdue book fine calculation system

checkDays(14);

function checkDays(days) {
    const borrowLimit = 14;
    const dailyFine = 0.2;

    if (days <= borrowLimit){
        console.log('Return Accepted');
        return;
    }
    const fine = ((days - borrowLimit) * dailyFine);
    if (fine >= 20)
    console.log('No more books');
    else
    console.log('Fine in pounds:', fine);
}
