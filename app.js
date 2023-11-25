let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);

    let collegeArr = await getColleges(country);//parameter
    show(collegeArr);
});


 function show(collegeArr) {
    let list = document.querySelector("#list");
    for (college of collegeArr) {
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
};

async function getColleges(country) {//passed as an argument
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    };
};