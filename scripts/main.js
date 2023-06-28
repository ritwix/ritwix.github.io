let listItemActive="About";
/* const aboutContent = "I am a graduate student researcher with Professors <a href='https://abhijin.github.io' target='_blank' rel='noopener noreferrer'> Abhijin Adiga</a> and <a href='https://biocomplexity.virginia.edu/person/anil-vullikanti' target='_blank' rel='noopener noreferrer'>Anil Vullikanti</a> at the University of Virginia <a href='https://www.biocomplexity.virginia.edu/' target='_blank' rel='noopener noreferrer'>Biocomplexity Institute</a>. I am pursuing a M.S. in Computer Science at the <a href='https://engineering.virginia.edu/departments/computer-science' target='_blank' rel='noopener noreferrer'>Department of Computer Science</a>, UVA. My research interests lie in: <blockquote class='blockquote'><p>Inference problems on graphs, network science, approximation algorithms on graphs, interpretable machine learning, and NLP.</p></blockquote>"
*/

const aboutContent="I work at the intersection of Algorithms and Epidemiology. My research interests are in the areas of graph algorithms, reinforcement learning, causal inference and their applications to problems in epidemiology and public health. Currently I am a PhD student under the advisorship of Professor <a href='https://biocomplexity.virginia.edu/person/anil-vullikanti' target='_blank' rel='noopener noreferrer'>Anil Vullikanti</a> at the University of Virginia Biocomplexity Institute. In a recent work presented at AAAI-23, we tackled the problem of inferring the infection subgraph on a contact network from a subset of infected individuals, by modeling it as a graph Steiner tree problem.\n I completed my MS in Computer Science in 2022 with my thesis supervised by Professors Anil Vullikanti and <a href='https://abhijin.github.io' target='_blank' rel='noopener noreferrer'> Abhijin Adiga</a> of the UVA Biocomplexity Institute.";

const educationContent="<ul><li>PhD in Computer Science, University of Virginia (Jan 2023-present)</li><li>M.S. in Computer Science, University of Virginia (Aug 2021 - Dec 2022)</li><li>B.Tech. in Computer Science and Engineering, NITK Surathkal, India (2015-2019)</li></ul>";

    
const paperContent="<ol><li ><p>Mishra, R., Heavey, J., Kaur, G., Adiga, A., & Vullikanti, A. (2023). Reconstructing an Epidemic Outbreak Using Steiner Connectivity. <i>Proceedings of the AAAI Conference on Artificial Intelligence, 37</i>(10), 11613-11620. <a href='https://doi.org/10.1609/aaai.v37i10.26372' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1609/aaai.v37i10.26372</a></p></li><li><p>Mishra, R., Eubank, S., Nath, M., Amundsen, M. & Adiga, A. (2023). Community Detection Using Moore-Shannon Network Reliability: Application to Food Networks. <i>Complex Networks and Their Applications XI (eds. Cherifi, H., Mantegna, R. N., Rocha, L. M., Cherifi, C. & Micciche, S.)</i> 271–282 (Springer International Publishing). doi:10.1007/978-3-031-21131-7_21. <a href='https://link.springer.com/chapter/10.1007/978-3-031-21131-7_21' target='_blank' rel='noopener noreferrer'>https://link.springer.com/chapter/10.1007/978-3-031-21131-7_21</a></p></li><li><p>Mishra, R. (2022). Reconstructing an Epidemic Outbreak using Steiner Connectivity. <i>Masters Thesis</i> (University of Virginia). doi:10.18130/MZXX-WM85. <a href='https://libraetd.lib.virginia.edu/public_view/wh246t32z' target='_blank' rel='noopener noreferrer'>https://libraetd.lib.virginia.edu/public_view/wh246t32z</a></p></li></ul>"

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

