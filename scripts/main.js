let listItemActive="About";
/* const aboutContent = "I am a graduate student researcher with Professors <a href='https://abhijin.github.io' target='_blank' rel='noopener noreferrer'> Abhijin Adiga</a> and <a href='https://biocomplexity.virginia.edu/person/anil-vullikanti' target='_blank' rel='noopener noreferrer'>Anil Vullikanti</a> at the University of Virginia <a href='https://www.biocomplexity.virginia.edu/' target='_blank' rel='noopener noreferrer'>Biocomplexity Institute</a>. I am pursuing a M.S. in Computer Science at the <a href='https://engineering.virginia.edu/departments/computer-science' target='_blank' rel='noopener noreferrer'>Department of Computer Science</a>, UVA. My research interests lie in: <blockquote class='blockquote'><p>Inference problems on graphs, network science, approximation algorithms on graphs, interpretable machine learning, and NLP.</p></blockquote>"
*/

const aboutContent="I work at the intersection of Algorithms and Epidemiology. My research interests are in the areas of graph algorithms, reinforcement learning, causal inference and their applications to problems in epidemiology and public health. Currently I am a PhD student under the advisorship of Professor <a href='https://biocomplexity.virginia.edu/person/anil-vullikanti' target='_blank' rel='noopener noreferrer'>Anil Vullikanti</a> at the UVA <a href='https://www.biocomplexity.virginia.edu/' target='_blank' rel='noopener noreferrer'>Biocomplexity Institute</a>. In a recent work presented at AAAI-23, we tackled the problem of inferring the infection subgraph on a contact network from a subset of infected individuals, by modeling it as a graph Steiner tree problem.\n I completed my MS in Computer Science in 2022 with my thesis supervised by Professors Anil Vullikanti and <a href='https://abhijin.github.io' target='_blank' rel='noopener noreferrer'> Abhijin Adiga</a> of the UVA Biocomplexity Institute.";

const educationContent="<ul class='list-group'><li class='list-group-item'>PhD in Computer Science, University of Virginia (2023-present)</li><li class='list-group-item'>M.S. in Computer Science, University of Virginia (2021-2022)</li><li class='list-group-item'>B.Tech. in Computer Science and Engineering, NITK Surathkal, India (2015-2019)</li></ul>";

    
const paperContent="<ol class='list-group list-group-numbered'><li class='list-group-item'><p>Mishra, R., Eubank, S., Nath, M., Amundsen, M. & Adiga, A. Community Detection Using Moore-Shannon Network Reliability: Application to Food Networks. in Complex Networks and Their Applications XI (eds. Cherifi, H., Mantegna, R. N., Rocha, L. M., Cherifi, C. & Micciche, S.) 271–282 (Springer International Publishing, 2023). doi:10.1007/978-3-031-21131-7_21. url:<a href='https://link.springer.com/chapter/10.1007/978-3-031-21131-7_21' target='_blank' rel='noopener noreferrer'>https://link.springer.com/chapter/10.1007/978-3-031-21131-7_21</a></p></li><li class='list-group-item'><p>Mishra, R. Reconstructing an Epidemic Outbreak using Steiner Connectivity. Masters Thesis (University of Virginia, 2022). doi:10.18130/MZXX-WM85. url: <a href='https://libraetd.lib.virginia.edu/public_view/wh246t32z' target='_blank' rel='noopener noreferrer'>https://libraetd.lib.virginia.edu/public_view/wh246t32z</a></p></li></ol>"

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
            document.getElementById("content").innerHTML = paperContent;
            break;

    }
}

