const aCourse = {
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2,
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 353',
            enrolled: 9,
            days: 'MWF',
            instructor: 'Bro Warner'
        }
    ],
    enrolled : function(sectionNumber) {
        console.log(this.name);
    }
}

console.log(aCourse.name)

aCourse.enrolled(1);

document.querySelector("#enrollStudent").addEventListener("click", (e) =>{
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();
    aCourse.sections.forEach(section => {
        if(section.sectionNum == sectionNumber){
            section.enrolled += 1;
        }

        console.log(section.enrolled)
        console.log(section.sectionNum)
    })
    renderSections(aCourse.sections);
});

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);