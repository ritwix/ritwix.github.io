let listItemActive="About";
const aboutContent = "I am a graduate student researcher with Professors <a href='https://abhijin.github.io' target='_blank' rel='noopener noreferrer'> Abhijin Adiga</a> and <a href='https://biocomplexity.virginia.edu/person/anil-vullikanti' target='_blank' rel='noopener noreferrer'>Anil Vullikanti</a> at the University of Virginia <a href='https://www.biocomplexity.virginia.edu/' target='_blank' rel='noopener noreferrer'>Biocomplexity Institute</a>. I am pursuing a M.S. in Computer Science at the <a href='https://engineering.virginia.edu/departments/computer-science' target='_blank' rel='noopener noreferrer'>Department of Computer Science</a>, UVA. Prior to this, I was a Technology Analyst at Credit Suisse. I graduated with a B.Tech. in Computer Science and Engineering from the <a href='https://cse.nitk.ac.in' target='_blank' rel='noopener noreferrer'>National Institute of Technology Karnataka, Surathkal, India</a> in May 2019.";

const educationContent="<ul class='list-group'><li class='list-group-item'>M.S. in Computer Science, University of Virginia (2021-present)</li><li class='list-group-item'>B.Tech. in Computer Science and Engineering, NITK Surathkal, India (2015-2019)</li></ul>";

window.onload = function() {
    activateListItem("About")
    document.getElementById("content").innerHTML = aboutContent;
}
function activateListItem(listItemName) {
    document.getElementById(listItemName).classList.toggle("active");
}
function deactivateListItem(listItemName) {
    document.getElementById(listItemName).classList.toggle("active");
}
function onListItemClick(listItemName) {
    deactivateListItem(listItemActive);
    listItemActive=listItemName;
    activateListItem(listItemName);
    switch(listItemName) {
        case "About":
            document.getElementById("content").innerHTML = aboutContent;
            break;
        case "Education":
            document.getElementById("content").innerHTML = educationContent;
            break;
        case "Papers":
            document.getElementById("content").innerHTML = "Paper content";
            break;

    }
}

