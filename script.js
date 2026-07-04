// 1. వెబ్‌సైట్‌లో రైట్ క్లిక్ (Right Click) పూర్తిగా బ్లాక్ చేయడానికి
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 2. మొబైల్‌లో ఫొటోలపై లాంగ్ ప్రెస్ చేసి డౌన్‌లోడ్ చేయకుండా లాక్ చేయడానికి
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        // మొబైల్ లాంగ్ ప్రెస్ బ్లాక్
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        // ఫొటోని డ్రాగ్ చేసి వేరే చోట సేవ్ చేయకుండా ఆపడానికి
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });
});

// 3. ఆల్బమ్ సైజ్ ఫిల్టర్ బటన్స్ పని చేయడానికి (మీ పాత కోడ్ లాంటి లాజిక్)
function filterAlbum(size) {
    console.log("Filtering albums by size: " + size);
    // మీ పాత ఫిల్టరింగ్ కోడ్ ఇక్కడ ఉంటే దాన్ని దీని కింద ఉంచుకోవచ్చు
}// Disable Right Click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable Copy, Cut, Paste
["copy","cut","paste"].forEach(event => {
    document.addEventListener(event, e => e.preventDefault());
});

// Disable Text Selection
document.addEventListener("selectstart", e => e.preventDefault());

// Disable Drag
document.addEventListener("dragstart", e => e.preventDefault());

// Disable Keyboard Shortcuts
document.addEventListener("keydown", function(e){

    if(e.key === "F12"){
        e.preventDefault();
    }

    if(e.ctrlKey){
        const blocked = ["a","c","x","v","u","s","p","i","j","k","h","o"];

        if(blocked.includes(e.key.toLowerCase())){
            e.preventDefault();
        }
    }

    if(
        e.ctrlKey &&
        e.shiftKey &&
        ["i","j","c","k"].includes(e.key.toLowerCase())
    ){
        e.preventDefault();
    }

    if(e.key === "PrintScreen"){
        navigator.clipboard.writeText("");
        e.preventDefault();
    }
});
