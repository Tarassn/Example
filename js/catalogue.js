window.onload = function (){
let frontendTest = document.getElementsByClassName("main-container-list-box frontendTest");
let javaTest = document.getElementsByClassName("main-container-list-box javaTest");
let pythonTest = document.getElementsByClassName("main-container-list-box pythonTest");
let netTest = document.getElementsByClassName("main-container-list-box netTest");
let unityTest = document.getElementsByClassName("main-container-list-box unityTest");
let qaTest = document.getElementsByClassName("main-container-list-box qaTest");
let allFilters = document.getElementsByClassName("filter-checkbox-radio");
let allTestBoxesArray = [frontendTest,netTest,pythonTest,javaTest,unityTest,qaTest];
    function testFilter() {
        if (allFilters[0].checked === true) {
            for (let i = 0; i < allTestBoxesArray.length; i++) {
                for (let v = 0; v < allTestBoxesArray[i].length; v++) {
                    allTestBoxesArray[i][v].style.display = "flex";
                }
            }
        }
        else{
        for(let z = 1; z <= allTestBoxesArray.length;z++){
            if(allFilters[z].checked === true){
                for (let i = 0; i < allTestBoxesArray.length; i++) {
                    for (let v = 0; v < allTestBoxesArray[i].length; v++) {
                        allTestBoxesArray[i][v].style.display = "none";
                    }
                }
                for (let i = 0; i < allTestBoxesArray.length; i++) {
                    for (let v = 0; v < allTestBoxesArray[i].length; v++) {
                        allTestBoxesArray[z-1][v].style.display = "flex";
                    }
                }
            }

        }
        }
    }
    window.addEventListener("change", testFilter);
    let allTestList = document.getElementsByClassName("main-container-list-box");
    let chosenTestNumber ="";
    function testIdMatch(){
        for (let i = 0; i < allTestList.length; i++) {
            allTestList[i].onclick = function () {
               chosenTestNumber = this.id + "";
                localStorage.setItem("chosenTest", chosenTestNumber);
                window.location.href="test-page.html"
            }
        }
    }
    testIdMatch();
};
