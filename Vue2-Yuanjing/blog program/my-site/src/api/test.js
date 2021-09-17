import axios from "axios";
var i = 0;
async function testData() {
    console.log('hi')
    i++;
    console.log(i);
    const res = await axios.get("/ajax.php?action=buildsystem&OrderID=10100");
    //    const resDouban = await axios.get("/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0")
    console.log(res)
}

testData();